import React from 'react';

export const Estimate = () => {
  return (
    <div>
      <div>
        SafeKing Email Test
        <form
          className='subform'
          method='POST'
          target='frAttachFiles'
          action='https://script.google.com/macros/s/AKfycbz4ugDopoykE44mMORLKDX9UK4e_vBJlIBWP-fHsVo-YsCNDl1rEQ1C_UKXWPNIui0nVQ/exec'
        >
          <div>
            <label htmlFor='name'>name</label>
            <input name='name'></input>
            <label htmlFor='message'>comment</label>
            <input name='message'></input>
            <label htmlFor='email'>email</label>
            <input name='email'></input>
            <button type='submit'>견적서 보내기</button>
          </div>
        </form>
      </div>
    </div>
  );
};
