<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Perfil</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Perfil</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <!-- <ExploreContainer name="Tab 3 page" /> -->
      <ion-grid class="parent">
        <ion-row class="userCardLoading" v-if="!user">
          <ion-icon style="font-size: 4em;" src="assets/loaders/puff_white.svg"></ion-icon>
        </ion-row>
        <ion-row class="userCard" v-if="user">
          <ion-col size="5">
            <div class="profilePic"><img :src="'data:image/png;base64,'+user?.picture" :alt="user?.name"></div>
          </ion-col>
          <ion-col size="7">
            <div class="userInfo">
              <p class="userName">{{ user?.name }} {{ user?.surname }}</p>
              <p class="userEmail">{{ user?.email }}</p>
              <p class="userPhone">{{ user?.phone }}</p>
              <!-- <p> Cambiar de cuenta ></p> -->
            </div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <div class="level"><h2>Nivell {{ level?.name }}</h2></div>
          </ion-col>
        </ion-row>
        
        <ion-row>
          <ion-col>
            <div class="userQR">
              <img :src="'https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=500x500&chld=L|1&chl='+user?.id">
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>

      

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { ENV } from '@/enviroments/enviroment';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'Tab3',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data() {
    return {
      user: null as any,
      level: null as any,
    }
  },
  beforeMount() {
    //Fetch user info
    fetch(ENV.API_URL+"/users/"+ENV.userId)
      .then(async response => {
        const data = await response.json();
        this.user = data['res'];

        //Fetch level info
        fetch(ENV.API_URL+"/levels/"+this.user?.points)
          .then(async response => {
            const data = await response.json();
            this.level = data['res'];
          })
          .catch(error => {
            console.error("There was an error!", error);
        });
      })
      .catch(error => {
        console.error("There was an error!", error);
    });
  },
})

</script>

<style scoped>
.parent {
  max-width: 500px;
  height: 100%;
}

.profilePic {
  text-align: center;
}

.profilePic img {
  width:120px;
  height:120px;
  border-radius: 20px;
}

.userCard {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  margin-top: 1.3em;
}
.userCardLoading {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  margin-top: 1.3em;
  height: 8em;
}

.userInfo p {
  margin: 3px 0 0 0;
}
  .userInfo .userName {
    margin: 0 0 5px 0;
    font-size: 1.4em;
    font-family: 'Rubik Mono One', sans-serif;
    white-space: nowrap;
    width: 90%;
    overflow: auto;
    overflow: -moz-scrollbars-none;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .userInfo .userName::-webkit-scrollbar {
    width: 0 !important;
  }

  .userInfo .userEmail {
    overflow: auto;
    white-space: nowrap;
    width: 100%;
    overflow: -moz-scrollbars-none;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .userInfo .userEmail::-webkit-scrollbar {
    width: 0 !important;
  }

  .userInfo .userPhone, .userEmail {
    font-size: 16px;
    font-weight: 600;
    color: #adadad;
  }

h1{
  padding-top:20px;
  font-weight: bold;
}

.level {
  width:90%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin:auto;
  margin-top: 1.1em;
  text-align: center;
  /* background-color: #FCF803; */
  background-color: #464646;
  /* opacity: 0.85; */
  border-radius: 10px;
}

.level h2{
  padding:0;
  margin:0;
  font-size: 10vw;
  color: white;
  font-family: 'Rubik Mono One', sans-serif;
  /* font-weight: 900; */
}

@media only screen and (min-width: 500px) {
  .level h2 {
    font-size: 3.1em;
  }
}

.userQR {
  width:90%;
  margin: 1.3em auto 4.5em auto;
  text-align: center;
}

.userQR img {
  width:70%;
  border-radius: 17px;
}

</style>