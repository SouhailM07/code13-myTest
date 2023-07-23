import "./signin.css";
//
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

let schema = z.object({
  Fname: z.string().nonempty(),
  Lname: z.string().nonempty(),
  email: z.string().email(),
  password: z.string().nonempty(),
});

export default function SignIn() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  let submitF = (data) => {
    console.log(data);
  };
  {
    return (
      <>
        <section id="SignIn">
          <button className=" p-4 rounded-xl w-full">
            <span> Try it free 7 days </span> then $20/mo. thereafter
          </button>
          <div id="inputField" className="rounded-xl pt-8">
            <form
              action=""
              className="flex flex-col items-center"
              onSubmit={handleSubmit(submitF)}
            >
              <div className="inputContainer w-4/5">
                <input
                  type="text"
                  id=""
                  placeholder="First name"
                  {...register("Fname")}
                />
                {errors.Fname && (
                  <div className="errorMsg">First name cannot be empty</div>
                )}
              </div>
              <div className="inputContainer w-4/5">
                <input
                  type="text"
                  id=""
                  placeholder="Last name"
                  {...register("Lname")}
                />
                {errors.Lname && (
                  <div className="errorMsg">Last name cannot be empty</div>
                )}
              </div>
              <div className="inputContainer w-4/5">
                <input
                  type="email"
                  id=""
                  placeholder="Email Address"
                  {...register("email")}
                />
                {errors.email && <div className="errorMsg">Looks like</div>}
              </div>
              <div className="inputContainer w-4/5">
                <input
                  type="password"
                  id=""
                  placeholder="Password"
                  {...register("password")}
                />
                {errors.password && (
                  <div className="errorMsg">Password cannot be empty</div>
                )}
              </div>
              <input
                type="submit"
                value="Claim your free trial "
                className="uppercase"
              />
            </form>
            <div
              id="footer"
              className=" w-4/5 m-auto  text-gray-300 text-center"
            >
              By clicking the button, you are agreeing to our
              <a href="">Terms and Services</a>
            </div>
          </div>
        </section>
      </>
    );
  }
}
