<template>
    <div style="display: flex;" class="commerceBox ion-justify-content-center ion-align-items-center">
        <ion-grid>
          <ion-row class="h-100 p-5 ion-justify-content-center">
            <ion-col size="4" style="display: flex;" class="ion-justify-content-center ion-align-items-center">
                <div class="commerceImgParent">
                    <img class="commerceImg" :src="'data:image/png;base64,'+commerce.picture" :alt="commerce.name" />
                </div>
            </ion-col>
            <ion-col size="8">
                <h6>{{ commerce.name }}</h6>
                <span>{{ commerce.address }}</span>
                <p>{{ commerce.description }}</p>
            </ion-col>
          </ion-row>
        </ion-grid>
    </div>
</template>

<script lang="ts">

export default {
  name: 'CommerceResultSearchComponent',
  props: {
    commerce: Object //Commerce id received from GMap
  },
}
</script>

<style scoped>
.commerceBox {
    width: 100%;
    height: 120px;
    background-color: white;
    opacity: 0.85;
    /* background-color: #C4C4C4; */
    /* opacity: 0.7; */
    border-radius: 20px;
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