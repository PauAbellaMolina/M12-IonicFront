<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="home" />
          <!-- <ion-label>Tab 1</ion-label> -->
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="search" />
          <!-- <ion-label>Tab 2</ion-label> -->
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="person" />
          <!-- <ion-label>Tab 3</ion-label> -->
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage } from '@ionic/vue';
import { person, search, home } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      person,
      search,
      home
    }
  }
}
</script>