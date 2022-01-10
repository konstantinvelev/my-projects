import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as postService from '../../services/postService';

export function Edit() {
    let navigate = useNavigate();
    let { postId } = useParams();
    let [post, setPost] = useState([]);

    useEffect(() => {
        postService.getById(postId)
            .then((data) => {
                formatCreatedAt(data);
                setPost(data);
            });
    }, [postId]);

    function formatCreatedAt(data) {
        let { date } = data;
        var newDate = new Date(date);
        var day = newDate.getDate(); //Date of the month: 2 in our example
        var month = newDate.getMonth(); //Month of the Year: 0-based index, so 1 in our example
        var year = newDate.getFullYear()
        data.date = `${day}.${month}.${year}`;
    }

    function changeStructureOfDate(date) {
        var tokens = date.split('.');
        var day = tokens[0];
        var month = tokens[1];
        var year = tokens[2];
        return `${year}.${month}.${day}`;
    }

    function createSubmitHandler(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let data = {
            title: formData.get('title'),
            keyword: formData.get('keyword'),
            location: formData.get('location'),
            date: new Date(changeStructureOfDate(formData.get('date'))),
            imageUrl: formData.get('imageUrl'),
            description: formData.get('description')
        };

        postService.edit(postId, data)
            .then((data) => {
                if (data?.message !== undefined && data?.message === 'Not allowed!') {
                    navigate(`*`)
                }
                else {
                    setPost(data)
                navigate(`/details/${data._id}`)
                }
            })
            .catch(err => { });
    }

    return (
        <div>
            <section id="edit-page">
                <div className="editSection">
                    <div className="info">
                        <h2>Edit your own post!</h2>
                    </div>
                    <form onSubmit={createSubmitHandler} className="editForm" >
                        <h2>Edit Post</h2>
                        <ul className="noBullet">
                            <li>
                                <label>Title:</label>
                                <input type="text" className="inputFields" id="title" name="title" defaultValue={post.title} />
                            </li>
                            <li>
                                <label>Keyword:</label>
                                <input type="text" className="inputFields" id="keyword" name="keyword" defaultValue={post.keyword} />
                            </li>
                            <li>
                                <label>Location:</label>
                                <input type="text" className="inputFields" id="location" name="location" defaultValue={post.location} />
                            </li>
                            <li>
                                <label>Date of creation:</label>
                                <input type="datetime" className="inputFields" id="date" name="date" defaultValue={post.date} />
                            </li>
                            <li>
                                <label>Wildlife image:</label>
                                <input type="text" className="inputFields" id="image" name="imageUrl" defaultValue={post.imageUrl} />
                            </li>
                            <li>
                                <label>Description:</label>
                                <textarea id="description" className="inputFields" name="description" defaultValue={post.description}></textarea>
                            </li>
                            <li id="center-btn">
                                <button id="edit-btn">Edit</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </section>
        </div>
    )
}