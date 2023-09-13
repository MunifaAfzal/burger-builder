import { useState } from "react";
import "./Login.css";
import { clear } from "@testing-library/user-event/dist/clear";

function Login() {
  
  const [inputs, setInputs] = useState({
       email:'',
       password:''
  });
  const [errors, setErrors] = useState({
      email: '',
      password: '',
  });

  const[errorDetail,setErrorDetail] = useState('');

  const [isToggle,setButtonToggle] = useState(true);

  const clearErrors = () => {
    // Clear state values
    setErrors({ email: '', password: ''});
    setErrorDetail('');
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  //  formValidations(name);
  }

  const handleSubmit = (event) => {
     event.preventDefault();
     clearErrors();
     for (const propName in inputs) {
      formValidations(propName);
    }  
  }

  const handleSigIn = (event) => {
    event.preventDefault();
      setButtonToggle(!isToggle);
  }
  const missingEmailMsg = 'Email is required';
  const invalidEmailMsg =  'Invalid email format';
  const missingPasswordMsg = 'Password is required';
  const invalidPasswordMsg = 'Password should be at least 6 characters';
  let  emailDetailMessage = '';
  let  passwordDetailMessage = '';

  const formValidations = (fieldName) => {  
    let error = '';
    if(fieldName==='password'){
      if (!inputs.password.trim()) {
        error = missingPasswordMsg;
        passwordDetailMessage = 'MISSING_PASSWORD';
      }else if(inputs.password.length < 6){
        error = invalidPasswordMsg;
        passwordDetailMessage = 'WEAK_PASSWORD : ' + invalidPasswordMsg;
      }
    }else  if(fieldName==='email'){
      if (!inputs.email.trim()) {
        error = missingEmailMsg;
        emailDetailMessage = "MISSING_EMAIL";
      } else if (!/^\S+@\S+\.\S+$/.test(inputs.email)) {
        error = invalidEmailMsg;
        emailDetailMessage = 'INVALIE_EMAIL';
      }
    } 
    if (Object.keys(error).length === 0) {
      // Valid form, submit data or perform further actions
      console.log('Entered ' + fieldName + ':', inputs.$fieldName);
    } else {
      // Invalid form, set errors
      console.log("Set Error " + error);
      setErrors(values => ({...values, [fieldName]: error}))
      console.log("Initially Detail Error " + errorDetail);
        !emailDetailMessage ?  setErrorDetail(emailDetailMessage) : setErrorDetail(passwordDetailMessage);  
        console.log("After Set Detail Error " + errorDetail);
        } 
  }

  return (
    <div className="login-body">
    <form className="login-form">
      {errorDetail && <p className="error-detail">{errorDetail}</p>}
      <div className="form-element" >
      <input 
        type="email" 
        name="email" 
        placeholder="E-mail Address"
        value={inputs.email} 
        onChange={handleChange}
        className={`${errors.email ? 'invalid_input' : ''}`}
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
          className={`${errors.password ? 'invalid_input' : ''}`}
        />
         {errors.password && <p className="error">{errors.password}</p>}
      </div>
        <button className="btn submit-btn form-element"
                onClick={handleSubmit}>
                  SUBMIT
                  </button> 
        <button className="btn sign-in-btn form-element"
                onClick={handleSigIn}>
                  {isToggle ? 'SIGNIN' : 'REGISTER'}
                  </button>
    </form>
    </div>
  )
}

  export default Login;