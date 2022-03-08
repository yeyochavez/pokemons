<template>
  <div>
    <div class="page-template">
      <slot></slot>
    </div>
    <Footer
      v-if="showFooter"
      @pageSelected="handlerPageSelected($event)"
    ></Footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/molecules/Footer.vue";

@Options({
  components: {
    Footer,
  },
  props: {
    showFooter: Boolean,
  },
})
export default class PageTemplate extends Vue {
  showFooter!: boolean;

  handlerPageSelected(value: string): void {
    this.$emit("pageSelected", value);
  }
}
</script>

<style scoped>
.page-template {
  box-sizing: border-box;
  padding: 35px 30px 0 30px;
  box-sizing: border-box;
  width: 100vw;
  height: 100%;
}
</style>