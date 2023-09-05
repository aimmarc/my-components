<template>
    <button :type="htmlType">
        <slot />
    </button>
</template>

<script>
export default {
    name: 'my-button',
    props: {
        type: String,
        htmlType: String,
    },
};
</script>
