import React, { Component, Fragment } from 'react';
import Post from '../../../component/Post/Post';
import './Blogpost.css';
import axios from 'axios';
import {connect} from "react-redux";

class Blogpost extends Component {
    state = {
        post: [],
        formBlogpost: {
            userId : 1,
            id : 1,
            title : '',
            body : ''
        },
        isUpdate: false
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((result)=>{
            this.setState({
                post: result.data
            })
        })
    }

    postDatatoAPI = () => {
        axios.post(`http://localhost:3004/posts`, this.state.formBlogpost).then((result) => {
            console.log(result);
            this.getPostAPI()
        }, (err) => {
            console.log('error:', err)
        })
    }

    putDatatoAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogpost.id}`, this.state.formBlogpost).then((result)=>{
            console.log(result);
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogpost: {
                    userId : 1,
                    id : 1,
                    title : '',
                    body : ''
                },
            })
        })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`).then((result)=>{
            this.getPostAPI()
        })
    }

    handleUpdate = (data) => {
        // axios.put(`http://localhost:3004/posts/${data}`, this.state.formBlogpost).then((result)=>{
        //     console.log(result);
        //     this.getPostAPI();
        // })
        console.log(data);
        this.setState({
            formBlogpost: data,
            isUpdate: true
        })
    }

    handleFormChange = (event) => {
        let formBlogpostNew = {...this.state.formBlogpost};
        let timestamp = new Date().getTime();
        if(!this.state.isUpdate){
            formBlogpostNew['id'] = timestamp;
        }
        formBlogpostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogpost:formBlogpostNew
        })
    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDatatoAPI();
        }else{
            this.postDatatoAPI();
        }
        this.setState({
            formBlogpost:{
                title:'',
                body:''
            }
        })
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
    }

    componentDidMount(){
        this.getPostAPI();
    }

    render(){
        return(
            <Fragment>
                <p>Halaman Blogpost</p>  
                <hr/>
                <p className="section-title">Blogpost</p>
                <hr/>
                <p>Total Product : {this.props.order}</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="add title" onChange={this.handleFormChange} value={this.state.formBlogpost.title}/>
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" placeholder="add Content" cols="30" rows="10" onChange={this.handleFormChange} value={this.state.formBlogpost.body}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                       return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
                    })
                }
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order : state.totalOrder
    }
}

export default connect(mapStateToProps)(Blogpost);