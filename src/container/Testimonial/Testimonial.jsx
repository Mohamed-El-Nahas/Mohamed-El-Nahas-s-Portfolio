import React, { useState, useEffect } from 'react'

import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import "./testimonial.scss"

const Testimonial = () => {

  const [testimonials, setTestimonials] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  }, []);

  const testValue = testimonials[currentIndex];

  return (
    <>
       <h2 className='head-text-white' style={{marginBottom: 40}}>Customrs <span>Rate</span></h2>
      {testimonials.length && (
        <>
          <div className="testimonial-container app__flex">
            <img src={urlFor(testValue.imageurl)} alt="testimonial" />
            <div className="content">
              <p className="p-text">{testValue.feedback}</p>
              <div>
                <h4 className="bold-text">{testValue.name}</h4>
                <h5 className="p-text">{testValue.company}</h5>
              </div>
            </div>
          </div>
          <div className="buttons app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AppWrap(
  MotionWrap(Testimonial, 'testimonial-section'),
  'testimonials',
  'app__primarybg',
);