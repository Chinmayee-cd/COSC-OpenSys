import React from 'react'
import Accordian from './Accordian'
import { faqs } from '../constants/data';

const Faqs = () => {
  return (
    <section id='faqs' className='section   w-[70%]' >
      <style>
        {`
          .faqs {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(8.7px);
            -webkit-backdrop-filter: blur(8.7px);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }

        
          @media only screen and (max-width: 767px) {
            .faqs {
              width: 100%;
            }
          }
        `}
      </style>
    <div className='flex flex-col items-center'>
      <h1 className='text-white text-3xl font-sans font-bold py-10'> FREQUENTLY ASKED QUESTIONS </h1>
      {faqs.map((faq, index) => (
        <div key={index} id='faqdiv' className='faqs p-4 w-[100%] rounded-lg bg-white/10 backdrop-blur-md my-2'>
            <Accordian key={index} question={faq.question} answer={faq.answer} />
        </div>
      ))}
    </div>
    </section>
  )
}

export default Faqs
