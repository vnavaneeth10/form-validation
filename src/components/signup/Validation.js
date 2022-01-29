//Validation Function
function Validation(values) { //values = formValues (useState)
    // storing error
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
        errors.username = "Username is required";
    }
    if (!values.email) {
        errors.email = "Email is required";
    }
    else if (!regex.test(values.email)) {
        errors.email = "Email is invalid";
    }
    // values are coming from formValues, so same key shud b used here
    // but errors is a new empty obj, so anything can b used pwd/password
    if (!values.pwd) {
        errors.password = "Password is required";
    }
    
    else if (values.pwd.length < 5) {
        errors.password = "Password is too short";
    }
    return errors;

}

export default Validation;