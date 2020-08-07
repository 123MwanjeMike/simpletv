new Vue({
    el: "#tv",
    data() {
        return {
            signal: false,
            state: ['OFF', 'ON']
        }
    },
    methods: {
        toggle: function () {
            this.signal = !this.signal;
        }
    }
});