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
export default {
    props: ["name"],
    computed: {
        src() {
            return {
                同桌的你:
                    "//player.bilibili.com/player.html?aid=585374979&bvid=BV1Vz4y1k7Gq&cid=257572786&page=1",
                幻化成风:
                    "//player.bilibili.com/player.html?aid=542870500&bvid=BV13i4y1j7ek&cid=257579108&page=1",
                爱丫爱丫:
                    "//player.bilibili.com/player.html?aid=927761611&bvid=BV1kK4y1Z7Gn&cid=257574860&page=1",
                我还想她:
                    "//player.bilibili.com/player.html?aid=372801761&bvid=BV11Z4y137Qh&cid=257573945&page=1",
                恋爱ing:
                    "//player.bilibili.com/player.html?aid=415280491&bvid=BV1VV411a7rq&cid=257594329&page=1",
            }[this.name || this.$title];
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