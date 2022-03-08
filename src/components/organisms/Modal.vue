<template>
  <div class="modal">
    <div class="modal__wrapper">
      <!-- start: close icon -->
      <img
        class="modal__btn-close"
        alt="Imagen close"
        src="../../assets/img/svg/close.svg"
        @click="close"
      />
      <!-- end: close icon -->

      <!-- start: modal header -->
      <div class="modal__header">
        <img
          class="modal__image"
          alt="Imagen pokemon"
          :src="pokemon.sprites.front_default"
        />
      </div>
      <!-- end: modal header -->

      <!-- start: modal data -->
      <ul class="modal__data">
        <li><span class="modal__name"> Name:</span> {{ pokemon.name }}</li>
        <li><span class="modal__name"> Weight:</span> {{ pokemon.weight }}</li>
        <li><span class="modal__name"> Height:</span> {{ pokemon.height }}</li>
        <li><span class="modal__name"> Types: </span> {{ types }}</li>
      </ul>
      <!-- end: modal data -->

      <!-- start: modal footer -->
      <div class="modal__footer">
        <ButtonText text="Share to my friends" @click="copyData"></ButtonText>
      </div>
      <!-- end: modal footer -->
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ButtonText from "@/components/atoms/ButtonText.vue";

@Options({
  props: {
    pokemon: Object,
  },
  components: {
    ButtonText,
  },
})
export default class Modal extends Vue {
  pokemon: any;

  close() {
    this.$emit("close");
  }

  copyData(): void {
    navigator.clipboard.writeText(this.setFullName());
  }

  setFullName(): string {
    let text = this.pokemon.name ? "Name: " + this.pokemon.name + ", " : "";
    text += this.pokemon.weight ? "Weight: " + this.pokemon.weight + ", " : "";
    text += this.pokemon.height ? "Height: " + this.pokemon.height + ", " : "";
    text += this.types ? "Types: " + this.types : "";
    return text;
  }

  get types(): string {
    let text = "";
    let types = this.pokemon.types || [];
    types.forEach((item: any) => {
      if (item.type && item.type) {
        text += item.type.name;
      }
    });
    return text;
  }
}
</script>

<style scoped>
.modal {
  box-sizing: border-box;
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__wrapper {
  position: absolute;
  box-sizing: border-box;
  width: 85%;
  height: 60%;
  background: #ffffff;
  border-radius: 5px;
  background: #ffffff;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal__header {
  width: 100%;
  height: 40%;
  background: white url("../../assets/img/png/landscape.png") no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__image {
  width: 80%;
  transition: 1s;
}

.modal__image:hover {
  transform: translateY(-10px);
}

.modal__data {
  box-sizing: border-box;
  list-style: none;
  box-sizing: border-box;
  padding: 30px;
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.8;
}

.modal__name {
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
}

.modal__footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.modal__btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

@media only screen and (min-width: 768px) {
  .modal__wrapper {
    width: 60%;
    height: 70%;
  }

  .modal__header {
    height: 40%;
    background-position-y: -200px;
  }
  .modal__image {
    width: 50%;
  }

  .modal__data {
    padding: 0 30px;
  }
}
</style>