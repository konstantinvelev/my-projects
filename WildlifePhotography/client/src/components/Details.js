import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"

import * as postService from '../services/postService';

export function Details() {

    let { postId } = useParams();
    let [post, setPost] = useState([]);

    useEffect(() => {
        postService.getById(postId)
            .then((data) => {
                if (!!data) {
                formatCreatedAt(data);
                setPost(data);
                }
            })
            .catch(err => {});

    }, [postId])

    function formatCreatedAt(data) {
        let { created_at } = data;
        var date = new Date(created_at );
        var day = date.getDate(); //Date of the month: 2 in our example
        var month = date.getMonth(); //Month of the Year: 0-based index, so 1 in our example
        var year = date.getFullYear()
        data.created_at = `${day}.${month}.${year}`;
    }


    return (
        <div>
            <section id="details-page">
                <div className="main_card">
                    <div className="card_left">
                        <div className="card_datails">
                            <h1>Title: {post.title}</h1>
                            <h3>Created by an author: {`${post.user?.firstName} ${post.user?.lastName}`}</h3>
                            <div className="card_animal">
                                <p className="card-keyword">Keyword: {post.keyword}</p>
                                <p className="card-location">Location: {post.location}</p>
                                <p className="card-date">Date: {post.created_at}</p>
                            </div>
                            <p className="disc">Description: {post.description}</p>
                            <div className="social-btn">
                                <Link to={"/edit/" + post._id} className="edit-btn">Edit</Link>
                                <Link to={"/delete/" + post._id} className="del-btn">Delete</Link>
                                <Link to={"/like/" + post._id} className="vote-up">Like</Link>
                                <p className="thanks-for-vote">Thanks For Voting</p>
                            </div>
                        </div>
                    </div>
                    <div className="card_right">
                    <img src={post.imageUrl} alt="imageUrl" />
                    </div>
                </div>
            </section>
            <section id="votes">
                <div className="vote-info">
                    <div className="card_left">
                        <div className="card_datails">
                            <h1>Votes</h1>
                            <div className="card_vote">
                                <p className="PV">Total rating of votes: {post.likes?.length}</p>
                            </div>
                            <p className="disc">People who voted for the post - No one has voted yet.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}