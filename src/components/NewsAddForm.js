import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios';

const NewsAddForm = () => {
    const { register, handleSubmit, formState: { errors }, reset} = useForm();
    const [imgURL, setImgURL] = useState(null);
    const [isDisabled, setIsDisabled] = useState(false);

    const onSubmit = data => {
        const loading = toast.loading('Please wait...')
        const newsInfo = {
            ...data,
            img: imgURL
        }

        axios.post('https://today-flash.herokuapp.com/addNews', newsInfo)
        .then(res => {
            toast.dismiss(loading)
            toast.success('News added successfully')
            reset();
        })
        .catch(err => {
            toast.dismiss(loading)
            toast.error(err.message)
        })
    };

    const handleImgUpload = event => {
        const loading = toast.loading('Image uploading...');
        setIsDisabled(true)
        const imgData = new FormData();
        imgData.set('key', 'd9c0a9b49980ea0fc85270f5dd823d7d');
        imgData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imgData)
        .then( response => {
            toast.dismiss(loading)
            toast.success('Image successfully uploaded')
            setImgURL(response.data.data.url)
            setIsDisabled(false)
        })
        .catch( error => {
            toast.dismiss(loading)
            toast.error(error.message)
        });
    }

    return (
        <div className="newsAdd mx-2">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col md={6} xs={12}>
                        <Form.Group>
                        <Form.Label style={{ fontWeight: "bold" }}>Title</Form.Label>
                        <Form.Control
                            type="text"
                            {...register("name", { required: true })}
                            placeholder="Title" />
                        </Form.Group>
                    </Col>
                    <Col md={6} xs={12}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ fontWeight: "bold" }}>Author</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Author name"
                                {...register("author", { required: true })}
                                />
                        </Form.Group>
                    </Col>
                    <Col md={6} xs={12}>
                        <Form.Label style={{ fontWeight: "bold" }}>Category</Form.Label>
                        <Form.Select
                        type="text"
                        {...register("category", { required: true })}
                        >
                            <option>Environment</option>
                            <option>Fashion</option>
                            <option>Food</option>
                            <option>LifeStyle</option>
                            <option>Music</option>
                            <option>Technology</option>
                        </Form.Select>
                    </Col>
                    <Col md={6} xs = {12}>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label style={{ fontWeight: "bold" }}>Image</Form.Label>
                            <Form.Control type="file" onChange={handleImgUpload}/>
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label style={{ fontWeight: "bold" }}>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} type="text"
                                placeholder="Description"
                                {...register("description", { required: true })}/>
                        </Form.Group>
                    </Col>
                </Row>
                <div className="text-center">
                <button className="mainBtn mt-4" type="submit" disabled={isDisabled}>Add Now</button>
                </div>
            </Form>
        </div>
    );
};

export default NewsAddForm;