import styled from 'styled-components';

export const Container = styled.div`
    padding: 2%;
    background: #F1D071;
    color: #5A7F64;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`

export const Link = styled.a`
    color: #5A7F64;
    margin-bottom: 2%;
    font-size: 18px;
    text-decoration: none;

    &:hover {
        color: #ff9c00;
        transition: 200ms ease-in;
    }
`

export const Title = styled.p`
    font-size: 24px;
    color: #5A7F64;
    margin-bottom: 8%;
    font-weight: bold;
`