import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitate buying and selling of progucts or services over the internet serves as a virtual marketplace where businesses and individual showcase their products, interact with customers, and conduct transactions without the need for a physical presence.</p>
      <p>E-commerce website typically display products or servies a detailed descriptions, images prices and any availablelike (e.g.,sizes, colors). Each product usaullay has its own detail with relevant information.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
