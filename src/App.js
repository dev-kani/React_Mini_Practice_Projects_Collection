import Contact_Details from './components/Contact_Details'
import Temperature_Controller from './components/Temperature_Controller';
import Basic_Form from './components/Basic_Form';
import React from 'react';
import Simple_Movie_App from './components/Simple_Movie_App/Simple_Movie_App';

function App() {
  return (

    <div className="mini-apps-container">

      <div className="mini-app">
        <h2 className="project-title">Contact Cards</h2>
        <Contact_Details />
      </div>

      <div className="mini-app">
        <h2 className="project-title">Temperature Controller</h2>
        <Temperature_Controller />
      </div>

      <div className="mini-app">
        <h2 className="project-title">Basic Form</h2>
        <Basic_Form />
      </div>

      <div className="mini-app">
        <h2 className="project-title">Simple Movie App</h2>
        <Simple_Movie_App />
      </div>

    </div>

  );
}

export default App;
