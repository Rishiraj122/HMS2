import React, { useState } from 'react';
import {useHistory} from "react-router-dom";
  

const item=[];
const searchData=[];
const email='';

export default class studentDetails extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            inputValue:'',
        };
    }

    state={
        loading: true,
        person: null,
    }

    async componentDidMount(x){
        const url="http://localhost:1337/api/studentlogin";
        const response = await fetch(url);
        
        const data = await response.json();
        if(x!=null){

            for(let i=0;i<data.user.length;i++){ // This will search for the 
                //particular student
                this.setState({person: data, loading: false})
                if(data.user[i].roll==x || data.user[i].name.toLowerCase()==x.toLowerCase() || 
                    data.user[i].registration==x || 
                    data.user[i].phone==x ||
                    data.user[i].email==x)
                    {
                        item.length=0;
                        item.push(data.user[i]);
                        console.log(item[0]);
                }
            }
        }
        else if(x==null){ //It will load everyone's data initially
            for(let i=data.user.length-1;i>=0;i--){
                this.setState({person: data, loading: false})
                item.push(data.user[i]);
                console.log(data.user[0])
            }
        }
    }

    refreshPage(){
        window.location.reload();
    } 

    updateInputValue(evt) {
        this.setState({
          inputValue: evt.target.value
        });
      }
    
    render(){
        
        return <div style={{textAlign: 'center'}}>
            <input id="number" type="text" 
            onChange={(evt) => {var x=evt.target.value; this.componentDidMount(x) }} />
            <button onClick={this.refreshPage}>Clear</button>
            {this.state.loading || !this.state.person ? 
           <div>loading...</div> 
            :
            <div>{item.map(student => 
            <div>
                
                <h1>Student</h1>
                <h2>{student.title}</h2>
                <p>Name: {student.name}</p>
                <p>Roll No.: {student.roll}</p>
                <p>Registration No.: {student.registration}</p>
                <p>Address: {student.address}</p>
                <p>Phone Number: {student.phone}</p>
                <p>E-mail ID: {student.email}</p>

            </div>
            )}</div>
            }
        </div>
    }
}