import React, {useEffect, useState} from 'react';
import { Tab, Row, Col, Nav} from 'react-bootstrap'
import NewsCart from '../NewsCart/NewsCart';
import axios from 'axios';
import './Content.css'

const Content = () => {
    const [category, setCategory] = useState({
        category: 'Environment',
        id: '1'
    })
    const [newses, setNewses] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5050/getNews?category=${category.category}`)
        .then(res => setNewses(res.data))
    },[category.category])

    return (
        <section className="content">
            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                <Row className="col-md-10 mx-auto">
                    <Col sm={3}>
                        <div className="category">
                            <h5 className="text-center text-info">CATEGORY</h5>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="1" onClick={() => setCategory({category:'Environment', id: '1'})}>Environment</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="2" onClick={() => setCategory({category:'Fashion', id: '2'})}>Fashion</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="3" onClick={() => setCategory({category:'Food', id: '3'})}>Food</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="4" onClick={() => setCategory({category:'LifeStyle', id: '4'})}>LifeStyle</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5" onClick={() => setCategory({category:'Music', id: '5'})}>Music</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="6" onClick={() => setCategory({category:'Technology', id: '6'})}>Technology</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey={category.id}>
                                <Row>
                                    {
                                    newses?.map((news, index) => <NewsCart news={news} key={index}/>)
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </section>
    );
};

export default Content;