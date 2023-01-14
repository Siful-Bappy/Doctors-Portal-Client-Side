import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, settreatment }) => {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);
  const formatedDate = format(date, "PP");
  // console.log(formatedDate);

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formatedDate,
      slot: slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    }

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.success === true) {
        toast(`Appointment is set, ${formatedDate} at ${slot}`)
      } else{
        toast.error(`You already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
      }
    })

    settreatment(null)
  }
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-center">Booking for: {name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 justify-items-center mt-5">
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <select name="slot" className="select select-bordered w-full max-w-xs">
                {
                    slots.map(slot =>  <option value={slot}>{slot}</option>)
                }
            </select>
            <input
              type="text"
              name="name"
              value={user.displayName}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name= "email"
              value={user.email}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              placeholder="Type here"
              value={"Submit"}
              className="btn btn-primary w-full max-w-xs font-bold text-white bg-gradient-to-r from-primary to-secondary"
            />
          </form>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
