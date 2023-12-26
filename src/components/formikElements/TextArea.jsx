import React from 'react';
import Personalerror from '../Personalerror';
import { ErrorMessage, FastField } from 'formik';

const TextArea = (props) => {
    const {name,label} = props;
    return (
        <div className="mb-3">
        <label htmlFor={name} className="form-label">{label}</label>
        <FastField as='textarea' className="form-control" id={name} name={name} placeholder="لطفا بیوگرافی خود را وارد کنید"/>
        <ErrorMessage name={name} component={Personalerror} />
    </div>
    );
}

export default TextArea;
