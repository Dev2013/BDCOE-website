import styled from 'styled-components';
 import { Link } from 'react-router-dom';
  import React from 'react';
  import {useHistory} from 'react-router-dom';



export const SocialMedia = styled.section`
  max-width: px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin:2px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  // margin-bottom: 16px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  // margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

const ColStyle = styled.div`
  .heading {
    font-size: 2.7rem;
    margin-bottom: 1rem;
  }
  li {
    margin-bottom: 0.3rem;
  }
  a {
    font-size: 1.3rem;
  }
`;

export default function FooterCol({
  heading = 'Col Heading',
  links = [
    {
      type: 'Link',
      title: 'Home',
      path: '/home',
    },
    {
      type: 'Link',
      title: 'About',
      path: '/about',
    },
  ],
}) {
   const history = useHistory()
  return (
    <ColStyle>
      <h2 className="heading" style={{color:"#559EED", fontSize:"2rem"}}>{heading}</h2>
      <ul  style ={{listStyleType: "none"}}>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === 'Link' ? (
              <Link onClick={async()=> {
                   await history.push('/')
                   await document.getElementById(item.path).scrollIntoView({behavior: "smooth", block: "start", inline: "start"})}} style={{color:"#fff", fontSize:"1rem" ,paddingBottom:"20px",textDecoration:"none"}}>{item.title}</Link>
            ) : (item.type === 'L')?( <Link onClick={async()=> {
                   await history.push('/contact')
            }} style={{color:"#fff", fontSize:"1rem" ,paddingBottom:"10px",textDecoration:"none"}}>{item.title}</Link>
            ): (
              <a href={item.path} target="_blank" rel="noreferrer" style={{color:"#fff", fontSize:"1rem" ,paddingBottom:"10px",textDecoration:"none"}} onClick={async()=> {
                   await history.push('/')
                   await document.getElementById(item.path).scrollIntoView({behavior: "smooth", block: "start", inline: "start"})}}>
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyle>
  );
}