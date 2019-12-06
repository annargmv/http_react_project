import React, { Component } from 'react';
import axios from '../../../axios';
import { Route , Link } from 'react-router-dom';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
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
            console.log(posts);
        })
        .catch(error => {
            console.log(error);
        });
    }

    postSelectedHandler = (id) => {
        this.setState({postSelectedId: id});

    }
    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Link key={post.id}  to={'/posts/' + post.id}>
                        <Post 
                            title={post.title} 
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)} />
                    </Link> );
                
            });
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} exact component={FullPost}/>
            </div>
        );

    }
}

export default Posts;

