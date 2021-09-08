import React from 'react';
import './Header.css'
import { Carousel } from 'react-bootstrap';
import s1 from '../../images/s1.png'
import s2 from '../../images/s2.gif'
import s4 from '../../images/bb1.jpg'

const Header = () => {
    const slideInfo = [
        {img: s4},
        {img: s2},
        {img: s1},
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