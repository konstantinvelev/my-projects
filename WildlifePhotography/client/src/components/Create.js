import { useNavigate } from 'react-router-dom';
import * as postService from '../services/postService';

export function Create() {
    let navigate = useNavigate();

    function createPostHandler(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let data = {
            title: formData.get('title'),
            keyword: formData.get('keyword'),
            location: formData.get('location'),
            date: formData.get('date'),
            imageUrl: formData.get('imageUrl'),
            description: formData.get('description')
        };
        postService.create(data)
        .then((res)=>{
            if(!!res){
                navigate('/all')
            }
            else{
                //navigate('/error-page')
            }
        })

    }

    return (
        <div id="create-page">
            <div className="createSection">
                <div className="info">
                    <h2>Create your post, share information about wildlife.</h2>
                </div>
                <form onSubmit={createPostHandler} className="createForm">
                    <h2>Create Post</h2>
                    <ul className="noBullet">
                        <li>
                            <label >Title:</label>
                            <input type="text" className="inputFields" id="title" placeholder="Two golden snub-nosed monkeys" name="title" />
                        </li>
                        <li>
                            <label>Keyword:</label>
                            <input type="text" className="inputFields" id="keyword" placeholder="Animal" name="keyword" />
                        </li>
                        <li>
                            <label >Location:</label>
                            <input type="text" className="inputFields" id="location" placeholder="North America" name="location" />
                        </li>
                        <li>
                            <label >Date of creation:</label>
                            <input type="text" className="inputFields" id="date" placeholder="18.02.2021" name="date" />
                        </li>
                        <li>
                            <label >Wildlife image:</label>
                            <input type="text" className="inputFields" id="image" placeholder="http:/..." name="imageUrl" />
                        </li>
                        <li>
                            <label >Description:</label>
                            <textarea id="description" className="inputFields" name="description" placeholder="Monkey is..."></textarea>
                        </li>
                        <li id="center-btn">
                            <button id="create-btn">Create</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    )
}

