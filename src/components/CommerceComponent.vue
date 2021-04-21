<template>
  <div class="background positioning">
  </div>
  <ion-grid class="positioning content">
    <ion-row class="p-5 ion-justify-content-center">
        <ion-col size="12">
            <div class="commerceImg"></div>
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
            <div class="pointsSquare">{{ commerce.total_points }}</div>
        </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script lang="ts">
export default {
  name: 'CommerceComponent',
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

.commerceImg {
    width: 100%;
    height: 200px;
    background-color: white;
    border-radius: 17px;
}

h2{
    margin: 3px 0 0 0;
    font-family: 'Rubik Mono One', sans-serif;
}

span {
    font-size: 15px;
    color: rgb(63, 63, 63);
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
    width: 100px;
    max-width: 120px;
    height: 100px;
    max-height: 117px;
    background-color: white;
    border-radius: 17px;
}
</style>