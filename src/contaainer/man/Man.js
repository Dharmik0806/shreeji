import React from 'react';
import Slider from 'react-slick';

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

function Man(props) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SamplePrevArrow />,
        prevArrow: <SamplePrevArrow />,
        variableWidth: true
    };
    return (
        <>
            <section className="section" id="women">
                <div className="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-heading">
                                <h2>Men's Latest</h2>
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
                                <img src="assets/images/men-01.jpg" alt />
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
                        <div className="item">
                            <div className="thumb">
                                <div className="hover-content">
                                    <ul>
                                        <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                                        <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                                        <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
                                    </ul>
                                </div>
                                <img src="assets/images/men-02.jpg" alt />
                            </div>
                            <div className="down-content">
                                <h4>Air Force 1 X</h4>
                                <span>$90.00</span>
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
                                <img src="assets/images/men-03.jpg" alt />
                            </div>
                            <div className="down-content">
                                <h4>Love Nana ‘20</h4>
                                <span>$150.00</span>
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
                                <img src="assets/images/men-01.jpg" alt />
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

export default Man;