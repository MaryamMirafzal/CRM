import React from 'react'
import FormInput from './FormInput';
import index from '../../pages/add-customer';

function ItemList({form , setForm}) {
    const { products } = form;

    const addHandler = ()=>{
        setForm({
            ...form,
            products:[...products, {name:"", price:"", qty:""}]
        })
        console.log( products );
    }
    const changeHandler =(e , index)=>{
        const { name , value } = e.target;
        const newProducts = [...products]
        newProducts[index][name] = value;
        setForm({...form, products: newProducts})
    }
    const deleteHandler =()=>{
        const newProducts = [...products]
        newProducts.splice(index, 1)
        setForm({...form, products: newProducts})

    }
  return (
    <div className="item-list">
        <p>Purchased products</p>
        {products.map((product, index) => (
            <div className="form-input__list" key={index}>
                <FormInput 
                   name="name" 
                   lable="Product Name" 
                   type="text" 
                   value={product.name} 
                   onChange={(e)=> changeHandler(e, index)}/>
                <div>
                  <FormInput 
                    name="price" 
                    lable="Price" 
                    type="text" 
                    value={product.price} 
                    onChange={(e)=> changeHandler(e, index)}/>
                  <FormInput 
                    name="qty" 
                    lable="QTY" 
                    type="number" 
                    value={product.qty} 
                    onChange={(e)=> changeHandler(e, index)}/>
                </div>
                <button onClick={deleteHandler}>Remove</button>
            </div>
        ))}
        <button onClick={addHandler} >Add Item</button>
    </div>
  )
}

export default ItemList