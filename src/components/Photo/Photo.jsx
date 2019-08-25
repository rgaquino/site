import React, { Component } from 'react'
import { Link } from 'gatsby'

import '../../css/styles.css'

class Photo extends Component {
  render() {
    return (
      <div className='photo-test'>
        <div className='row'>
          <div className='col'>
            <img src='http://www.jasontheaker.com/images/3x2portrait/Trying-to-be-Different.jpg' className='photo'/>

          </div>
          <div className='col'>
            <h2>offer a great contrast to each other</h2>
            <p>Location: Sydney, Australia (2019)</p>
            <p>Fragment: Walter Isaacson, "Leonardo da Vinci"</p>
            <p>Camera: Sony a6000 / Sigma 30mm F1.4 DC DN Contemporary</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Photo
