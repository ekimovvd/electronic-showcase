<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div :class="b()">
    <DefaultNavbar />

    <router-view />
  </div>
</template>
