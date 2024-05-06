import actionTypes from '../constants/actionTypes';
import blogReducer from '../reducers/blogReducer';
const env = process.env;

function blogPostsFetched(blogPosts) {
    console.log(blogPosts);
    return {
        type: actionTypes.FETCH_BLOG_POSTS,
        blogPosts: blogPosts
    }
}

function blogPostFetched(blogPost) {
    return {
        type: actionTypes.FETCH_BLOG_POST,
        selectedBlogPost: blogPost
    }
}

function blogPostSet(blogPost) {
    return {
        type: actionTypes.SET_BLOG_POST,
        selectedBlogPost: blogPost
    }
}

export function setBlogPost(blogPost) {
    return dispatch => {
        dispatch(blogPostSet(blogPost));
    }
}

export function fetchBlogPost(blogId) {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/blogs/${blogId}?replys=true`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        }).then((res) => {
            dispatch(blogPostFetched(res));
        }).catch((e) => console.log(e));
    }
}

export function fetchBlogPosts() {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/blogs`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        }).then((res) => {
            dispatch(blogPostsFetched(res));
        }).catch((e) => console.log(e));
    }
}