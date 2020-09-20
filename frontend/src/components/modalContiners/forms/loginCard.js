import React from 'react';

export const Login = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Enter your email"
          //value={}//value should be email
          //onChange={this.handleChange}
        />
        <label htmlFor="email">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          //value={} // value should be password
          //onChange={this.handleChange}
        />
        <button type="submit">Login</button>
    </form>
  );
};
export default Login;