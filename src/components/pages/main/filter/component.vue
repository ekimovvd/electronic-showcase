<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div :class="b()">
    <h4 :class="b('title')">Фильтр</h4>

    <div :class="b('groups')">
      <div :class="b('group')">
        <p :class="b('group-label')">Категория</p>

        <div :class="b('field')">
          <p :class="b('field-label')">Выберите категорию</p>

          <UISelect
            v-model:option="productsFilter.category"
            :options="categories"
          />
        </div>
      </div>

      <div :class="b('group')">
        <p :class="b('group-label')">Цена</p>

        <div :class="b('fields')">
          <div :class="b('field')">
            <p :class="b('field-label')">Мин. цена</p>

            <UIInput
              :class="b('field-input')"
              type="number"
              :model-value="productsFilter.minPrice"
              @update:modelValue="handleMinPrice"
            />
          </div>

          <div :class="b('field')">
            <p :class="b('field-label')">Макс. цена</p>

            <UIInput
              :class="b('field-input')"
              type="number"
              :model-value="productsFilter.maxPrice"
              @update:modelValue="handleMaxPrice"
            />
          </div>
        </div>
      </div>
    </div>

    <div :class="b('buttons')">
      <UIButton view="warning" :disabled="isResetDisabled" @click="handleReset">
        Сброс
      </UIButton>

      <UIButton view="success" :disabled="isApplyDisabled" @click="handleApply">
        Применить
      </UIButton>
    </div>
  </div>
</template>
