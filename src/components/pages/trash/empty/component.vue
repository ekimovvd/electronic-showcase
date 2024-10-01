<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div :class="b()">
    <h1 :class="b('title')">Корзина пуста</h1>

    <router-link :class="b('link')" to="/"> Вернуться к покупкам </router-link>
  </div>
</template>
