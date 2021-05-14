<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import { FCM } from '@capacitor-community/fcm';
import { Plugins } from '@capacitor/core';
import { ENV } from '@/enviroments/enviroment';

 const { PushNotifications } = Plugins;

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  data() {
    return {
      fcm: new FCM()
    }
  },
  mounted() {
    PushNotifications.requestPermission();
    // .then(result => {
    //   alert("result " + JSON.stringify(result));
    // });
            
    // PushNotifications.addListener("registrationError", (error) => {
    //   console.log(`error on register ${JSON.stringify(error)}`);
    // }),

    //   PushNotifications.addListener(
    //     "pushNotificationReceived",
    //     (notification) => {
    //       console.log(`notification ${JSON.stringify(notification)}`);
    //     }
    //   ),
      
    //   PushNotifications.addListener(
    //     "pushNotificationActionPerformed",
    //     async (notification) => {
    //       alert("notification " + notification)
    //       console.log("notification succeeded");
    //     }
    //   ),
      
      PushNotifications.register();
      
    this.fcm.getToken().then(token => {
      // alert(token.token);
      
      fetch(ENV.API_URL+"/fcmToken/"+ENV.userId+"/"+token.token, {method: 'POST'})
      .catch(error => {
        console.error("There was an error!", error);
        alert("There was an error! " + error);
    });
    });
  },
});
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');

  ion-title {
    max-width: 500px;
    margin: auto;
    font-family: 'Rubik Mono One', sans-serif;
  }
</style> 