<template>
  <PageTemplate
    @pageSelected="handlerPageSelected($event)"
    :showFooter="true">
    <div class="list-template">
      <input
        class="list-template__input"
        type="text"
        @input="handlerValueChange($event.target.value)"
      />
      <slot></slot>
    </div>
  </PageTemplate>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PageTemplate from "@/templates/PageTemplate.vue";

@Options({
  components: {
    PageTemplate,
  },
})
export default class ListTemplate extends Vue {
  handlerValueChange(value: any): void {
    this.$emit("valueChange", value);
  }
  handlerPageSelected(value: string): void {
    this.$emit("pageSelected", value);
  }
}
</script>

<style scoped>
.list-template {
  margin: 0 auto;
  max-width: 570px;
  height: 100%;
  padding-bottom: 100px;
}

.list-template__input {
  margin-bottom: 10px;
  text-indent: 50px;
  box-sizing: border-box;
  font-size: 20px;
  border: none;
  width: 100%;
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  background: white url("../assets/img/svg/glass.svg") no-repeat;
  background-size: 20px;
  background-position: 20px 50%;
}
</style>