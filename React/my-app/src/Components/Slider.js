import React, { createElement, useEffect, useState } from "react";
import Slider from "react-slick";
import axios from 'axios';

function Sliders() {
    const settings = {
        //prevArrow: '<button type="button"><img src="../img/slaider/arrows/left-solid.jpg"></button>',
        //nextArrow: '<button type="button"><img src="../img/slaider/arrows/right-solid.jpg"></button>',
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
        ]
    };

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`https://localhost:7082/api/Products`)
            .then(res => {
                const products2 = res.data;
                setProducts(products2)
            })
    }, [])

    let viewDetails = []

    async function setViewDetails() {
        viewDetails = []
        for (let i = 0; i < products.length; i++) {
            let product = products[i]
            viewDetails.push(<div className="element">
                <img src={product.urlImage} alt="" />
            </div>)
        }

    }
    setViewDetails()

    if (!products) return null;

    return (
        <div className="container">
            <Slider {...settings}>
                {/*<div>*/}
                {/*    <img src="/img/asortiment_cats/defence/3.webp" alt="" />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <img src="/img/asortiment_cats/defence/3.webp" alt="" />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <img src="/img/asortiment_cats/defence/3.webp" alt="" />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <img src="/img/asortiment_cats/defence/3.webp" alt="" />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <img src="/img/asortiment_cats/defence/3.webp" alt="" />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <img src="/img/asortiment_cats/defence/3.webp" alt="" />*/}
                {/*</div>*/}
                {viewDetails}
            </Slider>
            <br /><br /><br />
        </div>
    );
}

export default Sliders