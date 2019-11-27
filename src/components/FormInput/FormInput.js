import React from 'react';
import { string } from 'prop-types';

const FormInput = ({ labelText, type, name, placeholder }) => {
    return (
        <div className="form-group">
            <label>{labelText}</label>
            <input
                type={type}
                className="form-control"
                name={name}
                placeholder={placeholder}
            />
        </div>
    )
}

FormInput.propTypes = {
    labelText: string,
    type: string,
    name: string,
    placeholder: string,
}

export default FormInput;
