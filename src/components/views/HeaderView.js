import React from 'react';

export function HeaderView(props) {
    return (
        <div className="Header">
                <div className="header-logo">
                    Demo
                </div>
                <div className="header-buttons-group">
                    {props.buttons}            
                </div>
                {props.modal}
        </div>
    )
}