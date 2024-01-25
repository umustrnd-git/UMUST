import React, { useState, useEffect } from 'react';
import * as S from './Header.styled';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMouseEnter = (menuNumber) => {
    setActiveMenu(menuNumber);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <S.Wrapper isScrolled={isScrolled} onMouseLeave={handleMouseLeave}>
      <S.Header isScrolled={isScrolled}>
      <S.Logo src='/img/Logo.png' alt='Logo' />
        <S.Menu>
          <S.Menu1 onMouseEnter={() => handleMouseEnter(1)}>회사소개</S.Menu1>
          <S.Menu2 onMouseEnter={() => handleMouseEnter(2)}>연구개발</S.Menu2>
          <S.Menu3 onMouseEnter={() => handleMouseEnter(3)}>사업영역</S.Menu3>
          <S.Menu4 onMouseEnter={() => handleMouseEnter(4)}>제품</S.Menu4>
          <S.Menu5 onMouseEnter={() => handleMouseEnter(5)}>CRO 서비스</S.Menu5>
          <S.Menu6 onMouseEnter={() => handleMouseEnter(6)}>알림마당</S.Menu6>

          
          {activeMenu && (
            <S.MenuBar>
              {activeMenu === 1 && (
                <S.MenuStyle1>
                  <S.SubMenu1 >CEO 인사말</S.SubMenu1>
                  <S.SubMenu2 >기업 개요</S.SubMenu2>
                  <S.SubMenu3 >CI 소개</S.SubMenu3>
                  <S.SubMenu4 >조직도</S.SubMenu4>
                  <S.SubMenu5 >주요연혁</S.SubMenu5>
                  <S.SubMenu5 >Open Innovation</S.SubMenu5>
                  <S.SubMenu5 >투자</S.SubMenu5>
                </S.MenuStyle1>
              )}
              {activeMenu === 2 && (
                <S.MenuStyle2>
                  <S.SubMenu6 >핵심 기술</S.SubMenu6>
                  <S.SubMenu7 >기업 부설 연구소</S.SubMenu7>
                </S.MenuStyle2>
              )}           
              {activeMenu === 3 && (
                <S.MenuStyle3>
                  <S.SubMenu8 >의료기기</S.SubMenu8>
                  <S.SubMenu9 >코스메슈티컬</S.SubMenu9>
                  <S.SubMenu10 >비임상연구용역</S.SubMenu10>
                  <S.SubMenu11 >신약개발</S.SubMenu11>
                </S.MenuStyle3>
              )}
              {activeMenu === 4 && (
                <S.MenuStyle4>
                  <S.SubMenu12 >의료기기</S.SubMenu12>
                  <S.SubMenu13 >코스메슈티컬</S.SubMenu13>
                </S.MenuStyle4>
              )}
              {activeMenu === 5 && (
                <S.MenuStyle5>
                  <S.SubMenu14>서비스 소개</S.SubMenu14>
                  <S.SubMenu15>서비스 항목</S.SubMenu15>
                </S.MenuStyle5>
              )}
              {activeMenu === 6 && (
                <S.MenuStyle6>
                  <S.SubMenu16>공지사항</S.SubMenu16>
                  <S.SubMenu17>보도자료</S.SubMenu17>
                  <S.SubMenu18>행사정보</S.SubMenu18>
                  <S.SubMenu19>앨범</S.SubMenu19>
                </S.MenuStyle6>
              )}
            </S.MenuBar>
          )}
        </S.Menu>
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;