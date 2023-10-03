import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {



    const {createUser} = useContext(AuthContext)


    const handleSubmit = e => {


        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);


        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, password,email,photo);





    // create user 
    createUser(email, password)
    .then(result => {
        console.log(result.user);
    })
    .catch(error => {
        console.log(error);
    })
        
    }




    return (
        <div className="space-y-4">
        <h2 className="text-3xl text-center my-4 font-bold">Please Register</h2>
       <div className="card flex-shrink-0 w-full mx-auto md:w-3/4 lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleSubmit} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">name</span>
      </label>
      <input type="text" name="name" required placeholder="name" className="input input-bordered"  />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo</span>
      </label>
      <input type="photo" name="photo" required placeholder="photo" className="input input-bordered"  />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" required placeholder="email" className="input input-bordered"  />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" placeholder="password" name="password" required className="input input-bordered"  />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Register</button>
    </div>
    <p className="text-center mt-2">Already have an account <Link className="font-bold text-blue-700" to={'/login'}>login</Link></p>
  </form>
</div>
    </div>
    );
};

export default Register;