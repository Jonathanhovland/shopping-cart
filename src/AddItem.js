import React from 'react';

const AddItem = (props) => {
    return(
            <form className="new product">
                <div className="container">
                    <label htmlFor="quantity">Quantity</label>
                    <input type="number" min="0" className="form-control" id="quantity" required></input>
                    <label htmlFor="products">Products</label>
                <select onChange={props.onChange} className="form-control col-12" >
                    <option value= "" disabled default>Select an Option...</option>
                    {props.products.map(product => {
                    return <option>{product.name}  ${product.priceInCents/100}</option>
                    })}
                </select>
                    <input className="btn btn-primary" type="submit" value="Submit"></input>
                </div>
            </form>
        )
    }

  export default AddItem;


           