
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { fetchBlog } from "../actions/blogActions";
import BlogDetail from "../components/blogdetail"

// support routing

function Blog(props) {
    const [selectedBlog] = useState(props.selectedBlog);
    const params = useParams();
    const blogId = params.blogId;
    console.log(blogId);
    console.log(selectedBlog);
    const dispatch = useDispatch();
    if (selectedBlog == null) {
        dispatch(fetchBlog(blogId));
    }

    return (<BlogDetail blogId={blogId} />)
}

export default Blog;
