import styled from 'styled-components';

import bgImg from '../../images/home-bg.png';

export const SectionHome = styled.section`
  padding: 32px;
  width: 100%;
  min-width: 320px;
  max-width: 1440px;
  margin: auto;
  min-height: 800px;
  width: 100%;

  @media (width<740px) {
    padding: 16px;
  }
`;
export const ContainerHome = styled.div`
  width: 100%;
  background: var(--red-prim-color) url(${bgImg}) right/ 50% 100% no-repeat;
  color: var(--white-text-prim);
  border-radius: 30px;
  height: 100%;
  position: relative;

  @media (width<1260px) {
    background: var(--red-prim-color) url(${bgImg}) right/ 700px 100% no-repeat;
  }
  @media (width<950px) {
    background: url(${bgImg}) right/ cover no-repeat;
  }
`;

export const HomeContent = styled.div`
  padding: 163px 0;
  margin-left: 96px;
  width: 517px;

  @media (width<740px) {
    margin: auto;
    width: 250px;
    padding: 100px 0 163px 0;
  }
`;

export const TitleHome = styled.h1`
  font-size: 70px;
  width: 100%;
  font-weight: var(--fw-bold);
  line-height: 1;
  letter-spacing: -0.02em;
  margin: 0 0 28px 0;

  @media (width<740px) {
    font-size: 35px;
  }
`;

export const Description = styled.p`
  width: 100%;
  font-size: 28px;
  line-height: 1.07;
  letter-spacing: -0.02em;

  @media (width<740px) {
    font-size: 21px;
  }
`;

export const ButtonHome = styled.button`
  font-size: 20px;
  font-weight: var(--fw-bold);
  color: var(--white-text-prim);
  line-height: var(--ln-text);
  border-radius: 30px;
  padding: 18px 79px 18px 50px;
  background-color: transparent;
  border: 1px solid var(--white-sec-prim);

  position: relative;
  margin-top: 64px;

  svg {
    transition: transform 0.5s ease;
    position: absolute;
    right: 50px;
    top: 21px;
  }

  &:hover svg {
    transform: rotate(53deg);
  }
`;

export const ContainerExperienced = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  position: absolute;
  bottom: 50px;
  right: 50px;

  width: 284px;
  height: 118px;
  color: #000;
  background-color: #fff;
  border-radius: 20px;
  padding: 32px;

  & .svg-done {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--red-prim-color);
    width: 54px;
    height: 54px;
    border-radius: 13px;
  }
  @media (width<740px) {
    bottom: 25px;
    right: 25px;
    padding: 16px;

    width: 190px;
    height: 78px;

    & .svg-done {
      width: 37px;
      height: 37px;
      padding: 7px;
    }
  }
`;

export const ExperiencedContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const ExperiencedText = styled.p`
  font-size: 16px;
  color: var(--black-text-sec);
`;
export const ExperiencedNumberValue = styled.p`
  font-size: 20px;
  font-weight: 700;

  color: var(--black-text-prim);
`;
