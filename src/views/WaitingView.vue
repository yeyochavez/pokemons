<template>
  <div class="waiting-view">
    <img
      class="introduction-view__pokebola pokebola--rotate"
      alt="Imagen loading"
      src="../assets/img/svg/loader.svg"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class WaitingView extends Vue {
  async mounted(): Promise<void> {
    setTimeout(() => {
      this.$router.push("pokemons");
    }, 3000);
  }
}
</script>

<style scoped>
.waiting-view {
  padding: 10px;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.waiting-view__pokebola {
  width: 120px;
}

.pokebola--rotate {
  animation: rotation 2s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>