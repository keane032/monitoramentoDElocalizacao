import Geolocation from '@react-native-community/geolocation';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../redux/cronometro';
import { addExercice, addPsition } from '../../redux/exercicios';
import { showmodal } from '../../redux/modal';
import getformatHours from '../../utils/Date';
import Cronometro from '../cronometro/cronometro';

export default function UserInfo() {

  const { conometroReducer, modalReducer } = useSelector(state => state);
  const [userName, setUserName] = useState("royke");
  const [userEmail, setUserEmail] = useState("keane032@gmail.com");
  const dispatch = useDispatch();

  function stop() {
    dispatch(toggle())
    dispatch(addExercice({
      atividade: modalReducer.atividade,
      inicio: modalReducer.inicio,
      fim: getformatHours(),
    }))
  }

  const showModal = () => {
    dispatch(showmodal());
  }

  return (

    <View style={styles.container}>
        <Text style={styles.text}>Nome: {userName}</Text>
        <Text style={styles.text}>Email: {userEmail}</Text>
          <Cronometro start={conometroReducer.start}/>
        <View style={styles.row}>
          <Button title={ conometroReducer.start ? 'stop' : "start" } onPress={() => conometroReducer.start ? stop() : showModal()} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderWidth: 3,
    borderRadius: 10,
    margin: 6,
    backgroundColor: '#fff',
    justifyContent: 'space-around'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text:{
    fontSize: 20,
  }
});


