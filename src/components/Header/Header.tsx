import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AuthBtnsContainter,
  ButtonSignIn,
  ButtonSignUp,
  HeaderContainer,
  HeaderStyled,
  NavList,
  NavStyled,
  RightPart,
} from './Header.styled';
import SignUp from '../authComponents/SignUp/SignUp';

const Header = () => {
  const [authUser] = useState(false);
  const [isOpenSignUpModal, setIsOpenSignUpModal] = useState(false);
  const openSignUpModal = () => {
    setIsOpenSignUpModal(true);
    console.log('45');
  };
  const onClose = () => {
    console.log('click gihih');
    setIsOpenSignUpModal(false);
  };
  return (
    <>
      <HeaderStyled>
        <HeaderContainer className="header-container">
          <NavLink to="/" className="logo">
            Nanny.Services
          </NavLink>

          <RightPart className="right-part">
            <NavStyled>
              <NavList>
                <li>
                  <NavLink className="header-nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="header-nav-link" to="/nannies">
                    Nannies
                  </NavLink>
                </li>
                {authUser && (
                  <li>
                    <NavLink className="header-nav-link" to="/favorites">
                      Favorite
                    </NavLink>
                  </li>
                )}
              </NavList>
            </NavStyled>

            {!authUser && (
              <AuthBtnsContainter className="auth-btns-containter">
                <ButtonSignIn>Log In</ButtonSignIn>
                <ButtonSignUp onClick={openSignUpModal}>
                  Registration
                </ButtonSignUp>
              </AuthBtnsContainter>
            )}
          </RightPart>
        </HeaderContainer>
      </HeaderStyled>
      {isOpenSignUpModal && <SignUp onClose={onClose} />}
    </>
  );
};

export default Header;
