import React from 'react'

export default function Item({
    title,
    message,
    imgSrc
}) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href="">
            <div className="cat-item d-flex align-items-center mb-4">
                <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                    <img className="img-fluid" src={imgSrc} alt="" />
                </div>
                <div className="flex-fill pl-3">
                    <h6>{title}</h6>
                    <small className="text-body">{message}</small>
                </div>
            </div>
        </a>
    </div>
  )
}
