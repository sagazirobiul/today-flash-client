import React from 'react';
import {Col, Row} from 'react-bootstrap';
import FooterCol from './FooterCol';
import './Footer.css'

const Footer = () => {
    const usefulLink = [
        {name: 'Home', id: 1},
        {name: 'About us', id: 2},
        {name: 'Newses', id: 3},
        {name: 'Journalist', id: 4},
        {name: 'Blog', id: 5}
    ] 

    const category = [
        {name: 'Environment', id: 6},
        {name: 'Fashion', id: 7},
        {name: 'Food', id: 8},
        {name: 'LifeStyle', id: 9},
        {name: 'Music', id: 10},
        {name: 'Technology', id: 11},
    ]

    const otherLinks = [
        {name: 'FAQ', id: 12},
        {name: 'Portfolio', id: 13},
        {name: 'Terms & Conditions', id: 14},
        {name: 'Support', id: 15},
        {name: 'Privacy Policy', id: 16},
    ]

    return (
        <section class='row footer w-100'>
            <Row className="col-md-10 mx-auto">
                <Col md={6} lg={3} className="fAboutUs">
                    <h5>ABOUT US</h5>
                    <p className="aboutUsDes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptate quod facere quas rem quaerat.</p>
                </Col>
                <FooterCol key="2" menuItems={usefulLink} title="USEFUL LINK"/>
                <FooterCol key="3" menuItems={category} title="CATEGORY"/>
                <FooterCol key="4" menuItems={otherLinks} title="OTHER LINKS"/>
            </Row>
            <p className="copyRight">Copyright &copy; 2021 Today Flash All rights reserved.</p>
        </section>
    );
};

export default Footer;