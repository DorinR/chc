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
      <h1>Canada Innovation Hub</h1>
      <h2>Business, Social and Innovative Hub</h2>
      <h3>Explore the world with us!</h3>

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
