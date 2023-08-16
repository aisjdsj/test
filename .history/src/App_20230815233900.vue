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

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const cards = computed(() => store.state.cards);
const dialogVisible = ref(false);
const selectedCard = ref(0);

const shuffleCards = () => {
  store.commit('shuffleCards');
};

const openDialog = (index) => {
  selectedCard.value = cards.value[index];
  dialogVisible.value = true;
};

const incrementCard = () => {
  if (selectedCard.value <= 4) {
    selectedCard.value++;
    store.commit('updateCard', { index: cards.value.indexOf(selectedCard.value - 1), newValue: selectedCard.value });
  }
};

const closeDialog = () => {
  dialogVisible.value = false;
  selectedCard.value = 0;
};
</script>

<style>
.card-container {
  display: flex;
}

.card {
  border: 1px solid black;
  width: 50px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  margin: 5px;
}

dialog {
  border: 1px solid black;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 9999;
}
</style>
最后，在main.ts中初始化Vue应用，并将Vuex store添加到应用中：

typescript
Copy code
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

const app = createApp(App);
app.use(store);
app.mount('#app');
在这个示例中，我们使用了Vue 3.0、Typescript和Vuex来实现了您描述的功能。主视图中的卡片状态存储在Vuex store中，主视图和对话框组件都通过computed属性从store中订阅卡片状态。当点击[+]按钮时，会调用store的mutation来更新卡片状态。对话框的显示和关闭也是基于响应式的变量来实现的。




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
