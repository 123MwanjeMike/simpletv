new Vue({
    el: "#tv",
    data() {
        return {
            signal: false,
            items: ['item1', 'item2', 'item3', 'item4',],
            item: undefined,
            message: "The bulb is on"
        }
    },
    methods: {
        toggle: function () {
            this.signal = !this.signal;
        },
        addItem: function () {
            if (this.item !== undefined) {
                this.items.push(this.item)
            }
        }
    }
});