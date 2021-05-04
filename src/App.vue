<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
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