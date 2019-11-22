import React from 'react';

import { FormInput, FormSubmit } from '../../UserForm';
import './OrderForm.scss';

const OrderForm = () => {
   return (
      <div className="order-page-form">
         <FormInput
            labelText='Firstname'
            type='text'
            name='form-firstname'
            placeholder='Firstname'
         />
         <FormInput
            labelText='Surname'
            type='text'
            name='form-surname'
            placeholder='Surname'
         />
         <FormInput
            labelText='Email address'
            type='email'
            name='form-email'
            placeholder='Email'
         />
         <FormSubmit />
      </div>
   )
}
export default OrderForm;
