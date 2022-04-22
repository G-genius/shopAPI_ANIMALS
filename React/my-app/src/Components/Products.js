import React from 'react';
import axios from 'axios';

export default class Products extends React.Component {
    state = {
        products : []
    }
    componentDidMount() {
        axios.get(`https://localhost:7082/api/Products`)
            .then(res => {
                const products = res.data;
                this.setState({ products });
            })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Продукты</h1>
                    <p>{this.state.products.map(products => <p>{products.name}</p>)}</p>
                </div>
            </div>
        )
    }
}