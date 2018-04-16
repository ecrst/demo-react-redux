import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';

export default class Modal extends Component {
    constructor(props) {
        super(props);

        this.escClose = this.escClose.bind(this);
    }
    
    componentDidMount() {
        this.modalTarget = document.createElement('div');
        document.body.appendChild(this.modalTarget);
        document.addEventListener('keydown', this.escClose, false);
        this._render(this.props.children);
    }
    
    componentWillUpdate(nextProps) {
        this._render(nextProps.children);
    }
    
    componentWillUnmount() {
        document.removeEventListener('keydown', this.escClose, false);
        ReactDOM.unmountComponentAtNode(this.modalTarget)
        document.body.removeChild(this.modalTarget);
    }

    escClose(e) {
        if (e.keyCode === 27) this.props.close(); 
    }

    _render(children) { 
        ReactDOM.render(
            <Provider store={store} >
                <div className="Modal" onClick={this.props.close}>
                    {children}
                </div>
            </Provider>,
            this.modalTarget
        )
    }

    render() {
        return <noscript />
    }

}   