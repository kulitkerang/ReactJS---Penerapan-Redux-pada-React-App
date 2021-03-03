import React from 'react';

const Post = (props) => {
    return(
        <div className="post">
            <div className="img-thumb">
                <img src="https://placeimg.com/200/150/tech" alt=""/>
            </div>
            <div className="content">
                <p className="title" onClick={() => props.goDetail(props.data.id)}>{props.data.title}</p>
                <p className="decs">{props.data.body}</p>
                <button className="btnUpdate" onClick={() => props.update(props.data)}>Update</button>
                <button className="btnRemove" onClick={() => props.remove(props.data.id)}>Remove</button>
            </div>
        </div>
    )
}

export default Post;