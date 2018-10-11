import React, { Component } from 'react';
import './App.css'
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItems from './CartItems';
import AddItem from './AddItem';

class App extends Component{ 

    state = {
        cartItemsList: [
            { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
            { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
            { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 }
            ],
         products: [
            { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
            { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
            { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
            { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
            { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
            { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
            { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
            { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
            { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
            ],
            id: null,
            name: '',
            newProduct: {},
            Quantity: null
        };

    onSubmit = (e) => {
        e.preventDefault()
        let newProduct = {
            id: this.state.id,
            product: this.state.newProduct,
            quantity: this.state.Quantity
        }
        this.setState({
            cartItemsList: this.state.cartItemsList.concat(newProduct)
        })
    }

    selectedQuantity = (e) => {
        this.setState({
            Quantity: e.target.value
        })
    }
    
    selectChange = (e) => {
            let selectedProduct = this.state.products.filter(product => {
                return product.name === (e.target.value)
            })   
            this.setState({
                newProduct: selectedProduct[0], 
                id: this.state.cartItemsList.length+1
            })
    }    
    
    
    render() {

        const total = this.state.cartItemsList.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.product.priceInCents
        },0)
        
        return (
            <div className="App">
                <CartHeader />
                <CartItems cartItems={this.state.cartItemsList}/>
                <h4>Total ${total/100}</h4>
                <AddItem products={this.state.products} onChange={this.selectChange} onSubmit={this.onSubmit} newQuantity={this.selectedQuantity}/>
                <CartFooter copyright="2016"/>
            </div>

        );
    }
} 

export default App;
