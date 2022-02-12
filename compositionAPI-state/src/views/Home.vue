<template>
  <div class="home">
    <h1>Vue State Counter</h1>

    <p class="count">{{ count }}</p>

    <p>Count Tripled {{ tripleCount }}</p>
    <p>Ceiled Tripled Deceased {{ tripleOneCount }}</p>

    <div class="change-count">
      <i @click="increase" class="fal fa-plus"></i>
      <i @click="decrease" class="fal fa-minus"></i>
    </div>

    <div class="cod">
      <h1>Color of the day</h1>

      <p>{{ color }}</p>

      <input type="text" name="color" v-model="color">
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import store from '@/store/index.js'

export default {
  name: "Home",
  components: {},
  setup() {
    const count = computed( () => store.state.count )
    const tripleCount = computed ( () => store.getters.tripleCount())
    const tripleOneCount = computed (() => Math.ceil(store.getters.tripleOneCount()))

    const increase = () => {
      store.mutations.increase()
    };

    const decrease = () => {
      store.mutations.decrease()
    };

    const color = computed({
      get () {
        return store.state.color
      },
      set (value) {
        store.mutations.setColor(value)
      }
    })

    return { count, increase, decrease, tripleOneCount, store, tripleCount, color };
  },
};
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
}
h1 {
  margin-top: 16px;
}

.count {
  margin-top: 32px;
  font-size: 60px;
}

.change-count {
  margin: 32px 0;
  display: flex;
  justify-content: center;
  gap: 32px;

  i {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #f1f1f1;
    font-size: 40px;
  }
}

.cod {
  display: flex;
  flex-direction: column;

  p {
    font-size: 32px;
    text-align: center;
  }

  input {
    margin: 16px 0;
    padding: 6px;

    &:focus {
      outline: none;
    }
  }
}
</style>
