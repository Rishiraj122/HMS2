import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Logout from './pages/Logout'
import AdminLogin from './pages/adminlogin'
import WardenLogin from './pages/wardenlogin'
import Notice from './pages/notice'
import NoticeDisplay from './pages/noticeDisplay'
import StudentRegistration from './pages/StudentRegistration'
import FrontPage from './pages/frontPage'
import StudentLogin from './pages/StudentLogin'

//Route is the conditionally shown component that renders some UI when its path matches the current URL.
// Browserrouter is a router that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.
const App = () => {
	return (
		<div>	
			<BrowserRouter>
				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register} />
				<Route path="/dashboard" exact component={Dashboard} />
				<Route path="/logout" exact component={Logout} />
				<Route path="/adminlogin" exact component={AdminLogin} />
				<Route path="/wardenlogin" exact component={WardenLogin} />
				<Route path="/notice" exact component={Notice} />
				<Route path="/noticedisplay" exact component={NoticeDisplay} />
				<Route path="/studentregistration" exact component={StudentRegistration} />
				<Route path="/" exact component = {FrontPage} />
				<Route path="/studentlogin" exact component={StudentLogin} />
			</BrowserRouter>
		</div>
	)
}

export default App
