import {} from './DeleteConformation.css';

function DeleteConformation({
    onAccept,
    onCancle
}){
    return (
        <div id="id01" className="modal">
            <form className="modal-content">
                <div className="confirm-container">
                    <h1>Delete Post</h1>
                    <h3>Are you sure you want to delete your post?</h3>

                    <div className="clearfix">
                        <button type="button" className="vote-up" onClick={onCancle}>Cancel</button>
                        <button type="button" className="del-btn" onClick={onAccept}>Delete</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default DeleteConformation;