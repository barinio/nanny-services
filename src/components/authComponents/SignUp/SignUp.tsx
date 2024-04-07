import { useEffect } from 'react';
import {
  Overlay,
  ModalContent,
  CloseButton,
  CloseIcon,
  ModalHeader,
  ButtonStyle,
} from './SignUp.styled';

import icons from '../../../images/icons.svg';

type SignUpProps = {
  onClose: () => void;
};

const SignUp: React.FC<SignUpProps> = ({ onClose }) => {
  // const [isSureDeleteUser, setIsSureDeleteUser] = useState(false);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [onClose]);

  return (
    <>
      <Overlay className="overlay" onClick={onClose} />
      <ModalContent className="login-modal">
        <CloseButton type="button" onClick={onClose}>
          <CloseIcon width="16" height="16">
            <use href={icons + '#icon-close'}></use>
          </CloseIcon>
        </CloseButton>
        <ModalHeader className="modal-header">
          <h2>Log In</h2>
          <p>
            Welcome back! Please enter your credentials to access your account
            and continue your babysitter search.
          </p>
        </ModalHeader>
        <form>
          <ButtonStyle
            className="login-button"
            type="button"
            // onClick={}
          >
            logOut
          </ButtonStyle>
        </form>
      </ModalContent>
    </>
  );
};

export default SignUp;
