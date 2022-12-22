import React, { Component } from 'react'
import ParagraphWithTitle from '../../components/ParagraphWithTitle'
import TabContainer from '../../components/TabContainer'

export default class Home extends Component {
    render() {
        return (
            <>
                <ParagraphWithTitle
                    title="Welcome to Simple House"
                    paragraph="Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites."
                />
                <TabContainer />
            </>
        )
    }
}
