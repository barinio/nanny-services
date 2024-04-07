import Header from '../../components/Header/Header';
import {
  ButtonHome,
  ContainerExperienced,
  ContainerHome,
  Description,
  ExperiencedContent,
  ExperiencedNumberValue,
  ExperiencedText,
  HomeContent,
  SectionHome,
  TitleHome,
} from './Home.styled';

import icons from '../../images/icons.svg';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <SectionHome>
      <ContainerHome className="home-container">
        <Header />

        <HomeContent className="home-content">
          <TitleHome>Make Life Easier for the Family:</TitleHome>
          <Description>Find Babysitters Online for All Occasions</Description>

          <NavLink to="/nannies">
            <ButtonHome>
              Get started
              <svg width="18" height="18">
                <use href={icons + '#icon-arrow'}></use>
              </svg>
            </ButtonHome>
          </NavLink>
        </HomeContent>

        <ContainerExperienced className="container-experienced">
          <div className="svg-done">
            <svg width="30" height="30">
              <use href={icons + '#icon-done'}></use>
            </svg>
          </div>
          <ExperiencedContent>
            <ExperiencedText>Experienced nannies</ExperiencedText>
            <ExperiencedNumberValue>15,000</ExperiencedNumberValue>
          </ExperiencedContent>
        </ContainerExperienced>
      </ContainerHome>
    </SectionHome>
  );
};

export default Home;
