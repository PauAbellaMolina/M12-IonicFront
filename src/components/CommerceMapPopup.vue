<template>
  <div class="background positioning">
  </div>
  <ion-grid class="positioning">
      <ion-row class="h-100 p-5 ion-justify-content-center">
        <ion-col size="5">
            <div class="commerceImg"></div>
        </ion-col>
        <ion-col size="7">
            <h1>{{ data.title }}</h1>
            <span>{{ data.direction }}</span>
            <p>{{ data.description }}</p>
        </ion-col>
      </ion-row>
  </ion-grid>
</template>

<script lang="ts">
import { onBeforeMount, reactive } from 'vue';

//We create a data reactive object containing a title string
const data = reactive({
    title: "",
    direction: "",
    description: ""
});

export default {
  name: 'CommerceMapPopup',
  props: {
    commerceId: Number //Commerce id received from GMap
  },
  //Watch the commerceId prop for changes and fetch the api for the new commerce info (Not done yet)
  watch: {
    commerceId: function(): void {
        //TEMPORARY DEV Switch case to test the watch function. HERE GOES THE CALL TO THE ENDPOINT
        switch (this.commerceId as any) {
            case 1:
                data.title = "Title1";
                data.direction = "direction 1 test";
                data.description = "description 1 test lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
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
                data.title = "Title1";
                data.direction = "direction 1 test";
                data.description = "description 1 test lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
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

    return {
        data
    }
  },
}
</script>

<style scoped>
.h-100 {
    height: 100%;
}
.p-5 {
    padding: .6em;
}

.background {
    background-color: #C4C4C4;
    opacity: 0.7;
}

.positioning {
    position: absolute;
    width: 95%;
    max-width: 500px;
    height: 160px;
    top: 86%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 23px;
}

.commerceImg {
    width: 100%;
    max-width: 120px;
    height: 100%;
    max-height: 120px;
    background-color: white;
    border-radius: 17px;
}

h1{
    color: black;
    margin: 0;
}
</style>