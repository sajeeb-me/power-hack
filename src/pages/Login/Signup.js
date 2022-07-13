import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

function Signup() {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        // const email = data.email;
        const user = data;
        if (user) {
            fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user),
            })
                .then(res => {
                    console.log(res);
                    if (res.status === 500) {
                        toast.error('User already exist!')
                    }
                    return res.json()
                })
                .then(data => {
                    console.log(data);
                    navigate('/');
                })
        }
    };

    return (
        // <!-- Section: Design Block -->
        <section className="text-center">
            {/* <!-- Background image --> */}
            <div className="p-5 bg-image" style={{
                backgroundImage: `url('https://mdbootstrap.com/img/new/textures/full/171.jpg')`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                height: "300px"
            }}></div>

            {/* <!-- Background image --> */}

            <div className="card mx-4 mx-md-5 shadow-5-strong" style={{
                "marginTop": "-100px",
                "marginBottom": "50px",
                "background": "hsla(0, 0%, 100%, 0.8)",
                "backdropFilter": "blur(30px)"
            }}>
                <div className="card-body py-5 px-md-5">

                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="fw-bold mb-5">Sign up now</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline text-start">
                                            <label className="form-label ps-1">First name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                {...register("firstName", { required: true })}
                                            />
                                            <span className='text-danger'>{errors.firstName?.type === 'required' && "First name is required"}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline text-start">
                                            <label className="form-label ps-1">Last name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                {...register("lastName", { required: true })}
                                            />
                                            <span className='text-danger'>{errors.lastName?.type === 'required' && "Last name is required"}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-4 text-start">
                                    <label className="form-label ps-1">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        {...register("email", { required: true })}
                                    />
                                    <span className='text-danger'>{errors.email?.type === 'required' && "Email address is required"}</span>
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-4 text-start">
                                    <label className="form-label ps-1">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        {...register("password", { required: true })}
                                    />
                                    <span className='text-danger'>{errors.password?.type === 'required' && "Password is required"}</span>
                                </div>

                                {/* <!-- Submit button --> */}
                                <button type="submit" className="btn btn-primary btn-block mb-1 w-100">
                                    Sign up
                                </button>
                            </form>
                            <div>
                                <p>Already have account? <Link to='/login'>Login here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // <!-- Section: Design Block -->
    )
}

export default Signup