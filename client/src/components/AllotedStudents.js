import React, { useState } from 'react';
import {useHistory} from "react-router-dom";
import axios from 'axios';
  

const item=[];
const notAllotted=[];
const searchData=[];
const email='';

export default class AllotedStudents extends React.Component{
    
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
                if(data.user[i].room==x ||  
                    data.user[i].block==x || 
                    data.user[i].phone==x ||
                    data.user[i].name.toLowerCase()==x.toLowerCase())
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
                if(data.user[i].room!=null){
                    item.push(data.user[i]);
                    console.log(data.user[0])
                }
                else if(data.user[i].room==null){
                    notAllotted.push(data.user[i]);
                }
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
            
            <h1>Alloted Students</h1>

            <input type="text" 
            onChange={(evt) => {var x=evt.target.value; 
            this.componentDidMount(x) }} />

            <button onClick={this.refreshPage}>Clear</button>
            <div>{item.map(user => 
                <div>
                    <p>Name: {user.name} Room: {user.room} Block: {user.block} Phone: {user.phone} Roll: {user.roll}
                    </p>
                </div>
            )}</div>

                <h3>Not Allotted Students</h3>
            <div>{notAllotted.map(user2 => 
                <div>
                    <p>Name: {user2.name} Phone: {user2.phone} Roll: {user2.roll}
                    </p>
                </div>
            )}</div>
        </div>
    }
}