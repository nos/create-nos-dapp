<template>
    <div class="header">
        <h1>{{ title }}</h1>
        <div class="logo-box">
            <img class="nos-logo" src="../assets/logo.png"/>
        </div>
        <div v-if="address !== ''">welcome {{ address }}</div>
    </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    title: {
      required: true
    },
    nos: {
      required: true
    }
  },
  created () {
    this.setAddress()
  },
  methods: {
    setAddress: async function () {
      this.address = await this.nos.getAddress()
    }
  },
  data () {
    return {
      address: ''
    }
  }
}
</script>

<style scoped>
    .header {
        text-align: center;
    }
    .nos-logo {
        animation: nOS-logo-spin infinite 3s linear;
        width: 100%;
    }
    .logo-box {
        display: block;
        max-width: 200px;
        margin: 32px auto;
        position: relative;
    }
    @keyframes nOS-logo-spin {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
</style>
