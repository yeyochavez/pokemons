<template>
  <div class="item-pokemon">
    <p class="item-pokemon__name" @click="handlerSelectedPokemon">
      {{ pokemon.name }}
    </p>

    <!-- start: displayed when pokemon is favorite-->
    <img
      v-if="pokemon.isFavorite"
      class="item-pokemon__favorite"
      alt="Imagen favorite"
      src="../../assets/img/svg/favorite_on.svg"
      @click="handlerFavorite"
    />
    <!-- end: displayed when pokemon is favorite-->

    <!-- start: displayed when pokemon no is favorite-->
    <img
      v-else
      class="item-pokemon__favorite"
      alt="Imagen favorite"
      src="../../assets/img/svg/favorite_off.svg"
      @click="handlerFavorite"
    />
    <!-- end: displayed when pokemon no is favorite-->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { IItemPokemon } from "../../core/interfaces/item-pokemon.interface";

@Options({
  props: {
    pokemon: Object,
    isFavorite: Boolean,
  },
})
export default class ItemPokemon extends Vue {
  pokemon!: IItemPokemon;

  handlerFavorite(): void {
    this.pokemon.isFavorite = !this.pokemon.isFavorite;
  }

  handlerSelectedPokemon(): void {
    this.$emit("selectedPokemon", this.pokemon.name);
  }
}
</script>

<style scoped>
.item-pokemon {
  box-sizing: border-box;
  padding: 0 10px;
  margin: 4% 0;
  border-radius: 5px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: 1s;
}

.item-pokemon:hover {
  transform: translateY(-10px);
}

.item-pokemon__name {
  cursor: pointer;
  height: 26px;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #353535;
}

.item-pokemon__favorite {
  cursor: pointer;
  width: 44px;
}
</style>