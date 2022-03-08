<template>
  <button :class="styles" @click="handlerClick">
    <img
      class="button-image__image"
      alt="Imagen button"
      src="../../assets/img/svg/star.svg"
    />
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    text: String,
    selected: Boolean,
  },
})
export default class ButtonStar extends Vue {
  text!: string;
  selected!: boolean;

  handlerClick(): void {
    this.$emit("click");
  }

  get styles(): string {
    let base = "button-image";
    return this.selected ? base + " button-image--selected" : base;
  }
}
</script>

<style scoped>
.button-image {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  height: 44px;
  width: 150px;
  border-radius: 60px;
  padding: 11px 20px;
  background: #bfbfbf;
  font-family: "Lato", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
}

.button-image__image {
  width: 22px;
  margin-right: 10px;
}

.button-image--selected {
  background: #f22539;
}
</style>