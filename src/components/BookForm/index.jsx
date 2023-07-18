import React, { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";
import { formSchema } from "./formSchema";
import {BsCalendarFill} from 'react-icons/bs';
import {MdLocationOn} from 'react-icons/md';
import {GrValidate} from 'react-icons/gr';
import './styles.css';

const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
};

const BookForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedValues, setSubmittedValues] = useState(null);
    const messageBoxRef = useRef(null);

    const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
        car: "",
        pickupdate: "",
        dropofdate: "", 
        pickuplocation:"",
        dropoflocation:"",
        name: "",
        contact: "", 
        email: "",
        message: "",
    },
        validationSchema: formSchema,
        onSubmit: (formValues, actions) => {
            setSubmittedValues(formValues);
            onSubmit(formValues, actions);
            setIsSubmitted(true);
        },
    });
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await handleSubmit();
        /* setIsSubmitted(true); */
      };

      useEffect(() => {
        const handleClickOutside = (event) => {
          if (messageBoxRef.current && !messageBoxRef.current.contains(event.target)) {
            setIsSubmitted(false);
          }
        };
    
        document.addEventListener("click", handleClickOutside);
    
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, []);

      useEffect(() => {
        if (isSubmitted) {
          document.body.classList.add("no-scroll");
        } else {
          document.body.classList.remove("no-scroll");
        }
      }, [isSubmitted]);

   
    return(
        <div className="book-form-container" id="bookingsection" >
          <div className="form-contents">
          <div className="h1-form-p">
            <h1>Book your favorite sports car today!</h1>
            </div>
        {isSubmitted && (
        <div ref={messageBoxRef} className="message-box">
            <div className="message-content">
          <div className="message-heading">
          <h2 >Booking successfully submitted!</h2>
          <h4>Check your email for additional information.</h4>
          </div>
          {submittedValues && (
            <div className="message-info">
              {/* <p>Informations:</p> */}
              <div>
              <div>
              <h5>Car type: </h5>
                <p>{submittedValues.car}</p>
              </div>
              <div>
              <h5>Pick Up Date:</h5>
                <p>{submittedValues.pickupdate}</p>
              </div>
              <div>
              <h5>Drop Off Date: </h5>
                <p>{submittedValues.dropofdate}</p>
              </div>
              <div> <h5>Pick Up Location:</h5>
                <p>{submittedValues.pickuplocation}</p>
              </div>
              <div>
              <h5>Drop Off Location:</h5>
                <p>{submittedValues.dropoflocation}</p>
              </div>
              </div>
              <div>
              <div>
              <h5>Name:</h5>
                <p>{submittedValues.name}</p>
              </div>
              <div>
              <h5>Contact Number:</h5>
                <p>{submittedValues.contact}</p>
              </div>
              <div>
              <h5>Email:</h5>
                <p>{submittedValues.email}</p>
              </div>
              </div>
             
              
              <div>
              <h5>Additional Comment:</h5>
                <p>{submittedValues.message}</p>
              </div>

            </div>
          )}
          </div>
            </div>
      )}
      
            <div className={`form-container ${isSubmitted ? 'blurred' : ''}`} >
                
                <div /* className="form" */>
           <form onSubmit={handleFormSubmit}  autoComplete="off" className="form" >

              {/* First column */}

            <div className="form-content">
            <div className="first-column">

           <label htmlFor="car">Car type</label>
        <select  
        id="car"
        name="car" 
        value={values.car} 
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.car && touched.car ? "input-error" : ""}
        >
            <option value="">Select your car type</option>
            <option value="">Lamborghini</option>
            <option value="2016 Lamborghini Aventador">2016 Lamborghini Aventador</option>
            <option value="2018 Lamborghini Aventador">201 Lamborghini Aventador</option>
            <option value="Lamborghini Centenario">Lamborghini Centenario</option>
            <option value="2017 Lamborghini Huracan">2017 Lamborghini Huracan</option>
            <option value="Lamborghini Aventador S">Lamborghini Aventador S</option>
            <option value="">Ferrari</option>
            <option value="2012 Ferrari California">2012 Ferrari California</option>
            <option value="Ferrari 458">Ferrari 458</option>
            <option value="Ferrari F12">Ferrari F12</option>
            <option value="LaFerrari Maranello">LaFerrari Maranello</option>
            <option value="">Maserati</option>
            <option value="2017 Maserati Ghibli">2017 Maserati Ghibli</option>
            <option value="2017 Maserati Quattroporte">2017 Maserati Quattroporte</option>
            <option value="Maserati GranTurismo Malibu">Maserati GranTurismo Malibu</option>
            <option value="Maserati Levante">Maserati Levante</option>
            <option value="">Porche</option>
            <option value="911 Porsche Cayenne">911 Porsche Cayenne</option>
            <option value="GT3 2017 Porsche">GT3 2017 Porsche</option>
            <option value="Porsche Cayman">Porsche Cayman</option>
            <option value="2007 Porsche Boxster">2007 Porsche Boxster</option>
            <option value="">Bugatti</option>
            <option value="Bugatti Veyron">Bugatti Veyron</option>
            <option value="Bugatti Veyron Nemesis">Bugatti Veyron Nemesis</option>
        </select>  
        {errors.car && touched.car && <p className="error">{errors.car}</p>}

          {/* Dates */} 
          <div className="dates">

        <div>
         <label htmlFor="pickupdate">Pick Up <BsCalendarFill style={{fontSize: '15px'}}/></label>
         <input 
         type="date" 
         id="pick-up-date" 
         name="pickupdate" 
         value={values.pickupdate} 
         onChange={handleChange}
         onBlur={handleBlur}
         className={errors.pickupdate && touched.pickupdate ? "input-error" : ""}/>
         {errors.pickupdate && touched.pickupdate && <p className="error">{errors.pickupdate}</p>}
         </div>
         
         <div>
         <label htmlFor="dropofdate">Drop of <BsCalendarFill style={{fontSize: '15px'}}/></label>
         <input 
         type="date" 
         id="drop-of-date" 
         name="dropofdate" 
         value={values.dropofdate} 
         onChange={handleChange}
         onBlur={handleBlur}
         className={errors.dropofdate && touched.dropofdate ? "input-error" : ""}/>
         {errors.dropofdate && touched.dropofdate && <p className="error">{errors.dropofdate}</p>}
         </div>
         </div>

        {/*  Locations */}
         <div className="locations">
            <div>
        <label htmlFor="pickuplocation">Pick up <MdLocationOn/> </label>
        <select 
         id="pick-up-location" 
         name="pickuplocation" 
         value={values.pickuplocation}
         onChange={handleChange}
         onBlur={handleBlur} 
         className={errors.pickuplocation && touched.pickuplocation ? "input-error" : ""}
         >
             <option value="">Select location</option>
            <option value="New York">New York</option>
            <option value="Chicago">Chicago</option>
            <option value="Atlanta">Atlanta</option>
            <option value="Dallas">Dallas</option>
            <option value="Miami">Miami</option>
            <option value="Washington">Washington</option>
        </select>
        {errors.pickuplocation && touched.pickuplocation && <p className="error">{errors.pickuplocation}</p>}
        </div>

        <div>
        <label htmlFor="dropoflocation">Drop of <MdLocationOn/> </label>
        <select  
        id="drop-of-location" 
        name="dropoflocation" 
        value={values.dropoflocation} 
        onChange={handleChange}
        onBlur={handleBlur} 
        className={errors.dropoflocation && touched.dropoflocation ? "input-error" : ""}>
            <option value="">Select Location</option>
            <option value="New York">New York</option>
            <option value="Chicago">Chicago</option>
            <option value="Atlanta">Atlanta</option>
            <option value="Dallas">Dallas</option>
            <option value="Miami">Miami</option>
            <option value="Washington">Washington</option>
        </select>
        {errors.dropoflocation && touched.dropoflocation && <p className="error">{errors.dropoflocation}</p>}
        </div>

        </div>
        </div>

        {/* Second column */}
       <div className="second-column">

      <label htmlFor="name">First & Last name</label>
      <input 
      type="text"
      id="name" 
      name="name" 
      value={values.name} 
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder="Enter your first & last name"
      className={errors.name && touched.name ? "input-error" : ""} 
      />
      {errors.name && touched.name && <p className="error">{errors.name}</p>}

      <label htmlFor="contact">Contact Number</label>
      <input 
      type="tel" 
      id="contact"
      name="contact" 
      value={values.contact} 
      onChange={handleChange} 
      onBlur={handleBlur}
      placeholder="Enter your phone number"
      className={errors.contact && touched.contact ? "input-error" : ""}
      />
       {errors.contact && touched.contact && <p className="error">{errors.contact}</p>}

      <label htmlFor="email">Email</label>
      <input 
      type="email" 
      id="email" 
      name="email"
      value={values.email} 
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder="Enter your e-mail addres"
      className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      </div>


       {/* Third column */}
      <div className="third-column">
      <label htmlFor="message">Additional comment</label>
      <textarea id="message" name="message" value={values.message} onChange={handleChange} placeholder="Write here..."/>

      <button disabled={isSubmitting}  type="submit">Submit booking</button>
      </div>
      </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    );
};

export default BookForm;
