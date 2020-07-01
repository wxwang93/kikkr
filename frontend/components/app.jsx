import React from "react";
import PhotoIndex from './photos/photo_index'
import GreetingContainer from "./greeting/greeting_container"
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container'; 
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom';
import Form from './form'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
    this.fetchPhotos = this.fetchPhotos.bind(this)
  }

  fetchPhotos() {
    $.ajax({
      url: "/api/photos"
    }).then(photos => {
      this.setState({photos});
    });
  }

  componentDidMount() {
    this.fetchPhotos();
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/" className="header-link">
            <h1 className="headerH1">kikkr</h1>
          </Link>
          <GreetingContainer />
        </header>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Form fetchPhotos={this.fetchPhotos}/>
        <ProtectedRoute exact path="/photos/index" component={PhotoIndex} />
        {/* <PhotoIndex photos={this.state.photos} /> */}
      </div>
    )
  }


}






// const App = () => (
//   <div>
//     <header>
//       <h1 className="headerH1">kikkr</h1>
//       <GreetingContainer/>
//     </header>
//     <Route path="/login" component={LogInFormContainer} />
//     <Route path="/signup" component={SignUpFormContainer} />
//   </div>
// );

// export default App;

//a