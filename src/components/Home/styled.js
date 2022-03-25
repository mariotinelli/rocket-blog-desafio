import styled from 'styled-components'
import image from '../../images/featured-image.png'

export const HomeComponent = styled.div`
    border-bottom: 6px solid var(--green);
    background-color: var(--purple-bg);
    padding-top: 4rem;
`;


export const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 73.0713rem;
    margin-inline: auto;
`;

export const Image = styled.img.attrs({src: image})`
    margin-bottom: 4.3125rem;
`;