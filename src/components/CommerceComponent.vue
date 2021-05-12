<template>
  <div :style="(searchPage)?'margin-bottom: 57px;':''" class="background positioning">
  </div>
  <ion-grid :style="(searchPage)?'margin-bottom: 57px;':''" class="positioning content">
    <ion-row class="p-5 ion-justify-content-center">
        <ion-col size="12">
            <div class="commerceImgParent">
                <img class="commerceImg" :src="'data:image/png;base64,'+commerce.picture" :alt="commerce.name" />
            </div>
        </ion-col>
    </ion-row>
    <ion-row class="p-5 pt-0 p-content ion-justify-content-center">
        <ion-col size="12">
            <span>{{ commerce.address }}</span>
            <h2>{{ commerce.name }}</h2>
        </ion-col>
        <ion-col size="12">
            <p class="sectionLabel">Descripció:</p>
            <p class="sectionDescription">{{ commerce.description }}</p>
        </ion-col>
        <ion-col size="6">
            <p class="sectionLabel">Horari:</p>
            <p class="sectionDescription">{{ commerce.schedule }}</p>
        </ion-col>
        <ion-col size="6">
            <p class="sectionLabel">Contacte:</p>
            <p class="sectionDescription">{{ commerce.phone }}</p>
            <p class="sectionDescription">{{ commerce.email }}</p>
        </ion-col>
        <ion-col size="12">
            <p class="sectionLabel sectionLabelBig">Punts del comerç</p>
            <div class="pointsSquare"><span v-if="points != null">{{ points }}</span><span v-else><ion-icon style="font-size: 1em; margin-right: .3em;" src="assets/loaders/puff.svg"></ion-icon></span>&nbsp;punts</div>
        </ion-col>
        <ion-col size="12">
            <p class="sectionLabel sectionLabelBig" style="margin-bottom: .4em">Recompenses</p>
            <div v-if="!recompenses" style="display: flex; justify-content: center; margin-top: 2em;">
                <ion-icon style="font-size: 3.5em;" src="assets/loaders/puff.svg"></ion-icon>
            </div>
            <div v-if="recompenses">
                <div v-for="recompense in recompenses" :key="recompense.id" size="11">
                    <CommerceComponentRecompense :recompense="recompense" />
                </div>
            </div>
        </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script lang="ts">
import { ENV } from "@/enviroments/enviroment";
import { defineComponent } from "vue"
import CommerceComponentRecompense from "../components/CommerceComponentRecompense.vue";

export default defineComponent ({
  name: 'CommerceComponent',
  components: { CommerceComponentRecompense },
  props: {
    commerce: Object, //Commerce id received from GMap
    searchPage: Boolean
  },
  data() {
      return {
          points: null,
          recompenses: null as any
      }
  },
  beforeMount() {
      fetch(ENV.API_URL+"/points/"+ENV.userId+"/"+this.commerce?.id)
        .then(async response => {
          const data = await response.json();
          this.points = data['res'].points;
        })
        .catch(error => {
          console.error("There was an error!", error);
      });

      fetch(ENV.API_URL+"/recompenses/"+this.commerce?.id+"/"+ENV.userId)
        .then(async response => {
          const data = await response.json();
          this.recompenses = data['res'];
        })
        .catch(error => {
          console.error("There was an error!", error);
      });
  }
});
</script>

<style scoped>
.h-100 {
    height: 100%;
}
.p-5 {
    padding: .4em;
}
.pt-0 {
    padding-top: 0;
}
.pb-0 {
    padding-bottom: 0;
}
.p-content {
    padding: 0 1.1em 0 1.1em;
}

.background {
    background-color: #C4C4C4;
    opacity: 1;
}

.content {
    overflow-y: auto;
    color: black;
}

.positioning {
    position: absolute;
    width: 100%;
    max-width: 500px;
    height: 70vh;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 20px 20px 0 0;
}

.commerceImgParent {
    width: 100%;
    height: 200px;
    background-color: white;
    border-radius: 17px;
}
.commerceImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 17px;
}

h2{
    margin: 3px 0 0 0;
    font-family: 'Rubik Mono One', sans-serif;
}

span {
    font-size: 15px;
    /* color: rgb(63, 63, 63); */
    font-weight: 900;
}

.sectionLabel {
    font-size: 12px;
    font-family: 'Rubik Mono One', sans-serif;
    margin: 12px 0 2px 0;
}

.sectionLabelBig {
    font-size: 15px;
}

.sectionDescription {
    font-size: 14px;
    margin: 0 0 0 13px;
    font-weight: 600;
    color: rgb(29, 29, 29);
    width: 70%;
}

.pointsSquare {
    width: 6em;
    /* max-width: 120px; */
    height: 2.8em;
    max-height: 117px;
    background-color: white;
    border-radius: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-weight: 900;
}
.pointsSquare span {
    font-size: 35px;
    font-weight: 900;
}

.test {
    width: 100%;
    /* max-width: 120px; */
    height: 2.8em;
    max-height: 117px;
    background-color: white;
    border-radius: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-weight: 900;
}
</style>