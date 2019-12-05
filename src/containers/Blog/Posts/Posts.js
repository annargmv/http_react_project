import React, {Component} from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css'

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    } 

    componentDidMount() {
        axios.get('/posts')
        .then(response => {
            const posts = response.data.slice(0, 4);
            const updatePosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Anna'
                }
            })
            this.setState({posts: updatePosts});
        })
        .catch(error => {
            console.log(error);
        });
    }

    postSelectedHandler = (id) => {
        this.setState({postSelectedId: id})

    }
    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />;
            });
        }
        return (
            <section className="Posts">
                {posts}
            </section>
        );

    }
}

export default Posts;

