import styled from 'styled-components'


export const PostComponent = styled.div`
    width: 23.125rem;
    height: 28.6588rem;
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    flex-direction: column;
    gap: 0.9981rem;
`;

export const Image = styled.img``;

export const PostDate = styled.p`
    font-family: "Roboto";
    color: var(--text-black);
    font-size: var(--font-3);
    font-weight: 400;
`;

export const Title = styled.p`
    font-family: "Roboto";
    color: var(--purple-bg);
    font-size: var(--font-4);
    font-weight: 700;
`;

export const Subtitle = styled(PostDate)``;

