import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import * as S from './Tech.styled';


const Tech = () => {
   return (
      <S.Wrapper>
         <Header />
         <S.WrapImage src="/img/CEO.png"/>
         <S.MenuTab>구현예정</S.MenuTab>

         <h3>핵심기술</h3>
         <Footer />
      </S.Wrapper>
   );
};

export default Tech;

