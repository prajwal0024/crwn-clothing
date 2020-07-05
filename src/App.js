import React from "react"
import "./App.css"
//Firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
//Router
import { Switch, Route, Redirect } from "react-router-dom"
//Redux
import { connect } from 'react-redux'
import { setCurrentUser } from "./redux/user/user.actions"
//Pages
import HomePage from "./pages/homepage/hompage.component"
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
//Components
import Header from "./components/header/header.component"

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      else setCurrentUser(userAuth); //null
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth() //unsubscribe the open service
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact path="/"
            component={HomePage} />
          <Route
            path="/shops"
            component={ShopPage} />
          <Route
            exact path="/signin"
            render={() =>
              this.props.currentUser
                ? (<Redirect to='/' />)
                : (<SignInAndSignUp />)}
          />
        </Switch>
      </div>
    )
  }
}
const mapStateToProps = (state) => (
  { currentUser: state.user.currentUser }
)


const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
