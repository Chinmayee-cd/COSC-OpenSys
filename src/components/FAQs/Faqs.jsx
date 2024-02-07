import React from 'react'
import Accordian from './Accordian'
import { faqs } from '../constants/data';

const Faqs = () => {
  return (
    <section id='faqs' className='section w-[70%]'>
      <style>
        {`
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
        <div key={index} id='faqdiv' className='p-4 w-[100%] rounded-lg bg-white/10 backdrop-blur-md my-2'>
            <Accordian key={index} question={faq.question} answer={faq.answer} />
        </div>
      ))}
    </div>
    </section>
  )
}

export default Faqs
