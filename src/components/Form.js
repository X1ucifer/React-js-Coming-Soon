import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./form.css"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';
import { width } from '@mui/system';


export default function Form({close}) {

    const [value, setValue] = React.useState(true);

    const handleChange = (event) => {
        setValue(event.target.value);
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
                <input placeholder="Write your name here.." name="name">
                </input>
            </p>
            <p type="Email:"><input placeholder="Let us know how to contact you back..@gmail" name="email"></input></p>
            <p type="Message:"><input placeholder="What would you like to tell us.." name="message"></input></p>
            {/* <Button variant="contained" style={{ backgroundColor: "green" }} endIcon={<SendIcon />} >
                Send
            </Button> */}
            <input onClick={close} style={{cursor:"pointer",padding:"10px",marginTop:"15px"}} type="submit" value="Send Message"></input>

        </form>

    )
}
