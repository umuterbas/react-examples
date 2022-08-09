import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import { UserProvider } from './UserContext';

export default function Context() {
  return (
    <div className='component'>
      {/* <UserContext.Provider
        value={{
          user: {
            name: '',
            email: 'test2@test.com',
          },
        }}>
        <h1>App</h1>
        <UserContext.Consumer>
          {(value) => {
            return <Navbar email={value.user.email} />;
          }}
        </UserContext.Consumer>

        <Main user={user} updateUser={updateUser} />
      </UserContext.Provider> */}
      <UserProvider>
        <Navbar />
        <Main />
      </UserProvider>
    </div>
  );
}
