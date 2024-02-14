import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const loginSchema=Yup.object().shape(
    {
        email: Yup.string()
                  .email('Invalid email  format')
                  .required('Email is required'),
        password: Yup.string()
                      .required('password is requered')
    }
)

const LoginFormik = () => {

   
    const navigate = useNavigate()
    return (
        <div>
        <h4>
            Login 
        </h4>
            <Formik
            initialValues={
                    {
                        email: '',
                        password:''
                    }}  
                    
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    await localStorage.setItem('credentials', values)
                    navigate('/profile')
                }}>
                
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur, }) => (
                    
                <Form>
                    <label htmlFor="email">Email: </label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="youremail@gmailcom"
                        type="email"
                    />
                    {/* email errors */}
                    {
                        errors.email && touched.email &&
                        (
                            <div>
                                    <ErrorMessage name="email" component='div'></ErrorMessage>
                            </div>
                             
                        )
                    }
                        
                    <label htmlFor="firstName">password: </label>
                    <Field id="password" name="password" placeholder="password" type="password" />

                    {/* password errors */}
                    {
                        errors.password && touched.password &&
                        (
                                <div>
                                    <ErrorMessage name="password"></ErrorMessage>
                                </div>
                        )
                    }
                                        <button type="submit">Login</button>
                    {isSubmitting ? (<p>Login your credential...</p>) : null}
                </Form>
                    )
                    
                }
            </Formik> 
        </div>
    );
}

export default LoginFormik;
