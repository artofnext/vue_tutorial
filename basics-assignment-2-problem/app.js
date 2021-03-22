const app = {
    data() {
        return {
            userInput: "",
            userInput2: "",
            output: "",
        }
    },

    methods: {
        showAlert() {
            alert("This is an alert!")
        },

        updateUserInput(event) {
            this.userInput = event.target.value
        },

        updateUserInput2(event) {
            this.userInput2 = event.target.value
        },

        updateOutput() {
            this.output = this.userInput2
        }
    }
}

Vue.createApp(app).mount("#assignment");