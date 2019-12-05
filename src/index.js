import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axios.interceptors.request.use(request => {
    console.log(request);
    return request; //othervise we qre blocking the request
}, error => {
    console.log(error);
    return Promise.reject(error);
})


axios.interceptors.response.use(response => {
    console.log(response);
    return response; //othervise we qre blocking the request
}, error => {
    console.log(error);
    return Promise.reject(error);
})

//removing interceptors
let myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
