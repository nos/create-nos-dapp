<template>
    <div class="header">
        <h1>{{ title }}</h1>
        <div class="logo-box">
            <img class="nos-logo" src="../assets/logo.png"/>
        </div>
        <div v-if="address !== ''">welcome {{ address }}</div>
        <div v-if="balance !== null">your balance is: {{ balance }}</div>
    </div>
</template>

<script>
  const gas = "602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7";

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
      this.balance = await this.nos.getBalance({asset: gas})
    }
  },
  data () {
    return {
      address: '',
      balance: null
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
