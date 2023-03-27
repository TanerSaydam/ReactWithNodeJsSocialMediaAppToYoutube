import {useState} from 'react';
import axios from 'axios';

function Home() {
    const [content,setContent] = useState("");

    const addPost = (e) =>{
        e.preventDefault();
        const user =JSON.parse(localStorage.getItem("user"));
        axios.post("http://localhost:5000/api/post",{userId: user._id, content: content})
            .then(res=> {
                alert(res.data.message);
                setContent("");
            })
            .catch(err=> {
                console.log(err.data);
            });
    }

    return (
        <div className="d-flex justify-content-center mt-4">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <form autoComplete='off' onSubmit={addPost}>
                            <div className="form-group">
                                <textarea value={content} onChange={(e)=> setContent(e.target.value)} className="form-control" rows="5" placeholder="Ne düşünüyorsunuz...">
                                </textarea>
                            </div>
                            <div className="form-group mt-2">
                                <button type="submit" className="btn btn-primary" style={{ float: "right" }}>Share</button>
                            </div>
                        </form>
                    </div>
                </div>
                <hr />
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