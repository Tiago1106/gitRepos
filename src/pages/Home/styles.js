import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  padding: 10%;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Logo = styled.Image`
  height: 180px;
  width: 180px;
  margin: 20px;
`;

export const ContainerButton = styled(LinearGradient)`
  height: 50px;
  width: 100%;
  margin: 30px 10px 10px;
  border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  color: white;
  font-weight: bold;
`;