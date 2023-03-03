import React, { Component ,useState } from 'react';
import emailjs from 'emailjs-com';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TimeSlotService from '../services/TimeSlotService';
 
import { parse, isDate } from "date-fns";
import UpdateUserComponent from './UpdateUserComponent';
const today = new Date();
function parseDateString(value, originalValue) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "yyyy-MM-dd", new Date());

  return parsedDate;
}
class UpdateTimeSlotComponent extends Component {
  
  
    logout = () => {
        localStorage.clear();
        window.location.href = "/";
      }
    render() {
        return (
            
            <Formik
                initialValues={{
                    slotDate:'',
                    maxPersonPerSlot:'',
                    slot:'',
                  
                   
                   
                }}
                
                validationSchema={Yup.object().shape({
                    slotDate: Yup.date().transform(parseDateString).min(today,'please select valid date'),

                  
                    maxPersonPerSlot: Yup.number()
                       .required('This field is required')
                       .positive('please Enter valid Number')
                       .lessThan(100,'please select Number of peoples between 1 to 100'),

                        slot: Yup.string()
                        .required('ereq'),
                       
                })}

                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                    TimeSlotService.createTimeSlot(fields).then(res =>{
                        this.props.history.push('/temple-admin-scope');
                    })
                }}
              
              
              
                render={({ errors, status, touched }) => (


                    
                    <Form  className="abc"style={{
                       
                        marginTop:'100px',
                        overflow:'hidden',
                        marginLeft: '250px',
                        marginRight:'250px',
                        padding:'0',
                       
                      }}>


<p  align="right" >                   
<button style={{marginRight:'10px'}} onClick={this.logout} className="btn btn-primary">Logout</button></p>
                        <div className="form-group">
                            <label htmlFor="slotDate">Slot Date</label>
                            <Field name="slotDate" type="date" className={'form-control' + (errors.passDate && touched.passDate ? ' is-invalid' : '')} />
                            <ErrorMessage name="passDate" component="div" className="invalid-feedback" />
                        </div>
                       
                        <div className="form-group">
                            <label htmlFor="maxPersonPerSlot">Max. Persons allowed</label>
                            <Field name="maxPersonPerSlot" type="number" className={'form-control' + (errors.peoples && touched.peoples     ? ' is-invalid' : '')} />
                            <ErrorMessage name="maxPersonPerSlot" component="div" className="invalid-feedback" />
                        </div>
                     <div className="form-group">
                     <label htmlFor="slot"> slot</label>
                                            
                                            <Field   as="select" name = "slot" className={'form-control'} >
                                                <option value = "8AM-9AM" selected>8AM-9AM</option>
                                                <option value = "9AM-10AM">9AM-10AM</option>
                                                <option value = "9AM-10AM">9AM-10AM</option>
                                               
                                           
                                          </Field>
                                                </div>                   
                     
                       
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Confirm Slot Details</button>
                          
                        </div>
                        
                    </Form>
                    
                )}
            />
        )
    }
}

export default UpdateTimeSlotComponent;