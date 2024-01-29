import React from 'react';
import * as S from './Ceo.styled';
import Main from '../../components/Main/Main';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Ceo = () => {
   return (
      <S.Wrapper>
         <Header />
         <S.WrapImage src="/img/CEO.png"/>
         <S.MenuTab>구현예정</S.MenuTab>

         <S.MainComponent src="/img/ceoIntro.png" />

         <Footer />
      </S.Wrapper>
   );
};

export default Ceo;