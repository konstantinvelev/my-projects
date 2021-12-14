export function Home() {
    return (
        <div>
            <section id="home">
                <div className="home-container">

                    <div className="short-info">
                        <h1>The best of the wildlife photography.</h1>
                        <h2>Share knowledge about the environment and enrich your life.</h2>
                    </div>
                </div>
            </section>

            <section id="home-page">
                <div className="offers">
                    <div className="col container"><img src="./img/nature1.jpg" alt="nature_1"/></div>
                    <div className="col container"><img src="./img/nature2.jpg" alt="nature_2"/></div>
                    <div className="col container"><img src="./img/nature3.jpg" alt="nature_3"/></div>
                    <div className="col container"><img src="./img/nature4.jpg" alt="nature_4"/></div>
                </div>
            </section>
        </div>
    )
}



