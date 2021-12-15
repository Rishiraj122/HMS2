import React, {useEffect,useState} from 'react'
import axios from 'axios'

function Notice () {

    const [name,setName] = useState('')
    const [notice,setNotice] = useState('')

    const noticePage = () =>{
        window.location.href='/notice';
    }

    const noticeDisplay = () =>{
        window.location.href='/noticedisplay';
    }

    //Publish Notice
    axios({
        method: 'get',
        url: 'https://api.github.com/users/hacktivist123',
      });

    async function publishNotice(event){
        event.preventDefault()
        const response = await fetch('http://localhost:1337/api/notice',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                name,
                notice,
                notices:[]
            }),
        })
        const data=await response.json()
        if (data.status == 'ok') {
            alert('Notice Published')
		}
    }

    //Updates checking


    //Display them

    return(
        <div>
            <h1>HOSTEL WARD</h1>
            
            <h2>{notice}</h2>
            <form onSubmit={publishNotice}>
                <input
					value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="name"
				/>
				<br />
				<input
					value={notice}
                    onChange ={(e) => setNotice(e.target.value)}
                    type="text"
                    placeholder="notice"
				/>
				<br />
				<input type="submit" value="publish" onClick={{noticePage}}/>
			</form>
            <button onClick={noticeDisplay}>Display Notice</button>
        </div>
    )
}

export default Notice