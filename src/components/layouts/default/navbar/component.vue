<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div :class="b()">
    <router-link :class="b('logo')" to="/"> Логотип </router-link>

    <router-link :class="b('trash')" to="/trash">
      Кнопка корзины

      <span :class="b('trash-counter')">
        {{ trashRepo.trashCounter }}
      </span>
    </router-link>
  </div>
</template>
