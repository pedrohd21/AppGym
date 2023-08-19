import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  margin-top:60px;
`;


export const Title = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

`;

export const SubTitle = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  position: absolute;
  top: 65px;

`;