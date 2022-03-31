import styled from 'styled-components'
import arrow from '../../../images/arrow-right.svg'

export const Container = styled.div`
    width: 35.625rem;
    height: 19.4375rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1.5rem;
`;

export const Text = styled.p`
    font-family: ${props => props.fontFamily};
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    display: flex;
`;

export const Arrow = styled.img.attrs({src: arrow})`
    margin-left: 0.5rem;
    
    &:hover {
        cursor: pointer;
        transition: .5s;
        transform: scale(1.5, 1.5);
    }
`;