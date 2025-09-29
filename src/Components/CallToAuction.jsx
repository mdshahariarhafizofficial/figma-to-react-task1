import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CallToAuction = () => {
    return (
        <section className='py-5 px-5 md:py-10 lg:py-20 mx-4 md:mx-10 lg:mx-0 md:px-10 lg:px-0 bg-[#0058FF] text-white text-center space-y-4 md:space-y-8 rounded-3xl my-10 md:mb-28'>
            {/* Title */}
            <div>
                <h2 className='text-white font-bold text-2xl md:text-3xl lg:text-5xl text-center'>Get In Touch</h2>
            </div>
            <div className='lg:w-[1000px] md:mx-auto'>
                <p className='font-normal leading-7 text-sm lg:text-lg text-center'>Contact us now to enquire our plumbing services, whether you have a commercial project that requires support, or a domestic plumbing task that needs the attention of a trusted professional.</p>
            </div>
            <button className='btn text-[#0058FF]'>
                Book a Professional Plumber
                <FaArrowRight></FaArrowRight>
            </button>
        </section>
    );
};

export default CallToAuction;