import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Loginform from './components/Loginform';
import {BrowserRouter, Routes , Route} from "react-router-dom"
import { Link } from 'react';
import Registration from './components/Registration';
import Front from './components/front';
import Navbar from './components/Navbar';
import DefNav from './components/DefualtNav';
import About from './components/About';
import Service from './components/Service'
import Recent from './components/recent/Recent';
import Chat from './components/chat/Chat';
import Userchat from './components/Userchat/Userchat';
import Talk from './components/Talk/Talk';
import Demo from './components/Defualt';
import Usertalk from './components/Usertalk/Usertalk';
import Service1 from './components/servicemodule/Service1';
import Service2 from './components/servicemodule/Service2';
import Astro from './components/chat/Chat';
import Live from './components/chat/Chat';
import Talkcard2 from './components/Talk/talkcard2';
import Talkcard1 from './components/Talk/talkcard1';
import Talkcard3 from './components/Talk/talkcard3';
import Talkcard4 from './components/Talk/talkcard4';
import Talkcard5 from './components/Talk/talkcard5';
import Talkcard6 from './components/Talk/talkcard6';
import Chatcard1 from './components/chat/chatcard1';
import Userlive from './components/Userlive/userlive';
import Todayhoro from './components/servicemodule/Todayhoro';
import Chatcard2 from './components/chat/chatcard2';
import Chatcard3 from './components/chat/chatcard3';
import Chatcard4 from './components/chat/chatcard4';
import Chatcard5 from './components/chat/chatcard5';
import Chatcard6 from './components/chat/chatcard6';
import Todaypan from './components/servicemodule/Todaypan'
import Love from './components/servicemodule/love';




function App() {

  return (
    <div>
      <Navbar/>

      <BrowserRouter>
     <Routes>
              <Route path='/Front' element={<Front/>}/> 
              <Route path='/Loginform' element={<Loginform/>}/>
              <Route path='/reg' element={<Registration/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/service' element={<Service/>}/>
              <Route path='/recent' element={<Recent/>}/>
              <Route path='/chat' element={<Chat/>}/>
              <Route path='/Userchat' element={<Userchat/>}/>
              <Route path='/talk' element={<Talk/>}/>
              <Route path='/Usertalk' element={<Usertalk/>}/>
              <Route path='/' element={<Demo/>}/>
              <Route path='/service1' element={<Service1/>}/>
              <Route path='/service2' element={<Service2/>}/>
              <Route path='/astro' element={<Astro/>}/>
              <Route path='/live' element={<Live/>}/>
              <Route path='/talkcard1' element={<Talkcard1/>}/>
              <Route path='/talkcard2' element={<Talkcard2/>}/>
              <Route path='/talkcard3' element={<Talkcard3/>}/>
              <Route path='/talkcard4' element={<Talkcard4/>}/>
              <Route path='/talkcard5' element={<Talkcard5/>}/>
              <Route path='/talkcard6' element={<Talkcard6/>}/>
              <Route path='/chatcard1' element={<Chatcard1/>}/>
              <Route path='/userlive' element={<Userlive/>}/>
              <Route path='/todayhoro' element={<Todayhoro/>}/>
              <Route path='/chatcard2' element={<Chatcard2/>}/>
              <Route path='/chatcard3' element={<Chatcard3/>}/>
              <Route path='/chatcard4' element={<Chatcard4/>}/>
              <Route path='/chatcard5' element={<Chatcard5/>}/>
              <Route path='/chatcard6' element={<Chatcard6/>}/>
              <Route path='/todaypan' element={<Todaypan/>}/>
              <Route path='/love' element={<Love/>}/>

      </Routes>


            </BrowserRouter>
            
    </div>
  
   
  );
}

export default App;