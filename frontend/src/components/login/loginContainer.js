import React, { Component } from 'react';
import { Modal } from '../modalContainer/modal/modal';
import TriggerButton from '../trigger/triggerButton';

export class loginContainer extends Component {
    render() {
        return (
            <React.Fragment>
            <TriggerButton
              showModal={this.showModal}
              buttonRef={(n) => (this.TriggerButton = n)}
              triggerText={"Login"}
            />
            {this.state.isShown ? (
              <Modal
                onSubmit={this.props.onSubmit}
                modalRef={(n) => (this.modal = n)}
                buttonRef={(n) => (this.closeButton = n)}
                closeModal={this.closeModal}
                onKeyDown={this.onKeyDown}
                onClickOutside={this.onClickOutside}
                product={this.props.props}
              />
            ) : null}
    
          </React.Fragment>
        )
    }
}

export default loginContainer;
