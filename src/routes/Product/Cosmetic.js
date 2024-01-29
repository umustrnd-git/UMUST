import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import * as S from './Cosmetic.styled';

const Cosmetic = () => {
   return (
      <S.Wrapper>
         <Header />
         <S.WrapImage src="/img/CEO.png"/>
         <S.MenuTab>구현예정</S.MenuTab>

         <S.MainComponent>
            코스메슈티컬

         </S.MainComponent>
         <Footer />
      </S.Wrapper>
   );
};

export default Cosmetic;