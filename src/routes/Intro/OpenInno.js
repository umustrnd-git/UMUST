import React from 'react';
import * as S from './OpenInno.styled';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const OpenInno = () => {
   return (
      <S.Wrapper>
         <Header />
         <S.WrapImage src="/img/OpenLogo.png"/>
         <S.MenuTab>구현예정</S.MenuTab>

         <S.MainComponent src="/img/inno.png" />


         <Footer />
      </S.Wrapper>
   );
};

export default OpenInno;