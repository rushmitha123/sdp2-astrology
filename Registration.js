import React from "react";
import "../App.css"
import eye from '../eye.jpeg'
import axios from 'axios'

function Registration(){
    function handle()
    {
        let pass=document.getElementById("pass")
        if(pass.type === 'password')
        {
            pass.type = 'text';
        }
        else{
            pass.type ='password';
        }
    }
    
        function handler(event)
    {
        alert("submitted")
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            f_name: data.get('f_Name'),
            l_name: data.get('l_Name'),
          username: data.get('username'),
          password: data.get('password'),
        });
            axios.post("http://localhost:3001/insert",{
                f_name:data.get('f_name'),
                l_name:data.get('l_name'),
                username:data.get('username'),
                password:data.get('password')
              }).then((response)=>{
                console.log(response.data)
              });
            
        
    
    }
    function clear(){
        let fname=document.getElementById("f_name")
        let pass=document.getElementById("pass")
        let lname=document.getElementById("l_name")
        let username=document.getElementById("username")
        if(pass.value === '' && fname.value === '' && lname.value ==='' && username.value ==='')
        {
            pass.placeholder = 'password';
            fname.placeholder = 'first name';
            lname.placeholder = 'last name';
            username.placeholder = 'user name';
        }
        else{
            pass.value=''
            fname.value=''
            lname.value=''
            username.value=''
        }
        
    }
    return(    
        <div>
            
           <div className='box1'>
           <form onSubmit={handler}>
                <h1>Register</h1>
                <br></br>
                <div style={{display:'block'}}>
                <input type='text' placeholder=" first Name" name="f_name" id="f_name" style={{marginRight:'40px'}}/>
                <input type='text' placeholder="last Name" name="l_name" id="l_name"/>
                </div>
                <br></br>
                
                <input type='text' placeholder="username"  name="username" id="username"/>
                <br></br>
                <br></br>
                <input type='password' placeholder="password" name="password" id="pass" style={{marginLeft:'23px'}}/>
                <img src={eye} style={{width:'20px',height:'20px',borderRadius:'50px',marginLeft:'2px',cursor:'pointer'}} id='eye' onClick={handle}></img>
                
                <br></br>
                <br></br>
                <button className="button-85" role="button">Submit</button>
                <br></br>
                </form>
                
                
                </div> 
           
           
           
        </div>
     
        
    );
}
export default Registration;