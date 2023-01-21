import React from 'react';

const DoctorRow = ({doctor, index}) => {
    const {name, specialty, img} = doctor;
    return (
        <tr>
                  <th>{index + 1}</th>
                  <td>{name}</td>
                  <td>{img}</td>
                  <td>{specialty}</td>
                  <td>Blue</td>
                </tr>
    );
};

export default DoctorRow;