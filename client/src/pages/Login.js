import { useState } from 'react'

function App() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

    const register=()=>{
        window.location.href='/register'
    }

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()
		if (email=='admin@gmail.com' && data.user){
			localStorage.setItem('token',data.user)
			window.location.href='/adminlogin'
		}
		else if(email=='warden@gmail.com' && data.user){
			localStorage.setItem('token',data.user)
			window.location.href='/wardenlogin'
		}
		else if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/staffdashboard'
		} 
		else {
			alert('Please check your username and password')
		}
	}

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={loginUser}>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input type="submit" value="Login" />
			</form>
            <button onClick={register}>Register</button>
		</div>
	)
}

export default App
