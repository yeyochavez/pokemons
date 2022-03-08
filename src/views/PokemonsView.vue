<template>
  <ListTemplate
    @pageSelected="handlerPageSelected($event)"
    @valueChange="handlerTextFilter($event)"
  >
    <!-- start: displayed when the list has items-->
    <div v-if="pokemonsFilter.length" class="pokemons-view__list">
      <ItemPokemon
        v-for="(pokemon, index) in pokemonsFilter"
        :pokemon="pokemon"
        @selectedPokemon="handlerSelectedPokemon($event)"
        :key="index"
      ></ItemPokemon>
    </div>
    <!-- end: displayed when the list has items-->

    <!-- start: displayed when the list is empty -->
    <div class="pokemons-view__empty" v-else>
      <span class="pokemons-view__title">Uh-oh!</span>
      <p class="pokemons-view__text">You look lost on your journey!</p>
      <ButtonText text="Go back home" @click="handlerBackHome" />
    </div>
    <!-- end: displayed when the list is empty -->
    <!-- start: modal -->
    <Modal v-if="showModal" :pokemon="pokemon" @close="handlerCloseModal" />
    <!-- end: modal -->
  </ListTemplate>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ListTemplate from "@/templates/ListTemplate.vue";
import ButtonText from "@/components/atoms/ButtonText.vue";
import ItemPokemon from "@/components/molecules/ItemPokemon.vue";
import PokemonService from "@/core/services/PokemonService";
import { IItemPokemon } from "@/core/interfaces/item-pokemon.interface";
import Modal from "@/components/organisms/Modal.vue";

@Options({
  components: {
    ListTemplate,
    ButtonText,
    ItemPokemon,
    Modal,
  },
})
export default class PokemonsView extends Vue {
  pokemons: Array<IItemPokemon> = [];

  pokemonsFilter: Array<IItemPokemon> = [];

  showModal: boolean = false;

  pokemon: any = null;

  pageSelected: string = "list";

  limitItem: number = 20;

  async mounted(): Promise<void> {
    let countInitial = 0;
    await this.setPokemons(countInitial, this.limitItem);
    this.getNextPokemons();
  }

  async getNextPokemons() {
    let heightFooter = 80;
    window.onscroll = async () => {
      let bottomOfWindow =
        document.documentElement.scrollTop +
          window.innerHeight -
          heightFooter ===
        document.documentElement.offsetHeight - heightFooter;
      if (bottomOfWindow) {
        await this.setPokemons(this.pokemons.length, this.limitItem);
      }
    };
  }

  async setPokemons(offset: number, limit: number): Promise<void> {
   let response = await PokemonService.getAll(offset, limit);
      this.pokemons = this.pokemons.concat(this.applyFormatToList(response));
      this.pokemonsFilter = this.pokemons;
  }

  applyFormatToList(response: any): Array<IItemPokemon> {
    return response.results.map((item: any) => {
      return {
        name: item.name,
        isFavorite: false,
      };
    });
  }

  getPokemons(): Array<IItemPokemon> {
    if (this.isList) {
      return this.pokemons;
    }
    return this.pokemons.filter((pokemon) => !!pokemon.isFavorite);
  }

  handlerTextFilter(value: string): void {
    let findName = value ? value.toLowerCase() : "";
    this.pokemonsFilter = this.getPokemons().filter((item) =>
      item.name.toLowerCase().includes(findName)
    );
  }

  handlerPageSelected(value: string): void {
    this.pageSelected = value;
    this.pokemonsFilter = this.getPokemons();
  }

  handlerCloseModal(): void {
    this.showModal = false;
    this.pokemon = undefined;
  }

  handlerBackHome(): void {
    this.$router.push("/");
  }

  get isFavorite(): boolean {
    return this.pageSelected === "favorite";
  }

  get isList(): boolean {
    return this.pageSelected === "list";
  }

  async handlerSelectedPokemon(value: string): Promise<void> {
    this.pokemon = await PokemonService.get(value);
    this.showModal = true;
  }
}
</script>

<style scoped>
.pokemons-view__list {
  box-sizing: border-box;
  width: 100%;
}
.pokemons-view__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pokemons-view__title {
  color: #353535;
  margin-top: 15%;
  font-family: "Lato", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: center;
}

.pokemons-view__text {
  color: #5e5e5e;
  font-family: "Lato", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 10%;
}
</style>