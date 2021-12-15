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
        for(let i=data.user.length-1;i>=0;i--){
            this.setState({person: data, loading: false})
            item.push(data.user[i]);
            console.log(data.user[0])
        }

    }

    render(){
        return <div>
            {this.state.loading || !this.state.person ? 
            <div>loading...</div> 
            :
            <div>{item.map(name => 
            <div>
                <h1>NOTICE</h1>
                <h2>{name.notice}</h2>
                <p>Undersigned: {name.name}</p>
            </div>
            )}</div>
            
            }
            
        </div>
    }
}