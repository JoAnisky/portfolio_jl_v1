import React from 'react';

const MainLogo = () => {
    return (
        <div className='main-logo'>
            <a href="/" aria-label="home">
                <svg id="main-logo" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 52 52">
                    <title>Logo</title>
                    <path d="M1 37.132V13.044L22 1l21 12.044v24.088L22 49.176 1 37.132Z" strokeWidth="1.5" stroke="#58FD1C"/>
                    <path d="m33.363 32.743 1.776.736-1.776.814H27.37l-2.886-2.09V15.79l2.22 4.473s-.888 9.948 0 11.387c.888 1.44 6.66 1.094 6.66 1.094ZM10.227 32.743l-1.775.736 1.775.814h5.994l2.886-2.09V15.79l-2.22 4.473s.888 9.948 0 11.387c-.888 1.44-6.66 1.094-6.66 1.094Z" fill="#58FD1C"/>
                </svg>
            </a>
        </div>
    );
}

export default MainLogo;
