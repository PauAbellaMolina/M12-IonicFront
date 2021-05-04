<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Buscar</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Buscar</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-grid class="parent">
        <ion-row>
          <ion-col size="12">
            <ion-searchbar placeholder="Buscar comerç"></ion-searchbar>
          </ion-col>
        </ion-row>
        <ion-row v-if="showCategories" class="categories">
          <ion-col v-for="category in categories" :key="category.id" size="6">
            <CategorySearchComponent :category="category" @click="categoryClicked(category.id)"/>
          </ion-col>
        </ion-row>
        <ion-row v-if="!showCategories" class="commerces">
          <ion-col v-for="commerce in commercesCategoryResult" :key="commerce.id" size="11">
            <CommerceResultSearchComponent :commerce="commerce" />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { ENV } from '@/enviroments/enviroment'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar } from '@ionic/vue';
import { defineComponent } from 'vue'
import CategorySearchComponent from '@/components/CategorySearchComponent.vue';
import CommerceResultSearchComponent from '@/components/CommerceResultSearchComponent.vue';

export default defineComponent ({
  name: 'Tab2',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonSearchbar, CategorySearchComponent, CommerceResultSearchComponent },
  data() {
    return {
      categories: null as any,
      showCategories: true,
      commercesCategoryResult: null as any
    }
  },
  beforeMount() {
    fetch(ENV.API_URL+"/categories")
      .then(async response => {
        const data = await response.json();
        this.categories = data['res'];
      })
      .catch(error => {
        console.error("There was an error!", error);
    });
  },
  methods: {
    categoryClicked(categoryId: number) {
      this.showCategories = false;
      
      fetch(ENV.API_URL+"/commerces/category/"+categoryId)
        .then(async response => {
          const data = await response.json();
          this.commercesCategoryResult = data['res'];
          console.log(this.commercesCategoryResult);
        })
        .catch(error => {
          console.error("There was an error!", error);
      });
    }
  }
})
</script>

<style scoped>
.parent {
  max-width: 500px;
}

ion-searchbar {
  --background: #C4C4C4;
  --color: black;
  --border-radius: 10px;
  --icon-color: black;
}

.categories {
  margin-bottom: 4em;
}
.commerces {
  display: flex;
  justify-content: center;
  margin-bottom: 4em;
}
</style>