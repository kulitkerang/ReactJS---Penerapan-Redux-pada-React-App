import React, {Component} from 'react';
import Counter from './Counter';

class CardProduct extends Component{
    render(){
        return(
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://w7.pngwing.com/pngs/535/669/png-transparent-dressed-chicken-chicken-meat-buffalo-wing-chicken-leg-raw-foodism-chicken-meat-file-food-beef-hand.png" alt="daging ayam"/>
                        <p className="product-tittle">Daging Ayam Berbumbu Rasa Original Plus Tepung Crispy 1-10pcs</p>
                        <p className="product-price">Rp.410.000</p>
                    </div>
                    <Counter />
                </div>
                )
            }
        }

export default CardProduct;