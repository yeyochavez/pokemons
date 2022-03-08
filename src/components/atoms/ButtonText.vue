<template>
  <button class="button-text">{{ text }}</button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    text: String,
  },
})
export default class ButtonText extends Vue {
  text!: string;
}
</script>

<style scoped>
.button-text {
  cursor: pointer;
  border: none;
  color: white;
  height: 44px;
  width: 131px;
  border-radius: 60px;
  padding: 11px 20px;
  background: #f22539;
}
</style>