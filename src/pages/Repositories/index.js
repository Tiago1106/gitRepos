import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import 'moment/locale/pt-br';
import Header from '../../components/Header';
import {
  Container,
  Body,
  List,
  ItemContainer,
  ItemDataContainer,
  ItemLanguage,
  ItemTitle,
  ItemDescription,
  ItemDate,
  ItemIcon
} from './styles';

import * as ActionsHome from '../../store/modules/home/actions';
import * as ActionsRepository from '../../store/modules/repository/actions';

export default function Repositories() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const { user, repos } = useSelector(state => state.home);
  const { dataSet } = useSelector(state => state.repository);

  function onBackPress() {
    setFilter('');
    dispatch(ActionsHome.backHome());
  }

  function goToDatails(item) {
    console.log('goToDatails');
    dispatch(ActionsRepository.requestDetailsRepo(item));
  }

  function filterRepos(text) {
    setFilter(text);

    const dataSet = repos.filter(item => {
      const name = item.name.toUpperCase();
      const filter = text.toUpperCase();
      return name.indexOf(filter) > -1;
    });

    dispatch(ActionsRepository.filterRepos(dataSet));
  }

  function renderListItem(item) {
    return (
      <ItemContainer onPress={() => { goToDatails(item); }}>
        <ItemDataContainer>
          <ItemLanguage>{item.language ?? 'Linguagem não especificada'}</ItemLanguage>
          <ItemTitle>{item.name}</ItemTitle>
          <ItemDescription>{item.description ?? 'Sem descrição'}</ItemDescription>
          <ItemDate>{`Atualizado em ${moment(new Date(item.updated_at)).format('L')}`}</ItemDate>
        </ItemDataContainer>
        <ItemIcon name="chevron-right" size={15} />
      </ItemContainer>
    );
  }

  return (
    <Container>
      <Header
        title={user.name ?? user.login}
        subtitle={`${user.public_repos} Repositórios Públicos`}
        onBackPress={onBackPress}
        uriImage={user.avatar_url}
        useInput={true}
        onChangeText={text => filterRepos(text)}
        value={filter} />
      <Body>
        <List
          data={dataSet}
          renderItem={({ item }) => renderListItem(item)}
          keyExtractor={item => item.id.toString()}
        />
      </Body>
    </Container>
  );
}