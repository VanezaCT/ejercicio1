import React from 'react';
import {User} from '../../../models/user.class'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Roles } from '../../../models/roles.enum';

const RegisterFormik = () => {

    let user = new User()

    const initialValues={
        userName:'',
        email:'',
        password:'',
        confirm: '',
        roles: Roles.USER
    }

    const registerSchema =Yup.object().shape(
        {
            userName : Yup.string()
                .min(6, 'userName Too Short!')
                .max(12, 'userName Too Long!')
                .required('userName is Required'),
            email: Yup.string()
            .email('Invalid email')
            .required('Required'), 
            roles: Yup.string()
            .oneOf([Roles.USER,Roles.ADMIN,'You must select a rol: user / admin'])
            .required('Roles is required'),
            password: Yup.string() 
            .min(8, 'password to short')
            .required ('password is Required'),
            // confirm: Yup.string()
            // .when("password", {
            //     is: value =>(value && value.length>0 ? true:false),
            //     then:Yup.string().oneOf(
            //         [Yup.ref("password")], 
            //         'password must match!!!! '
            //     )
            // }).required('You must confirm the password')
        }
    )

    const submit = (values) => {
        alert ('register user')
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}>
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur, }) => (
                    <Form>
                        <label htmlFor="userName">User Name: </label>
                        <Field id="userName" name="userName" placeholder=" user name" type="text" />
                        {
                            errors.userName && touched.userName &&
                            (
                                <div> 
                                    <ErrorMessage name="userName" component='div'></ErrorMessage>
                                </div>

                            )
                        }

                        <label htmlFor="email">Email: </label>
                        <Field id="email" name="email" placeholder="youremail@gmailcom" type="email"/>
                        {/* email errors */}
                        {
                            errors.email && touched.email &&
                            (
                                <div>
                                    <ErrorMessage name="email" component='div'></ErrorMessage>
                                </div>

                            )
                        }
                        
                        <label htmlFor="password">password: </label>
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

                        <label htmlFor="confirm">Confirm Password: </label>
                        <Field id="confirm" name="confirm" placeholder="confirm password" type= 'password' />

                        {/* password errors */}
                        {
                            errors.confirm && touched.confirm &&
                            (
                                <div>
                                    <ErrorMessage name="confirm " component='div'></ErrorMessage>
                                </div>
                            )
                        }

                        <button type="submit">Register User</button>
                        {isSubmitting ? (<p>Sending your credential...</p>) : null}

                    </Form>
                )}
            </Formik>
            
        </div>
    );
}

export default RegisterFormik;
