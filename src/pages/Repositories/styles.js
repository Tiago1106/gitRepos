import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { PrimaryColor } from '../../utils/colors';

export const Container = styled.View`
  flex: 1;
  background-color: #eee;
`;

export const Body = styled.SafeAreaView`
  flex: 1;    
`;

export const List = styled.FlatList`  
  padding: 10px;
`;

export const ItemContainer = styled.TouchableOpacity`  
  margin: 10px;
  padding: 15px;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  elevation: 3;
`;

export const ItemDataContainer = styled.View`    
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;  
`;

export const ItemLanguage = styled.Text`
  margin: 0px auto 10px 0px;
  padding: 3px 10px;
  background-color: ${PrimaryColor};  
  color: white;
  font-size: 10px
  font-weight: bold;
  border-radius: 10px;
`;

export const ItemTitle = styled.Text`
  color: #777;
  font-size: 18px
  font-weight: bold;
`;

export const ItemDescription = styled.Text.attrs({
  numberOfLines: 2
  })`
  color: #999;
  font-size: 12px;
`;

export const ItemDate = styled.Text`
  margin-top: 10px;
  color: #bbb;
  font-size: 10px;
`;

export const ItemIcon = styled(FontAwesome)`
  margin: 0px 10px 0px 20px;
  color: ${PrimaryColor};
`;
