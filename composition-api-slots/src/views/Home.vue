<template>
  <div class="home">
    <modal :modalActive="modalActive" @close="toggleModal">
      <div class="modal-content">
        <h1>Ths is a modal header</h1>
        <p>this is a modal message</p>
      </div>
    </modal>
    <button v-if="!modalActive" type="button" @click="toggleModal">Open Modal</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
export default {
  name: 'Home',
  components: {
    Modal
  },
  setup () {
    const modalActive = ref(false)

    const toggleModal = () => {
      modalActive.value = !modalActive.value
    }

    return {modalActive, toggleModal}
  }
}
</script>


<style lang="scss" scoped>
.home {
  background-color: rgba(0, 176, 234, 0.5);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    display: flex;
    flex-direction: column;

    h1, p {
      margin-bottom: 16px;
    }

    h1 {
      font-size: 32px;
    }

    p {
      font-size: 16px;
    }
  }
}
</style>