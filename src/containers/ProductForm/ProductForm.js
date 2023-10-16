import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function ProductForm(props) {
    const [step, setStep] = useState(1);

    const categoryOptions = ['Electronics', 'Clothing', 'Books'];

    const validationSchema = Yup.object().shape({
        productName: Yup.string().required('Product Name is required'),
        category: Yup.string().required('Category is required'),
        price: Yup.number()
            .required('Price is required')
            .positive('Price must be positive'),
        discount: Yup.number().positive('Discount must be positive'),
        productImage: Yup.mixed().required('Product Image is required'),
    });

    const initialValues = {
        productName: '',
        category: '',
        description: '',
        price: '',
        discount: '',
        productImage: null,
    };

    const handleNextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };


    return (
        <div>
            <div style={{margin:'20px',padding:'20px',alignItems:'center'}}>
                <h1>Product Submission Form - Step {step}</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                        // Simulate API call here (e.g., using setTimeout)
                        setTimeout(() => {
                            alert('Form submitted successfully');
                            actions.setSubmitting(false);
                        }, 1000);
                    }}

                >
                    {({ isSubmitting, values, errors, touched }) => (
                        <Form>
                            <div>
                                {step === 1 && (
                                    <div>
                                        <label htmlFor="productName">Product Name</label>
                                        <Field type="text" name="productName" />
                                        <ErrorMessage name="productName" component="div" />
                                        <label htmlFor="category">Category</label>
                                        <Field as="select" name="category">
                                            <option value="" label="Select a category" />
                                            {categoryOptions.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name="category" component="div" />
                                    </div>
                                )}

                                {step === 2 && (
                                    <div>
                                        <label htmlFor="price">Price</label>
                                        <Field type="number" name="price" />
                                        <ErrorMessage name="price" component="div" />
                                        <label htmlFor="discount">Discount (optional)</label>
                                        <Field type="number" name="discount" />
                                        <ErrorMessage name="discount" component="div" />
                                    </div>
                                )}

                                {step === 3 && (
                                    <div>
                                        <label htmlFor="productImage">Product Image</label>
                                        <input
                                            type="file"
                                            name="productImage"
                                            accept="image/*"
                                        // onChange={(event) => {
                                        //   setFieldValue('productImage', event.currentTarget.files[0]);
                                        // }}
                                        />
                                        {/* <ErrorMessage name="productImage" component="div" /> */}
                                    </div>
                                )}

                                <div>
                                    {step > 1 && (
                                        <button type="button" onClick={handlePreviousStep}>
                                            Previous
                                        </button>
                                    )}
                                    {step < 3 && (
                                        <button
                                            type="button"
                                            onClick={handleNextStep}
                                            disabled={
                                                (step === 1 &&
                                                    (!values.productName || !values.category)) ||
                                                (step === 2 && (!values.price || !values.discount))
                                            }
                                        >
                                            Next
                                        </button>
                                    )}
                                    {step === 3 && (
                                        <button type="submit" disabled={isSubmitting}>
                                            Submit
                                        </button>
                                    )}
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

        </div>
    );
}

export default ProductForm;