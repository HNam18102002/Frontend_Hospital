import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

// import userIcon from '../../src/assets/images/user.svg';
// import passIcon from '../../src/assets/images/pass.svg';
import "./Login.scss";
import { FormattedMessage } from "react-intl";

// import adminService from "../services/adminService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.btnLogin = React.createRef();
  }

  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content">
            <div className="col-12 text-center text-login">Login</div>
            <div className="col-12 form-group username-input">
              <label for="">Username:</label>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter your user name"
              />
            </div>
            <div className="col-12 form-group">
              <label for="">Password:</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
              />
            </div>
            <div className="col-12">
              <button type="button" className="btn-login">
                Login
              </button>
            </div>
            <div className="col-12">
              <span className="forgot-password">Forgot your password?</span>
            </div>
            <div className="col-12 text-center">
              <span className="text-center">Or Login with:</span>
            </div>
            <div className="col-12 social-login text-center">
              <i className="fab fa-google-plus-g icon-gg"></i>
              <i className="fab fa-facebook-f icon-fb"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
