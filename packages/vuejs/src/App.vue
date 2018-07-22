<template>
    <div id="app">
        <div v-if="nos.exists">
            <app-header :title="title" :nos="nos"></app-header>
            <router-view :nos="nos"/>
        </div>
        <div v-else>
            Launch me through nOS client, please!
        </div>
    </div>
</template>

<script>
import AppHeader from './components/app-header'
import nosApi from '@nosplatform/api-functions'

export default {
  name: 'app',
  components: { AppHeader },
  created () {
  },
  data: function () {
    return {
      nos: nosApi,
      title: 'nOS dapp'
    }
  }
}
</script>

<style lang="css">
</style>
