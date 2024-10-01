<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div :class="b()">
    <h1 :class="b('title')">Товары в корзине</h1>

    <table :class="b('table')">
      <thead>
        <tr>
          <th
            :class="b('table-column')"
            v-for="column in displayedColumns"
            :key="column"
          >
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(product, productIndex) in trashRepo.trash"
          :key="product.id"
        >
          <td :class="b('table-cell')">{{ productIndex + 1 }}</td>

          <td :class="b('table-cell')">
            <div :class="b('table-content')">
              <img
                :class="b('table-preview')"
                :src="product.image"
                :alt="product.title"
              />

              <p :class="b('table-label')">
                {{ product.title }}
              </p>
            </div>
          </td>

          <td :class="b('table-cell')">
            <button
              :class="b('table-button')"
              @click="trashRepo.REMOVE_TRASH(product)"
            >
              -
            </button>

            {{ product.count }}

            <button
              :class="b('table-button')"
              @click="trashRepo.ADD_TRASH(product)"
            >
              +
            </button>
          </td>

          <td :class="b('table-cell')">{{ product.price }}</td>

          <td :class="b('table-cell')">{{ product.price * product.count }}</td>
        </tr>
      </tbody>
    </table>

    <div :class="b('footer')">
      <h3 :class="b('footer-title')">
        Всего товаров {{ trashRepo.trashCounter }} на сумму
        {{ trashRepo.trashAmount }}
      </h3>

      <UIButton view="success" @click="handleArrange">
        Оформить заказ
      </UIButton>
    </div>
  </div>
</template>
