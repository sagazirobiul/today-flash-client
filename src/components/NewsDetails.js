import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const NewsDetails = () => {
    const {id} = useParams()
    const [news, setNews] = useState({})

    const {name, description, category, img, author} = news || {}

    useEffect(() => {
        axios.get(`http://localhost:5050/newsDetails/${id}`)
        .then(res => console.log(res))
    },[id])

    return (
        <div className="container">
            <div className="col-md-10 mx-auto">
                <h1>{name}</h1>
                <img className="w-100" src={img} alt="" />
                <span className="fw-bold my-1">Author: <span className="text-info">{author}</span></span>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default NewsDetails;