import React from 'react'
import { Formik, Form, Field as Feild, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
    const navigate = useNavigate()

    const hanldeSubmit = (values)=> {
        const existingBooks = JSON.parse(localStorage.getItem("books")) || [];
        localStorage.setItem("books",JSON.stringify([...existingBooks, values]))
        navigate('/')
    }
  return (
    <>
        <Formik
            initialValues={{ title: '', author : '', genre : '', price : '', description : ''}}
            validate={values => {
                const errors = {};
                if(!values.title) errors.title = "Required"
                if(!values.author) errors.author = "Required"
                if(!values.genre) errors.genre = "Required"
                if(!values.price || values.price <= 0) errors.price = "Must be greater than 0";
                return errors;
            }}
            onSubmit={hanldeSubmit}
        >
            {() => (
                <Form>
                    <div>
                        <label>Title</label>
                        <Feild name="title"/>
                        <ErrorMessage name='title' component='div'/>
                    </div>
                    <div>
                        <label>Author</label>
                        <Feild name="author"/>
                        <ErrorMessage name='author' component='div'/>
                    </div>
                    <div>
                        <label>Genre</label>
                        <Feild name="genre"/>
                        <ErrorMessage name='genre' component='div'/>
                    </div>
                    <div>
                        <label>Price</label>
                        <Feild name="price" type="number"/>
                        <ErrorMessage name='price' component='div'/>
                    </div>
                    <div>
                        <label>Description</label>
                        <Feild name="description" as="textarea"/>
                    </div>
                    <button type="submit">Add Book</button>
                </Form>
            )}
        </Formik>
    </>
  )
}

export default AddBook