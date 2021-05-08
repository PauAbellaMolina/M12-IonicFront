<template>
    <div style="display: flex;" class="commerceBox ion-justify-content-center ion-align-items-center">
        <ion-grid>
          <ion-row class="h-100 p-5 ion-justify-content-center">
            <ion-col size="5">
                <div class="commerceImg"></div>
            </ion-col>
            <ion-col size="7">
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
    height: 140px;
    /* background-color: white; */
    background-color: #C4C4C4;
    opacity: 0.7;
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

.commerceImg {
    width: 100%;
    max-width: 120px;
    height: 100%;
    max-height: 117px;
    background-color: white;
    border-radius: 17px;
}

h6{
    color: black;
    margin: 6px 0 0 0;
    font-family: 'Rubik Mono One', sans-serif;
    font-size: 15px;
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