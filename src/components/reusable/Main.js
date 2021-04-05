import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props =>
    props.theme === 'dark' ? theme.color.BG_DARK : theme.color.BG_LIGHT};
`;

export const Spacer = styled.View`
  height: ${props => props.height}px;
  width: 100%;
`;

export const PrimaryHeading = styled.Text`
  color: ${props =>
    props.theme === 'dark' ? theme.color.TEXT_LIGHT : theme.color.TEXT_DARK};
  font-size: 22px;
  text-align: center;
`;

export const SecondaryHeading = styled.Text`
  color: ${props =>
    props.theme === 'dark' ? theme.color.TEXT_LIGHT : theme.color.TEXT_DARK};
  font-size: 16px;
  text-align: center;
`;
