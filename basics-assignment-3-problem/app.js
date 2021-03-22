const app = {
    data() {
        return {
            val: 0,
        }
    },

    methods: {
        updateVal(value) {
            this.val += value
        }
    },

    computed: {
        result() {
            if (this.val < 37) return "Not there yet"
            else if (this.val === 37) return this.val
            else return "Too much!";
        }
    },

    watch: {
        result() {
            that = this
            setTimeout(function() {that.val = 0}, 2000)
        }
    }
}

Vue.createApp(app).mount('#assignment')