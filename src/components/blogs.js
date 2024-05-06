
import React, { Component } from 'react';
import { fetchBlogPosts } from "../actions/blogActions";
import { setBlogPost } from "../actions/blogActions";
import {connect} from 'react-redux';
import {Image, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { CardGroup, Button, Card } from 'react-bootstrap';
import '../style/blogs.css'
import { TypeAnimation } from 'react-type-animation';
import '../style/colors.css'
import '../style/fonts.css'


class BlogPosts extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchBlogPosts());
    }

    handleSelect(selectedIndex, e) {
        const {dispatch} = this.props;
        dispatch(setBlogPost(this.props.blogPosts[selectedIndex]));
    }

    handleClick = (blogPost) => {
        const {dispatch} = this.props;
        dispatch(setBlogPost(blogPost));
    }
    
    render() {
        const BlogPostGroup = ({blogPosts}) => {

            if(!blogPosts) {
                return <div>Loading...</div>
            }

            //const blogs = blogPosts.blogs;
            console.log(blogPosts);
            return (
                <div className="blog-style"> 
                    <h1 className="acm-heavier size-xl">
                        <TypeAnimation sequence={["Blog"]} speed={5} className="acm-multi-color"/>
                    </h1> 
                    <div className="card-style">
                    
                            {blogPosts.map((blog) => 
                                <Card text='muted' style={{marginBottom: '5rem'}} bg='dark' key={blog._id}>
                                    <Card.Header className="title-style acm-heavier" >{blog.title}</Card.Header>
                                    <Card.Text className="body-style acm-heavier" >{blog.body}</Card.Text>
                                    <br></br>
                                </Card>
                            )}
                    
                    </div>
                </div> 
            )
        }

        return (
            <BlogPostGroup blogPosts={this.props.blogPosts.blogs} />
        )
    }
}


const mapStateToProps = state => { 
    return {
        blogPosts: state.blog.blogPosts
    }
}

export default connect(mapStateToProps)(BlogPosts);
