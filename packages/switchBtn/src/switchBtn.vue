<template>
  <div class="mui-switch">
    <input type="checkbox" class="mui-switch-checkbox" ref="checkbox">
    <span class="mui-switch-core" @click="change" :class="[isChecked ? 'is-checked' : 'is-unchecked']"></span>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isChecked: false
    }
  },
  mounted () {
    this.isChecked = this.value
    this.$nextTick(() => {
      let checkbox = this.$refs.checkbox
      checkbox.checked = this.value
    })
  },
  methods: {
    change () {
      let checkbox = this.$refs.checkbox
      checkbox.checked = !checkbox.checked
      this.isChecked = checkbox.checked
      this.$emit('input', this.isChecked)
      this.$emit('change', this.isChecked)
    }
  }
}
</script>
<style lang="scss">
.mui-switch {
  display: inline-block;
  .mui-switch-checkbox {
    display: none;
  }
  .mui-switch-core {
    display: inline-block;
    position: relative;
    width: 52px;
    height: 32px;
    border-radius: 16px;
    box-sizing: border-box;
    &::after, &::before {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      transition: transform .3s;
      border-radius: 15px;
    }
    &::before {
      width: 50px;
      height: 30px;
      background-color: #fdfdfd;
      transform: scale(1)
    }
    &::after {
      width: 30px;
      height: 30px;
      background-color: #fdfdfd;
      box-shadow: 0 1px 3px rgba(0,0,0,.4);
    }
  }
  .mui-switch-checkbox:checked + .mui-switch-core::after {
    transform: translateX(20px)
  }
  .mui-switch-checkbox:checked + .mui-switch-core::before {
    transform: scale(0)
  }
  .is-checked {
    border: 1px solid #26a2ff;
    background-color: #26a2ff;
  }
  .is-unchecked {
    border: 1px solid #d9d9d9;
    background-color: #d9d9d9;
  }
}
</style>

