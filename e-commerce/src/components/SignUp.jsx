export default function SignUp() {
    return (
        <div className="container d-flex justify-content-center ">
            <div className="signupDiv col-6 my-5">
                <h2>Sign Up</h2>
                <form action="">
                    <label htmlFor="name">Name*</label><br />
                    <input type="text" name="name" placeholder="Enter your name" /><br />
                    <label htmlFor="email">Email*</label><br />
                    <input type="email" name="email" placeholder="Enter your email" /><br />
                    <label htmlFor="password">Password*</label><br />
                    <input type="password" name="password" placeholder="Create a password" />
                    <label htmlFor="conpassword">Confirm password*</label><br />
                    <input type="password" name="conpassword" placeholder="Confirm a password" />
                    <p>Must be at least 8 characters.</p>
                    <button className="btn btn-warning text-white">Create account</button>
                </form>
                <p>Already have an account? <span>Log in</span></p>
            </div>
        </div>
    )
}