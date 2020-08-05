new Vue({
    el: "#tv",
    data() {
        return {
            signal: false,
            state: ['Off', 'On']
        }
    },
    methods: {
        toggle: function () {
            this.signal = !this.signal;
        }
    }
});