// import React, { Component } from "react";
// import { login } from "./UserFunction";

// export default class Login extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: "",
//       password: "",
//     };
//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }
//   onSubmit(e) {
//     e.preventDefault();

//     const user = {
//       email: this.state.email,
//       password: this.state.password,
//     };

//     login(user).then((res) => {
//       if (res) {
//         this.props.history.push(`/profile`);
//       }
//     });
//   }

//   render() {
//     return (
//       <div className="container">
//         <h2>
//           <div className="row">
//             <div className="col-md-6 mt-5 mx-auto">
//               <form noValidate onSubmit={this.onSubmit}>
//                 <h1 className="h3 mb-3 font-weight-normal ">
//                   <p align="center">Student Login</p>
//                   <div className="form-groups">
//                     <label htmlFor="email">Email Address</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       name="email"
//                       placeholder="Enter Email"
//                       value={this.state.email}
//                       onChange={this.onChange}
//                     />
//                   </div>
//                   <div className="form-groups">
//                     <label htmlFor="password">Password</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       name="password"
//                       placeholder="Enter Password"
//                       value={this.state.password}
//                       onChange={this.onChange}
//                     />
//                   </div>
//                   <button className="btn btn-lg btn-primary btn-block">
//                     Sign In
//                   </button>
//                 </h1>
//               </form>
//             </div>
//           </div>
//         </h2>
//       </div>
//     );
//   }
// }

import React, { useState } from "react";
import { login } from "./UserFunction";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook to access navigation function

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    login(user).then((res) => {
      if (res) {
        // Use navigate to redirect to /profile
        navigate("/profile");
      }
    });
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
