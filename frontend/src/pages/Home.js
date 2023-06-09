import {useEffect, useState} from 'react';
import axios from 'axios';
import apiUrl from '../env';

function Home() {
    const [content,setContent] = useState("");
    const [posts, setPosts] = useState([]);

    const addPost = (e) =>{
        e.preventDefault();
        const user =JSON.parse(localStorage.getItem("user"));
        axios.post(apiUrl + "/api/post",{userId: user._id, content: content})
            .then(async (res)=> {
                await getPosts();
                alert(res.data.message);
                setContent("");
            })
            .catch(err=> {
                console.log(err.data);
            });
    }

    const getPosts = async () => {
        axios.get(apiUrl + "/api/posts")
        .then(res=> {
            setPosts(res.data);
        });
    }

    useEffect(()=> {
        getPosts();
    }, [])

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
                {
                    posts.map((val,index)=>{
                        return(
                            <div key={index} className="card mt-2">
                                <div className="card-body">
                                    <img src={apiUrl + '/' + val.users[0].avatar.path} style={{width: "50px", borderRadius: "50px", height: "60px"}}/>
                                    <h5>{val.users[0].name} - {val.createdDate}</h5>
                                    <p>{val.content}</p>
                                </div>
                            </div> 
                        )
                    })
                }                              
            </div>
        </div>
    )
}

export default Home;