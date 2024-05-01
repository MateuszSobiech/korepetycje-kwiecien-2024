import { ChangeEvent, useState } from 'react';
import { useUsers } from '../HOC/useUsers';

export const SComponent = () => {
  const users = useUsers();
  const [value, setValue] = useState(1);
  const [showUser, setShowUser] = useState(1);

  const shownUsers = users?.slice(0, showUser);

  const handleShowUserChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.valueAsNumber;
    const length = users?.length || 0;

    if (newValue < 1) setShowUser(1);
    else if (newValue > length) setShowUser(length);
    else setShowUser(newValue);
  };

  return (
    <div className='flex gap-4'>
      <section className='border rounded-xl border-green-800 p-8'>
        <h2 className='font-bold'>Currency Rate</h2>
        <div className='flex'>
          <input
            className='block h-4 text-sm w-20 ps-4 py-3 rounded-l focus:outline-none'
            type='number'
            value={value}
            onChange={(e) => setValue(e.target.valueAsNumber)}
          />{' '}
          <label className='block bg-[#121212] px-2 rounded-r'>PLN</label>
        </div>
        <div className='mt-6 flex flex-col gap-4'>
          <p>{(value * 0.25).toFixed(4)} USD</p>
          <p>{(value * 0.23).toFixed(4)} EUR</p>
        </div>
      </section>

      <section className='border rounded-xl border-green-800 p-8'>
        <h2 className='font-bold'>Users List</h2>
        <div className='flex'>
          <h3> show users: </h3>
          <input
            className='ml-6 w-10 rounded'
            type='number'
            value={showUser}
            onChange={handleShowUserChange}
          />
        </div>
        <ol className='list-decimal'>
          {shownUsers?.map((user) => (
            <li key={user.id}>
              {user.name} is {user.age}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};
