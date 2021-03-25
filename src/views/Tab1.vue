<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <g-map :zoom="15" v-if="loc" :center="{ lat: loc?.coords.latitude, lng: loc?.coords.longitude }"></g-map>
      <g-map :zoom="7" v-if="!loc" :center="{ lat: 41.15612, lng: 1.10687 }"></g-map>
      <!-- <ExploreContainer name="Tab 1 page" /> -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import GMap from "../components/GMap.vue";
import { Plugins } from '@capacitor/core'
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, GMap},
  data() {
    return{ loc: null as any }
  },
  methods: {
    async getCurrentPosition(){
      const { Geolocation } = Plugins;
      const loc = await Geolocation.getCurrentPosition()
      setTimeout(() => this.loc = loc, 5000);
      // this.loc = loc
    }
  },
  mounted () {
    this.getCurrentPosition()
  }
})
</script>