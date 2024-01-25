import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 100%;
	background: #333;
	padding: 50px 0px;
	border-top: 1px solid #888;
   height: 80%;

`;

export const Container = styled.div`
   width: 1180px;
	margin: 0px auto;
`;

export const Upper = styled.div`
	width: 100%;
	border-bottom: 1px solid #777;
	padding-bottom: 20px;
	&::after{
		content: "";
		display: block;
		clear: both;
	}
`;

export const Logo = styled.h1`
	float: left;
	margin-top: 5px;
	font: bold 24px/1 "arial";
	color: #666;
	cursor: default;
`;

export const SubMenu = styled.div`
	float: right;
	margin-top: 18px;
`;

export const Map = styled.div`
  float: left;
  margin-left: 20px;
  font: bold 13px/1 "arial";
  color: #666;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #888;
  }
`;

export const SiteMap = styled.div`
  float: left;
  margin-left: 20px;
  font: bold 13px/1 "arial";
  color: #666;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #888;
  }
`;
export const Policy = styled.div`
  float: left;
  margin-left: 20px;
  font: bold 13px/1 "arial";
  color: #666;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #888;
  }
`;
export const Terms = styled.div`
  float: left;
  margin-left: 20px;
  font: bold 13px/1 "arial";
  color: #666;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #888;
  }
`;
export const Contact = styled.div`
  float: left;
  margin-left: 20px;
  font: bold 13px/1 "arial";
  color: #666;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #888;
  }
`;

export const Lower = styled.div`
	width: 100%;
	padding-top: 20px;
`;

export const Addr = styled.div`
	width: 100%;
	font: 12px/1.3 "arial";
	color: #777;
	margin-bottom: 20px;
	cursor: default;
	font-weight: 700;
`;

export const Copyright = styled.p`
	width: 100%;
	font: 12px/1 "arial";
	color: #777;
	cursor: default;

`;