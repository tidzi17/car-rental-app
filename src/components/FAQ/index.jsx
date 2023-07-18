import React, { useState } from 'react';
import {IoIosArrowDown} from 'react-icons/io';
import {IoIosArrowUp} from 'react-icons/io';
import faq from '../assets/faq-bg.jpg';
import './styles.css';

function FAQ() {

  const [selected, setSelected] = useState(null)
  const toggle = i => {
    if (selected === i){
      return setSelected(null)
    }

    setSelected(i)
  }
  return (
    <div className="faq-container" style={{backgroundImage: "url(../assets/faq-bg.jpg)"}}>
      {/* <img src={car} alt='' /> */}
      <div className='faq-content'>
      <h2>Frequently Asked Questions</h2>
        {faqData.map((item, i) => (
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggle(i)}>
              <h3>{item.question}</h3>
              <span>{selected === i ? <IoIosArrowUp/> : <IoIosArrowDown /> }</span>
            </div>
            <div className={selected === i ? "faq-answer show" : "faq-answer" }>{item.answer}</div>
          </div>
        ))}
      
      </div>
      
    </div>
  )
}

export default FAQ;


const faqData = [
  {
    question: 'How can I rent a  sports car from DriveXcellence?',
    answer:
      'Renting a luxury sports car from DriveXcellence is easy. Simply visit our website, browse our selection of available cars, choose the car you want, select your rental dates, and proceed with the booking. Our team will then confirm your reservation and provide you with further instructions.',
  },
  {
    question: 'What documents do I need to rent a sports car?',
    answer:
      'To rent a luxury sports car from DriveXcellence, you need to provide a valid driver\'s license, a proof of insurance, and a valid credit card for payment and security deposit purposes. Additionally, you may need to meet certain age requirements and provide additional identification documents as per local regulations.',
  },
  {
    question: 'Can I rent a  sports car for a special event or occasion?',
    answer:
      'Absolutely! DriveXcellence offers luxury sports car rentals for various special events and occasions such as weddings, anniversaries, birthdays, and corporate events. We provide personalized packages and flexible rental options to make your special day even more memorable. Contact our customer service team to discuss your specific requirements.',
  },
  {
    question: 'Is there a mileage limit for the luxury sports car rentals?',
    answer:
      'Yes, there is usually a mileage limit for the luxury sports car rentals. The mileage limit may vary depending on the rental duration and specific car model. Our team will provide you with all the details regarding the mileage limit and any additional charges that may apply.',
  },
  {
    question: 'What happens if there is damage to the car during the rental period?',
    answer:
      'In the unfortunate event of any damage to the luxury sports car during the rental period, please notify our team immediately. We have insurance coverage for our cars, and the specific steps and procedures will be provided to you to ensure a smooth resolution. Your safety and satisfaction are our top priorities.',
  },
  {
    question: 'Can I extend the rental period for the luxury sports car?',
    answer:
      'Yes, in most cases, it is possible to extend the rental period for the  car. Please reach out to our customer service team as soon as possible to discuss the extension and make the necessary arrangements. Keep in mind that availability may vary, so it is advisable to request an extension in advance.',
  },
];
