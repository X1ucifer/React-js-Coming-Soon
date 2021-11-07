import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./form.css"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';
import { width } from '@mui/system';


export default function Form({close}) {

    const [value, setValue] = React.useState("");
    const [mail, setMail] = React.useState("");


    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleMail = (event) => {
        setMail(event.target.value);
    };


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qz5ctkl', 'template_g67xs4p', e.target, 'user_Gls3jtD0r0QAmYpbwL05y')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return (

        <form class="form" onSubmit={sendEmail}>
            {/* <h5>CONTACT US</h5> */}
            <p type="Name:">
                <input placeholder="Write your name here.." name="name" value={value} onChange={handleChange}> 
                </input>
            </p>
            <p type="Email:"><input placeholder="Let us know how to contact you back..@gmail" name="email"  value={mail} onChange={handleMail} ></input></p>
            <p type="Message:"><textarea placeholder="What would you like to tell us.." rows="4" cols="2" name="message"></textarea></p>

            <Button variant="contained"  disabled={!value || !mail} type="submit" style={{ backgroundColor: "green",padding:"10px",marginTop:"15px" }} onClick={close} endIcon={<SendIcon />} >
                Send
            </Button>
            {/* <input disabled={!value} onClick={close} style={{cursor:"pointer",padding:"10px",marginTop:"15px"}} type="submit" value="Send Message"></input> */}
            {/* <button disabled={!value} type="submit">Let me in</button>  */}


        </form>

    )
}
