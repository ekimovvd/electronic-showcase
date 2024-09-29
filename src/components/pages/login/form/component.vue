<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div :class="b()">
    <h1 :class="b('title')">Форма авторизации</h1>
    <div :class="b('fields')">
      <div :class="b('field')">
        <p :class="b('field-label')">Почта</p>

        <UIInput v-model="authLoginRequest.email" />

        <p v-show="isEmailMessageShow" :class="b('field-message')">
          Введите корректный email
        </p>
      </div>

      <div :class="b('field')">
        <p :class="b('field-label')">Пароль</p>

        <UIInput type="password" v-model="authLoginRequest.password" />

        <p v-show="isPasswordMessageShow" :class="b('field-message')">
          Минимальная длина: 8 символов
        </p>
      </div>
    </div>

    <UIButton
      :class="b('button')"
      view="success"
      :disabled="isLoginDisabled"
      @click="handleLogin"
    >
      Войти
    </UIButton>
  </div>
</template>
