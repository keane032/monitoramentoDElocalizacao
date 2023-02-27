import ReactNativeBlobUtil from "react-native-blob-util";
import { Linking } from 'react-native'


export const downloadCSV = (array) => {

    const headerString = 'currentLatitude,currentLongitude,currentALtitude,hours,atividade\n';
    const rowString = array.map(d => `${d[0]},${d[1]},${d[2]},${d[3]},${d[4]}\n`).join('');
    const csvString = `${headerString}${rowString}`;
    console.log({csvString})
    // Linking.openURL('mailto:support@example.com')
   
}