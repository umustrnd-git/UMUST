import React from 'react';
import * as S from './Lab.styled';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Lab = () => {
   return (
      <S.Wrapper>
         <Header />
         <S.WrapImage src="/img/CEO.png"/>
         <S.MenuTab>구현예정</S.MenuTab>

         <S.MainComponent>
            기업부설연구소

         </S.MainComponent>
         <Footer />
      </S.Wrapper>
   );
};

export default Lab;