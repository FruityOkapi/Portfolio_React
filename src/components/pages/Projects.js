import React, { useState } from "react";

export default function Projects() {
    const newClass = 'box has-background-danger'
    const defaultClass = 'box has-background-danger-light'
    
    const [color1, setColor1] = useState(defaultClass)
    const [color2, setColor2] = useState(defaultClass)
    const [color3, setColor3] = useState(defaultClass)
    const [color4, setColor4] = useState(defaultClass)
    
    const changeColor = (e) => {
        const [name] = e.target
        if (name === '1') {
            return setColor1(newClass);
        }
        if (name === '2') {
            return setColor2(newClass)
        }
        if (name === '3') {
            return setColor3(newClass)
        }
        if (name === '4') {
            return setColor4(newClass)
        }
    }
    const returnColor = (e) => {
        
    }

    return (
        <div class="columns">
            <div class="column is-half">
                <div name="1" onMouseOver={changeColor} onMouseOut={returnColor} class={color1}>
                    <a href="https://github.com/FarmFreshYeets/Steamin-And-Streamin">
                        <img class='image' src="https://i.imgur.com/VnFzffL.png"/>
                    </a>
                </div>
                <div name="2" onMouseOver={changeColor} onMouseOut={returnColor} class={color2}>
                    <a href="https://github.com/FruityOkapi/Employee_Tracker">
                        <img class='image' src="https://i.imgur.com/G581R1J.png"/>
                    </a>
                </div>
            </div>
            <div class="column is-half">
                <div  name="3"onMouseOver={changeColor} onMouseOut={returnColor} class={color3}>
                    <a href="https://github.com/Pscully21/Project-2-Intentional-Health">
                        <img class='image' src="https://i.imgur.com/isy4Kaz.png"/>
                    </a>
                </div>
                <div name="4" onMouseOver={changeColor} onMouseOut={returnColor} class={color4}>
                    <a href="https://github.com/FruityOkapi/social_media_api">                       
                        <img class='image' src="https://i.imgur.com/CICxtWc.png"/>
                    </a>
                </div>
            </div>
        </div>
    )
}