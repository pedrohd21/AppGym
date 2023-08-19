import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_800};
    color: ${theme.COLORS.GRAY_200};

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    border-color: ${theme.COLORS.GRAY_400};
    border-width: 1px;
  `};

  border-radius: 12px;
  padding: 16px;
  margin: 10px;
`;