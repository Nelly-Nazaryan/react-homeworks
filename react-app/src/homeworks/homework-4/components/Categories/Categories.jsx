import React from 'react'
import data from './data';
import Item from './Item';

export default function Categories() {
  return (
    <div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Categories</span></h2>
        <div className="row px-xl-5 pb-3">
            {
                data.map((data, index) => <Item key={index} {...data} />)
            }
        </div>
    </div>
  )
}
