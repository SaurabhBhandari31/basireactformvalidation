import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (!/^[A-Za-z]\w{7,15}$/i.test(values.password)) {
    errors.password = "Invalid password";
  }
 

  return errors;
};

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      cPassword: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <h2 className="text-center mb-5 text-primary">Registration here</h2>
          <div className="col firstdiv">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  Enter First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  id="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="error" style={{ color: "red" }}>
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>

              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Enter Lasst name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  id="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="error" style={{ color: "red" }}>
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Enter Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error" style={{ color: "red" }}>
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Enter Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  autoCorrect="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error" style={{ color: "red" }}>
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              

              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="col seconddiv">
            
            </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
