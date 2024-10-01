<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div :class="b()">
    <h1 :class="b('title')">Все категории</h1>

    <div :class="b('cards')">
      <div :class="b('card')" v-for="product in products" :key="product.id">
        <img
          :class="b('card-preview')"
          :src="product.image"
          :alt="product.title"
        />

        <div :class="b('card-content')">
          <h4 :class="b('card-title')">
            {{ product.title }}
          </h4>

          <UIButton view="success" @click="handleProduct(product)">
            В корзину
          </UIButton>
        </div>
      </div>
    </div>
  </div>
</template>
