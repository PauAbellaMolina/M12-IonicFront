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

      <g-map :zoom="15" v-if="loc && markers" :markers="markers" :center="{ lat: loc?.coords.latitude, lng: loc?.coords.longitude }"></g-map>
      <g-map :zoom="7" v-if="!loc || !markers" :markers="markers" :center="{ lat: 41.15612, lng: 1.10687 }"></g-map>
      <!-- <ExploreContainer name="Tab 1 page" /> -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { ENV } from '@/enviroments/enviroment'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue'
import { Plugins } from '@capacitor/core'
import { defineComponent } from 'vue'
import GMap from "@/components/GMap.vue"

export default defineComponent ({
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, GMap },
  data() {
    return{ 
      loc: null as any,
      markers: null as any
    }
  },
  methods: {
    //Get the current position from the users location and put the result on the loc reactive data
    async getCurrentPosition() {
      const { Geolocation } = Plugins;
      const loc = await Geolocation.getCurrentPosition()
      setTimeout(() => this.loc = loc, 1000);
    },
    //Get the commerces from the api and put the response on the markers reactive data
    fetchCommerces() {
      fetch(ENV.API_URL+"/commerces")
        .then(async response => {
          const data = await response.json();
          this.markers = data['res'];
        })
        .catch(error => {
          console.error("There was an error!", error);
      });
    }
  },
  //When the component is mounted
  mounted() {
    //Call both methods explained above
    this.fetchCommerces();
    this.getCurrentPosition();
  }
})
</script>
<style>
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