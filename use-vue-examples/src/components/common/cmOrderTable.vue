<template>
  <div class="container mt-4">

    <table class="table table-bordered mt-4">
      <thead class="thead-light">
        <tr>
          <th width="5%">#</th>
          <th width="10%">상품코드</th>
          <th width="10%">상품명</th>
          <th width="20%">상품설명</th>
          <th width="10%">수량</th>
          <th width="10%">가격</th>
          <th width="10%">할인</th>
          <th width="10%">상품 가격</th>
          <th width="15%">
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ index + 1 }}</td>
          <td>
            <span v-if="editIndex !== index">{{ item.code }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" v-model="item.code">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.name }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" v-model="item.name">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.description }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" v-model="item.description">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.qty }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" type="number" v-model.number="item.qty">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.price }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" type="number" v-model.number="item.price">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.discount }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" type="number" v-model.number="item.discount">
            </span>
          </td>
          <td><div class="text-right">{{ subtotal(item) | money }}</div></td>
          <td>
            <span v-if="editIndex !== index">
              <button @click="edit(item, index)" class="btn btn-sm btn-outline-secondary mr-2">수정</button>
              <button @click="remove(item, index)" class="btn btn-sm btn-outline-secondary mr-2">삭제</button>
            </span>
            <span v-else>
              <button class="btn btn-sm btn-outline-secondary mr-2" @click="cancel(item)">취소</button>
              <button class="btn btn-sm btn-outline-secondary mr-2" @click="save(item)">저장</button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="col-3 offset-9 text-right my-3">
      <button v-show="!editIndex" @click="add" class="btn btn-sm btn-secondary">상품 추가</button>
    </div>

    <div class="col-3 offset-9">

      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">가격</span>
        </div>
        <input class="form-control form-control-sm text-right" disabled :value="this.allSubTotal | money">
      </div>

      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">세금</span>
        </div>
        <input class="form-control form-control-sm" type="number" v-model.number="tax">
        <div class="input-group-append">
          <span class="input-group-text">%</span>
        </div>
      </div>

      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">총 가격</span>
        </div>
        <input class="form-control form-control-sm text-right" disabled :value="this.total | money">
      </div>

    </div>

  </div>
</template>

<script>
/**
 * author-GitHub :  https://vuejsexamples.com/form-dinamis-dengan-menggunakan-vue-js/
 */
export default {
  name: 'cmOrderTable',
  filters: {
    money: (value) => new Intl.NumberFormat(['ko-KR']).format(value)
  },
  data() {
    return {
      editIndex: null,
      originalData: null,
      items: [
        { code: 'G12031', name: '나이키-코르테즈', description: '나이키-코르테즈(클래스 레더)', qty: 1, price: 3500, discount: 10, },
        { code: 'G26501', name: '나이키-에어맥스', description: '나이키-에어맥스(에어 95)', qty: 2, price: 5000, discount: 2, },
      ],
      tax: 10,
    }
  },
  methods: {
    add() {
      this.originalData = null
      this.items.push({ code: '', name: '', description: '', qty: 1, unit: 1, price: 0, discount: 0 })
      this.editIndex = this.items.length - 1
    },
    edit(item, index) {
      this.originalData = Object.assign({}, item)
      this.editIndex = index
    },
    cancel(item) {
      this.editIndex = null
      if (!this.originalData) {
        this.items.splice(this.items.indexOf(item), 1)
        return
      }
      Object.assign(item, this.originalData)
      this.originalData = null
    },
    remove(item, index) {
      this.items.splice(index, 1)
    },
    save(item) {
      this.originalData = null
      this.editIndex = null
    },
    subtotal(item) {
      return (item.qty * item.price) - (item.qty * item.price * item.discount / 100)
    }
  },
  computed: {
    allSubTotal() {
      return this.items
        .map(item => this.subtotal(item))
        .reduce((a, b) => a + b, 0)
    },
    total() {
      return this.tax
        ? this.allSubTotal + (this.allSubTotal * (this.tax / 100))
        : this.allSubTotal
    }
  },
}
</script>

<style>
  input[type="number"] {
    text-align: right;
  }
</style>
