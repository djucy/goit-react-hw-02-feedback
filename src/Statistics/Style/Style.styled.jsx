import styled from '@emotion/styled';
// import { jpeg } from './Image/coffee.jpg';


export const AppContainer = styled.div`
height: 100vh;
  width: 100vw;

  ${'' /* background-image: url(./Image/coffee-1200.jpg);
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  @media screen and(min-width: 976px) {
  
    background-image: url(./Image/coffee.jpg);
    background-position: center;
  } */}

`
export const Container = styled.div`
width:600px;
${'' /* margin-left:auto;
margin-right:auto; */}
padding:60px 15px;

`;

export const SecondaryTitle = styled.h2`
margin-left:auto;
margin-right:auto;
text-align:center;
font-size:36px;
font-weight: 700;
color:#23170f;

`;

export const ButtonList = styled.ul`
list-style:none;
display:flex;
padding-left:0;

`

export const Button = styled.button`
position: relative;	
padding: 1rem 3rem;
padding-right: 2.4rem;
font-size: 12px;
font-weight:600;
color: #23170f;
background-color:transparent;
border:none;
letter-spacing: 1.1rem;
text-transform: uppercase;
transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);	
cursor: pointer;
	user-select: none;

&:before,&:after{
content: '';
position: absolute;	
transition: inherit;
z-index: -1;
top: 0;
	width: 0;
height: 100%;
}
&:before {
right: 0;
border: 1px solid #23170f;
border-left: 0;
border-right: 0;	
}
&:after {
left: 0;
}
&:hover {
	color: #E6CCB5;
transition-delay: .5s;
 }

&:hover:before {
    	width: 100%;
	transition-delay: 0s;
 }
 &:hover:after {
	background: #23170f;
    	width: 100%;
transition-delay: .35s;
}
`

export const NotificationText = styled.p`

text-align:center;
font-size:25px;
font-weight: 600;
color:#23170f;
`
export const StatisticsList = styled.ul`
margin-left:auto;
margin-right:auto;
padding-left:0;

width:300px;

text-align:center;
${'' /* justify-content:space-between; */}

font-size:25
px;
font-weight:500;

list-style:none;

color:#23170f;
`
export const StatisticsItem = styled.li`
display:flex;
justify-content:space-between;
margin-bottom:10px


`