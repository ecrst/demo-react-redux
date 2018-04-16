import React, { Component, Fragment as Fr } from 'react';

import { openModal, closeModal, signOut } from '../../actions';

import Modal from './Modal';
import LoginForm from './LoginForm'
import { HeaderView } from '../views/HeaderView'
import { createHeaderButton } from '../views/ButtonView'
import { connect } from 'react-redux';
import SignUpForm from './SignUpForm';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {

        }

        this.handleClick = this.handleClick.bind(this);
        this.switchModal = this.switchModal.bind(this);
    }

    handleClick(e) {
        const target = e.target.name
        switch(target) {
            case 'Sign Out':
                this.props.signOut().then(() => {
                    this.props.history.push('/');
                });
                return
            case 'Profile':
                this.props.history.push('/profile');
                return
            case 'Sign In':
            case 'Sign Up':
                this.props.openModal(target);
                return
        }
    }

    switchModal(target) {
        this.props.closeModal();
        this.props.openModal(target)
    }

    render() {
        const isLogged = this.props.isLogged;
        const modalChild = this.props.modal.child;
        const buttons = isLogged 
            ? (
                <Fr>
                    {createHeaderButton('Profile', this.handleClick)}
                    {createHeaderButton('Sign Out', this.handleClick)}
                </Fr>
            ) : (
                <Fr>
                    {createHeaderButton('Sign Up', this.handleClick)}
                    {createHeaderButton('Sign In', this.handleClick)}
                </Fr>
            )
        
        const modal = this.props.modal.open
            && (
                <Modal close={this.props.closeModal}>
                    {this.props.modal.child === 'Sign Up' ? 
                        <SignUpForm/> :
                        <LoginForm/>}
                </Modal>
            ) 
        return <HeaderView buttons={buttons} modal={modal} />;
    }
}
function mapStateToProps({modal, signIn: {isLogged}}) {
    return {modal, isLogged};
}

export default connect(mapStateToProps, {openModal, closeModal, signOut})(Header);