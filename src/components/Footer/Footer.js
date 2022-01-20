// import React from 'react';
 import logo from '../../images/logo.svg';
import Contact from '../../pages/Contact';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';
  import {Maps} from '../Maps'

// function Footer() {
//    const history = useHistory()
//   return (
//     <div>
//     <FooterContainer>
//         <FooterSubHeading>
//           BIG DATA
//         </FooterSubHeading>
//         <FooterSubText>Centre Of Excellence.</FooterSubText>
//         {/* <Form>
//           <FormInput name='email' type='email' placeholder='Your Email' />
//           <Button fontBig>Subscribe</Button>
//         </Form> */}
//       <FooterLinksContainer>
//         <FooterLinksWrapper>
//           <FooterLinkItems>
//             <FooterLinkTitle>Links</FooterLinkTitle>
//             <FooterLink onClick={async()=> {
//                   await history.push('/')
//                   await document.getElementById('first').scrollIntoView({behavior: "smooth", block: "start", inline: "start"})}}>Home</FooterLink>
//             <FooterLink onClick={async()=> {
//                    await history.push('/')
//                  await document.getElementById('second').scrollIntoView({behavior: "smooth", block: "start", inline: "start"})}}>About Us</FooterLink>
//             <FooterLink onClick={async()=> {
//                    await history.push('/')
//                  await document.getElementById('third').scrollIntoView({behavior: "smooth", block: "start", inline: "start"})}}>Info</FooterLink>
//             <FooterLink onClick={async()=> {
//                    await history.push('/')
//                  await document.getElementById('forth').scrollIntoView({behavior: "smooth", block: "start", inline: "start"})}}>Domains</FooterLink>
//             <FooterLink onClick={async()=> {
//                    await history.push('/')
//                  await document.getElementById('fifth').scrollIntoView({behavior: "smooth", block: "start", inline: "start"})}}>Team</FooterLink>
//           </FooterLinkItems>
//           <FooterLinkItems>
//             <FooterLinkTitle>Connect</FooterLinkTitle>
//             <FooterLink to='/ontact'>Contact</FooterLink>
//             <FooterLink to='/register'>Register</FooterLink>
//           </FooterLinkItems>
//         </FooterLinksWrapper>
//         <FooterLinksWrapper>
//           <FooterLinkItems>
//             <FooterLinkTitle>Social Media</FooterLinkTitle>
//             <FooterLink to='/'>Instagram</FooterLink>
//             <FooterLink to='/'>Facebook</FooterLink>
//             <FooterLink to='/'>Youtube</FooterLink>
//             <FooterLink to='/'>Twitter</FooterLink>
//           </FooterLinkItems>
//         </FooterLinksWrapper>
//       </FooterLinksContainer>

//     </FooterContainer>
//     {/* <MyMapComponent/> */}
//     </div>
   
//   );
// }

// export default Footer;




import React from 'react';
import styled from 'styled-components';
import FooterCol from './Footer.elements';
import PText from '../PText';

const FooterStyle = styled.div`
  background-color: #27251F;
  padding-top: 5 rem;
  .container {
    display: flex;
    gap: 1rem;
  }
  .footer__col1 {
    margin: 2rem;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    margin : 2rem;
  }

  .footer__col1{
    width:"70%"
  }
  .footer__col1__title {
    font-size: 2.2rem;
    margin-bottom: 0rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 0.5rem 0;
    margin-top: 0.5rem;
    .para {
      margin-left: 1 rem;
    }
  }
  @media only screen and (max-width: 1250px) {
    .container {
      flex-direction: column;
      gap: 1rem;
      & > div {
        margin-top: 4rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
      display : none;
    
    }
    .footer_col1{
      width:"100%"
    }
    .copyright {
      .container {
        div {
          margin-top: 0.5 rem;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h3 className="footer__col1__title" style={{color:"white"}}> BIG DATA - <span className="footer__col1__title" style={{color:"#559EED"}}>CENTRE OF EXCELLENCE</span></h3>
          <PText>
            "Big Data Centre of Excellence" is the Research and Development Centre established under Ajay Kumar GargEngineering College .
            "At BDCOE , we strive to stimulate interest in Big Data concept and related technologies among the students of the Instutions . We stand by the stuble acronym of TEAM-'Together Everyone Acheives More'.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="NAVIGATE"
            links={[
              {
                title: 'Home',
                path: 'first',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: 'second',
              },
              {
                type: 'Link',
                title: 'Info',
                path: 'third',
              },
              {
                type: 'Link',
                title: 'Domain',
                path: 'dom',
              },
               {
                type: 'Link',
                title: 'Team',
                path: 'eng',
              },
              {
                type: 'L',
                title: 'Contacts',
                path: 'fifth',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="FACULTY"
            links={[
              {
                title: 'Dr Ruchi Gupta',
              },
              {
                title: 'Mr Sarvachan Verma',
              },
            ]}
          />
        </div>
        <div className="footer__col4" style={{display:"flex",justifyContent:"flex-end"}}>
          <Maps/>
        </div>
      </div>
      <div className="copyright" style={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/' onClick={()=> window.scrollTo(0, 0)}>
             <img src={logo} height={80} width={80} /> 
           BDCOE
          </SocialLogo>
          <WebsiteRights>BDCOE © 2022</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
      </div>
    </FooterStyle>
  );
}