import styled from 'styled-components'


export const SectionComponent = styled.section`
    padding-top: 3.75rem;
    width: 100%;
    background-color: var(--light-purple);
`;

export const Container = styled.div`
    width: 1169.14px;
    width: ${props => props.width};
    margin-bottom: 4.0625rem;
    margin-inline: ${props => props.marginInline === "auto" ? "auto" : ""};
    display: flex;
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
`;

