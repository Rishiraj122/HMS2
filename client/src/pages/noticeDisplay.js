import React from 'react';
import { useHistory } from 'react-router-dom';

const item=[];

export default class Fetch extends React.Component{

    state={
        loading: true,
        person: null,
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
            <center><h1>NOTICE</h1>
            <div>{item.map(i => 
            <div>
                <h2>{i.noticetitle}</h2>
                <h3>{i.notice}</h3>
                <h5>Undersigned: <i>{i.name}</i></h5>
            </div>
            )}</div>
            </center>
        </div>
    }
}