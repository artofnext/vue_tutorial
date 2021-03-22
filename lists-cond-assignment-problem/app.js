const app = {
    data() {
        return {
            inputTask: "",
            isShown: true,
            tasks: []
        }
    },

    methods: {
        addTask() {
            this.tasks.push(this.inputTask)
        },
        
        removeTask(index) {
            this.tasks.splice(index, 1)
        },

        toggle() {
            this.isShown = !this.isShown
        }
    },

}

Vue.createApp(app).mount("#assignment")