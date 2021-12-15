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

	const studentLogin = () =>{
		window.location.href='/studentlogin'
	}

    return(
        <div>
            <h1>Welcome</h1>
			<button onClick={registrationPage}>Staff Register</button>
			<button onClick={studentRegistration}>Student Registration</button>
			<button onClick={loginPage}>Staff Login</button>
			<button onClick={studentLogin}>Student Login</button>
        </div>

    )
}

export default FrontPage