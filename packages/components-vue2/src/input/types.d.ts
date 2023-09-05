import Vue from 'vue';

class MyInput extends Vue {
    $props: {
        value: string | number;
        placeholder: string;
        type: string;
    };
}

export default MyInput;
