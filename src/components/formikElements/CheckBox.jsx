import React, { Fragment } from 'react';
import Personalerror from '../Personalerror';
import { ErrorMessage, FastField } from 'formik';

const Checkbox = (props) => {
    const {name,label,options} = props;
    return (
        <div className="mb-3">
        <label htmlFor={name} className="form-label">{label}</label>
        <FastField className="form-control" id={name} name={name} placeholder="لطفا مشخصات خود را وارد کنید">
           {({field})=>{
               return options.map(o=>(
                <Fragment key={o.id}>
                    <input className='me-4'
                    type='checkbox'
                    id={o.id}
                    {...field}
                    value={o.value}
                    checked={field.value.includes(o.value)}
                    />
                    <label className='mx-1 ms-4' htmlFor={o.id}>{o.value}</label>
                </Fragment>
               ))
           }}
        </FastField>
        <ErrorMessage name={name}component={Personalerror} />
    </div>
    );
}

export default Checkbox; 