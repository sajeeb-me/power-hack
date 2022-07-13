import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
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
                            <form>
                                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <input type="text" id="form3Example1" className="form-control" />
                                            <label className="form-label" htmlFor="form3Example1">First name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <input type="text" id="form3Example2" className="form-control" />
                                            <label className="form-label" htmlFor="form3Example2">Last name</label>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3" className="form-control" />
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-4">
                                    <input type="password" id="form3Example4" className="form-control" />
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
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