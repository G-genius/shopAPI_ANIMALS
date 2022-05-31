import axios from 'axios';
import React, { useEffect, useState } from "react";

function CreateProduct(){
    const [name, setName] = useState('')
    const [count, setCount] = useState(0)

    function nameOnChange(event) {
        setName(event.target.value)
    }

    function countOnChange(event) {
        setCount(event.target.value)
    }

    async function createProduct(){
        if (name && count){
            const product = {
                id: 0,
                name: name,
                count: parseInt(count)
            };
            alert(product.id)
            axios.post(`https://localhost:7082/api/Products`, product)
                .then(res => {
                  console.log(res);
                  console.log(res.data);
                })
        
        }
        else{
            alert("You not input all data")
        }
    }

    return (
        <div>
            <p align="center">Создание продукта</p>
            <input onChange={nameOnChange} placeholder="Введите название"/>
            <input onChange={countOnChange} type="number" placeholder="Введите количество" />
            <button onClick={createProduct}>Подвердить</button>
        </div>
    )
}
export default CreateProduct