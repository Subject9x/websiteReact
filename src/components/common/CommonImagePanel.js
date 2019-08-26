import React, {Component} from 'react';
import {Container} from 'reactstrap';
/*
WebsiteReact
Peter Roohr
Overview:
  Common image panel;
    displays an image, that the user can expand by clicking.
    then, user can click-off and the iamge shrinks
*/

class CommonImagePanel extends Component{
  constructor(){
    super();
    this.setState({"clicked": 0});
  }
  render(){
    //this.props.url = image url
    //
    return(
      <Container>

      </Container>
    );
  }
}

export default CommonImagePanel;


