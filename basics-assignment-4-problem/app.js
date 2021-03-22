const app = {
    data() {
        return {
          userInput: "",
          hidden: false,
          colorInput: '',
        };
    },

    methods: {
        toggle() {
            this.hidden = !this.hidden;
        }
    },

    computed: {
        classes() {
            return [this.userInput, { hidden: this.hidden }];
        },
        color() {
            console.log("#" + this.colorInput);
              return "#" + this.colorInput;
        }
    }

}

Vue.createApp(app).mount("#assignment");