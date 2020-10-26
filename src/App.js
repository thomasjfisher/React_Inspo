import React from "react"
import Messages from "./Messages"
import Randomise from "./Randomise"
import "./style.css"
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'



const App = () => {
    return <div>
        <div class="header"></div>
             <div class="bg">
                <div class="jumbotron">
                 <Jumbotron>
                    <div className="container" >
                             <h1 class="messages" id="wrapper">
                             {Messages()}
                             </h1>
                    </div>     
                 </Jumbotron> 
                 </div>
                 <div class="buttons">
                <Button onClick={Randomise} variant="success">Click for Inspo</Button>
                </div>
             </div>
    </div>
}

export default App