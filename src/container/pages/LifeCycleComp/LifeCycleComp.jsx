import React, { Component, Fragment } from 'react';
import './LifeCycleComp.css';
import {connect} from "react-redux";

class LifeCycleComp extends Component {
    render(){
        return(
            <Fragment>
            <p>Halaman lifecycle</p>  
            <hr/>
            <div className="card"> 
                <button className="btn1">Kulit Kerang</button>
                <button className="btn1">Kulit Baja</button>
                <button className="btn1">Kulit Monyet</button>
            </div>
            <hr/>
            <p>Total Order : {this.props.order}</p>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order : state.totalOrder
    }
}


export default connect(mapStateToProps)(LifeCycleComp);