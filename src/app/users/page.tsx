import React from 'react';

interface IData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

async function getData(): Promise<IData[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Users = async () => {
  const data = await getData();

  return (
    <div>
      {data.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );``
};

export default Users;
