import React, { useState } from 'react';
import '../notify.css'; // Assuming your CSS file is named notify.css

const Notify = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  
  const [notifyList, setNotifyList] = useState([]); // Array to store emails

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsSuccess(false);
  };

  const validateEmail = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    setNotifyList([...notifyList, email]);
    console.log(notifyList);

  

   

    setIsLoading(true);
    try {
      const response = await new Promise((resolve) => setTimeout(resolve, 100)); // Simulate delay
      console.log('Email sent successfully:', response);
      setIsSuccess(true);
      
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isButtonDisabled = !email || !validateEmail(email) || isLoading || isSuccess || notifyList.includes(email);
  

  return (
    <div className='email'>
      <div className="signup">
        <p className='notifyText'>Be the first to know! Share your email and We'll notify you when it's live</p>
        <form onSubmit={handleSubmit} className="input-container">
          <input
            className={`input ${isSuccess ? 'success' : ''}`}
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="  Please enter your email id"
          />
          <button
            className={`notifyButton ${isButtonDisabled ? 'disabled' : ''}`}
            disabled={isButtonDisabled}
          >
            {isLoading ? (
              <span className="loading-icon">Loading...</span>
            ) : isSuccess ? (
              <span className="success-icon">&#10004;</span>
            ) : (
              'Notify Me'
            )}
          </button>
          
        </form>
        {notifyList.includes(email) ? <p className="notify-message">You are in the notify list</p> : ''}
      </div>
    </div>
  );
};

export default Notify;
