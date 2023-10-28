import { FormattedMessage } from "react-intl";
import styled from "styled-components";

export const Home = () => {
  const countries = {
    Canada: [
      "/canada1.png",
      "/canada2.png",
      "/canada3.png",
      "/canada4.png",
      "/canada5.png",
    ],
    Moldova: [
      "/moldova1.png",
      "/moldova2.png",
      "/moldova3.png",
      "/moldova4.png",
      "/moldova5.png",
    ],
    Romania: [
      "/romania1.png",
      "/romania2.png",
      "/romania3.png",
      "/romania4.png",
      "/romania5.png",
    ],
  };

  return (
    <InnovationHubContainer>
      <Title>
        <FormattedMessage id="home_title" />
      </Title>
      {/* <SubTitle>
        <FormattedMessage id="home_subtitle" />
      </SubTitle>
      <SubSubTitle>
        <FormattedMessage id="home_subsubtitle" />
      </SubSubTitle> */}

      {Object.entries(countries).map(([country, images]) => (
        <CountryRow key={country}>
          <h4>{country}</h4>
          <ImageRow>
            {images.map((img, index) => (
              <StyledImage
                key={index}
                src={img}
                alt={`${country} img-${index}`}
              />
            ))}
          </ImageRow>
        </CountryRow>
      ))}
    </InnovationHubContainer>
  );
};

const Title = styled.h1`
  font-size: 3rem;
`;

const SubTitle = styled.h2`
  font-size: 1.8rem;
`;

const SubSubTitle = styled.h3`
  margin-top: 15px;
  font-size: 1.5rem;
  margin-bottom: 50px;
`;

const InnovationHubContainer = styled.div`
  text-align: center;
`;

const CountryRow = styled.div`
  margin: 20px 0;
`;

const ImageRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

const StyledImage = styled.img`
  width: 160px;
  height: 160px;
  margin: 0 10px;
  overflow: hidden;
  object-fit: cover;

  border-radius: 8px;
`;
