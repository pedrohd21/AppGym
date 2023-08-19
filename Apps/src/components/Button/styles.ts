import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_800 : theme.COLORS.RED_DARK}; 

  border-radius: 12px;
  border-color: ${({ theme }) =>  theme.COLORS.GRAY_400}; 
  border-width: 1px;

  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const Title = styled.Text`
 ${({ theme }) => css`
 font-size: ${theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.GRAY_200};
  font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;