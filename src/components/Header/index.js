import React from 'react';
import Input from '../../components/Input';
import { 
  Container, 
  TopContainer, 
  BackButton, 
  DataContainer, 
  Title, 
  Subtitle, 
  User,
  InputContainer
} from './styles';
import { PrimaryColor, SecundaryColor } from '../../utils/colors';

export default function Header({ 
  title,
  subtitle,
  onBackPress,
  uriImage,
  useInput,
  onChangeText,
  value
}) {

  function renderInput() {    
    if (useInput) {
      return (
        <InputContainer>
          <Input placeholder="Pesquisar" onChangeText={onChangeText} value={value}/>
        </InputContainer>
      );
    } else {
      return null;
    }    
  }

  return (
    <Container
      colors={[SecundaryColor, PrimaryColor]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}>
      <TopContainer>
        <BackButton name="angle-left" onPress={onBackPress} />
        <DataContainer>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </DataContainer>
        <User source={{ uri: uriImage }} />  
      </TopContainer>
      { renderInput() }
    </Container>
  );
}