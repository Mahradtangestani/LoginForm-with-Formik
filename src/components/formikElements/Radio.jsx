import React, { Fragment } from 'react';
import Personalerror from '../Personalerror';
import { ErrorMessage, FastField } from 'formik';

const Radio = (props) => {
    const {name,label,options} = props;
    return (
        <div className="mb-3">
        <label htmlFor={name} className="form-label">{label}</label>
        <FastField className="form-control" id={name} name={name} placeholder="لطفا مشخصات خود را وارد کنید">
           {({field})=>{
               return options.map(o=>(
                <Fragment key={o.id}>
                    <input className='me-4'
                    type='radio'
                    id={`radio${o.id}`}
                    {...field}
                    value={o.id}
                    checked={field.value == o.id}
                    />
                    <label className='mx-1 ms-4' htmlFor={`radio${o.id}`}>{o.value}</label>
                </Fragment>
               ))
           }}
        </FastField>
        <ErrorMessage name={name}component={Personalerror} />
    </div>
    );
}

export default Radio; 