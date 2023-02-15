import React, { useState }  from "react";

export default function Contact() {
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [contentValue, setContentValue] = useState('');
    const [text, setText] = useState('');
    const [touched, setTouched] = useState(false);
    
    const validEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        if (name === 'name') {
            return touched ? setNameValue(value) : setText('Please enter a name!')
        } else if (name === 'email') {
            return touched ? (validEmail.test(value) ? setEmailValue(value) : setText('Please enter a valid email!')) : setText('Please enter an email!')
        } else if (name === 'content') {
            return touched ? setContentValue(value) : setText('Please enter a message!')
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        setText('Success!')
        setNameValue('');
        setEmailValue('');
        setContentValue('');
    }

    return (
        <form class="box container">
            <h2 class="title">Contact</h2>
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input
                    value={nameValue}
                    name="name"
                    onChange={handleInputChange}
                    onBlur={() => setTouched(true)}
                    class="input"
                    placeholder="John Doe"/>
                </div>
            </div>
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input
                    value={emailValue}
                    name="email" 
                    onChange={handleInputChange}
                    onBlur={() => setTouched(true)}
                    class="input" 
                    type="text"
                    placeholder="example@email.com"/>
                </div>
            </div>
            <div class="field">
                <label class="label">Email Content</label>
                <div class="control">
                    <textarea
                    value={contentValue}
                    name="content" 
                    onChange={handleInputChange}
                    onBlur={() => setTouched(true)}
                    class="textarea"
                    placeholder="Many emails can be written here"
                    rows="10"/>
                </div>
            </div>
            <div class="subtitle has-text-danger-dark">{text}</div>
            <button class="button is-danger is-light" onClick={handleFormSubmit}>Email</button>
        </form>
    )
}