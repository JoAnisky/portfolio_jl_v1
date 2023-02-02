import React from 'react';

const MenuBurger = (props) => {

    return (
        <div>
            <button className='menu-burger__btn' onClick={props.handleShow}>
                <div className='burger-box'>
                    <div className='burger-box__inner'>
                    </div>
                </div>
            </button>
        </div>

    );
}

export default MenuBurger;
