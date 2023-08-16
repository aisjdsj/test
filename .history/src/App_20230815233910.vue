<template>
  <div>
    <button @click="shuffleCards">洗牌</button>
    <div class="card-container">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card"
        @click="openDialog(index)"
      >
        {{ card }}
      </div>
    </div>
    <dialog v-if="dialogVisible">
      <p>卡片号码: {{ selectedCard }}</p>
      <button @click="incrementCard">[+]</button>
      <button @click="closeDialog">取消</button>
    </dialog>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
