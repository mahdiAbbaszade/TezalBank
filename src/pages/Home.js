import React from 'react'
import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'
import Section from '../Component/Section/Section1'
import Section2 from '../Component/Section/Section2'
import Section3 from '../Component/Section/Section3'
import Section4 from '../Component/Section/Section4'
import Section5 from '../Component/Section/Section5'


const Home = () => {
    return (
        <>
            <div className='container-fluid p-0'>
                <Header />
                <Section />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Footer />
            </div>
        </>
    )
}

export default Home