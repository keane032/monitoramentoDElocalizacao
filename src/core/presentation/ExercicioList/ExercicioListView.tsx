import React, {useState} from 'react';
import {Text, View, Button, FlatList} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ExercicioCardComponent from './ExercicioCard';
import styles from './styles';

const ExercicioListComponent = () => {

    const { exerciceReducer } = useSelector(state => state);

    return (
        <View style={styles.container}>
            <FlatList
                data={exerciceReducer.list}
                renderItem={({item}) => 
                <ExercicioCardComponent exercicio={{
                    inicio: item.inicio,
                    fim: item.fim,
                    atividade: item.atividade}} />
                }
            />
        </View>
      );
}

export default ExercicioListComponent;

