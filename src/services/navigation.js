import { CommonActions, StackActions } from '@react-navigation/native';

let navigator;

export function setNavigator(ref) {
  navigator = ref;
}

export function navigate(name) {
  navigator.dispatch(
    CommonActions.navigate({
      name,
    })
  );
}
export function replace(name) {
  navigator.dispatch(StackActions.replace(name));
}