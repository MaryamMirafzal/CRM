
function ItemList({form, setForm}) {
    const {products} = form;

    const addHandler = ()=>{
        setForm({
            ...form,
            products: [...products, {name:"", price:"", qty:""}]
        });
        console.log(products);
    }
  return (
    <div className="itme-list">
        <p>Purchased products</p>
        {products.map(product => (
            
        ))}
        <button onClick={addHandler}>Add Item</button>
    </div>
  )
}

export default ItemList