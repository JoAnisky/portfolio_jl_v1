import React from 'react';

const MenuBurger = (props) => {
    const {visible, handleShow} = props;

    return (
        <div>
            <button className={`menu-burger__btn ${visible ? "opened" : "closed"}`} aria-label="Menu toggle" title="Menu toggle" onClick={props.handleShow}>
                <div className='burger-box'>
                    <div className='burger-box__inner'>
                    </div>
                </div>
            </button>
        </div>

    );
}

export default MenuBurger;
