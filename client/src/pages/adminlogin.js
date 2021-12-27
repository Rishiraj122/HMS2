import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router-dom'
import Notice from '../components/notice'
import AdminNotice from '../components/adminNotice'

const AdminLogin = () =>{
    const history = useHistory();

    const addStudent=()=>{
        window.location.href='/studentregistration'
    }


    const logout=()=>{
        window.localStorage.clear();
        window.location.href='/login'
    }

    const studentDetails=()=>{
        window.location.href='/studentdetails'
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) {
            const user = jwt.decode(token)
            history.push('/login');
        }
      })

    return (
        <div>
            <h1>This is the admin page</h1>
            <button onClick={addStudent}>Add Student</button>
            <button onClick={studentDetails}>Student Details</button>
            <button onClick={logout}>Logout</button>
            <div>
                <center><Notice></Notice></center>
                <AdminNotice></AdminNotice> 
                {/* This admin notice is coming from components/adminNotice, 
                it is different from normal notice that a student uses in the 
                sense that the admin notice has the feature to delete notices */}
            </div>
        </div>
    )
}

export default AdminLogin