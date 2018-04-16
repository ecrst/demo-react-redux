import React from 'react';

export function ButtonView(props) {
    return (
        <button 
            className={props.className}
            onClick={props.onClick}
            name={props.name}
        >
            {props.children}
        </button>
    )
}

export function createHeaderButton(name, handleClick) {
    return (
        <ButtonView name={name} className="header-button" onClick={handleClick}>{name}</ButtonView>
    )
}