import styled from 'styled-components';

export const LogoImage = styled.img`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
`;

export const LogoTitle = styled.h1`
  font-size: ${({ fontSize }) => fontSize || '72px'};
  line-height: 84px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 40px 0 0 60px; 
`;