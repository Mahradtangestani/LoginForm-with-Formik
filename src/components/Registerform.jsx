import React, { useEffect, useState } from 'react';
import { ErrorMessage, FastField, Field, Form, Formik, FieldArray, useFormik } from 'formik'
import * as Yup from 'yup'
import Personalerror from './Personalerror';
import FavoritsField from './FavoritsField';
import FormikControl from './formikElements/FormikControl';


const initialValues ={
    name: '',
    email: '',
    password: '',
    bio: '',
    address:{
        city: '',
        postalCode:''
    },
    phone:['' , ''],
    favorits:[''],
    education: 1,
    gender: 1,
    skills:[]
}
const onSubmit = (values , submitProps)=>{
    console.log(submitProps);
    setTimeout(()=>{
         
        submitProps.setSubmitting(false)
        submitProps.resetForm();

    },3000)
}
const validate = values=>{
    let errors = {}
    if (!values.name) {
        errors.name = "لطفا این قسمت را پر کنید"
    }
    if (!values.email) {
        errors.email = "لطفا این قسمت را پر کنید"
    }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email = "لطفا قالب ایمیل را رعایت کنید مثال : aaa@example.bbb"
    }
    if (!values.password) {
        errors.password = "لطفا این قسمت را پر کنید"
    }
    return errors;
}
const validationSchema = Yup.object({
    name: Yup.string().required('لطفا این قسمت را پر کنید'),
    email:Yup.string().required('لطفا این قسمت را پر کنید').email("لطفا قالب ایمیل را رعایت کنید مثال : aaa@example.bbb"),
    password: Yup.string().required('لطفا این قسمت را پر کنید').min(8 , 'حد اقل 8 کارکتر وارد کنید'),
    address: Yup.object({
        city:Yup.string().required('لطفا این قسمت را پر کنید'),
        postalCode:Yup.string().required('لطفا این قسمت را پر کنید'),
    }),
    phone: Yup.array().of(Yup.string().required('لطفا این قسمت را پر کنید')),
    favorits: Yup.array().of(Yup.string().required('لطفا این قسمت را پر کنید')),
    education: Yup.string().required('لطفا این قسمت را پر کنید')
})

const validateBio = value=>{
    let error;
    if(!value){
        error = 'ورود این فیلد اجباری است...!'
    }
    return error;
}

const educations = [
    {id:1 , value :'انتخاب'},
    {id:2 , value :'ابتدایی'},
    {id:2 , value :'راهنمایی'},
    {id:3 , value :'دیپلم'},
    {id:4 , value :'لیسانس'},
    {id:5 , value :'فوق لیسانس'},
    {id:6 , value :'دکترا'},
]

const gender = [
    {id:1 , value: 'مرد'},
    {id:2 , value: 'زن'}
]
const skills = [
    {id:1 , value: 'HTML'},
    {id:2 , value: 'CSS'},
    {id:3 , value: 'JS'},
    {id:4 , value: 'React'},
    
]



const Registerform = () => {

    const [savedData , setSavedData] = useState(null);
    const [myValues , setMyValues] = useState(null)

    const handleSaveData = (formik)=>{
        localStorage.setItem('saveData' , JSON.stringify(formik.values))
    }

    const handleGetSaveData = ()=>{
        setMyValues(savedData)
    }

    useEffect(()=>{
         
      const localSavedData = JSON.parse(localStorage.getItem('saveData'))
      setSavedData(localSavedData);

    } , [])

    return (
        <Formik
        initialValues={myValues || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
        // validateOnMount
        >
        
        {formik=>{
            console.log(formik);
            return (
                <div className='auth_container container-fluid d-flex justify-content-center align-items-center w-100 h-100-vh p-0'>
                <div className="row w-100 justify-content-center align-items-center">
                    <div className='auth_box col-11 col-md-8 col-lg-6 col-xl-4 py-4 px-3'>
                        <Form className='row'>
                            <h1 className='text-center'>
                                <i className='fas fa-user-plus text-primary'></i>
                            </h1>
                            <FormikControl 
                            control='input'
                            type='text'
                            name='name'
                            label='نام'
                            />
                            <FormikControl 
                            control='input'
                            type='email'
                            name='email'
                            label='ایمیل'
                            />
                            <FormikControl 
                            control='input'
                            type='password'
                            name='password'
                            label='رمز عبور'
                            />
                            <FormikControl 
                            control='texterea'
                            name='bio'
                            label='بیوگرافی'
                            />
                            <FormikControl 
                            control='select'
                            name='education'
                            label='تحصیلات'
                            options={educations}
                            />
                            <FormikControl 
                            control='radio'
                            name='gender'
                            label='جنسیت'
                            options={gender}
                            />
                            <FormikControl 
                            control='checkbox'
                            name='skills'
                            label='تخصص'
                            options={skills}
                            />
                            <div className="mb-3 col-6">
                                <label htmlFor="city" className="form-label">شهر</label>
                                <FastField type="text" className="form-control" id="city" name='address.city'/>
                                <ErrorMessage name='address.city'component={Personalerror} />
                            </div>
                            <div className="mb-3 col-6">
                                <label htmlFor="postalCode" className="form-label">کد پستی</label>
                                <FastField type="number" className="form-control" id="postalCode" name='address.postalCode'/>
                                <ErrorMessage name='address.postalCode' component={Personalerror}/>
                            </div>


                            <div className="mb-3 col-6">
                                <label htmlFor="mobilePhone" className="form-label">شماره موبایل</label>
                                <FastField type="number" className="form-control" id="mobilePhone" name='phone[0]'/>
                                <ErrorMessage name='phone[0]'component={Personalerror} />
                            </div>
                            <div className="mb-3 col-6">
                                <label htmlFor="telePhone" className="form-label">شماره ثابت</label>
                                <FastField type="number" className="form-control" id="telePhone" name='phone[1]'/>
                                <ErrorMessage name='phone[1]' component={Personalerror}/>
                            </div>

                            <div className="mb-3">
                                <FieldArray type="text" className="form-control" id="favorits" name='favorits'>
                                    {props=> <FavoritsField {...props}/>}
                                </FieldArray>

                            </div>

                            <div className='text-center w-100'>
                                <button type="submit" className="btn btn-primary" disabled={!(formik.dirty && formik.isValid) || formik.isSubmitting}>
                                      
                                      {formik.isSubmitting ? (
                                          <div className='spinner-border' role='status'>
                                             <span className='visually-hidden'>Loading...!</span>
                                          </div>
                                      ) : ('ثبت نام')}
                                                                        
                                    </button >
                                 {
                                     (formik.dirty && formik.isValid) ? (
                                     <button className='btn btn-warning mx-2' type='button' onClick={()=>handleSaveData(formik)}>
                                        ذخیره در سیستم
                                    </button> 
                                 ) : null}
                                 {savedData ? (
                                    <button className='btn btn-success mx-2' type='button' onClick={handleGetSaveData()}>
                                    دریافت اطلاعات سیستم
                                    </button> 
                                 ): null}
                                 { 
                                    formik.dirty ? (
                                    <button type='reset' className='btn btn-info mx-2' >
                                     پاکسازی
                                    </button> 
                                 ) : null}
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            )
        }}

        </Formik>
    );
}

export default Registerform;
