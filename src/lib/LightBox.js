import React from "react";
import "./LightBox.css";

const LightBox = ((props) => {
    return (
        <div className={props.hidden ? 'lightbox hidden' : 'lightbox'}>

            <div
                className="close"
                onClick={props.onClick}
                tabIndex='50'
                onKeyDown={(e) => e.keyCode === 13 ? props.onKeyDown : null}
            >
                {props.close}
            </div>
            {props.content}

        </div>
    )
})

export default LightBox