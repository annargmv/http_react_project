import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import axios from 'axios';
import Posts from './Posts/Posts';
//import NewPost from '../Blog/NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
import './Blog.css';

const asyncComp = asyncComponent(() => import('../Blog/NewPost/NewPost'));

class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav> 
                        <ul>
                            <li>
                                <NavLink 
                                to="/posts" 
                                exact 
                                activeClassName="my-active"
                                activeStyle={{
                                    color: 'blue',
                                    textDecoration: 'underline'
                                }}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/> */}
                <Switch>
                    <Route path="/new-post" component={asyncComp} />
                    <Route path="/posts" component={Posts}/>
                    {/* <Route render={() => <h1>Not Found</h1>} for nor found pages*/} 
                    <Redirect from='/' to="posts" />
                </Switch>
            </div>
        );
    }
}

export default Blog;