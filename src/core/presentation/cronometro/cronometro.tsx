import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ReactNative, {NativeEventEmitter} from 'react-native'

type ConometroPorps = {
    start: Boolean,
}

export default function Cronometro({start}: ConometroPorps) {

    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const [idinterval, setidinterval] = useState<number>()

    const { TimerModule } = ReactNative.NativeModules;

    const increment = ()=>{
      setSeconds((prev) => {
          if( (prev + 1) > 59 ){
          setMinute(prevMinut => {
            if(prevMinut + 1 > 59){
              setHour(prevHour => prevHour + 1);
              return 0;
            }else{
              return prevMinut + 1; 
            }
          });
              return 0 
          }else{
              return prev + 1
          };
      })
    }

    // useEffect(()=>{
    //     if (start){
    //         const id = setInterval(() =>{    
    //         increment()
    //       }, 1000);
    //       setidinterval(id)
    //     }else if(idinterval){
    //       clearInterval(idinterval);
    //       setMinute(0);
    //       setSeconds(0);
    //       setHour(0);
    //     }
    //   },[start])

    useEffect(() => {
        const eventEmitter = new NativeEventEmitter();
        eventEmitter.addListener('1segundo', (event) => {
           console.log(event.eventProperty)
           increment()
        });
    },[])

  useEffect(() => {
    if(start){
      TimerModule.start();
    }else{
      TimerModule.stop()
      setMinute(0);
      setSeconds(0);
      setHour(0);
    }
  },[start])

  const getDuracao = () =>{
    return `${hour < 10 ? "0" + hour : hour} : ${minute < 10 ? "0" + minute : minute} : ${seconds < 10 ? "0" + seconds : seconds}`;
  }

  return (
    <View style={styles.container} >
        <Text>{getDuracao()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  time: {
    fontSize: 30,
    margin: 6,
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  text:{
    fontSize: 20,
  }
});


