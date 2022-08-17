import React from "react";
import "./LightBox.css";

const LightBox =((props)=>{
    return(
        <div className={props.hidden ? 'lightbox-container hidden': 'lightbox-container'}>
            <div className='lightbox'>
                <div 
                    className="close"
                    onClick={props.onClick}
                >
                    {props.close}
                </div>
                    {props.content}
            </div>
        </div>
    ) 
})

export default LightBox