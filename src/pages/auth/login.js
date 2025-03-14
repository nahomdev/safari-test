import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from '../../context/authContext';


function App() {
    const { isAuthenticated,  toggleAuth } = useAuth(); // Access the authentication state

   

  return (
    <div id="webcrumbs"> 
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl flex overflow-hidden rounded-xl shadow-xl">
          <div className="hidden md:block w-2/3 min-h-[40vh] relative">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Safaricom Building Interior" 
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-full md:w-full bg-white p-14 md:p-12">
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Welcome to Safaricom Partner Hub.</h2>
              <p className="text-green-600 font-medium mb-8">Login to your account</p>
              
              <Formik
                initialValues={{ username: '', password: '', showPassword: false }}
                validate={values => {
                  const errors = {};
                  if (!values.username) {
                    errors.username = 'Please enter your username or email.';
                  }
                  if (!values.password) {
                    errors.password = 'Please enter your password.';
                  } else if (values.password.length < 8) {
                    errors.password = 'Password must be at least 8 characters long.';
                  } else if (!/[A-Z]/.test(values.password)) {
                    errors.password = 'Password must contain at least one uppercase letter.';
                  } else if (!/[a-z]/.test(values.password)) {
                    errors.password = 'Password must contain at least one lowercase letter.';
                  } else if (!/[0-9]/.test(values.password)) {
                    errors.password = 'Password must contain at least one number.';
                  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
                    errors.password = 'Password must contain at least one special character.';
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  console.log('Form data:', values);
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting, setFieldValue, values, errors }) => (
                  <Form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                      <div className="relative">
                        <Field
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Your username or email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                          aria-label="Username"
                        />
                        <ErrorMessage name="username" component="div" className="text-red-600 text-sm" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                      <div className="relative">
                        <Field
                          type={values.showPassword ? "text" : "password"}
                          id="password"
                          name="password"
                          placeholder="••••••••••••••"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                          aria-label="Password"
                        />
                        <ErrorMessage name="password" component="div" className="text-red-600 text-sm" />
                        <button
                          type="button"
                          onClick={() => setFieldValue('showPassword', !values.showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors"
                          aria-label={values.showPassword ? "Hide password" : "Show password"}
                        >
                          <span className="material-symbols-outlined p-1 rounded-md transition-colors">
                            {values.showPassword ? <FaEyeSlash /> : <FaEye height="10px" />}
                          </span>
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <a href="#" className="text-green-600 text-sm hover:text-green-700 hover:underline transition-all">Forgot Password?</a>
                    </div>
                    
                    <button onClick={toggleAuth}   className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all"
                ><span className="material-symbols-outlined mr-2">login {isAuthenticated === true? 'true': 'false'}</span>
</button>

                    {/* <button 
                      type="submit"
                      onClick={()=>toggleAuth()}
                      disabled={isSubmitting || Object.keys(errors).length > 0}
                      className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all"
                    >
                     
                    </button> */}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
