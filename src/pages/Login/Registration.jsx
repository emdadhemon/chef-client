import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { updateProfile } from 'firebase/auth';

const Registration = () => {
    const { createUser, signInWithGoogle,signInWithGithub, } = useContext(AuthContext);

    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleRegister = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase');
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError('Please add at least one numbers');
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                updateUserData(result.user, name, photourl);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
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
                <div className="hero-content flex flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center mb-6"> Register Now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name='photourl' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-success font-semibold text-white">Register</button>
                            </div>
                            <p className='text-red-500 text-sm mt-2'>{error}</p>
                            <p className='text-sm font-semibold mt-4'>Already Have an Account? Please <Link className='link text-green-700 ' to="/login">Login</Link></p>
                        </form>
                        <div className='w-[85%] mx-auto mb-4'>
                        <button onClick={handleGoogleSignIn} className="w-[100%] btn btn-outline text-black hover:bg-red-400 hover:border-red-400  font-semibold mb-2"><FaGoogle style={{color:'skyblue'}}></FaGoogle><span className='ms-2'>Sign up with Google</span></button>

                            <button onClick={handleGithubSignIn} className="w-[100%] btn btn-outline font-semibold"><FaGithub></FaGithub><span className='ms-2'>Sign Up with Github</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;