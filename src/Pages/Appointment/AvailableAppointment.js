import { format } from 'date-fns/esm';
import React from 'react';

const AvailableAppointment = ({date}) => {
    return (
        <div>
            <h3 className='text-xl text-center text-secondary'>Available Appointments on {format(date, "PP")}</h3>
        </div>
    );
};

export default AvailableAppointment;