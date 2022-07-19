import { useState } from "react";

const BasicForm = () => {
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const [form_valid, setForm_valid] = useState(false)

    const handleFirstName = (e) => {
        setFormValues({ ...formValues, firstName: e.target.value })
    }

    const handleLastName = (e) => {
        setFormValues({ ...formValues, lastName: e.target.value })
    }

    const handleEmail = (e) => {
        setFormValues({ ...formValues, email: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (formValues.firstName && formValues.lastName && formValues.email) {
            setForm_valid(true)
        }
    }

    return (
        <>
            <form className="register-form" onSubmit={handleSubmit}>
                {submitted && form_valid ? <p className="success-message">Registration Successful!</p> : null}
                <input
                    onChange={handleFirstName}
                    value={formValues.firstName}
                    type="text"
                    className="form-field"
                    placeholder="First Name"
                    name="firstName"
                />
                {submitted && !formValues.firstName ? <span>First name is required</span> : null}
                <input
                    onChange={handleLastName}
                    value={formValues.lastName}
                    type="text"
                    className="form-field"
                    placeholder="Last Name"
                    name="lastName"
                />
                {submitted && !formValues.lastName ? <span>Last name is required</span> : null}
                <input
                    onChange={handleEmail}
                    value={formValues.email}
                    type="email"
                    className="form-field"
                    placeholder="Email"
                    name="email"
                />
                {submitted && !formValues.email ? <span>Email is required</span> : null}
                <button
                    className="form-field"
                    type="submit"
                >Register
                </button>
            </form>
        </>
    );
};

export default BasicForm;
