import React from 'react'

const Loader = () => {
  return (
    <div className='loader__wrapper'>
      <div className='loader__container'>
        <div className='loader__logo'>
          <svg width="100" height="105" viewBox="0 0 55 59" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="svg-elem-1" d="M23.1948 1.03027L12.7729 6.78971L1.80256 13.0977L1.80256 42.7176L27.5829 57.5276L53.3632 42.7176L53.3632 13.0977L31.4225 1.03027" stroke="#58FD1C" strokeWidth="2" strokeLinecap="round"></path>
              <path className="svg-elem-2" d="M32.5495 2.37923V41.3499L42.5977 36.4676L42.5977 37.5104L42.5977 38.4625L30.3253 45.131V1L32.5495 2.37923Z" fill="#58FD1C"></path>
              <path className="svg-elem-3" d="M22.048 2.37923V41.3499L11.9998 36.4676L11.9998 37.5104L11.9998 38.4625L24.2722 45.131V1L22.048 2.37923Z" fill="#58FD1C"></path>
          </svg>
        </div>
          <div className='loader__loading'>
            <p>Chargement</p>
              <div className='dots__container'>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
          </div>
      </div>
    </div>
  )
}
export default Loader;