import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ setIsLogin }) {
  const noError = "";
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: noError,
    password: noError,
  });

  let [errorDetail, setErrorDetail] = useState(noError);
  let [isToggle, setButtonToggle] = useState(true);

  const clearErrors = () => {
    setErrors((errors) => ({ ...errors, email: noError, password: noError }));
    setErrorDetail((prevError) => (prevError = noError));
  };
  const missingEmailMsg = "Email is required";
  const invalidEmailMsg = "Invalid email format";
  const missingPasswordMsg = "Password is required";
  const invalidPasswordMsg = "Password should be at least 6 characters";

  let navigate = useNavigate();
  const openBurgerBuilderPage = () => {
    let path = `/`;
    navigate(path);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    //formValidations(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    clearErrors();
    for (const propName in inputs) {
      console.log("formavalidation : " + propName);
      formValidations(propName);
    }
    loginAccount();
  };

  const loginAccount = () => {
    console.log(inputs);
    console.log(errors);
    if (
      errors.email === noError &&
      errors.password === noError &&
      inputs.email !== "" &&
      inputs.password !== ""
    ) {
      /*alert(
        "Login credential email: " +
          inputs.email +
          " and password : " +
          inputs.password +
          "  entered successfully"
      );  */
      setIsLogin(true);
      openBurgerBuilderPage();
    }
  };

  const handleSigIn = (event) => {
    event.preventDefault();
    setButtonToggle(!isToggle);
  };

  useEffect(() => {
    // This code will run whenever someState changes
    console.log("Use effect called");
    console.log(inputs);
    console.log("error detail : " + errorDetail);
    console.log(errors);
    setErrorMessageDetails();
    loginAccount();
  }, [errors]);

  const setErrorMessageDetails = () => {
    let detailError = noError;
    //change errordetail message
    if (errors.email === missingEmailMsg) {
      detailError = "MISSING_EMAIL";
    } else if (errors.email === invalidEmailMsg) {
      detailError = "INVALID_EMAIL";
    } else if (errors.password === missingPasswordMsg) {
      detailError = "MISSING_PASSWORD";
    } else if (errors.password === invalidPasswordMsg) {
      detailError = "WEAK_PASSWORD : " + invalidPasswordMsg;
    }
    console.log("detailError  " + detailError);
    console.log("Initially Detail Error " + errorDetail);
    setErrorDetail((prevError) => (prevError = detailError));
    console.log("After Set Detail Error " + errorDetail);
  };
  const formValidations = (fieldName) => {
    let error = noError;
    if (fieldName === "password") {
      if (!inputs.password.trim()) {
        error = missingPasswordMsg;
      } else if (inputs.password.length < 6) {
        error = invalidPasswordMsg;
      }
    } else if (fieldName === "email") {
      if (!inputs.email.trim()) {
        error = missingEmailMsg;
      } else if (!/^\S+@\S+\.\S+$/.test(inputs.email)) {
        error = invalidEmailMsg;
      }
    }
    if (error !== noError) {
      // Invalid form, set errors
      console.log(fieldName + " Error occurs: " + error);
      setErrors((values) => ({ ...values, [fieldName]: error }));
    }
  };

  return (
    <div className="login-body">
      <form className="login-form">
        {errorDetail && <p className="error-detail">{errorDetail}</p>}
        <div className="form-element">
          <input
            type="email"
            name="email"
            placeholder="E-mail Address"
            value={inputs.email}
            onChange={handleChange}
            className={`${errors.email ? "invalid_input" : ""}`}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-element">
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
            value={inputs.password}
            onChange={handleChange}
            className={`${errors.password ? "invalid_input" : ""}`}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button className="btn submit-btn form-element" onClick={handleSubmit}>
          SUBMIT
        </button>
        <button className="btn sign-in-btn form-element" onClick={handleSigIn}>
          {isToggle ? "SIGNIN" : "REGISTER"}
        </button>
      </form>
    </div>
  );
}

export default Login;
