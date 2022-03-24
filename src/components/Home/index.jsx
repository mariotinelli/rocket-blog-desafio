import React from 'react'
import { HomeComponent, Image, Section } from './styled';
import TextGroup from './TextGroup';
import Header from './Header'

const Home = () => (

    <>
        <HomeComponent>
            <Header />
            <Section>
                <TextGroup />
                <Image />
            </Section>
        </HomeComponent>
    </>

)

export default Home;