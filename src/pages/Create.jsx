import React from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';



const Create = () => {
    const navigate = useNavigate();
    const {  ownerId } = useParams();
    const [title, setTitle] =useState("");
    const [body, setBody]=useState("");

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleBody = (e) => {
        setBody(e.target.value);
    };

    const handleUpdateUser = () => {
        axios
        .post(`https://guestbook.jmoomin.com/${ownerId}/articles`,{title,body})
        .then(()=>{
            navigate(-1);
        })
        .catch((e)=>{
            console.log(e);
            alert(e);
        });
    }
    return(
        <>
            <h1>{ ownerId }님의 방명록</h1>
             <input type="text"  placeholder='제목' onChange={handleTitle} value={title}></input><br/>
             <textarea type="text" placeholder='내용' onChange={handleBody} value={body}></textarea><br/>
             <button onClick={handleUpdateUser} >방명록 남기기!</button>
        </>
    );
};

export default Create;