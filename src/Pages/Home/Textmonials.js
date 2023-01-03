import React from 'react';
import quote from "../../assets/icons/quote.svg"
import people1 from "../../assets/images/people1.png"
import people2 from "../../assets/images/people2.png"
import people3 from "../../assets/images/people3.png"
import Review from './Review';

const Textmonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            review: "",
            img: people1,
            location: "California"
        },
        {
            _id: 2,
            name: "Turcy be",
            review: "",
            img: people2,
            location: "California"
        },
        {
            _id: 3,
            name: "Robart Wight",
            review: "",
            img: people3,
            location: "California"
        },
    ]
    return (
        <section  className='py-32'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div className='w-24 lg:w-48 '>
                    <img src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Textmonials;