import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as postService from '../../services/postService';

export function MyPosts() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        postService.allByUser()
            .then((data) => {
                 if (!data.message) {
                //     let post = Object.values(data);
                //     let user = authService.getUser();
                        setPosts(Object.values(data));
                } else {
                    navigate('/');
                }
            })
    }, []);

    let myPosts = (
        posts?.map((post, i) => (
            <div key={i}>
                <div className="my-card">
                    <div className="card-header">
                        <img src={post.imageUrl} alt="water_fall" />
                    </div>
                    <div className="card-body">
                        <span className="tag tag-teal">Keyword: {post.keyword}</span>
                        <h4>
                            Title: {post.title}
                        </h4>
                        <div className="user">
                            <img src="https://snworksceo.imgix.net/dtc/3f23c937-0065-4e17-8daa-46449777caed.sized-1000x1000.jpg?w=1000" alt="vote" />
                            <div className="user-info">
                                <h5>Author: {`${post.user.firstName} ${post.user.lastName}`}</h5>
                                <small>Rating of votes: {post.likes.lenght}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        )
    )

    let noMyPosts = (
        <div className="no-posts" >
            <div className="no-posts-img">
                <img src="./img/bear.jpg" alt="image_nature_3" />
            </div>
            <p className="no-offer">There are no own posts yet...</p>
        </div>
    )

    return (
        <div>
            <section id="my-posts">
                <h1>My post.</h1>
                <div className="my-container">
                    {
                        (posts?.length > 0) ? myPosts : noMyPosts
                    }
                </div>
            </section>
        </div>
    )
}
