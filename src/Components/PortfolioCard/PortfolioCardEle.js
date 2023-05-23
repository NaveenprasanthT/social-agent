

import styled from 'styled-components'
import Image from 'next/image';

export const CardWrap = styled.div`
    width: 360px;
    height: 460px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    background: rgb(255,255,255);
background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(128,128,128,1) 53%);
`;
export const ContentWrap = styled.div`
    width: 84%;
    height: 0;
    opacity: 0;
    transition: .8s ease-in-out;
    
    ${CardWrap}:hover & {
        /* height: 50%; */
        opacity: 1;        
    }
`;
export const Badge = styled.div`
    color: #fff;
    background: green;
    width: max-content;
    left: 0;
    z-index: 10;
    margin-top: 7%;
    margin-left: 8%;
`;
export const Badge2 = styled.div`
    color: #fff;
    background: #000;
    width: max-content;
    position: absolute;
    top: 4.4%;
    left: 6.8%;
    z-index: 10;
`;
export const Content = styled.div`
    margin-left: 8%;
    margin-top: 10%;
`;
export const MoreBtn = styled.div`
    margin-left: 8%;
`;
export const Img = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    border-radius: 20px;
    z-index: 1;
    transition: 0.6s;
    
    ${CardWrap}:hover & {
        opacity: 1;
        transform: translateY(60%);
    }
`;
export const ServiceWrap = styled.div`

`;
export const Button = styled.button`

`;