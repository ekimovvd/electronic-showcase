<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div :class="b()">
    <component :is="displayedComponent" v-model:is-arrange="isArrange" />

    <transition name="opacity">
      <TrashModal
        v-if="isArrange"
        :class="b('modal')"
        v-model:is-arrange="isArrange"
      />
    </transition>
  </div>
</template>
