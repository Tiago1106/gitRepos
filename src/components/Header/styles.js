import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const Container = styled(LinearGradient)`
  width: 100%;
  padding: 20px 10px 10px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;


export const TopContainer = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled(FontAwesome)`
  padding: 10px;
  color: white;
  font-size: 30px;
`;

export const DataContainer = styled.View`
  margin: 0px 0px 0px 10px;  
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1
  })
  `
    color: white;  
    font-size: 20px;
    font-weight: bold;
    margin-right: 100px;
  `;

export const Subtitle = styled.Text`
  margin-top: -5px;
  color: white;
  font-size: 12px;
`;

export const User = styled.Image`
  height: 50px;
  width: 50px;
  margin: 0px 10px 0px auto;
  border-radius: 50px;  
  border-color: #ffffff7a;
  border-width: 3px;
`;

export const InputContainer = styled.View`
  padding: 10px;
`;