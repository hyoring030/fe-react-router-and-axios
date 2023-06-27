import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { ownerId } = useParams();
    const navigate = useNavigate();
    const [user, SetUser]=useState([]);
    
    useEffect(()=>{
        axios
        .get(`https://guestbook.jmoomin.com/${ownerId}/articles`)
        .then((res)=>{
            console.log(res);
            SetUser(res.data);
        })
    },[]);

    return (
        <>
            <h1> {ownerId}님의 방명록</h1>
            {user.length ? (<ul>{user.map((element)=>{
                 return(<li>{<Link to = {`/articles/${element.id}`}>{element.title}</Link>}</li>);
                })} 
                </ul>
                ):(<p>방명록이 없습니다.</p>)}
            <button onClick={() => { navigate(`/${ownerId}/create`); }}>방명록 남기기</button >
        </>
    );
};

export default Home;