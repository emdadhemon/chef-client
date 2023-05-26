import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {

    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess('successfully logged in')
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
        .then(result => {
            const loggedUser = result.user;
            navigate(from, { replace: true })
        })
        .catch(error => {
            setError(error.message)
        })
    } 

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold my-6">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required type="password" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover ms-1">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-success">Login</button>
                            </div>
                            <p className='text-red-600'><small>{error}</small></p>
                            <p className='text-green-600 text-sm my-1 ms-2'>{success}</p>
                            <p className='text-sm font-semibold mt-4'>New to Spicy_Kitchen? <Link className='link text-green-700 ' to="/signup">Register Here</Link></p>
                        </form>
                        <div className='w-[85%] mx-auto mb-4'>
                            <button onClick={handleGoogleSignIn} className="w-[100%] btn btn-outline text-black hover:bg-red-400 hover:border-red-400  font-semibold mb-2"><FaGoogle style={{color:'skyblue'}}></FaGoogle><span className='ms-2'>Log in with Google</span></button>

                            <button onClick={handleGithubSignIn} className="w-[100%] btn btn-outline font-semibold"><FaGithub></FaGithub><span className='ms-2'>Log in with Github</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;