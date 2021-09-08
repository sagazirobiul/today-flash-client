import React from 'react';
import { Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './NewsCart.css'

const NewsCart = ({news:{name, description, category, img, author, _id}}) => {
    let shortDes = description.substring(0, 130)

    return (
        <Col md={6} className="">
            <div className="newsCat">
                <h4 className="text-center">{name}</h4>
                <div className="img-box text-center mb-1">
                    <img src={img} alt="" />
                </div>
                <span className="fw-bold my-1">Author: <span className="text-info">{author}</span></span>
                <p className="my-1">{shortDes}...</p>
                <div className="text-center mt-2">
                    <Button as={Link} to={`/details/${_id}}`}>View More</Button>
                </div>
            </div>
        </Col>
    );
};

export default NewsCart;