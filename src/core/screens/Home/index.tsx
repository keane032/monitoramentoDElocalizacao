import Geolocation from '@react-native-community/geolocation';
import { useEffect, useState } from 'react';
import { Button, Modal, PermissionsAndroid, StyleSheet, Text, View, TextInput } from 'react-native';
import ReactNative, {NativeEventEmitter} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import ExercicioListComponent from '../../presentation/ExercicioList/ExercicioListView';
import UserInfo from '../../presentation/UserInfo/UserInfo';
import { toggle } from '../../redux/cronometro';
import { addExercice, addPsition, exerciceReducer } from '../../redux/exercicios';
import { hidemodal } from '../../redux/modal';
import getformatHours from '../../utils/Date';
import { downloadCSV } from '../../utils/lovcationServer';

export default function Home() {

  const { modalReducer, exerciceReducer } = useSelector(state => state);
  const [atividade, setAtividade] = useState<string>("");

  const [positiion, setPosition] = useState<string>();

  const dispatch = useDispatch();

// usar watch position e setar a posiçao em um estado
  // this.watchID = Geolocation.watchPosition(position => {
  //   const lastPosition = JSON.stringify(position);
  //   this.setState({lastPosition});
  // });

  useEffect(() => {
    const eventEmitter = new NativeEventEmitter();
    eventEmitter.addListener('5segundos', (event) => {
      Geolocation.getCurrentPosition(
        (position) => {
          console.log(event.eventProperty) 
          const currentLongitude =
            JSON.stringify(position.coords.longitude);
          const currentLatitude =
            JSON.stringify(position.coords.latitude);
          const currentAltitude =
            JSON.stringify(position.coords.altitude);
  
          dispatch(addPsition([
            currentLatitude,
            currentLongitude,
            currentAltitude,
            getformatHours(),
            modalReducer.atividade
          ]))
        }, (e) =>{
          console.log({e});
        }, {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 5
        }
      );
    });
  }, [])

  const requestLocationPermission = async () => {
      try {
        // const grantedFine = await PermissionsAndroid.request(
        //   PermissionsAndroid.PERMISSIONS.LOCATION);
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        const write = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
          const read = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          } else {
        }
      } catch (err) {
        console.warn(err);
      } 
  };

  useEffect(() => {
    requestLocationPermission();  
    
    //  Geolocation.watchPosition(position => {
    //     const lastPosition = JSON.stringify(position);
    //    setPosition(lastPosition);
    //   },(e) => {
    //     console.log({e})
    //   }, {
    //         enableHighAccuracy: true,
    //         timeout: 1000,
    //         maximumAge: 0,
    //         distanceFilter: 1
    //       });
  }, []);

  useEffect(() => {
    console.log({positiion})
  }, [positiion]);

  const save = () => {
    dispatch(hidemodal(atividade))
    dispatch(toggle())
    setAtividade("")
  }

  return (
      <> 
        <UserInfo/>
        <View style={{alignItems: 'center'}}>
        <Button title='enviasr relatorio' onPress={() => downloadCSV(exerciceReducer.positionList)}/>
        </View>
        <ExercicioListComponent/>
        <Modal
          transparent={true}
            visible={modalReducer.show}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>digite a atividade</Text>
              <TextInput style={styles.input} value={atividade} onChangeText={setAtividade} />
              <Button title='salvar' onPress={() => save()}/>
            </View>
          </View>
        </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
