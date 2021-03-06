import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Anna',
        submitted: false
    }

    componentDidMount() {
        console.log(this.props);
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            authos: this.state.author
        };

        axios.post('/posts', data)
            .then(response => {
                console.log(response.data);
                // this.setState({submitted: true})
                this.props.history.push('/posts');//allows you to go back in the browser
            })
    } 

    render () {
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to="/posts"/>;
        }
        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Anna</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;