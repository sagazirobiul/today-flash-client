import React from 'react';
import './Header.css'
import { Carousel } from 'react-bootstrap';
import s1 from '../../images/s1.gif'
import s2 from '../../images/s2.gif'
import s3 from '../../images/s3.gif'

const Header = () => {
    const slideInfo = [
        {img: s1},
        {img: s2},
        {img: s3}
    ]
    return (
        <div>
            <Carousel>
                {
                    slideInfo.map(({img}) => {
                        return (
                            <Carousel.Item>
                                <img
                                className="d-block slideImg"
                                src={`${img}`}
                                alt="slide"
                                />
                                {/* <Carousel.Caption>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    );
};

export default Header;