<template>
  <div class="background positioning">
  </div>
  <ion-grid class="positioning">
      <!-- <ion-row class="h-100 p-5 ion-justify-content-center" @click="() => router.push('tab2')"> -->
      <ion-row class="h-100 p-5 ion-justify-content-center">
        <ion-col size="5">
            <div class="commerceImgParent">
                <img class="commerceImg" :src="'data:image/png;base64,'+commerce.picture" :alt="commerce.name" />
            </div>
        </ion-col>
        <ion-col size="7">
            <h6>{{ commerce.name }}</h6>
            <span>{{ commerce.address }}</span>
            <p>{{ commerce.description }}</p>
        </ion-col>
      </ion-row>
  </ion-grid>
</template>

<script lang="ts">
export default {
  name: 'CommerceMapPopup',
  props: {
    commerce: Object //Commerce id received from GMap
  },
}
</script>

<style scoped>
.h-100 {
    height: 100%;
}
.p-5 {
    padding: .4em;
}

.background {
    background-color: #C4C4C4;
    opacity: 0.7;
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
    max-width: 120px;
    height: 100%;
    max-height: 117px;
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
    margin: 13px 0 0 0;
    font-family: 'Rubik Mono One', sans-serif;
    white-space: nowrap;
    width: 100%;
    overflow: auto;
    overflow: -moz-scrollbars-none;
    scrollbar-width: none;
    -ms-overflow-style: none;
    /* text-overflow: ellipsis; */
}
h6::-webkit-scrollbar {
    width: 0 !important;
}

/* @media only screen and (min-width: 500px) {
  h6 {
    font-size: 25px;
  }
} */

span {
    font-size: 12px;
    color: rgb(63, 63, 63);
    font-weight: 500;
    margin: 0 0 0 8px;
}

p {
    font-size: 14px;
    margin: 3px 0 0 0;
    font-weight: 600;
    color: rgb(29, 29, 29);
}
</style>