import React from 'react';

const MenuBurger = (props) => {
    let {visible, ...handleShow} = props;
    console.log(visible);
    return (
        <div>
            <button className={`menu-burger__btn ${visible ? "opened" : "closed"}`}  onClick={props.handleShow}>
                <div className='burger-box'>
                    <div className='burger-box__inner'>
                    </div>
                </div>
            </button>
        </div>

    );
}

export default MenuBurger;
