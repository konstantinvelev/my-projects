export function Edit() {
    return (
        <div>
            <section id="edit-page">
                <div className="editSection">
                    <div className="info">
                        <h2>Edit your own post!</h2>
                    </div>
                    <form action="#" method="" className="editForm">
                        <h2>Edit Post</h2>
                        <ul className="noBullet">
                            <li>
                                <label>Title:</label>
                                <input type="text" className="inputFields" id="title" name="" value="" />
                            </li>
                            <li>
                                <label>Keyword:</label>
                                <input type="text" className="inputFields" id="keyword" name="" value="" />
                            </li>
                            <li>
                                <label>Location:</label>
                                <input type="text" className="inputFields" id="location" name="" value="" />
                            </li>
                            <li>
                                <label>Date of creation:</label>
                                <input type="text" className="inputFields" id="date" name="" value="" />
                            </li>
                            <li>
                                <label>Wildlife image:</label>
                                <input type="text" className="inputFields" id="image" name="" value="" />
                            </li>
                            <li>
                                <label>Description:</label>
                                <textarea id="description" className="inputFields" name=""></textarea>
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