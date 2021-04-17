<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Reus</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Reus</ion-title>
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
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, GMap },
  data() {
    return{ loc: null as any }
  },
  setup() {
    //Type 1 = coffee
    //Type 2 = cupcake
    
    //THIS IS WIP. We will have to fetch and construct the array of markers calling the api
    const markers = [
      { lat: 41.150191, lng: 1.100817, title: "Test1", type: 1, commerceId: 1 },
      { lat: 41.153269, lng: 1.104915, title: "Test2", type: 2, commerceId: 2 },
      { lat: 41.149334, lng: 1.109682, title: "Test3", type: 1, commerceId: 3 }
    ]

    return { 
      markers
    }
  },
  methods: {
    async getCurrentPosition(){
      const { Geolocation } = Plugins;
      const loc = await Geolocation.getCurrentPosition()
      setTimeout(() => this.loc = loc, 1000);
    }
  },
  mounted () {
    this.getCurrentPosition()
  }
})
</script>
<style>
ion-title {
  font-family: 'Rubik Mono One', sans-serif;
}

/* Removal of the google logo and bottom credit labels just for aesthetics and presentation purposes. THIS WILL NOT BE HIDDEN IF DEPLOYED TO PRODUCTION */
.gmnoprint a, .gmnoprint span {
    display:none;
}
.gmnoprint div {
    background:none !important;
}
img[src="https://maps.gstatic.com/mapfiles/api-3/images/google_white5_hdpi.png"], a[href^="https://maps.google.com/maps"]{
    display:none !important;
}
</style>