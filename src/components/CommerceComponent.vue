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
            <span>{{ data.direction }}</span>
            <h2>{{ data.title }}</h2>
        </ion-col>
        <ion-col size="12">
            <p class="sectionLabel">Descripció:</p>
            <p class="sectionDescription">{{ data.description }}</p>
        </ion-col>
        <ion-col size="6">
            <p class="sectionLabel">Horari:</p>
            <p class="sectionDescription">{{ data.horari }}</p>
        </ion-col>
        <ion-col size="6">
            <p class="sectionLabel">Contacte:</p>
            <p class="sectionDescription">{{ data.contacte }}</p>
        </ion-col>
        <ion-col size="12">
            <p class="sectionLabel sectionLabelBig">Punts del comerç</p>
            <div class="pointsSquare"></div>
        </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script lang="ts">
import { onBeforeMount, reactive } from 'vue';
import { useRouter } from 'vue-router';

//We create a data reactive object containing a title string
const data = reactive({
    title: "",
    direction: "",
    description: "",
    horari: "",
    contacte: ""
});

export default {
  name: 'CommerceComponent',
  props: {
    commerceId: Number //Commerce id received from GMap
  },
  //Watch the commerceId prop for changes and fetch the api for the new commerce info (Not done yet)
  watch: {
    commerceId: function(): void {
        //TEMPORARY DEV Switch case to test the watch function. HERE GOES THE CALL TO THE ENDPOINT
        switch (this.commerceId as any) {
            case 1:
                data.title = "Absis";
                data.direction = "Plaça del Castell 20, Reus";
                data.description = "description 1 test lorem ipsum lorem ipsum lorem ipsum description 1 test lorem ipsum lorem ipsum lorem ipsum description 1 test lorem ipsum lorem ipsum lorem ipsum description 1 test lorem ipsum lorem ipsum lorem ipsum";
                data.horari = "description 1 test lorem ipsum lorem ipsum lorem ipsum description 1 test lorem";
                data.contacte = "description 1 test lorem ipsum lorem ipsum";
                break;
            case 2:
                data.title = "Title2";
                data.direction = "direction 2 test";
                data.description = "description 2 test lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
                break;
            case 3:
                data.title = "Title3";
                data.direction = "direction 3 test";
                data.description = "description 3 test lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
                break;
            default:
                break;
        }
    }
  },
  setup(props: any) {
    //Before mounting the component, fetch the api for the new commerce info (Not done yet)
    onBeforeMount(() => {
        //TEMPORARY DEV Switch case to test the watch function. HERE GOES THE CALL TO THE ENDPOINT
        switch (props.commerceId) {
            case 1:
                data.title = "Absis";
                data.direction = "Plaça del Castell 20, Reus";
                data.description = "description 1 test lorem ipsum lorem ipsum lorem ipsum description 1 test lorem ipsum lorem ipsum lorem ipsum description 1 test lorem ipsum lorem ipsum lorem ipsum description 1 test lorem ipsum lorem ipsum lorem ipsum";
                data.horari = "description 1 test lorem ipsum lorem ipsum lorem ipsum description 1 test lorem";
                data.contacte = "description 1 test lorem ipsum lorem ipsum";
                break;
            case 2:
                data.title = "Title2";
                data.direction = "direction 2 test";
                data.description = "description 2 test lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
                break;
            case 3:
                data.title = "Title3";
                data.direction = "direction 3 test";
                data.description = "description 3 test lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
                break;
            default:
                break;
        }
    })

    const router = useRouter();

    return {
        data,
        router
    }
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