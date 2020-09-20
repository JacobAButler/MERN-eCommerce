import React, { Component } from 'react'
import ButtonTrigger from './buttonTrigger';
import DivTrigger from './divTrigger';
import TextTrigger from './textTrigger';



export class Trigger extends Component {
  triggerSwitch(type){
    switch(type){
      case 'button':
        return <ButtonTrigger 
                  showModal={this.props.showModal}
                  buttonRef={this.props.buttonRef}
                  triggerText={this.props.triggerText}
                  triggerType={this.props.triggerType}

                />
      case 'text':
        return <TextTrigger 
                  showModal={this.props.showModal}
                  buttonRef={this.props.buttonRef}
                  triggerText={this.props.triggerText}
                  triggerType={this.props.triggerType}

                />
      default:
        return <DivTrigger 
                  showModal={this.props.showModal}
                  buttonRef={this.props.buttonRef}
                  triggerText={this.props.triggerText}
                  triggerType={this.props.triggerType}
                  triggerImage={this.props.triggerImage}

                />

    }
  }
  render() {
    return (
      <div style = {{width: "150px"}}>
        {this.triggerSwitch(this.props.triggerType)}
      </div>
    )
  }
}

export default Trigger
