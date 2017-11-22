<template>
    <div>
        <div v-bind:class="{'md-show': mdFlag}" class="md-modal modal-msg md-modal-transition">
            <div class="md-modal-inner">
                <div class="md-top">
                    <button @click="closeModal" class="md-close">Close</button>
                </div>
                <div class="md-content">
                    <div class="confirm-tips">
                        <slot name="msg"></slot>
                    </div>
                    <div class="btn-wrap">
                        <slot name="btnGroup"></slot>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="mdFlag" @click="closeModal" class="md-overlay"></div>
    </div>
</template>

<script>
export default {
  props: ["mdFlag"],
  data() {
    return {};
  },
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>
