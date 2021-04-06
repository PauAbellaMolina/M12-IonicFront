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

      <g-map :zoom="15" v-if="loc" :markers="markers" :center="{ lat: loc?.coords.latitude, lng: loc?.coords.longitude }"></g-map>
      <g-map :zoom="7" v-if="!loc" :markers="markers" :center="{ lat: 41.15612, lng: 1.10687 }"></g-map>
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
  setup() {
    //Type 1 = coffee
    //Type 2 = cupcake
    const markers = [
      { lat: 41.150191, lng: 1.100817, title: "Test1", type: 1 },
      { lat: 41.153269, lng: 1.104915, title: "Test2", type: 2 },
      { lat: 41.149334, lng: 1.109682, title: "Test3", type: 1 }
    ]

    return { 
      markers
    }
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