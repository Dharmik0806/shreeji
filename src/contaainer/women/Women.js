import React from 'react';
import Slider from 'react-slick';

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <a onClick={onClick} className="leftArrow"><i class="fa fa-circle-left"></i></a>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <a onClick={onClick} className="rightArrow"><i class="fa fa-circle-right"></i></a>
    );
}
function Women(props) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SamplePrevArrow />,
        prevArrow: <SampleNextArrow />,
        variableWidth: true
    };
    return (
        <>
            <section className="section" id="women">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h2>Women's Latest</h2>
                                <span>Details to details is what makes Hexashop different from the other themes.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Slider {...settings}>
                        <div className="item">
                            <div className="thumb">
                                <div className="hover-content">
                                    <ul>
                                        <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                                        <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                                        <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
                                    </ul>
                                </div>
                                <img src="assets/images/women-01.jpg" alt />
                            </div>
                            <div className="down-content">
                                <h4>New Green Jacket</h4>
                                <span>$75.00</span>
                                <ul className="stars">
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="item">
                            <div className="thumb">
                                <div className="hover-content">
                                    <ul>
                                        <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                                        <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                                        <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
                                    </ul>
                                </div>
                                <img src="assets/images/women-02.jpg" alt />
                            </div>
                            <div className="down-content">
                                <h4>Classic Dress</h4>
                                <span>$45.00</span>
                                <ul className="stars">
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="item">
                            <div className="thumb">
                                <div className="hover-content">
                                    <ul>
                                        <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                                        <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                                        <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
                                    </ul>
                                </div>
                                <img src="assets/images/women-03.jpg" alt />
                            </div>
                            <div className="down-content">
                                <h4>Spring Collection</h4>
                                <span>$130.00</span>
                                <ul className="stars">
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="item">
                            <div className="thumb">
                                <div className="hover-content">
                                    <ul>
                                        <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                                        <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                                        <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
                                    </ul>
                                </div>
                                <img src="assets/images/women-01.jpg" alt />
                            </div>
                            <div className="down-content">
                                <h4>Classic Spring</h4>
                                <span>$120.00</span>
                                <ul className="stars">
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                </ul>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    );
}

export default Women;