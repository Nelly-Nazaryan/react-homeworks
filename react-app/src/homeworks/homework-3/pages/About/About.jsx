import React, { Component } from 'react'
import ParagraphWithTitle from '../../components/ParagraphWithTitle'
import UserCard from '../../components/UserCard'

const usersData = [
    {
        name: 'Jennifer Soft',
        position: 'Founder and CEO',
        img: 'https://www.free-css.com/assets/files/free-css-templates/preview/page263/simple-house/assets/img/about-01.jpg',
        about: 'Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.',
    },
    {
        name: 'Daisy Walker',
        position: 'Executive Chef',
        img: 'https://www.free-css.com/assets/files/free-css-templates/preview/page263/simple-house/assets/img/about-02.jpg',
        about: 'Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.',
    },
    {
        name: 'Florence Nelson',
        position: 'Kitchen Manager',
        img: 'https://www.teahub.io/photos/full/206-2064062_korean-girls-most-beautiful.jpg',
        about: 'Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.',
    },
    {
        name: 'Valentina Martin',
        position: 'Culinary Director',
        img: 'https://w0.peakpx.com/wallpaper/876/717/HD-wallpaper-lisa-blackpink-korean-girl-kpop-lalisa-korean-cute.jpg',
        about: 'Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus.',
    },
]

export default class About extends Component {
    render() {
        return (
            <>
                <ParagraphWithTitle
                    title="Welcome to Simple House"
                    paragraph="Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites."
                />
                <div>
                    {
                        usersData.map(user => (<UserCard {...user} key={user.img} />))
                    }
                </div>
               
            </>
        )
    }
}
