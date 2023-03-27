import { Link, useNavigate } from "react-router-dom";
import {useState} from 'react'

function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

    const login = () =>{
        //api isteğini
        navigate("/");
    }   

    return(
        <div className="d-flex justify-content-center" style={{marginTop:"20px"}}>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">
                        <h1 className="text-center">Login Page</h1>
                    </div>
                    <div className="card-body">
                        <form autoComplete="off" onSubmit={login}>
                            <div className="form-group">
                                Email
                                <input type="email" required email className="form-control"/>
                            </div>
                            <div className="form-group mt-2">
                                Password
                                <input required className="form-control"/>
                            </div>
                            <div className="form-group mt-2">
                                <button type="submit" className="btn btn-primary w-100">
                                    Login
                                </button>
                            </div>
                        </form>
                        <Link className="mt-2" to="/register" style={{float:"right"}}>Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;