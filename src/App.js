import React, { Component } from 'react';
import './App.css'
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItems from './CartItems';
import CartItem from './CartItem';
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
          ]};


    selectChange = (e) => {
        let newProduct = {
            id: this.state.id,
            name: this.state.name,   
            priceInCents: this.state.priceInCents,
            quantity: this.state.quantity
        }
    
        this.setState({cartItemsList:[this.state.cartItemsList.concat(newProduct)]})        
        console.log(e.target.value)

    }

    render() {
        return (
            <div className="App">
                <CartHeader />
                <CartItems cartItems={this.state.cartItemsList}/>
                <AddItem products={this.state.products} onChange={this.selectChange}/>
                <CartFooter copyright="2016"/>
            </div>

        );
    }
} 

export default App;
