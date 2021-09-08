import React from 'react';
import axios from 'axios';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';


const AdminForm = () => {
    const { register, handleSubmit, formState: { errors }, reset} = useForm();

    const onSubmit = data => {
        const loading = toast.loading('Please wait...')
        axios.post('https://today-flash.herokuapp.com/addAdmin',{email: data.email})
        .then(res => {
            toast.dismiss(loading)
            toast.success('One admin added successfully')
            reset();
        })
        .catch(err => {
            toast.dismiss(loading)
            toast.error(err.message)
        })
    };

    return (
        <div className="px-2">
            <Form onSubmit={handleSubmit(onSubmit)} className="makeAdmin">
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("email", { required: true })}
                                placeholder="email"
                            />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </Form.Group>
                    </Col>
                    <Col>
                        <button type="submit" className="mainBtn adminBtn">Submit</button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default AdminForm;