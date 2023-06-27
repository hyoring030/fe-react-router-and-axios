import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Article = () => {
    const navigate = useNavigate();
    const [user, SetUser]=useState([]);
    const { articledId } = useParams();

    const deletemsg = () => {
        axios
        .delete(`https://guestbook.jmoomin.com/articles/${articledId}`)
        .then(()=>{
            navigate(-1);
        })
    }
    useEffect(()=>{
        axios
        .get(`https://guestbook.jmoomin.com/articles/${articledId}`)
        .then((res)=>{
            console.log(res);
            SetUser(res.data);
        })
        .catch((e)=>{
            console.log(e);
        });
},[]);
    return user === null ? ( 
        <p>로딩중</p>) : 
        (
        <>
        <h1>{user.title}</h1><br/>
        <p>{user.body}</p><br/>
        <p>작성일: {user.createdAt}</p>
        <button onClick={()=>navigate(`/articles/${articledId}/edit`)}>수정하기</button>
        <button onClick={deletemsg}>제거하기</button>
        </>
    );
};

export default Article;