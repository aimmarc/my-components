<template>
    <input :type="type" v-model="innerVal" :placeholder="placeholder" />
</template>

<script>
export default {
    name: 'my-input',
    props: {
        value: [String, Number],
        placeholder: String,
        type: String,
    },
    computed: {
        innerVal: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            },
        },
    },
};
</script>
