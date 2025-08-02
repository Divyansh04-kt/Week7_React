import React, { useState } from 'react';

function GuestGreeting() {
  return (
    <div>
      <h2>Please sign up.</h2>
      <p>Login to book tickets.</p>
    </div>
  );
}

function UserGreeting() {
  return (
    <div>
      <h2>Welcome back</h2>
      <p>You can now book your flight tickets.</p>
    </div>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogout} />;
  } else {
    button = <LoginButton onClick={handleLogin} />;
  }

  return (
    <div style={{ padding: '150px', fontFamily: 'Arial' }}>
      <h1>Flight Ticket Booking App</h1>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

export default App;
