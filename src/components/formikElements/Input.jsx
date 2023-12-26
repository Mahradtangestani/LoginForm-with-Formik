import React from 'react';
import Personalerror from '../Personalerror';
import { ErrorMessage, FastField } from 'formik';

const Input = (props) => {
    const {name,label,type} = props;
    return (
        <div className="mb-3">
        <label htmlFor={name} className="form-label">{label}</label>
        <FastField type={type} className="form-control" id={name} name={name} placeholder="لطفا مشخصات خود را وارد کنید"/>
        <ErrorMessage name={name}component={Personalerror} />
    </div>
    );
}

export default Input;
