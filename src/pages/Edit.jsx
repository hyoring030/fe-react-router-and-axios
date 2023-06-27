import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Edit = () => {
    const navigate = useNavigate();
    const {articledId} =useParams();
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
        .put(`https://guestbook.jmoomin.com/articles/${articledId}`,{title,body})
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
             <input type="text" placeholder="제목" value={title} onChange={handleTitle} ></input><br/>
             <textarea type="text"placeholder="내용" value={body} onChange={handleBody} ></textarea><br/>
             <button onClick={handleUpdateUser} >방명록 남기기!</button>
        </>
    );
};

export default Edit;