import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"

import * as postService from '../../services/postService';
import * as authService from '../../services/authServices';
import DeleteConformation from '../common/DeleteConformation/DeleteConformation';
import { useAuthContext } from '../../hooks/useAuthContext';

export function Details() {
    const [post, setPost] = useState([]);
    const [showConformation, setShowConformation] = useState(false);
    let navigate = useNavigate();
    let { postId } = useParams();
    let { user } = useAuthContext();

    function getUser(userId){
        authService.getUserById(userId).then((res) => {return res});
    }


    useEffect(() => {
        postService.getById(postId)
            .then((data) => {
                if (data?.message !== undefined && data?.message == '') {
                    navigate(`*`)
                }
                else {
                    formatDate(data);
                    getUser(data.user);
                    setPost(data);
                }
            })
    }, [])

    function formatDate(data) {
        let { date } = data;
        var newDate = new Date(date);
        var day = newDate.getDate(); //Date of the month: 2 in our example
        var month = newDate.getMonth(); //Month of the Year: 0-based index, so 1 in our example
        var year = newDate.getFullYear()
        data.date = `${day}.${month}.${year}`;
    }

    function deleteClickHandler() {
        setShowConformation(true);
    }

    function deletePostHandler() {
        postService.remove(post._id)
            .then(res => {
                navigate('/all')
            })
    }

    function likeClickHandler() {
        postService.like(post._id, user._id)
            .then((data) => {
                if (data?.message !== undefined && data?.message == '') {
                    navigate(`*`)
                }
                else {
                    let { likes } = data;
                    setPost({ ...post, likes });
                    navigate(`/details/${data._id}`)
                }
            })
    }

    let peopleWhoLiked = (
        post?.likes?.map((user) => (
            <p key={user._id}>{`${user.firstName} ${user.lastName}`}</p>
        ))
    )

    let likeLogic = (
        //post.likes?.map(liked => {
            // if (liked._id === user._id && user._id !== undefined) {
            //     return <p className="thanks-for-vote">Thanks For Voting</p>
            // }
            // else {
                // }
                
            //})
            <button onClick={likeClickHandler} className="vote-up">Like</button>
    )

    return (
        <>
            {showConformation
                ? <DeleteConformation onAccept={deletePostHandler} onCancle={() => setShowConformation(false)} />
                : ''
            }
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
                                    <p className="card-location">Date: {post.date}</p>
                                </div>
                                <div className="card_animal">
                                    <p className="disc">Description: {post.description}</p>
                                </div>
                                <div className="social-btn">
                                    {
                                        post.user?._id === user._id
                                            ? <>
                                                <Link to={"/edit/" + post._id} className="edit-btn">Edit</Link>
                                                <button onClick={deleteClickHandler} className="del-btn">Delete</button>
                                            </>
                                            :
                                            <>
                                                {
                                                    likeLogic
                                                }
                                            </>
                                    }
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
                                {
                                    post.likes?.length > 0
                                        ? peopleWhoLiked
                                        : <p className="disc">People who voted for the post - No one has voted yet.</p>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}