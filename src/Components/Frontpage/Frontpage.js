import React from "react";
import './Frontpage.css';


const Frontpage = () =>{
    return(
        <div className="signup">
      <div className="left">
        <h1>Board.</h1>
      </div>
      <div className="right">
        <div className="right-center">
          <h3>Sign In</h3>
          <h6 className="formh3">Sign in to your account</h6>

          <a className="anchor" href=""> Sign in with Google</a>
          <a className="anchor" href="">Sign in with Apple</a>

          <div className="form">
            <form className="formtag" action="">
              <label htmlFor="">Email address</label>
              <br />
              <input className="forminput" type="email" name="email" placeholder="abc@gmail.com" required/>
              <br />
              <label htmlFor="">Enter Password</label>
              <br />
              <input className="forminput" type="email" name="email" required/>
              <br />
              <a className="formanchor" href="">Forget password?</a>
              <br />
              <button className="formbutton" type="submit" >Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}
 export default Frontpage;