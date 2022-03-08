<template>
  <div class="introduction-view">
    <img
      class="introduction-view__pikachu"
      alt="Imagen pikachu"
      src="../assets/img/png/pikachu.png"
    />
    <h1 class="introduction__title">Welcome to Pokédex</h1>
    <p class="introduction-view__text">
      The digital encyclopedia created by Professor Oak is an invaluable tool to
      Trainers in the Pokémon world.
    </p>
    <ButtonText text="Get started" @click="handlerStarted"></ButtonText>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ButtonText from "@/components/atoms/ButtonText.vue";

@Options({
  components: {
    ButtonText,
  },
})
export default class IntroducctionView extends Vue {
  handlerStarted(): void {
    this.$router.push("waiting");
  }
}
</script>

<style scoped>
.introduction-view {
  padding: 10px;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.introduction-view__pikachu {
  width: 90%;
  max-width: 300px;
  margin-bottom: 25px;
}

.introduction-view__title {
  font-family: "Lato", sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: center;
}

.introduction-view__text {
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 50px;
}

.introduction-view__button {
  margin-top: 30px;
  border: none;
  color: white;
  height: 44px;
  width: 131px;
  border-radius: 60px;
  padding: 11px 20px;
  background: #f22539;
}
</style>