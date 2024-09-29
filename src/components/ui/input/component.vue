<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <input :class="b()" :type="type" :value="modelValue" @input="handleValue" />
</template>
