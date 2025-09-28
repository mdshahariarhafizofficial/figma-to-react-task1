import React from 'react';

const Faq = () => {
    return (
        <section className='py-10 lg:py-[120px] px-4 md:px-10 lg:px-0'>

            {/* Title */}
            <div className='pb-10 lg:pb-30'>
                <h2 className='text-[#1b1743] font-bold text-2xl md:text-3xl lg:text-5xl text-center'>Frequently asked questions</h2>
            </div>

            {/* Faq */}
            <div className='flex items-center justify-center' id='faq-sec'>

                <div className="join join-vertical bg-base-100 w-[920px]">


                {/* Q1 */}
                <div className="collapse collapse-arrow join-item border-base-300 border-b-1">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title font-semibold px-0 py-4 md:py-8 text-[#1b1743] text-base md:text-2xl">Do plumbers deal with heating?</div>
                    <div className="collapse-content text-sm md:text-lg px-0 font-normal text-[#2a2f32] md:-mt-5 mb-5 w-[306px] md:w-[616px] lg:w-[848px]">Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.</div>
                </div>


                {/* Q2 */}
                <div className="collapse collapse-arrow join-item border-base-300 border-b-1">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold px-0 py-4 md:py-8 text-[#1b1743] text-base md:text-2xl">Do you charge a call out fee?</div>
                    <div className="collapse-content text-sm md:text-lg px-0 font-normal text-[#2a2f32] md:-mt-5 mb-5 w-[306px] md:w-[616px] lg:w-[848px]">Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.</div>
                </div>


                {/* Q3 */}
                <div className="collapse collapse-arrow join-item border-base-300 border-b-1">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold px-0 py-4 md:py-8 text-[#1b1743] text-base md:text-2xl pr-14">How quickly can your company send out an engineer?</div>
                    <div className="collapse-content text-sm md:text-lg px-0 font-normal text-[#2a2f32] md:-mt-5 mb-5 w-[306px] md:w-[616px] lg:w-[848px]">Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.</div>
                </div>


                {/* Q4 */}
                <div className="collapse collapse-arrow join-item border-base-300 border-b-1">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold px-0 py-4 md:py-8 text-[#1b1743] text-base md:text-2xl">What should I do if I get a water leak?</div>
                    <div className="collapse-content text-sm md:text-lg px-0 font-normal text-[#2a2f32] md:-mt-5 mb-5 w-[306px] md:w-[616px] lg:w-[848px]">Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.</div>
                </div>



                </div>                
            </div>

        </section>
    );
};

export default Faq; 