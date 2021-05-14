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
    //         alert("notification " + notification)
    //       console.log("notification succeeded");
    //     }
    //   ),
      
      PushNotifications.register();
      
    const fcmToken = this.fcm.getToken();
    alert(JSON.stringify(fcmToken));
    console.log("token:" + JSON.stringify(fcmToken));
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