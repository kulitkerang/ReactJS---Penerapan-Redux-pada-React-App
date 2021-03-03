import React, { Component, Fragment } from 'react';
import CardProduct from '../Product/CardProduct/CardProduct';
import './Product.css'
import {connect} from "react-redux";

class Product extends Component{
    // state = {
    //     order: 4
    // }

    // HandleCounterChange = (newValue) => {
    //     this.setState({
    //         order : newValue
    //     })
    // } 

    render(){
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://info.etanee.id/wp-content/uploads/2020/06/Logo-etanee-LEAF-GREEN-500px.png" alt="logo"/>
                    </div>
                    <div className="troley">
                        <img src="https://static.thenounproject.com/png/1138102-200.png" alt="troley"/>
                        <div className="count">{this.props.order}</div>
                    </div>
                    
                </div>
                <CardProduct />
                </Fragment>
                )
            }
        }

const mapStateToProps = (state) => {
    return {
        order : state.totalOrder
    }
}

export default connect(mapStateToProps)(Product);