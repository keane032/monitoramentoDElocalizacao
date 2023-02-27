import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d5db64',
      borderWidth: 3,
      borderRadius: 10, 
      margin: 5
    },
    tiled:{
      borderWidth: 2,
      borderRadius: 4, 
      margin: 5
    },
    title: {
      marginTop: 16,
      // paddingVertical: 8,
      borderRadius: 6,
      color: '#20232a',
      // textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    },
    desc:{
      marginTop: 6,
      // paddingVertical: 8,
      borderRadius: 6,
      color: '#20232a',
      // textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    }
  });

export default styles;