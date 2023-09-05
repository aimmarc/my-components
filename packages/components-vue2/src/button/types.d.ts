import Vue from 'vue';

class MyButton extends Vue {
    $props: {
        type: string;
        htmlType: string;
    };
}

export default MyButton;
