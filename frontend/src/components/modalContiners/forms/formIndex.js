import React, { Component } from 'react'
import ProductCard from './productCard';
import Login from './loginCard';
import Register from './registerCard';
import Cart from './cartCard';
import Error from './errorCard';


export class Forms extends Component {
    formSwitch(type){
        switch(type){
            case 'product':
                return <ProductCard product={this.props.info}/>
            case 'login':
                return <Login onSubmit={this.props.onSubmit}/>
            case 'register':
                return <Register onSubmit={this.props.onSubmit}/>

            case 'cart':
                return <Cart onSubmit={this.props.onSubmit}/>
            default:
                return <Error />
        }
    }


    render() {
        return (
            <div>
                {this.formSwitch(this.props.formType)}
            </div>
        )
    }
}

export default Forms

  