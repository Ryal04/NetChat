import React from 'react'
import {FieldRenderProps} from 'react-final-form'
import { Form, FormFieldProps, Label } from 'semantic-ui-react'

interface IProp extends FieldRenderProps<string, HTMLElement>,FormFieldProps{

}

const TestInput: React.FC<IProp> = ({placeholder, type, icon, input, meta: {touched,error}}) => {
    return (
        <Form.Input fluid iconPosition = "left" type={type} placehloder={placeholder}>
            <input {...input} />
            {touched && error && (
                <Label basic color='red'>{error}</Label> 
            )}
            <i aria-hidden="true" className={icon}></i>

        </Form.Input>
    )
}

export default TestInput