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
      <ion-grid>
        <ion-row>
          <ion-col>
            <div id="profilePic"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQEVxFwk6E0NZA/profile-displayphoto-shrink_200_200/0/1598817201050?e=1624492800&v=beta&t=P04kATxDmGV7_9Mv_qKGtq4idFz3ONn2mFSdzs0btgM"></div>
          </ion-col>
          <ion-col>
            <div id="userinfo">

              <h1>{{ data.nombre }}</h1>
              <p>{{ data.correo }}</p>
              <p> Cambiar de cuenta ></p>
              
            </div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <div id="nivel"><h2>Nivell {{ data.nivel }}</h2></div>
          </ion-col>
        </ion-row>
        
        <ion-row>
          <ion-col>
            <div id="userQR"><img src="https://i.pinimg.com/originals/fc/b7/88/fcb788f04230791f5cf8de48fd53f1f3.png"></div>
          </ion-col>
        </ion-row>
      </ion-grid>

      

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { reactive } from 'vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';

const data = reactive({
    nombre: "Abel Pedrola",
    correo: "abel@gmail.com",
    nivel: 0
});

export default  {
  name: 'Tab3',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup(){
    return{
      data
    }
  }
}

</script>

<style scoped>

#profilePic {
  text-align: center;
}

#profilePic img {
  width:120px;
  height:120px;
  border-radius: 80px;
}

#userinfo {
  margin-left:-12px;
}

#userinfo h1, #userinfo p {
  margin:0;
  margin-bottom: 5px;
}

h1{
  padding-top:20px;
  font-weight: bold;
}

#nivel {
  width:90%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin:auto;
  margin-top: 40px;
  text-align: center;
  background-color: #FCF803;
  border-radius: 10px;
}

#nivel h2{
  padding:0;
  margin:0;
  font-size:40px;
  color:black;
  font-weight: 900;
}

#userQR {
  width:90%;
  margin:auto;
  margin-top: 15px;
  text-align: center;
}

#userQR img {
  width:70%
}

</style>