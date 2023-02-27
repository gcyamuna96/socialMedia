import React, { useState,useRef } from "react";
import './postShare.css'
import Profile from '../../img/profile.jpeg'
import {FaImage} from 'react-icons/fa'
import {FaVideo} from 'react-icons/fa'
import {CiLocationOn} from 'react-icons/ci'
import {AiOutlineSchedule} from 'react-icons/ai'




const PostShare = () =>{

    const [image,setImage] = useState()
    const imageRef = useRef()
    const onImageChange= (Event) =>{
        if(Event.target.files && Event.target.files[0]){
            let img = Event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    };

    return(
        <div className="postShare">
            <img src={Profile} alt="" />
            <div>
            <input type="text" placeholder="What's on your mind"/>

                <div className="postOptions">
                    
                    <div className="option" onClick={()=>imageRef.current.click()}> 
                        <FaImage/>
                        Image
                    </div>
                    <div className="option">
                        <FaVideo/>
                        Video
                    </div>
                    <div className="option">
                        <CiLocationOn/>
                        Location
                    </div>
                    <div className="option">
                        <AiOutlineSchedule/>
                        Schedule
                    </div>

                    <button className="button">
                        Share
                    </button>

                    <div className="imgUpload">
                        <input type="file" name = "myImage" ref={imageRef} onChange={onImageChange}/>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default PostShare;