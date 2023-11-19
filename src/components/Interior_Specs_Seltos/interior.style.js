import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;

    .title{
        margin-top: 5rem;
        height: 15vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        h1{
            color: white;
            font-weight: 500;
            letter-spacing: 0.8px;
            font-size: 2rem;
        }
    }

    
`;

export const Content = styled.div`
    background-image: url('/images/seltos_carousel/int_seltos.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: black;
    height: 85vh;
`;