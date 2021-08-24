import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Contact = () => {

    let [ name, setName ] = useState('');
    let [ email, setEmail ] = useState('');
    let [ message, setMessage ] = useState('');
    let [ messageSubmitting, setMessageSubmitting ] = useState(false);
    let [ isformComplete, setIsformComplete ] = useState(false);

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        let messageObject = {name,email,message};
        if(messageObject.name && messageObject.email && messageObject.message) {

            fetch('https://russellgeorgedriver.herokuapp.com/', { 
                method:'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(messageObject)
            })
            .then(() => {
                setMessageSubmitting(true);
                setIsformComplete(false);
                setTimeout(() => {
                    history.push('/');
                },2000)
            })
        } else {
            setIsformComplete(true)
        }
    }

    return (
        <div className="Contact">
            <h1>Contact Me</h1>
            <form className="Contact-form-box">
                <label className="Contact-form-box-lab">Name</label>
                <input onChange={(e) => {setName(e.target.value)}} className="Contact-form-box-nameInput" type="text" />
                <label className="Contact-form-box-lab">Email</label>
                <input onChange={(e) => {setEmail(e.target.value)}} type="text" className="Contact-form-box-emailInput" />
                <label className="Contact-form-box-lab">Message</label>
                <textarea onChange={(e) => {setMessage(e.target.value)}} className="Contact-form-box-messageInput"  />
               { !messageSubmitting && <button onClick={(e) => {handleSubmit(e)}} className="Contact-form-box-button">Submit</button> }
               { messageSubmitting && <button onClick={(e) => {handleSubmit(e)}} className="Contact-form-box-button" value="submit">Submitting...</button> }
               { isformComplete && <p className="Contact-form-box-feedback">Please ensure all fields have been entered...</p> }
            </form>
        </div>
    )
}

export default Contact;