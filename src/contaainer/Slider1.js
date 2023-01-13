import React from 'react';
import Slider from 'react-slick';

function Slider1(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3   
    };
    return (
        <div className='container'>
        <Slider {...settings}>
            
            <div>
                <div>
                    <img src="assets/images/men-01.jpg" alt='men_1' />
                </div>

                <div className="down-content">
                    <h4>Classic Spring</h4>
                    <span>$120.00</span>
                    <ul className="stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                    </ul>
                </div>
            </div>

            <div>
                <div>
                    <img src="assets/images/men-02.jpg" alt='men_1' />
                </div>

                <div className="down-content">
                    <h4>Classic Spring</h4>
                    <span>$120.00</span>
                    <ul className="stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                    </ul>
                </div>
            </div>

            <div>
                <div>
                    <img src="assets/images/men-03.jpg" alt='men_1' />
                </div>

                <div className="down-content">
                    <h4>Classic Spring</h4>
                    <span>$120.00</span>
                    <ul className="stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                    </ul>
                </div>
            </div>

            <div>
                <div>
                    <img src="assets/images/men-02.jpg" alt='men_1' />
                </div>

                <div className="down-content">
                    <h4>Classic Spring</h4>
                    <span>$120.00</span>
                    <ul className="stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                    </ul>
                </div>
            </div>

            <div>
                <div>
                    <img src="assets/images/men-03.jpg" alt='men_1' />
                </div>

                <div className="down-content">
                    <h4>Classic Spring</h4>
                    <span>$120.00</span>
                    <ul className="stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                    </ul>
                </div>
            </div>
            
        </Slider>
        </div>
    );
}

export default Slider1;