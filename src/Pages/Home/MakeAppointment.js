import React from 'react';
import doctor from "../../assets/images/doctor.png"
import appointment from "../../assets/images/appointment.png"
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center '>
            <div className='flex-1 hidden lg:block'> 
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white'>
                <h3 className='text-xl text-primary py-3'>Appointment</h3>
                <h2 className='text-3xl pb-2'>Make an Appointment Today</h2>
                <p className='pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, debitis. Error harum odit tempora asperiores aut incidunt, sunt accusamus, omnis sed, ut dolores in. Ducimus libero sit rerum architecto ad autem, quaerat inventore maxime quos quam voluptate alias animi assumenda.</p>
                <PrimaryButton children={"Get Started"}></PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;