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

export const Button = styled.TouchableOpacity`
    width: 70%;
    height: 50px;
    margin: 0 auto;
    border-radius: 4px;
    background color: ${theme.color.SKY_BLUE};
    display: flex;
    justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${theme.color.TEXT_LIGHT};
  font-size: 16px;
  text-align: center;
`;

export const HorizontalCardContainer = styled.TouchableOpacity`
  width: 210px;
  height: 250px;
  margin: 7px 5px;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${theme.color.LIGHT_GRAY};
`;
