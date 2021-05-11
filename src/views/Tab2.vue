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
            <ion-searchbar v-if="showCategories" placeholder="Buscar comerç"></ion-searchbar>
            <ion-icon style="width: 40px; height: 40px; margin-left: 8px;" v-if="!showCategories" :icon="arrowBack" @click="goBack()" />
          </ion-col>
        </ion-row>
        <ion-row v-if="showCategories" class="categories">
          <div v-if="!categories" style="width: 100%; display: flex; justify-content: center; margin-top: 2em;">
            <ion-icon style="font-size: 4em;" src="assets/loaders/puff_white.svg"></ion-icon>
          </div>
          <ion-col v-for="category in categories" :key="category.id" size="6">
            <CategorySearchComponent :category="category" @click="categoryClicked(category.id)"/>
          </ion-col>
        </ion-row>
        <ion-row v-if="!showCategories" class="commerces">
          <div v-if="!commercesCategoryResult" style="width: 100%; display: flex; justify-content: center; margin-top: 2em;">
            <ion-icon style="font-size: 4em;" src="assets/loaders/puff_white.svg"></ion-icon>
          </div>
          <ion-col v-for="commerce in commercesCategoryResult" :key="commerce.id" size="11">
            <CommerceResultSearchComponent :commerce="commerce" @click="commerceResultClicked(commerce)" />
          </ion-col>
        </ion-row>
      </ion-grid>
      <transition name="slide">
        <div v-if="showCommerceComponent">
            <CommerceComponent :commerce="commerceClicked" :searchPage="true"/>
        </div>
      </transition>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { ENV } from '@/enviroments/enviroment';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, useBackButton } from '@ionic/vue';
import { defineComponent } from 'vue'
import CategorySearchComponent from '@/components/CategorySearchComponent.vue';
import CommerceResultSearchComponent from '@/components/CommerceResultSearchComponent.vue';
import CommerceComponent from "../components/CommerceComponent.vue";
import { arrowBack } from 'ionicons/icons';

export default defineComponent ({
  name: 'Tab2',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonSearchbar, CategorySearchComponent, CommerceResultSearchComponent, CommerceComponent },
  setup() {
    return {
      arrowBack
    }
  },
  data() {
    return {
      categories: null as any,
      showCategories: true,
      commercesCategoryResult: null as any,
      showCommerceComponent: false,
      commerceClicked: null as any,
    }
  },
  beforeMount() {
    useBackButton(10, () => {
      this.showCommerceComponent ? this.showCommerceComponent = false : !this.showCategories ? this.showCategories = true : history.back();
    });

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
      this.commercesCategoryResult = null;
      
      fetch(ENV.API_URL+"/commerces/category/"+categoryId)
        .then(async response => {
          const data = await response.json();
          this.commercesCategoryResult = data['res'];
          console.log(this.commercesCategoryResult);
        })
        .catch(error => {
          console.error("There was an error!", error);
      });
    },
    commerceResultClicked(commerce: any) {
      this.commerceClicked = commerce;
      this.showCommerceComponent = true;
    },
    goBack() {
      this.showCategories = true;
      this.showCommerceComponent = false;
    }
  }
})
</script>

<style scoped>
.slide-enter-active {
  transition: all .2s;
}

.slide-leave-active {
  transition: all .2s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(170vw);
}

.parent {
  max-width: 500px;
  height: 100%;
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