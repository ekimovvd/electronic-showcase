<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <button :class="b('', { view })">
    <slot />
  </button>
</template>
