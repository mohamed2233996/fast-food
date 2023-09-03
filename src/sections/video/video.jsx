import React from 'react';
import "./video.css"
import { BsFillPlayFill } from "react-icons/bs";


const Video = () => {
    return (
        <div className='video section-m'>
            <div className='container'>
                <h2 className='video-heading'>When a man's stomach is full it makes no difference whether he is rich or poor.</h2>
                <p className='video-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                <br />
                <a className='video-link' href="">
                    <BsFillPlayFill />
                    Watch Our Story
                </a>
            </div>
        </div>
    );
}

export default Video;
