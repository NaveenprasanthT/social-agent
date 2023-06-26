export const Cards = styled.div`
    padding: 4% 0%;
    display: flex;display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:1.5rem;
    margin-top: ${({condition}) => (condition ? '1rem':'3rem')};
    transition: all 1.5s ease-in-out;
    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const Cards2 = styled.div`
    padding: 4% 0%;
    display: flex;display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:1.5rem;
    margin-top: ${({condition}) => (condition ? '1rem':'3rem')};
    transition: all 1.5s ease-in-out;
    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const Card1 = styled.div`
    position: relative;
    height: ${({condition}) => (condition ? '475px':'400px')};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    overflow: hidden;
    transform:${({condition}) => (condition ? 'rotate(0deg)':'rotate(-18deg)')};
    left: ${({condition}) => (condition ? '0%':'67%')};
    transition: all 1.5s ease-in-out;
`

export const Card2 = styled.div`
    position: relative;
    height: 475px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    overflow: hidden;
    bottom: ${({condition}) => (condition ? '0%':'-10%')};
    transition: all 1.5s ease-in-out;
`

export const Card3 = styled.div`
    position: relative;
    height: ${({condition}) => (condition ? '475px':'400px')};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    overflow: hidden;
    transform:${({condition}) => (condition ? 'rotate(0deg)':'rotate(18deg)')};;
    right: ${({condition}) => (condition ? '0%':'67%')};
    transition: all 1.5s ease-in-out;
`

export const Card4 = styled.div`
    position: relative;
    height: ${({condition}) => (condition ? '475px':'400px')};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    overflow: hidden;
    transform:${({condition}) => (condition ? 'rotate(0deg)':'rotate(-18deg)')};
    left: ${({condition}) => (condition ? '0%':'67%')};
    transition: all 1.5s ease-in-out;
`
import styled from "styled-components"

export const Card5 = styled.div`
    position: relative;
    height: 475px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    overflow: hidden;
    bottom: ${({condition}) => (condition ? '0%':'-10%')};
    transition: all 1.5s ease-in-out;
`

export const Card6 = styled.div`
    position: relative;
    height: ${({condition}) => (condition ? '475px':'400px')};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    overflow: hidden;
    transform:${({condition}) => (condition ? 'rotate(0deg)':'rotate(18deg)')};;
    right: ${({condition}) => (condition ? '0%':'67%')};
    transition: all 1.5s ease-in-out;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    transition: all .5s ease-in-out;
    background-color: rgba(0,0,0,0.3);
    
    ${Card1}:hover & {
        background-color: rgba(0,0,0,0.6);
    }
    ${Card2}:hover & {
        background-color: rgba(0,0,0,0.6);
    }
    ${Card3}:hover & {
        background-color: rgba(0,0,0,0.6);
    }
    ${Card4}:hover & {
        background-color: rgba(0,0,0,0.6); /* Adjust the opacity as needed */
    }
    ${Card5}:hover & {
        background-color: rgba(0,0,0,0.6); /* Adjust the opacity as needed */
    }
    ${Card6}:hover & {
        background-color: rgba(0,0,0,0.6); /* Adjust the opacity as needed */
    }
`

export const Content = styled.p`
    z-index: 11;
    margin: 10% 10%;
    font-size: 17px;
    font-weight: 400;
    opacity: 0;
    padding-top: 30%;
    transition: all 0.9s ease-in-out;
    color : #fff;
    ${Card1}:hover & {
        opacity: 1;
        scale: 1.15;
    }
    ${Card2}:hover & {
        opacity: 1;
        scale: 1.15;
    }
    ${Card3}:hover & {
        opacity: 1;
        scale: 1.15;
    }
    ${Card4}:hover & {
        opacity: 1;
        scale: 1.15;
    }
    ${Card5}:hover & {
        opacity: 1;
        scale: 1.15;
    }
    ${Card6}:hover & {
        opacity: 1;
        scale: 1.15;
    }
`
export const CardImg = styled.img`
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    transform: scale(1.02);    
    border-radius: 20px;
    z-index: ${({condition}) => (condition ? '5':'7')};
    transition: all 1s ease-in-out;
`

export const CardBtn = styled.button`
    z-index: 10;
    margin: 7% 5%;
    outline: none;
    border: 1.45px solid #ffffff;
    border-radius: 5px;
    background-color: transparent;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    padding: 10px 0%;
    opacity:  ${({condition}) => (condition ? '1':'0')};
    transition : all 1s ease-in-out;
    cursor: pointer;

    ${Card1}:hover & {
        background-color: #ffffff5e;
    }
    ${Card2}:hover & {
        background-color: #ffffff5e;
    }
    ${Card3}:hover & {
        background-color: #ffffff5e;
    }
    ${Card4}:hover & {
        background-color: #ffffff5e;
    }
    ${Card5}:hover & {
        background-color: #ffffff5e;
    }
    ${Card6}:hover & {
        background-color: #ffffff5e;
    }
`
