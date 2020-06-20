import React from "react";
import PhotoIndex from './photo_index'
import GreetingContainer from "./greeting/greeting_container"
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container'; 
import {Route} from 'react-router-dom';

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
      debugger
      this.setState({photos});
    });
  }

  componentDidMount() {
    this.fetchPhotos();
  }

  render() {
    return (
      <div>
        {/* <header>
          <h1 className="headerH1">kikkr</h1>
          <GreetingContainer />
        </header>
        <Route path="/login" component={LogInFormContainer} />
        <Route path="/signup" component={SignUpFormContainer} /> */}
        <PhotoIndex photos={this.state.photos} />
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