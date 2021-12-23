import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const item=[];

export default class Fetch extends React.Component{

    state={
        loading: true,
        person: null,
    }

    async delete(value){
        const nid={nid: value}
        const response = await axios.post('http://localhost:1337/api/noticedelete',nid);
        window.location.reload(false);
    }

    async componentDidMount(){
        const url="http://localhost:1337/api/notice";
        const response = await fetch(url);
        const data = await response.json();
        for(let i=data.user.length-1;i>=-1;i--){
            this.setState({person: data, loading: false})
            item.push(data.user[i]);
            console.log(data.user[0])
        }

    }
    

    

    render(){
        return <div>
            <h1>NOTICE For Staffss</h1>
            <div>{item.map(i => 
            <div>
                <h2>{i.noticetitle}</h2>
                <h3>{i.notice}</h3>
                <p>Undersigned: <i>{i.name}</i></p>
                <button onDoubleClick={()=>this.delete(i.nid)}>Delete</button>
            </div>
            )}</div>
            
        </div>
    }
}