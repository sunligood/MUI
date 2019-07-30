<template>
  <button
    class="mui-button"
    :class="['mui-button-' + type, 'mui-button-' + size, {'is-disabled': disabled}]"
    @click="handleClick"
  >
    <span class="mui-button-text">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary' // primary (通用) outline (边框)
    },
    size: {
      type: String,
      default: 'large' // large (100%)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
<style lang="scss">
.mui-button {
  position: relative;
  appearance: none;
  border-radius: 4px;
  border: 0;
  box-sizing: border-box;
  font-size: 18px;
  height: 41px;
  outline: 0;
  overflow: hidden;
  text-align: center;
  &:after {
    background-color: #000;
    content: " ";
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  &:not(.is-disabled):active:after {
    opacity: 0.2;
  }
}
.mui-button-primary {
  color: #fff;
  background-color: #008fff;
}
.mui-button-outline {
  color: #008fff;
  border: 1px solid #008fff;
  background-color: transparent;
}
.mui-button-default {
  font-size: 16px;
  color: rgb(66, 65, 65);
  border: 1px solid #bbb9b9;
  background-color: #f2f2f2;
}
.mui-button-large {
  display: block;
  width: 100%;
}
.mui-button.is-disabled {
  opacity: 0.6;
}
</style>

