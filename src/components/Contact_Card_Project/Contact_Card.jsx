// import Contact_Details from '../Contact_Details'
import { useState } from 'react';

const Contact_Card = ({ img, name, email, age }) => {
  
  const [showAge, setShowAge] = useState(false);

  const btn_label = showAge ? "Hide Age" : "Show Age";

  return (
  <div className="contact-card">
    <img src={img} alt=""/>
    <div className="user-details">
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <button onClick={() => setShowAge(!showAge)}>{btn_label}</button>
        {showAge && <span>Age : {age}</span>}
    </div>
  </div>
  );
};

export default Contact_Card;