import React, { Component } from 'react'
import Faker from 'faker';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../slices/productSlice';
import { SetProducts, GetProducts } from './StateController';
import { Product } from './Product';


const apiURL = 'http://localhost:4000/shopping';
let loadComplete = false;
export default class ProductList extends Component {

    async componentDidMount()
    {
        // const response = await fetch(apiURL)
        //   .then((response) => response.json())
        //   .then((data) => {
        //     this.setState({data});
        //   });
        //   console.log(this.state.data)
        let data = this.getFakerData();
        loadComplete = true;
        //this.setState({data});
        
        // useDispatch(add(data));
    }

    getFakerData(){
        const total=23;
        let counter;
        const response = [];
    
        for(counter = 0; counter<total;counter++)
        {
          response[counter] = {}
          response[counter]["_id"] = counter.toString();
          response[counter]["product_name"]= Faker.commerce.productName();
          response[counter]["product_description"]= Faker.lorem.sentence();
          response[counter]["product_price"]= Faker.commerce.price();
          response[counter]["product_quantity"] = Faker.random.number();
          response[counter]["product_images"]= this.imageArray();
        }
        return response;
    
      }

    imageArray()
    {
        let imageArray = [];
        let range = Math.floor(Math.random() * 5) + 3;
        for(let i =0; i<=range;i++)
        {
          imageArray.push(Faker.internet.avatar());
        }
    
        return imageArray;
    }


    render() {
        return (
            <React.Fragment>
                <h1> This is the productPage</h1>
                
                {loadComplete
                    ? <div className='row'>
                        <SetProducts payload = { this.getFakerData() } />
                        <GetProducts />
                       </div>
                    : <div> Loading...</div>
                }
            </React.Fragment>
        )
    }
}


