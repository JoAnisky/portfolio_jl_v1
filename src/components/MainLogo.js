import React from 'react';
import { HashLink } from 'react-router-hash-link';
const MainLogo = (props) => {
    return (
        <>
            <div className={`main-logo ${props.visible ? "hide-logo" : "show-logo" }`}>
                <HashLink smooth to="#home" aria-label="home">
                    <svg id="main-logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 65 61">
                    <title>Logo Home Page</title>
                        <path fillRule="evenodd" clipRule="evenodd" d="M53.578 12.876V43.666L26.7977 59.0504L0.0173454 43.666V12.8887L11.4966 6.28814L21.9258 0.524603C22.4092 0.25747 23.0176 0.432776 23.2848 0.916158C23.3727 1.07532 23.4127 1.24804 23.4095 1.41767L23.487 1.36963V45.5007L11.2146 38.8322L11.2146 37.88L11.2146 36.8372L21.2628 41.7195V3.17611L12.4788 8.03041L2.01735 14.0458V42.5084L26.7977 56.7439L51.578 42.5084L51.578 14.0585L31.7643 3.16097V41.7195L41.8125 36.8372L41.8125 37.88L41.8125 38.8322L29.5401 45.5007V1.36963L29.6376 1.4301C29.6322 1.25714 29.6717 1.08053 29.7611 0.917924C30.0272 0.434004 30.6353 0.257471 31.1192 0.523627L53.578 12.876Z" stroke="#58FD1C" strokeWidth="2" strokeLinecap="round" className="svg-elem-1"></path>
                    </svg>
                </HashLink>
            </div>
        </>
    );
}

export default MainLogo;