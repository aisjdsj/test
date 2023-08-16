// App.vue
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
  dialogVisible.value = false;
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
