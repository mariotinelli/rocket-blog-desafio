import React from 'react'
import { Arrow, Container, Text } from './styled';

const TextGroup = () => (

    <>
        <Container>
            <Text fontFamily="Poppins" fontSize="2.25rem" color="#9e6dc2" fontWeight="700">
                Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
            </Text>
            <Text fontFamily="Roboto" fontSize="1.125rem" color="#fbf6ff" fontWeight="400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat <br/> 
                aenean sit vitae, sed tristique placerat hac. 
            </Text>
            <Text fontFamily="Roboto" fontSize="1.125rem" color="#9e6dc2" fontWeight="700">
                Veja mais <Arrow /> 
            </Text>
        </Container>
    </>

)

export default TextGroup;