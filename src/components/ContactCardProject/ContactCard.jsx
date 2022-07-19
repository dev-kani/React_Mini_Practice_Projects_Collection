import { useState } from 'react';

const ContactCard = ({ img, name, email, age }) => {

  const [showAge, setShowAge] = useState(false);

  const btnLabel = showAge ? "Hide Age" : "Show Age";

  return (
    <div className="contact-card">
      <img src={img} alt="" />
      <div className="user-details">
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <button onClick={() => setShowAge(!showAge)}>{btnLabel}</button>
        {showAge && <span>Age : {age}</span>}
      </div>
    </div>
  );
};

export default ContactCard;