import React from "react";
import {useForm} from "react-hook-form"
const Form = () => {
  return (
    <div className="form">
      <div className="title">SignUp</div>

      <div className="inputs">
        <form action="">
          <input type="text" name="firstName" placeholder="First name" />
          <input type="text" name="lastName" placeholder="last name" />
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="age" placeholder="Age" />
          <input type="text" name="password" placeholder="password" />
          <input
            type="text"
            name="confirmPassword"
            placeholder="confirmPassword"
          />

          <input type="submit" value=""  id="submitBtn"/>
        </form>
      </div>
    </div>
  );
};

export default Form;
