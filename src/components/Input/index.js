import React from 'react';
import { TextInput } from './styles';

export default function Input({ placeholder, onChangeText, value }) {
  return (
    <TextInput placeholder={placeholder} onChangeText={onChangeText} value={value} />
  );
}