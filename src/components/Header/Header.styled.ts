import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding: 20px 50px;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    background: var(--white-sec-prim);
    width: 100%;
    height: 1px;
    bottom: -0.5px;
    left: 0;
  }
`;
export const HeaderContainer = styled.div`
  max-width: 1184px;
  width: 100%;
  margin: auto;
  display: flex;
  gap: 32px;
  justify-content: space-between;
  align-items: center;
  .logo {
    display: inline-block;
    font-size: 24px;
    font-weight: var(--fw-bold);
    line-height: 1.167;
  }
  a {
    color: var(--white-text-prim);
  }

  @media (width<950px) {
    flex-direction: column;
  }
`;

export const RightPart = styled.div`
  display: flex;
  gap: 92px;
  justify-content: space-between;
  max-width: 533px;
  width: 100%;

  @media (width<950px) {
    gap: 32px;
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`;

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;

  max-width: 141px;
  width: 100%;
`;
export const NavList = styled.ul`
  display: flex;
  gap: 40px;
  justify-content: space-between;
  width: 100%;

  .header-nav-link {
    display: inline-block;
    font-size: 16px;
    line-height: var(--ln-text);
    letter-spacing: -0.001em;
  }
`;

export const AuthBtnsContainter = styled.div`
  max-width: 300px;
  width: 100%;
  height: 48px;

  display: flex;
  gap: 8px;
  justify-content: space-between;

  @media (width<350px) {
    flex-direction: column;
  }
  @media (width<950px) {
    height: auto;
    width: auto;
    align-items: center;
  }
`;
export const BaseButton = styled.button`
  font-size: 16px;
  font-weight: var(--fw-bold);
  color: var(--white-text-prim);
  line-height: var(--ln-text);
  border-radius: 30px;

  &:is(:hover, :focus) {
    color: var(--red-prim-color);
    background-color: var(--white-text-prim);
  }
`;
export const ButtonSignIn = styled(BaseButton)`
  padding: 14px 37px;
  width: 124px;
  background-color: transparent;
  border: 1px solid var(--white-sec-prim);
`;
export const ButtonSignUp = styled(BaseButton)`
  width: 168px;
  padding: 14px 40px;
  background-color: var(--red-prim-color);
`;
