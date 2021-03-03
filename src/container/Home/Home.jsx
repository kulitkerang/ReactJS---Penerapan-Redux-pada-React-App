//library
import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router , Route , Link} from 'react-router-dom';

//pages
import Blogpost from '../pages/Blogpost/Blogpost';
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import DetailPost from '../pages/Blogpost/DetailPost/DetaiPost';

//style
import './Home.css';

class Home extends Component {
    render(){
        return(
            <Router>
                <Fragment>
                    <div>
                        <div className="navigation">
                            <Link to="/">Blogpost</Link>
                            <Link to="/product">Product</Link>
                            <Link to="/lifecycle">LifeCycle</Link>
                        </div>
                    </div>
                    <Route path="/" exact component={Blogpost}></Route>
                    <Route path="/detail-post/:postID" component={DetailPost}></Route>
                    <Route path="/product" component={Product}></Route>
                    <Route path="/lifecycle" component={LifeCycleComp}></Route>
                </Fragment>
            </Router>
        )
    }
}



export default Home;