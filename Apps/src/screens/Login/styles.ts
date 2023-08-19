import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';
import { ScrollView } from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const Content = styled(ScrollView).attrs({
  keyboardShouldPersistTaps: 'handled',
})``;

export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  background-size: cover;
  padding: 15px;
`;

export const Text = styled.Text`
   ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  text-align: center;
  margin-top: 100px;
`;

export const Text2 = styled.Text`
   ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  text-align: center;
  margin-top: 80px;
`;