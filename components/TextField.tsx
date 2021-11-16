import React from 'react'
import { FieldHookConfig, useField } from 'formik'

const TextField = (props: FieldHookConfig<string>) => {
    const [field] = useField(props);
    return (
        <div>
            <input {...field} placeholder={props.placeholder} type={props.type} />
        </div>
    )
}

export default TextField
