<template>
  <transition name="modal-animation">
    <div class="modal" v-show="modalActive">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <i @click="close" class="fa-solid fa-xmark"></i>

          <!-- Modal Content -->
          <slot />
          <button @click="close" type="button">Close</button>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
    props: ['modalActive'],
    setup (props, {emit}) {
        // this.$emit('')
        const close = () => {
            emit('close')
        }

        return {close}
    }
}
</script>

<style scoped lang="scss">
.modal-animation-enter-active,
.modal-animation-leave-active {
    transition: opacity .3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to  {
    opacity: 0;
}

.modal-animation-inner-enter-active {
    transition: all .3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.5s;
}

.modal-animation-inner-leave-active {
    transition: all .3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
}

.modal-animation-inner-leave-to {
    transform: scale(0.8);
}

.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.7);

    .modal-inner {
        position: relative;
        max-width: 640px;
        width: 80%;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
        background-color: #fff;
        padding: 64px 16px;

        i {
            width: 10px; 
            height: 10px;
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 20px;
            cursor: pointer;

            &:hover {
                color: crimson;
            }
        }

        button {
        padding: 20px 30px;
        border: none;
        font-size: 60px;
        background-color: crimson;
        color: #fff;
        cursor: pointer;
        }

    }
}
</style>