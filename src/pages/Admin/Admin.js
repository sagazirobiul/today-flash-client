import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import AdminForm from '../../components/AdminForm';
import NewsAddForm from '../../components/NewsAddForm';
import './Admin.css'

const Admin = () => {
    return (
        <section className="admin">
            <Row className="mx-auto adminRow">
                <Col md={2} className="adminMenuBar">
                    <h2><Link to="/"><span className="navHighlight">Today Flash</span></Link></h2>
                    <div className="adminMenu">
                        <Link to="/admin">Add News</Link>
                        <Link to="/admin/addAdmin">Add Admin</Link>
                    </div>
                </Col>
                <Col md={10}>
                    <Route exact path="/admin">
                        <NewsAddForm/>
                    </Route>
                    <Route exact path="/admin/addAdmin">
                        <AdminForm/>
                    </Route>
                </Col>
            </Row>
        </section>
    );
};

export default Admin;