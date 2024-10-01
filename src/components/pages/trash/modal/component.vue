<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div :class="b()">
    <div :class="b('wrapper')" v-click-outside="handleClose">
      <button :class="b('close')" @click="handleClose">X</button>

      <h3 :class="b('title')">Заказ № {{ displayedOrderNumber }}</h3>

      <p :class="b('label')">Ваш заказ успешно оформлен</p>

      <UIButton view="success" @click="handleClose"> Закрыть </UIButton>
    </div>
  </div>
</template>
