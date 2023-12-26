import React from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import Radio from './Radio';
import Checkbox from './CheckBox';


const FormikControl = (props) => {

         switch (props.control) {
            case 'input':
                return <Input {...props}/>
            case 'texterea':
                return <TextArea {...props}/>
            case 'select':
                return <Select {...props}/>
            case 'radio':
                return <Radio {...props}/>
            case 'checkbox':
                return <Checkbox {...props}/>
                
        
            default:
                break;
        }

}

export default FormikControl;
