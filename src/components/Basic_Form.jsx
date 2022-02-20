import { useState } from "react";

const Basic_Form = () => {
  const [form_values, setform_values] = useState({
      firstName: "",
      lastName: "",
      email: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [form_valid, setForm_valid] = useState(false)

  const handleFirstName = (e) => {
      setform_values({...form_values, firstName: e.target.value})
  }

  const handleLastName = (e) => {
      setform_values({...form_values, lastName: e.target.value})
  }

  const handleEmail = (e) => {
      setform_values({...form_values, email: e.target.value})
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
      if (form_values.firstName && form_values.lastName && form_values.email) {
          setForm_valid(true)
      }
  }

  return (
    <>
        <form className="register-form" onSubmit={handleSubmit}>
            {submitted && form_valid ? <p className="success-message">Registration Successful!</p> : null}
            <input
                onChange={handleFirstName}
                value={form_values.firstName}
                type="text" 
                className="form-field"
                placeholder="First Name"
                name="firstName"
            />
            {submitted && !form_values.firstName ? <span>Enter your first name!</span> : null}
            <input 
                onChange={handleLastName}
                value={form_values.lastName}
                type="text"
                className="form-field"
                placeholder="Last Name"
                name="lastName"
            />
            {submitted && !form_values.lastName ? <span>Enter your first name!</span> : null}
            <input
                onChange={handleEmail}
                value={form_values.email} 
                type="email"
                className="form-field"
                placeholder="Email"
                name="email"
            />
            {submitted && !form_values.email ? <span>Enter your first name!</span> : null}
            <button 
                className="form-field"
                type="submit"
                >Register
            </button>
        </form>
    </>
  );
};

export default Basic_Form;
