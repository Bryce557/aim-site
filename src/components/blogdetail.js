import React, { Component } from 'react';
import { fetchBlogPost } from "../actions/blogActions";
import { setBlogPost } from "../actionjs/blogActions";
import {connect} from 'react-redux';
import {Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs'
import { Image } from 'react-bootstrap';

class BlogDetail extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        if (this.props.selectedBlogPost == null) {
            dispatch(fetchBlogPost(this.props.blogId));
        }
    }

    render() {
        const DetailInfo = () => {
            if (!this.props.selectedBlogPost) {
                return <div>Loading....</div>
            }

            return (
                <Card>
                    <Card.Header>Blog Post</Card.Header>
                    <Card.Title>
                        <div className="">this.props.selectedBlogPost.title</div>
                    </Card.Title>
                    <Card.Body>
                        <div className="">this.props.selectedBlogPost.body</div>
                    </Card.Body>
                    <Card.Footer>
                        <div>this.props.selectedBlogPost.author</div>
                    </Card.Footer>
                </Card>
            )
        }

        return (
            <DetailInfo />
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedBlogPost: state.blog.selectedBlogPost
    }
}

export default connect(mapStateToProps)(BlogDetail);


/*
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