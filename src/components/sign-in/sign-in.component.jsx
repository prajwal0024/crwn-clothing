import React from "react"
import "./sign-in.styles.scss"
//Firebase
import { auth, signInWithGoogle } from "../../firebase/firebase.utils"
//Components
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault() //prevent default submit of an html form
    const { email, password } = this.state //destructuring

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: "", password: "" })
    } catch (error) {
      console.log(error)
    }
    this.setState({ email: "", password: "" })
  }

  handleChange = (event) => { //When change occur set the state to the new change
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn="true"
            >
              Google SignIn
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
