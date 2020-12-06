<template>
    <iframe
        class="bilibili-iframe"
        :src="src"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true"
    >
    </iframe>
</template>

<script>
import iframeSrc from '../data/iframeSrc.json'
export default {
    props: ["name"],
    computed: {
        src() {
            return iframeSrc[this.name || this.$title];
        },
    },
};
</script>

<style>
.bilibili-iframe {
    height: -webkit-fill-available;
    width: -webkit-fill-available;
}
</style>