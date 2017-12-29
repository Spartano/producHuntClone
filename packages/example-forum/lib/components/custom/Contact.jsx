import React, { PropTypes, Component } from 'react';
import { registerComponent } from 'meteor/vulcan:core';

const MoviesList = () => 
  
  <div style={ { maxWidth: '500px', margin: '20px auto' } }>

    Hello World!

    {/* user accounts placeholder */}

      <div className="movies">
        
        {/* new document form placeholder */}
        
        {/* documents list placeholder */}
        
        {/* load more placeholder */}

      </div>

  </div>

registerComponent('ContactTest', MoviesList);