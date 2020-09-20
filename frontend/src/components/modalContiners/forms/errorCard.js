import React from 'react';

export const Error = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
        You should not be seeing this.
    </form>
  );
};
export default Error;