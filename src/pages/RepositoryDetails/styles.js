import styled from 'styled-components/native';
import { PrimaryColor } from '../../utils/colors'

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #eee;
`;
export const Body = styled.ScrollView`
  flex: 1;
  margin: 10px;
`;

export const DetailsContainer = styled.View`
  margin: 10px;
  padding: 15px;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  elevation: 3;
`;

export const DetailCard = styled.Text`
  margin: 0px auto 2px 0px;
  padding: 3px 10px;
  background-color: ${PrimaryColor};  
  color: white;
  font-size: 10px
  font-weight: bold;
  border-radius: 10px; 
`;

export const Details = styled.Text`
  color: #777;
  margin: 0px 0px 10px 10px;
`;