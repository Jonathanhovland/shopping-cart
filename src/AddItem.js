import React from 'react';

const AddItem = (props) => {
    return(
            <form className="new product">
                <div className="container">
                    <label htmlFor="quantity">Quantity</label>
                    <input onChange={props.newQuantity} type="number" min="0" className="form-control" id="quantity" required></input>
                    <label htmlFor="products">Products</label>
                <select onChange={props.onChange} className="form-control col-12" >
                    <option value= "" disabled default>Select an Option...</option>
                    {props.products.map((product, i) => {
                    return <option key={i} value={product.name}>{product.name}  ${product.priceInCents/100}</option>
                    })}
                </select>
                    <button onClick={props.onSubmit} className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
  export default AddItem;


           