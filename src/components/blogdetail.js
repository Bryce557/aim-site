/*
import React, { Component } from 'react';
import { fetchBlogPost } from "../actions/blogActions";
import { setBlogPost } from "../actions/blogActions";
import {connect} from 'react-redux';
import {Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import ResponseForm from './responseForm';

class BlogDetail extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        if (this.props.selectedBlogPost == null) {
            dispatch(fetchBlogPost(this.props.blogId));
            console.log(this.props.blogId);
        }
    }

    render() {
        const DetailInfo = () => {
            if (!this.props.selectedBlogPost) {
                return <div>Loading....</div>
            }
            console.log(this.props.selectedBlogPost);
            return (
                <Card>
                    <Card.Header>Blog Post</Card.Header>
                    <ListGroup>
                        <ListGroupItem>{this.props.selectedBlogPost.title}</ListGroupItem>
                        <ListGroupItem>{this.props.selectedBlogPost.body}</ListGroupItem>
                        <ListGroupItem>{this.props.selectedBlogPost.author}</ListGroupItem>
                        <ListGroupItem>{this.props.selectedBlogPost.date}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        {this.props.selectedBlogPost.replies.map((reply, i) =>
                            <p key={i}>
                                <b>{reply.authorId}</b>&nbsp; {reply.body}
                            </p>
                        )}
                    </Card.Body>
                </Card>
            )
        }

        return (
            <div>
                <DetailInfo />
                <ResponseForm id={this.props.selectedBlogPost}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedBlogPost: state.blog.selectedBlogPost
    }
}

export default connect(mapStateToProps)(BlogDetail);



<ListGroup>
                        <ListGroupItem>{this.props.selectedMovie.title}</ListGroupItem>
                        <ListGroupItem>
                            {this.props.selectedMovie.actors.map((actor, i) =>
                                <p key={i}>
                                    <b>{actor.actorName}</b> {actor.characterName}
                                </p>)}
                        </ListGroupItem>
                        <ListGroupItem><h4><BsStarFill/> {this.props.selectedMovie.avgRating}</h4></ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        {this.props.selectedMovie.reviews.map((review, i) =>
                            <p key={i}>
                                <b>{review.username}</b>&nbsp; {review.review}
                                &nbsp;  <BsStarFill /> {review.rating}
                            </p>
                        )}
                    </Card.Body>

*/