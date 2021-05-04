<template>
    <div style="display: flex;" class="categoryBox ion-justify-content-center ion-align-items-center">
        <ion-grid>
          <ion-row>
            <ion-col>
              <img :src="data.icon" />
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <span class="title">{{ category.name }}</span>
            </ion-col>
          </ion-row>
        </ion-grid>
    </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import Helpers from '@/helpers/helpers';

export default {
  name: 'CategorySearchComponent',
  props: {
    category: Object //Commerce id received from GMap
  },
  setup(props: any) {
    const data = reactive({
        icon: Helpers.getIcon(props.category?.id)
    });

    return {
        data
    }
  }
}
</script>

<style scoped>
.categoryBox {
    width: 100%;
    height: 35vh;
    background-color: white;
    border-radius: 20px;
}

.title {
    font-family: 'Rubik Mono One', sans-serif;
    color: black;
    font-size: 24px;
    margin-top: .5em;
}

ion-col {
  display: flex;
  justify-content: center;
}
</style>