import React from 'react';
import { login, getAllPagedUsers, getAllUser, getUsersByID, createUser, updateUser } from '../../services/axiosCRUDService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const AxiosCRUDExample = () => {

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                .email('Invalid email  format')
                .required('Email is required'),
            password: Yup.string()
                .required('password is requered')
        }
    )

    const authLogin =(values)=>{
        login(values.email,values.password).then((response)=>{
            if (response.data.token)
            {
                alert(JSON.stringify(response.data))
                sessionStorage.setItem('Token', response.data.token)
            } else {
                sessionStorage.removeItem('Token')
                throw new Error('Login failure')
            }
        }).catch ((error)=>{
            alert(`something went wrong: ${error}`)
            sessionStorage.removeItem('Token')
        }).finally(()=>{console.log('Login done');})
    }
    
    const obtainAllUser =()=>{
        getAllUser()
            .then((response) => { alert(JSON.stringify(response.data.data) )})
            .catch((error) => alert(`something went wrong: ${error}`))
            
    }
    
    const obtainAllPageUser = (page) => {
        getAllPagedUsers(page)
            .then((response) => { alert(JSON.stringify(response.data.data) )})
            .catch((error) => alert(`something went wrong: ${error}`))
            
    }

    const obtainUserByID = (id) => {
        getUsersByID(id)
            .then((response) => { alert(JSON.stringify(response.data.data)) })
            .catch((error) => alert(`something went wrong: ${error}`))
            
    }
    
    const createNewUsers =(name,job)=>{
        createUser(name,job)
            .then((response) => {
                if (response.data && response.status===201) {
                    alert(JSON.stringify(response.data))
                } else {
                    throw new Error('user not created')
                }
            }).catch((error) => {
                alert(`something went wrong: ${error}`)
            })
    }
    
    const updateNewUsers = (id,name, job) => {
        updateUser(id, name, job)
            .then((response) => {
                if (response.data && response.status === 200) {
                    alert(JSON.stringify(response.data))
                } else {
                    throw new Error('user not created')
                }
            }).catch((error) => {
                alert(`something went wrong: ${error}`)
            })
    }

    return (
        <div>
            <div>
                <h4>
                    Login
                </h4>
                <Formik
                    initialValues={
                        {
                            email: '',
                            password: ''
                        }}

                    validationSchema={loginSchema}
                    onSubmit={async (values) => {
                       authLogin(values)
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
            <button onClick={obtainAllUser}>Obtain all user</button>
            <button onClick={()=>obtainAllPageUser(1)}>Obtain all page user</button>
            <button onClick={()=>obtainUserByID(1)}>Obtain user by ID</button>
            <button onClick={() => createNewUsers('morpheus','leader')}>Create user</button>
            <button onClick={() => updateNewUsers(1,'morpheus', 'zion resident')}>update user</button>
        </div>
    );
}

export default AxiosCRUDExample;


