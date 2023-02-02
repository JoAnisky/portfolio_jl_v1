import React from 'react';

const MenuBurger = (props) => {

    return (
        <button className='menu-burger__btn' onClick={props.handleShow}>
            <div className='burger-box'>
                <div className='burger-box__inner'>
                </div>
            </div>
        </button>
    );
}

export default MenuBurger;
