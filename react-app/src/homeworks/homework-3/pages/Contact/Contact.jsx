import React, { Component } from 'react'
import ParagraphWithTitle from '../../components/ParagraphWithTitle'

import './styles.css'

export default class Contact extends Component {
  render() {
    return (
      <div className='contact'>
            <ParagraphWithTitle
                title="Welcome to Simple House"
                paragraph="Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites."
            />
            <div>
                <form className='form' action="">
                    <input className='input' type="text" />
                    <input className='input' type="text" />
                    <textarea className='input' name="" id="" cols="30" rows="10"></textarea>
                </form>
            </div>
      </div>
    )
  }
}
