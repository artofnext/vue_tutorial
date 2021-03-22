const appObj = {
    data() {
        return {
          myName: "Alex Nov",
          myAge: 44,
          imgSource:
            "https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fnature24155/MediaObjects/41586_2017_Article_BFnature24155_Fig1_HTML.jpg?as=webp",
        };
    },
    methods: {
        ageIn5Years() {
            return this.myAge + 5;
        },
        favoritNumber() {
            return Math.random();
        },
    }
};

Vue.createApp(appObj).mount("#assignment");