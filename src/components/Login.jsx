import { useEffect, useState } from "react";
import "./Login.css";
import Navbar from './Navbar';

function Login({isLogin,setIsLogin} ) {
  
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
    setErrors({ email: '', password: ''});
    setErrorDetail('');
  };
  const missingEmailMsg = 'Email is required';
  const invalidEmailMsg =  'Invalid email format';
  const missingPasswordMsg = 'Password is required';
  const invalidPasswordMsg = 'Password should be at least 6 characters';

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
    //formValidations(name);
  }

  const handleSubmit = (event) => {
     event.preventDefault();
     clearErrors();
     for (const propName in inputs) {
      console.log("formavalidation : " + propName);
      formValidations(propName);
    } 
    if(!errorDetail) {
      console.log("Login credential entered successfully with error" + errorDetail);
      alert("Login credential entered successfully");
      setIsLogin(true);
    }
  }

  const handleSigIn = (event) => {
    event.preventDefault();
      setButtonToggle(!isToggle);
  }

  useEffect(() => {
    // This code will run whenever someState changes
    console.log("Use effect called");
    console.log(inputs);
    console.log("error detail : " + errorDetail);
    console.log(errors);
     setErrorMessageDetails();
  }, [errors]); 

  const setErrorMessageDetails = () => {
    let detailError = '';
    //change errordetail message
    if(errors.email===missingEmailMsg){
      detailError = "MISSING_EMAIL";
    }else if(errors.email===invalidEmailMsg){
      detailError = 'INVALID_EMAIL';
    }else if(errors.password===missingPasswordMsg){
      detailError = 'MISSING_PASSWORD';
    }else if(errors.password===invalidPasswordMsg){
      detailError = 'WEAK_PASSWORD : ' + invalidPasswordMsg;
    }  
    console.log("detailError  " + detailError);
    console.log("Initially Detail Error " + errorDetail);
    setErrorDetail(detailError);  
    console.log("After Set Detail Error " + errorDetail);
  }
  const formValidations = (fieldName) => {  
    let error = '';
    if(fieldName==='password'){
      if (!inputs.password.trim()) {
        error = missingPasswordMsg;
      }else if(inputs.password.length < 6){
        error = invalidPasswordMsg;
      }
    }else  if(fieldName==='email'){
      if (!inputs.email.trim()) {
        error = missingEmailMsg;
      } else if (!/^\S+@\S+\.\S+$/.test(inputs.email)) {
        error = invalidEmailMsg;
      }
    } 
    if (Object.keys(error).length !== 0) {
      // Invalid form, set errors
      console.log("Set Error " + error);
      setErrors(values => ({...values, [fieldName]: error}))
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