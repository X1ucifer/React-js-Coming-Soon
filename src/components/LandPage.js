import React from 'react'
import Countdown from "./Timer";
import MessageUS from './MessageUS';
import "./land.css";
import "./glitch.scss";


export default function LandPage() {

    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

    return (
        <>

            <div className="container">
                <div className="logo">
                    <h2 className=" glitch">O</h2>
                    <h2 className="welcome1">SPYBERRYS</h2>
                </div>
                <div className="overlay">
                    <h1   >COMING SOON</h1>
                    <Countdown className="timer" date={`${year}-11-17T00:00:00`} />
                    <p>WE WILL BE  <code style={{ color: "#9BE800" }}>CELEBRATING</code> THE <code style={{ color: "#9BE800" }}>LAUNCH</code> OF <code style={{ color: "#9BE800" }}>OUR NEW SITE</code> VERY SOON</p>
                </div>

                <div className="message">
                    <MessageUS/>
                </div>
                <video className="bg" src="../video.mp4" autoPlay="../video.mp4" muted loop></video>

            </div>
        </>
    )
}
