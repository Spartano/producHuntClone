import React, { PropTypes, Component } from 'react';
import { registerComponent } from 'meteor/vulcan:core';

const Banner = () => 
  
  <div style={ { maxWidth: '500px', margin: '20px auto' } }>

   banner

  </div>

registerComponent('Banner', Banner);