package com.exercicequest;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.util.Log;
import java.util.Map;
import java.util.HashMap;
import java.util.Timer;
import java.util.TimerTask;

import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;

public class TimerModule extends ReactContextBaseJavaModule {
   
    private static final String TAG = "MyApp";

    ReactApplicationContext contextReact;
    Timer timer;
    boolean timerOn = false;

    TimerModule(ReactApplicationContext context) {
        super(context);
        contextReact = context; 
    }

    @Override
    public String getName() {
        return "TimerModule";
    }

    @ReactMethod
    public void start() {
        int delay = 1000; 
        int interval = 1000; 
        int delay5 = 5000; 
        int interval5 = 5000; 

        timer = new Timer();
        
        timer.scheduleAtFixedRate(new TimerTask() {
            public void run() {
                sendMsg("passou 1 segundo");            
            }
        }, delay, interval);

        timer.scheduleAtFixedRate(new TimerTask() {
            public void run() {
                sendMsg5("passou 5 segundos");            
            }
        }, delay5, interval5);
    
    }

    @ReactMethod
    public void stop(){
        if(timer != null){
            timer.cancel();  
            timer.purge();
        }
    }

    @ReactMethod
    public void sendMsg(String msg) {
       WritableMap params = Arguments.createMap();
        params.putString("eventProperty", msg); 
        contextReact.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("1segundo", params);
    }

    @ReactMethod
    public void sendMsg5(String msg) {
       WritableMap params = Arguments.createMap();
        params.putString("eventProperty", msg); 
        contextReact.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("5segundos", params);
    }
}