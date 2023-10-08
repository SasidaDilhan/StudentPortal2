import React, { Component } from "react";
import { register } from "./UserFunction";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
    };

    register(user).then((res) => {
      if (res) {
        this.props.history.push(`/Login`);
      }
    });
  }

  render() {
    return (
      <div className="container">
        <h2>
          <div className="row">
            <div className="col-md-6 mt-5 mx-auto">
              <form noValidate onSubmit={this.onSubmit}>
                <h1 className="h3 mb-3 font-weight-normal ">
                  <p align="center">Student Register</p>
                  <div className="form-groups">
                    <label htmlFor="first_name">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="first_name"
                      placeholder="Enter First Name"
                      value={this.state.first_name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-groups">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="last_name"
                      placeholder="Enter Last Name"
                      value={this.state.last_name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-groups">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter Email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-groups">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Enter Password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                  </div>
                  <button className="btn btn-lg btn-primary btn-block">
                    Sign In
                  </button>
                </h1>
              </form>
            </div>
          </div>
        </h2>
      </div>
    );
  }
}
