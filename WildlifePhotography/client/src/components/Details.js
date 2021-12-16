export function Details() {
    return (
        <div>
            <section id="details-page">
                <div className="main_card">
                    <div className="card_left">
                        <div className="card_datails">
                            <h1>Title: Two golden snub-nosed monkeys</h1>
                            <h3>Created by an author: Alex Petkov</h3>
                            <div className="card_animal">
                                <p className="card-keyword">Keyword: Animal</p>
                                <p className="card-location">Location: North America</p>
                                <p className="card-date">Date: 18.02.2021</p>
                            </div>
                            <p className="disc">Description: Monkey, in general, any of nearly 200 species of tailed primate, with
                                the exception of lemurs, tarsiers, and lorises.All but the durukuli of tropical Central and
                                South America are active during the day, moving
                                frequently in bands as they search for vegetation.</p>
                            <div className="social-btn">
                                <a href="#" className="edit-btn">Edit</a>
                                <a href="#" className="del-btn">Delete</a>
                                <a href="#" className="vote-up">UpVote +1</a>
                                <a href="#" className="vote-down">DownVote -1</a>
                                <p className="thanks-for-vote">Thanks For Voting</p>
                            </div>
                        </div>
                    </div>
                    <div className="card_right">
                        <img src="./img/animal.jpg" alt="image"/>
                    </div>
                </div>
            </section>
            <section id="votes">
                <div className="vote-info">
                    <div className="card_left">
                        <div className="card_datails">
                            <h1>Votes</h1>
                            <div className="card_vote">
                                <p className="PV">Total rating of votes: 0</p>
                            </div>
                            <p className="disc">People who voted for the post - No one has voted yet.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}