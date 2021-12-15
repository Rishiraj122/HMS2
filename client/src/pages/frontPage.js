import React from "react";

function FrontPage(){
    const registrationPage = () =>{
		window.location.href='/register'
	}

	const loginPage = () =>{
		window.location.href='/login'
	}

	const studentRegistration = () =>{
		window.location.href='/studentregistration'
	}
    return(
        <div>
            <h1>Welcome</h1>
			<button onClick={registrationPage}>Register</button>
			<button onClick={studentRegistration}>Student Registration</button>
			<button onClick={loginPage}>Login</button>
        </div>

    )
}

export default FrontPage