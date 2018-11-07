function validate(email, password,password_confirmation) {
  reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
  email_valid = email.length > 0 && email.length < 50 && reg.test(email);
  password_valid = password.length > 6 && password_confirmation.length > 6 && password === password_confirmation
  
  return {
    email: email_valid || email.length === 0,
    password: password.length > 6 || password.length === 0,
    password_confirmation: password_valid || password_confirmation.length === 0,
    valid: email_valid && password_valid
  };
}

class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      password_confirmation:'',
      everFocusedEmail: false,
      everFocusedPassword: false,
      inFocus: '',
    };
    
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmChange = this.handlePasswordConfirmChange.bind(this);
  }
  
  handleEmailChange(evt) {
    this.setState({ email: evt.target.value });
  }
  
  handlePasswordChange(evt) {
    this.setState({ password: evt.target.value });
  }

  handlePasswordConfirmChange(evt) {
    this.setState({ password_confirmation: evt.target.value });
  }
  
  canBeSubmitted() {
    const errors = validate(this.state.email, this.state.password, this.state.password_confirmation);
    const isDisabled = !errors['valid'];
    return isDisabled;
  }
  
  render() {
    const errors = validate(this.state.email, this.state.password, this.state.password_confirmation);
    const isDisabled = !errors['valid'];
    $('[data-toggle="tooltip"]').tooltip('show');
    return (
      [<div class="col-md-12">
        <input
          className={errors.email ? "form-control" : "error form-control"}
          type="email"
          placeholder="Enter your email"
          value={this.state.email}
          name="user[email]"
          onChange={this.handleEmailChange}
          data-toggle="tooltip" 
          data-placement="left"
          data-original-title={errors.email ? "" : "Please provide valid email"} 
        />
      </div>,
      <div class="col-md-12">
        <input
          className={errors.password ? "form-control" : "error form-control"}
          type="password"
          placeholder="Enter your password"
          value={this.state.password}
          name="user[password]"
          onChange={this.handlePasswordChange}
          data-toggle="tooltip" 
          data-placement="left"
          data-original-title={errors.password ? "" : "Your password must be more than 6"}
        />
      </div>,
      <div class="col-md-12">
        <input
          className={errors.password_confirmation ? "form-control" : "error form-control"}
          type="password"
          placeholder="Re-Enter your password to confirm"
          value={this.state.password_confirmation}
          name="user[password_confirmation]"
          onChange={this.handlePasswordConfirmChange}
          data-toggle="tooltip" 
          data-placement="left"
          data-original-title={errors.password_confirmation ? "" : "Mismatch Password"}
        />
      </div>,
      <div class="col-md-12">
        <button class="btn btn-primary" disabled={isDisabled}>Create my account</button>
      </div>]
    )
  }
}
