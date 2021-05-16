<template>
    <div class="notificationBox">
        <div class="titleDate">
            <h3>{{ notification.title }}</h3>
            <div class="detailsDate">
                <span>{{ getDate(notification.created_at) }}</span>
                <span>{{ getTime(notification.created_at) }}</span>
            </div>
        </div>
        <p>{{ notification.body }}</p>
    </div>
</template>

<script lang="ts">
import moment from 'moment';

export default {
  name: 'CommerceNotificationComponent',
  props: {
    notification: Object
  },
  methods: {
      getDate(date: any) {
        return moment(date, 'YYYY-MM-DD h:m:s').format('DD/MM/YYYY');
      },
      getTime(date: any) {
        return moment(date, 'YYYY-MM-DD h:m:s').format('h:m')+"h";
      }
  }
}
</script>

<style scoped>
.notificationBox {
    width: 100%;
    min-height: 5em;
    background-color: white;
    border-radius: 15px;
}
.titleDate {
    display: flex;
    justify-content: space-between;
}
.detailsDate {
    display: flex;
    flex-flow: column;
    text-align: end;
    padding: .6em .6em 0 0;
}

h3 {
    padding: .5em 0 0 .5em;
    margin-top: 0;
    font-size: 1.6em;
    font-weight: 900;
}
span {
    font-weight: 900;
    font-size: .8em;
    color: #4e4e4e;
}

p {
    font-size: 14px;
    margin: 0 0 .7em 1em;
    padding: 0 0 .8em 0;
    font-weight: 600;
    color: rgb(29, 29, 29);
}
</style>