import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  // login_render() {
  //   return (
  //     <div className="login-form-container">
  //       <form onSubmit={this.handleSubmit} className="login-form-box">
  //         Welcome to kikkr!
  //         <br />
  //         Please {this.props.formType} or {this.props.navLink}
  //         {this.renderErrors()}
  //         <div className="login-form">
  //           <br />
  //           <label>Username:
  //             <input type="text"
  //               value={this.state.username}
  //               onChange={this.update('username')}
  //               className="login-input"
  //             />
  //           </label>
  //           <br />
  //           <label>Password:
  //             <input type="password"
  //               value={this.state.password}
  //               onChange={this.update('password')}
  //               className="login-input"
  //             />
  //           </label>
  //           <br />
  //           <input className="session-submit" type="submit" value={this.props.formType} />
  //         </div>
  //       </form>
  //     </div>
  //   )
  // }

  // signup_render() {
  //   return (
  //     <div className="login-form-container">
  //       <form onSubmit={this.handleSubmit} className="login-form-box">
  //         Welcome to kikkr!
  //         <br />
  //         Please {this.props.formType} or {this.props.navLink}
  //         {this.renderErrors()}
  //         <div className="signup-form">
  //           <br />
  //           <label>Username:
  //             <input type="text"
  //               value={this.state.username}
  //               onChange={this.update('username')}
  //               className="signup-input"
  //             />
  //           </label>
  //           <br />
  //           <label>Password:
  //             <input type="password"
  //               value={this.state.password}
  //               onChange={this.update('password')}
  //               className="signup-input"
  //             />
  //           </label>
  //           <br />
  //           <label>First name:
  //             <input type="text"
  //               value={this.state.first_name}
  //               onChange={this.update('first_name')}
  //               className="signup-input"
  //             />
  //           </label>
  //           <br />
  //           <label>Last name:
  //             <input type="text"
  //               value={this.state.last_name}
  //               onChange={this.update('last_name')}
  //               className="signup-input"
  //             />
  //           </label>
  //           <br />
  //           <input className="session-submit" type="submit" value={this.props.formType} />
  //         </div>
  //       </form>
  //     </div>
  //   )
  // }

  renderNameFields() {
    return (
      <>
    <label>First name:
              <input type="text"
        value={this.state.first_name}
        onChange={this.update('first_name')}
        className="signup-input"
      />
    </label>
      <br />
      <label>Last name:
              <input type="text"
          value={this.state.last_name}
          onChange={this.update('last_name')}
          className="signup-input"
        />
      </label>
      <br />
      </>
    )
  }
  

  render() {
      return (
        <div class="form-modal" id="myModal">
          <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              Welcome to kikkr!
            <br />
            Please {this.props.formType} or {this.props.navLink}
              {this.renderErrors()}
              <div className="login-form">
                <br />
                <label>Username:
                <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                  />
                </label>
                <br />
                <label>Password:
                <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                  />
                </label>
                <br />
                {this.props.formType === "signup" ? this.renderNameFields() : null}
                <input className="session-submit" type="submit" value={this.props.formType} />
              </div>
            </form>
          </div>
        </div>
      )
    } 
  
}

export default SessionForm;


// render() {
//       return (
//         <div className="login-form-container">
//           <form onSubmit={this.handleSubmit} className="login-form-box">
//             Welcome to kikkr!
//           <br />
//           Please {this.props.formType} or {this.props.navLink}
//             {this.renderErrors()}
//             <div className="login-form">
//               <br />
//               <label>Username:
//               <input type="text"
//                   value={this.state.username}
//                   onChange={this.update('username')}
//                   className="login-input"
//                 />
//               </label>
//               <br />
//               <label>Password:
//               <input type="password"
//                   value={this.state.password}
//                   onChange={this.update('password')}
//                   className="login-input"
//                 />
//               </label>
//               <br />
//               {this.props.formType === "signup" ? this.renderNameFields() : null}
//               <input className="session-submit" type="submit" value={this.props.formType} />
//             </div>
//           </form>
//         </div>
//       )
//     } 

  // return (
  //   <div className="login-form-container">
  //     <form onSubmit={this.handleSubmit} className="login-form-box">
  //       Welcome to kikkr!
  //         <br />
  //         Please {this.props.formType} or {this.props.navLink}
  //       {this.renderErrors()}
  //       {/* if (this.props.formType) = signup
  //         add additional inputs for firstname and lastname */}

  //       <div className="login-form">
  //         <br />
  //         <label>Username:
  //             <input type="text"
  //             value={this.state.username}
  //             onChange={this.update('username')}
  //             className="login-input"
  //           />
  //         </label>
  //         <br />
  //         <label>Password:
  //             <input type="password"
  //             value={this.state.password}
  //             onChange={this.update('password')}
  //             className="login-input"
  //           />
  //         </label>
  //         <br />
  //         <input className="session-submit" type="submit" value={this.props.formType} />
  //       </div>
  //     </form>
  //   </div>
  // )
