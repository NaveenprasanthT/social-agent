import styled from "styled-components";

export const SliderWrap = styled.div`
    position: fixed;
    top: ${({ sliderActive }) => (sliderActive ? '0' : '-120%')};
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 99;
    background: #000;
    /* opacity: ${({ sliderActive }) => (sliderActive ? '100' : '0')}; */
    transition: .4s;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
      }
`;
export const NavbarWrap = styled.div`
    position: fixed;
    top: ${({ sliderActive }) => (sliderActive ? '0' : '-120vh')};
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 100;
    /* opacity: ${({ sliderActive }) => (sliderActive ? '100' : '0')}; */
    transition: 1s;
`; 