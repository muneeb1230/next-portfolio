
import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import AboutMe from './components/About-me'
import MyServices from './components/MyServices'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

function page() {
  return (
    <div>
      <Header/>
      <Banner/>
      <AboutMe/>
      <MyServices/>
      <Skills/>
      <Project />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page