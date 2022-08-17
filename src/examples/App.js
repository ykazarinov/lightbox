import React from "react";
// import { TextInput } from "../lib";
import { useState } from "react";
import {LightBox} from "../lib";

const App = () => {
    const [hidden, setHidden] = useState(true);
    const openModal = () => {
      setHidden(false)
    }
    const closeModal = () => {
      setHidden(true)
    }
  return(<div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <button onClick={openModal}>open</button>
    <LightBox 
                content={
                    <>
                    <h1>Test</h1>
                    <div className='buttons-container'>
                        <button type='button'>Yes</button>
                        <button type='button'>Cancel</button>
                    </div>
                    
                    </>
                }
                hidden={hidden}
                onClick={closeModal}
                close={'X' }
            ></LightBox>
  </div>)
  
};

export default App;