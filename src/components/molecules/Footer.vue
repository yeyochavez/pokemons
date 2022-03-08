<template>
  <div class="footer">
    <div class="footer__wrapper">
      <ButtonHamburger
        text="All"
        :selected="isList"
        @click="handlerListSelected"
      ></ButtonHamburger>
      <ButtonStar
        text="Favorites"
        :selected="isFavorite"
        @click="handlerFavoriteSelected"
      ></ButtonStar>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ButtonStar from "@/components/atoms/ButtonStar.vue";
import ButtonHamburger from "@/components/atoms/ButtonHamburger.vue";

@Options({
  components: {
    ButtonStar,
    ButtonHamburger,
  },
})
export default class ItemPokemon extends Vue {
  buttonSelected: string = "list";

  handlerFavoriteSelected(): void {
    this.buttonSelected = "favorite";
    this.$emit("pageSelected", "favorite");
  }

  handlerListSelected(): void {
    this.buttonSelected = "list";
    this.$emit("pageSelected", "list");
  }

  get isFavorite(): boolean {
    return this.buttonSelected === "favorite";
  }

  get isList(): boolean {
    return this.buttonSelected === "list";
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  position: fixed;
  z-index: 1;
  bottom: 0;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
}

.footer__wrapper {
  width: 100%;
  max-width: 570px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>