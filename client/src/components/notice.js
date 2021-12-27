import React, {useEffect,useState} from 'react'
import axios from 'axios'

function Notice () {

    const [name,setName] = useState('')
    const [noticetitle,setNoticetite] = useState('')
    const [notice,setNotice] = useState('')

    const noticePage = () =>{
        window.location.href='/notice';
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
                noticetitle,
                notice,
                notices:[]
            }),
        })
        const data=await response.json()
        if (data.status == 'ok') {
            alert('Notice Published')
		}
    }


    return(
        <div>
            <h1>Publish Notice</h1>
            <h2>{noticetitle}</h2>
            <h2>{notice}</h2>
            <h2>{name}</h2>
            <form onSubmit={publishNotice}>
            <input
					value={noticetitle}
                    onChange={(e) => setNoticetite(e.target.value)}
                    type="text"
                    placeholder="Title"
				/>
				<br />
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
        </div>
    )
}

export default Notice