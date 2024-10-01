<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div :class="b()">
    <MainFilter
      :categories="categories"
      v-model:products-filter="productsFilter"
      v-model:products="products"
    />

    <MainProducts :products="products" />
  </div>
</template>
