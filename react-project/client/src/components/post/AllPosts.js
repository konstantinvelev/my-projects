import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import * as postService from '../../services/postService';
import { PostCard } from "./PostCard";

export function AllPosts() {
    const navigate = useNavigate();
    let [posts, setPosts] = useState([{}]);

    useEffect(() => {
        postService.all()
            .then((data) => {
                if (!!data) {
                    setPosts(Object.values(data));
                } else {
                    navigate('/login');
                }
            })
            .catch(err => { });
    }, [posts]);

    let postsView = (
        posts?.map((post, i) => (
            <PostCard key={i} post={post} />
        ))
    )

    let noPostsView = (
        <>
            <div className="no-posts">
                <div className="no-posts-img">
                    <img src="./img/animal.jpg" alt="image_nature_3" />
                </div>
                <p className="no-offer">There are no posts yet...</p>
            </div>
        </>
    );

    return (
        <div id="catalog">
            <h1>All posts</h1>
            <div className="band">
                {
                    (posts?.length > 0)
                        ? postsView
                        : noPostsView
                }
            </div>
        </div>
    )
}
