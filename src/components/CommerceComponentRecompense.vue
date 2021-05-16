<template>
    <div style="display: flex;" class="commerceBox ion-justify-content-center ion-align-items-center">
        <ion-grid style="margin: 0; width: 100%;">
            <ion-row style="background-color: white;" class="h-100 p-5 ion-justify-content-center">
                <ion-col size="4" style="display: flex;" class="ion-justify-content-center ion-align-items-center">
                    <div class="commerceImgParent">
                        <img class="commerceImg" :src="'data:image/png;base64,'+recompense.picture" :alt="recompense.title" />
                    </div>
                </ion-col>
                <ion-col size="8" class="recompenseInfo">
                    <div>
                        <h6>{{ recompense.title }}</h6>
                        <p>{{ recompense.description }}</p>
                    </div>
                    <div><span class="points">{{ recompense.points }}</span><span> punts</span></div>
                </ion-col>
            </ion-row>
            <ion-row style="display: flex;" class="ion-justify-content-center">
                <div class="pointsButtonInfo">
                    <ion-button v-if="recompense.used == true && recompense.active == 1 && recompense.points <= avaliablePoints" class="useRecompense" style="--backgound: #464646;" disabled>Ja utilitzada</ion-button>
                    <ion-button v-if="recompense.used == false && recompense.active == 1 && recompense.points <= avaliablePoints" @click="useRecompense()" class="useRecompense" style="--backgound: #464646;">{{ showHide }} QR</ion-button>
                    <ion-button v-if="recompense.active == 0" class="useRecompense" style="--backgound: #464646;" disabled>No disponible</ion-button>
                    <ion-button v-if="recompense.points > avaliablePoints && recompense.active == 1" class="useRecompense" style="--backgound: #464646;" disabled>Punts insuficients</ion-button>
                    <transition name="slide">
                        <img style="z-index: -1;" v-if="showQr" :src="'https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=210x210&chld=L|1&chl='+userId+'/'+recompense.id">
                    </transition>
                </div>
            </ion-row>
        </ion-grid>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { ENV } from "@/enviroments/enviroment";

export default defineComponent({
  name: 'CommerceComponentRecompense',
  props: {
    recompense: Object, //Commerce id received from GMap
    avaliablePoints: Number
  },
  data() {
      return {
          showQr: false,
          showHide: "Veure",
          userId: ENV.userId,
      }
  },
  methods: {
      useRecompense() {
          this.showQr = !this.showQr;
          this.showHide == "Amagar" ? this.showHide = "Veure" : this.showHide = "Amagar";
      }
  }
})
</script>

<style scoped>
.slide-enter-active {
  transition: all .1s;
}

.slide-leave-active {
  transition: all .1s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-10em);
}

.commerceBox {
    width: 100%;
    background-color: white;
    opacity: 0.85;
    /* background-color: #C4C4C4; */
    /* opacity: 0.7; */
    border-radius: 20px;
    margin: 0 0 .7em 0;
}

.h-100 {
    height: 100%;
}
.p-5 {
    padding: .4em;
}

.positioning {
    position: absolute;
    width: 95%;
    max-width: 500px;
    height: 150px;
    bottom: 11px;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 20px;
}

.commerceImgParent {
    width: 100%;
    height: 90px;
    background-color: white;
    border-radius: 17px;
}
.commerceImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 17px;
}

h6{
    color: black;
    margin: 6px 0 0 0;
    font-family: 'Rubik Mono One', sans-serif;
    font-size: 15px;
    white-space: nowrap;
    width: 100%;
    overflow: auto;
    overflow: -moz-scrollbars-none;
    scrollbar-width: none;
    -ms-overflow-style: none;
}
h6::-webkit-scrollbar {
    width: 0 !important;
}

p {
    font-size: .9em;
    margin: 0 0 0 .3em;
    font-weight: 600;
    color: rgb(29, 29, 29);
}

.recompenseInfo {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
}
.pointsButtonInfo {
    width: 95%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
}
    .useRecompense {
        width: 100%;
        height: 3em;
        background-color: white;
        margin-top: 0;
        --border-radius: 10px;
        --background: #313131;
        --color: white;
    }

.points {
    font-family: 'Rubik Mono One', sans-serif;
    font-size: 1.6em;
    font-size: 2em;
    font-weight: 400;
}
span {
    font-size: 1em;
    /* color: rgb(63, 63, 63); */
    font-weight: 900;
}
</style>