import { Link } from 'react-router-dom';

export function PostCard({
    post
}) {
    return (
        <div className="flip flip-vertical">
            <div className="front">
                <img src={post.imageUrl} alt="image_nature_1" />
                {/* <h1 className="text-shadow">Keyword: {post.keyword}</h1> */}
            </div>
            <div className="back">
                <h2>{post.title}</h2>
                <p>Description: {post.description}</p>
                <Link to={`/details/${post._id}`} className="details">Details</Link>
            </div>
        </div>
    )
}

