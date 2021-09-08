import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const NewsDetails = () => {
    const {id} = useParams()
    const [news, setNews] = useState({})

    const {name, description, category, img, author} = news || {}

    useEffect(() => {
        axios.get(`https://today-flash.herokuapp.com/newsDetails?id=${id}`)
        .then(res => setNews(res.data[0]))
    },[id])

    return (
        <div className="container">
            <div className="col-md-10 mx-auto">
                <h1 className="detTitle">{name}</h1>
                <div className="text-center">
                    <img style={{height:'300px'}} src={img} alt="" />
                </div>
                <p className="fw-bold my-1">Author: <span className="text-info">{author}</span></p>
                <p className="des">{description}</p>
            </div>
            <p className="text-center fw-bold">. . .</p>
        </div>
    );
};

export default NewsDetails;