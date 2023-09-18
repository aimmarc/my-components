import { defineComponent, defineSlots } from 'vue'

export default defineComponent({
    name: 'my-button',
    setup() {
        const slots = defineSlots();

        return <button>{ slots.default?.()}</button>
    }
});
