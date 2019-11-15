import React from 'react';

import './OrderForm.scss';

const OrderForm = () => {
   return (
      <div className="order-page-form">
         <div className="form-group">
            <label>Firstname</label>
            <input
               type="text"
               className="form-control"
               name="form-firstname"
               placeholder="Firstname"
            />
         </div>
         <div className="form-group">
            <label>Surname</label>
            <input
               type="text"
               className="form-control"
               name="form-surname"
               placeholder="Surname"
            />
         </div>
         <div className="form-group">
            <label>Email address</label>
            <input
               type="email"
               className="form-control"
               name="form-email"
               placeholder="Email"
            />
         </div>
         <div className="form-group form-btn">
            <button className="btn-submit">
               Submit
               </button>
         </div>
      </div>
   )
}
export default OrderForm;
