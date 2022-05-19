import axios from 'axios';
import React, { createElement, useEffect, useState } from "react";
import CatalogItem from './CatalogItem';

function Catalog() {
    const [categories, setCategory] = useState()
    const [products, setProducts] = useState()
    const [idCategory, setIdCategory] = useState(1)

    useEffect(() => {
        axios.get(`https://localhost:7082/api/Categories`)
            .then(res => {
                const category = res.data;
                setCategory(category)
            })
        axios.get(`https://localhost:7082/api/Products`)
            .then(res => {
                const products2 = res.data;
                setProducts(products2)
            })
    }, [])

    

    let view = []
    let viewDetails = []

    function updateViewDetails(num) {
        //alert("Вкладка должна была переключится, но то не работает")
        setIdCategory(num)
        console.log(idCategory)
    }

    async function getCategories() {
        if (categories != undefined) {
            view = []

            for (let i = 0; i < categories.length; i++) {
                let category = categories[i]
                view.push(<li className="catalog__tab" onClick={() => { updateViewDetails(i + 1) }}><div>{category.name}</div></li>)
            }
            
        }
    }

    getCategories()

    async function setViewDetails() {
        viewDetails = []
        for (let i = 0; i < products.length; i++) {
            let product = products[i]
            if (idCategory == product.idCategory) {
                viewDetails.push(<CatalogItem idCategory={idCategory} objectProduct={product} />)
            }
        }
        
    }
    setViewDetails()

    useEffect(() => {
        setViewDetails()
    }, [idCategory])

    if (!categories && !products) return null;

    return (<section class="catalog">
        <div class="container">
            < h2 className="title" id="title" > Каталог Товаров для животных</h2 >
            <h2 className="title title_2">Товары для кошек</h2>
            <ul className="catalog__tabs">
                {view}
            </ul>

            <div className="catalog__content catalog__content_active">

                {viewDetails}

            </div>
        </div>
    </section>)
}

export default Catalog