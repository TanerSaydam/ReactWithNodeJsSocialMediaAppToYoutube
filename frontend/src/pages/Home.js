function Home(){
    return(
        <div className="d-flex justify-content-center mt-4">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                            <textarea className="form-control" rows="5" placeholder="Ne düşünüyorsunuz...">
                            </textarea>
                            </div>
                            <div className="form-group mt-2">
                            <button className="btn btn-primary" style={{float:"right"}}>Share</button>
                            </div>
                        </form>
                    </div>                    
                </div>
                <hr/>
                <div className="card mt-2">
                    <div className="card-body">
                        <h5>Taner Saydam - 27.03.2023 21:51</h5>
                        <p>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasd</p>
                    </div>
                </div>

                <div className="card mt-2">
                    <div className="card-body">
                        <h5>Taner Saydam - 27.03.2023 21:51</h5>
                        <p>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasd</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;