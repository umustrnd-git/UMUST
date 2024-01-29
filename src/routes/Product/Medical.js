import React from 'react';
import * as S from './Medical.styled';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Medical = () => {
   return (
      <S.Wrapper>
         <Header />
         <S.WrapImage src="/img/CEO.png"/>
         <S.MenuTab>구현예정</S.MenuTab>

         <S.MainComponent>
            의료기기

         </S.MainComponent>
         <Footer />
      </S.Wrapper>
   );
};

export default Medical;