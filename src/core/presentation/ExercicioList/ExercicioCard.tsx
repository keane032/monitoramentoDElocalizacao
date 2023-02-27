import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
import { Exercicio } from '../../data/Models/Exercicio';
import styles from './styles';

type CardProps = {
  exercicio: Exercicio;
}

const ExercicioCardComponent = ( {exercicio}: CardProps ) => {
    return (
        <View style={styles.tiled}>
            <Text >{exercicio.inicio} - {exercicio.fim}</Text>
            <Text >{exercicio.atividade}</Text>
        </View>
      );
}

export default ExercicioCardComponent;