import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { isLoading, error, data: users } = useQuery('users', () =>
    fetch('http://localhost:5000/user').then(res =>
      res.json()
    )
  )
//   console.log(users.length)
  if(isLoading) {
    return <Loading></Loading>
  }
    return (
        <div>
            <h2 className='text-2xl'>All users: {users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Index</th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index) => (<UserRow
        key={user._id}
        user={user}
        index={index}
        ></UserRow>))
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;