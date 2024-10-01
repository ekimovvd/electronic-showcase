<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <select :value="option" @input="handleOption">
    <option value="">all</option>

    <option v-for="option in options" :key="option">
      {{ option }}
    </option>
  </select>
</template>
