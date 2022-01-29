import React, { useState } from "react";
import './signup.css';

function signup(props){


	const [FormValues, setFormValues] = useState({username :"", email:"", password:""})

	const handleChange = (event)

    return(
          
    <div className="main">  	
		<input type="checkbox" class="chk" aria-hidden="true"/>

			<div className="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="username" placeholder="User name" required="" value={FormValues.username} onChange={handleChange}/>
					<input type="email" name="email" placeholder="Email" required="" value={FormValues.email} onChange={handleChange}/>
					<input type="password" name="psw" placeholder="Password" required=""value={FormVAlues.password} onChange={handleChange}/>
					<button>Sign up</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="psw" placeholder="Password" required=""/>
					<button>Login</button>
				</form>
			</div>
	</div>
    
	


 
);
}
export default signup;  




