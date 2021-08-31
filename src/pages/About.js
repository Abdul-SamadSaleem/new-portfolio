import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Abdul</span>
              </p>
              <h2 className="about__heading">A FULL Stack Web Developer 🤞</h2>
              <div className="about__info">
                <PText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores sit deserunt magni omnis ratione rem, repellendus
                  vitae ullam labore nostrum, veniam quisquam saepe,
                  perspiciatis optio praesentium nisi veritatis ipsam.
                  Praesentium eum porro in iusto voluptatibus ex perferendis
                  illo optio aperiam, eius quam obcaecati dicta expedita saepe
                  perspiciatis corporis nihil odit? Culpa dolores cupiditate ad
                  nostrum nesciunt deserunt quasi, excepturi rem officia
                  possimus earum ea. Ipsa dolores optio adipisci nihil explicabo
                  nisi fuga voluptates, quisquam earum, consequuntur repellendus
                  ratione quae velit laborum ut asperiores reiciendis numquam
                  laboriosam quia dignissimos sequi iusto. Nulla perferendis
                  atque expedita libero culpa. Repudiandae alias consectetur
                  facilis.
                  <br /> <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio fugiat, itaque, voluptates consequuntur beatae
                  culpa eius temporibus consequatur, recusandae voluptatum nam!
                  Porro, optio officia. Porro.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Pariatur vitae necessitatibus alias at quidem et, voluptatum
                  eaque sunt laudantium, quisquam consequuntur est distinctio
                  libero ratione?
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem title="School" items={['Oaks Park High School']} />
              <AboutInfoItem title="Collage" items={['N/A']} />
              <AboutInfoItem title="Varsity" items={['N/A']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'MongoDB', 'Firebase']}
              />
              <AboutInfoItem
                title="Design"
                items={['Photoshop', 'After Effects', 'Preimere Pro']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem title="2018 - Current" items={['Learning']} />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
