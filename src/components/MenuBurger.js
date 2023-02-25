import React from 'react';

const MenuBurger = (props) => {
    // eslint-disable-next-line
    const {visible, handleShow} = props;

    return (
        <div>
            <button className={`menu-burger__btn ${visible ? "opened" : "closed"}`} aria-label="Menu toggle" title="Menu toggle" onClick={props.handleShow}>
                <span className='burger-box'>
                    <span className='burger-box__inner'>
                    </span>
                </span>
            </button>
        </div>

    );
}

export default MenuBurger;
