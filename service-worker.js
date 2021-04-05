/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "01.Ukulele基础/三拍子 扫弦练习.html",
    "revision": "f65015b15b79825bf419bd9a380437cf"
  },
  {
    "url": "01.Ukulele基础/夏威夷小曲子.html",
    "revision": "f9509d8eee074ad680e36647246ae0e3"
  },
  {
    "url": "01.Ukulele基础/小星星 欢乐颂.html",
    "revision": "be0fadf5221cc48cde1f826950d3315e"
  },
  {
    "url": "01.Ukulele基础/小步舞曲.html",
    "revision": "990bea500b42ad653e0d0f93b7da8fd3"
  },
  {
    "url": "01.Ukulele基础/幸福拍手歌.html",
    "revision": "c2504cdc4163b1391f881ee12c14639d"
  },
  {
    "url": "01.Ukulele基础/新年好_生日快乐.html",
    "revision": "cf9f0940b6daae3ae6f1d66e7184fc6c"
  },
  {
    "url": "01.Ukulele基础/爬格子.html",
    "revision": "e9052347568ef960024073836cf2bcc6"
  },
  {
    "url": "02.Ukulele进阶教程/第1课.html",
    "revision": "01df772883969dc6af7d0044d95f1ba9"
  },
  {
    "url": "02.Ukulele进阶教程/第2课.html",
    "revision": "331d04e7b699a6359a25e5bc004f36a6"
  },
  {
    "url": "02.Ukulele进阶教程/第3课.html",
    "revision": "9c87b902213c6d2a30631a373900ea71"
  },
  {
    "url": "02.Ukulele进阶教程/第4课.html",
    "revision": "aa19a84662359fa85e95bbc6fa12254a"
  },
  {
    "url": "02.Ukulele进阶教程/第5课.html",
    "revision": "4aad460f9fdd370421d07602df78bccb"
  },
  {
    "url": "02.Ukulele进阶教程/第6课.html",
    "revision": "a24a594588b7ba54bd3c2f331bac0ce3"
  },
  {
    "url": "02.Ukulele进阶教程/第7课.html",
    "revision": "d0b2fe8372db17456cbe2240fde62cd2"
  },
  {
    "url": "03.Ukulele练习曲/一路向北.html",
    "revision": "97af46d1e4c8b89c91c45474c938d548"
  },
  {
    "url": "03.Ukulele练习曲/七月上.html",
    "revision": "0d0f2412617ef93102b623e6972bc758"
  },
  {
    "url": "03.Ukulele练习曲/下一秒.html",
    "revision": "591c4b09e59a73600871f8685ec732b1"
  },
  {
    "url": "03.Ukulele练习曲/修炼爱情.html",
    "revision": "3dfca8f88f2cbd7f27fd0ae92366a66a"
  },
  {
    "url": "03.Ukulele练习曲/偏爱.html",
    "revision": "8f39529459b6f67475e29a75b5295422"
  },
  {
    "url": "03.Ukulele练习曲/同桌的你.html",
    "revision": "95c0a540dfe0c937d33c22247cdd3e35"
  },
  {
    "url": "03.Ukulele练习曲/好想你.html",
    "revision": "1a76af432455e8be0d1e2085b863695f"
  },
  {
    "url": "03.Ukulele练习曲/小幸运.html",
    "revision": "5044f48f24510288a6c4dc156d885fd7"
  },
  {
    "url": "03.Ukulele练习曲/小情歌.html",
    "revision": "08db2008ef09ed8698755b9dab891ee1"
  },
  {
    "url": "03.Ukulele练习曲/小手拉大手.html",
    "revision": "f1a4680717c22be8689b9f1a41f9d524"
  },
  {
    "url": "03.Ukulele练习曲/恋爱ing.html",
    "revision": "98dc1ed5e646c019f93ddb77a83b92a8"
  },
  {
    "url": "03.Ukulele练习曲/我还想她.html",
    "revision": "0053b08f7b1338830417814cf8940e4a"
  },
  {
    "url": "03.Ukulele练习曲/旅行的意义.html",
    "revision": "a551768492909409fe029a4c5ae8261f"
  },
  {
    "url": "03.Ukulele练习曲/无与伦比的美丽.html",
    "revision": "8575b7b8ff885b637a54eaf4a4e0c403"
  },
  {
    "url": "03.Ukulele练习曲/温柔.html",
    "revision": "4c947acea7e1e3f5faf3fa958b5adf20"
  },
  {
    "url": "03.Ukulele练习曲/爱丫爱丫.html",
    "revision": "d64081751da76e22befe4de85e62c91a"
  },
  {
    "url": "03.Ukulele练习曲/突然好想你.html",
    "revision": "b61427352b18cd57f4c4f08cd2ee7e73"
  },
  {
    "url": "111.jpg",
    "revision": "617ddc1c80bc27c6f8ec9b6bf6501e73"
  },
  {
    "url": "404.html",
    "revision": "dfd221dc6cd541a7cc3ca627367aab77"
  },
  {
    "url": "assets/css/0.styles.73aac9ba.css",
    "revision": "6271821bec97c0d496bcc5627ab3cce4"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/bg.cc552dfd.svg",
    "revision": "cc552dfd1641ce914da841151bf34292"
  },
  {
    "url": "assets/img/today.484a4d22.svg",
    "revision": "484a4d22a4aa9be93c18433c5ff3903f"
  },
  {
    "url": "assets/img/tomorrow.81f0b143.svg",
    "revision": "81f0b143cf6df495fb5f1ba4b32da0a4"
  },
  {
    "url": "assets/img/yesterday.8e49f298.svg",
    "revision": "8e49f298844ce8a7235c197d5d12e4c4"
  },
  {
    "url": "assets/js/1.5291d183.js",
    "revision": "cddbab80d83c16b4d8034efad40bb44c"
  },
  {
    "url": "assets/js/10.f251b26c.js",
    "revision": "913f95763f4c28132fa356a6398610e9"
  },
  {
    "url": "assets/js/11.c86d78e6.js",
    "revision": "94850b6f79bda166ba83ed3f229049ac"
  },
  {
    "url": "assets/js/12.c6164d78.js",
    "revision": "de23db45e5c97010000fcd94272cae8c"
  },
  {
    "url": "assets/js/13.8f4d1bb4.js",
    "revision": "0779428612dd9593263ab085ff57c012"
  },
  {
    "url": "assets/js/14.e68bccaf.js",
    "revision": "ac44501db6b16200835ccd737c30f4b4"
  },
  {
    "url": "assets/js/15.17a15814.js",
    "revision": "f139e4474a8c632fc0bb4c6d7a5e22a1"
  },
  {
    "url": "assets/js/16.d7c460e9.js",
    "revision": "b6a4e987644de908881ea64aa99229a8"
  },
  {
    "url": "assets/js/17.c4d78513.js",
    "revision": "92784e0486142ae5c3d1d1d394d2787d"
  },
  {
    "url": "assets/js/18.17a2d93e.js",
    "revision": "1829723d3992adee74007b9c5c8d5069"
  },
  {
    "url": "assets/js/19.102ccc13.js",
    "revision": "0d07027b3a577f55a23c34f7127a29ed"
  },
  {
    "url": "assets/js/2.c8e38244.js",
    "revision": "d2f69da2c4f6f3b262c548fb7855aa58"
  },
  {
    "url": "assets/js/20.6d2d7452.js",
    "revision": "774c55b4dcc044cb98ad59e3c441557c"
  },
  {
    "url": "assets/js/21.25f701a3.js",
    "revision": "8fd37a0f0746037f4899cb6fc2728bfa"
  },
  {
    "url": "assets/js/22.df7fe47b.js",
    "revision": "2b928650d0eba4ce418b603d6ebea9d4"
  },
  {
    "url": "assets/js/23.8d265f0c.js",
    "revision": "47e7544c604c82982f68b027e5b700ff"
  },
  {
    "url": "assets/js/24.dec8f776.js",
    "revision": "9e0dad6c9f01e2d2edbd1d1efe07473e"
  },
  {
    "url": "assets/js/25.7e2ae492.js",
    "revision": "6488b06bb2126f79741f4078c9ba604e"
  },
  {
    "url": "assets/js/26.4f44b8dd.js",
    "revision": "3fc06e0097cddfb803d2981113f429b4"
  },
  {
    "url": "assets/js/27.166f9536.js",
    "revision": "f4a4ca12855dba96baa07194a2b1711c"
  },
  {
    "url": "assets/js/28.eabc9391.js",
    "revision": "58015f3486c8efaad9383af359787797"
  },
  {
    "url": "assets/js/29.304ed14e.js",
    "revision": "425c4425f409561c7031ba3e76110bd3"
  },
  {
    "url": "assets/js/30.59d7eec7.js",
    "revision": "00b992099318c2d975b84b60d3138103"
  },
  {
    "url": "assets/js/31.fadeb493.js",
    "revision": "675031d4240b6530e9077e15fa7d9c32"
  },
  {
    "url": "assets/js/32.d4f33cb7.js",
    "revision": "3a865057a79af199bde80c5869739d88"
  },
  {
    "url": "assets/js/33.03b5f538.js",
    "revision": "ddf8ce6bc4f71bed1a0ae2fd345c363f"
  },
  {
    "url": "assets/js/34.dd476747.js",
    "revision": "3a3cb76a8e0a0d0b81b201ba6a291e51"
  },
  {
    "url": "assets/js/35.afa28bf0.js",
    "revision": "1bf414aacb62a8675546fa8be30ddc4a"
  },
  {
    "url": "assets/js/36.99e81fe0.js",
    "revision": "1afaeca084a53c39a4cc98b6e67267d3"
  },
  {
    "url": "assets/js/37.a3809ee8.js",
    "revision": "2a04b3b1447fece0307c1f08be52a386"
  },
  {
    "url": "assets/js/38.d1d5749a.js",
    "revision": "f6d851457d893f4bfc4f5dbc1e92daf7"
  },
  {
    "url": "assets/js/39.7305036a.js",
    "revision": "908279e61d81084aa86f7259e3c13adf"
  },
  {
    "url": "assets/js/40.b9bc09d5.js",
    "revision": "1f3dec9551778360e71bdcf62928e21a"
  },
  {
    "url": "assets/js/41.e13421fc.js",
    "revision": "7b45705186114be3722acf94b417f835"
  },
  {
    "url": "assets/js/42.7ffe7bd1.js",
    "revision": "1aa3444c82bb892cb350b4f30c745b3b"
  },
  {
    "url": "assets/js/43.4c876ac6.js",
    "revision": "57044ff68d54398c23cf0d236a9b8bd2"
  },
  {
    "url": "assets/js/44.cf1ddc69.js",
    "revision": "24fe088109503028c84bd522ed9e5d3d"
  },
  {
    "url": "assets/js/45.2d38ff3e.js",
    "revision": "309ba62e5aa9345f603874822b7ded73"
  },
  {
    "url": "assets/js/46.6e29b8bb.js",
    "revision": "dd38509947cfc9f424e5508b30b39d7b"
  },
  {
    "url": "assets/js/47.fa05750d.js",
    "revision": "60d5c1e6650d090aba2db333936396da"
  },
  {
    "url": "assets/js/48.b05cf1f6.js",
    "revision": "91f7a3c8362b05c989bd52664ebc31f3"
  },
  {
    "url": "assets/js/49.c32235be.js",
    "revision": "5092e8c93eaa540c6aeec35f29bc82fb"
  },
  {
    "url": "assets/js/50.6bd83393.js",
    "revision": "06f0b18891839ae0b055cf85610e9187"
  },
  {
    "url": "assets/js/51.41742a29.js",
    "revision": "0a266620bb3d193138b34a04ebb83b27"
  },
  {
    "url": "assets/js/52.50abf993.js",
    "revision": "6e006094539ad9853ae00ca31ce8a337"
  },
  {
    "url": "assets/js/53.0d189c64.js",
    "revision": "cf6d8e45526362107f5191983b052c50"
  },
  {
    "url": "assets/js/54.c05bfe60.js",
    "revision": "4ca52bb57acb6b0542bd3f0282fda1f8"
  },
  {
    "url": "assets/js/55.82242e83.js",
    "revision": "f818e8e1e6840f78c967331f8bdda458"
  },
  {
    "url": "assets/js/6.2f10414b.js",
    "revision": "20082fb9526d59c36d0687adf919e8b7"
  },
  {
    "url": "assets/js/7.4414302f.js",
    "revision": "e1786355819fe195d82465d689afef4b"
  },
  {
    "url": "assets/js/8.078e19af.js",
    "revision": "c2dd8d462dff86dede47fcdffd1642fd"
  },
  {
    "url": "assets/js/9.6a413429.js",
    "revision": "928eaed1d44ca0b548343d4a0d1eee97"
  },
  {
    "url": "assets/js/app.4afcfbc8.js",
    "revision": "4d7b0374834480696b3cba05048763c4"
  },
  {
    "url": "assets/js/vendors~docsearch.88bb053f.js",
    "revision": "dcfbd59dc9f0d25d57276e4960df1782"
  },
  {
    "url": "assets/js/vendors~flowchart.527a94fb.js",
    "revision": "027fe2bdf29afa68b5aa53a92ba3b320"
  },
  {
    "url": "basic/弹唱_幸福拍手歌.jpg",
    "revision": "939e856a9d5bfda6c16ee53b36e2c331"
  },
  {
    "url": "basic/弹唱_新年好_生日快乐.jpg",
    "revision": "8055992e338cf5eca8cd5a9d164830a1"
  },
  {
    "url": "basic/弹唱_菊花台.jpg",
    "revision": "4c459a0037c11cb235958b35d5f84f3b"
  },
  {
    "url": "basic/指弹_夏威夷小曲子_双音.jpg",
    "revision": "ef30b986c78fd486a1b82d80928bf177"
  },
  {
    "url": "basic/指弹_夏威夷小曲子.jpg",
    "revision": "578f2f5c1b38c022125d33a9faef5e49"
  },
  {
    "url": "basic/指弹_小星星_欢乐颂_双音.jpg",
    "revision": "d5734d18391420d5e0123a08437f79f4"
  },
  {
    "url": "basic/指弹_小步舞曲.jpg",
    "revision": "0b5afea81f0e91d1f839f58f3016a470"
  },
  {
    "url": "basic/指弹_小步舞曲(单).jpg",
    "revision": "f560d0fd64b9eb719b4ff9c48e4307b7"
  },
  {
    "url": "basic/爬格子1.jpg",
    "revision": "878c29e66201e0aca95d75eac85b2e2f"
  },
  {
    "url": "basic/爬格子2.jpg",
    "revision": "227652d1c6ea0c38c5c757cd6fc56f04"
  },
  {
    "url": "basic/爬格子3.jpg",
    "revision": "bfeaba07ce63d891d406ff47dd5b8536"
  },
  {
    "url": "basic/爬格子4.jpg",
    "revision": "d0fdfcf8a772b8bb52b42b24e40b0d5b"
  },
  {
    "url": "categories/basic/index.html",
    "revision": "92b8a5f899a6bf827d49ff284afa2bb9"
  },
  {
    "url": "categories/index.html",
    "revision": "19fb698b0b517d81535bc85e0a81439c"
  },
  {
    "url": "categories/practice/index.html",
    "revision": "87875806a7d27db8f93601bedb8a0050"
  },
  {
    "url": "categories/practice/page/2/index.html",
    "revision": "4f3432e0571a4d22c38008fb74939010"
  },
  {
    "url": "categories/tutorial/index.html",
    "revision": "bc330d4242cadcf9a25add10992b8a2b"
  },
  {
    "url": "head.png",
    "revision": "b33f062837745e0a436d3acedbf169e6"
  },
  {
    "url": "hero.jpg",
    "revision": "2529fad4b0b8696c663ea201fdf42537"
  },
  {
    "url": "index.html",
    "revision": "f1b2f0415e5cb5d18a9a27d108ff4c38"
  },
  {
    "url": "logo-mask.svg",
    "revision": "0d8f0321bf7b7e8e2e6710a488e82aab"
  },
  {
    "url": "logo.jpg",
    "revision": "a2db8a52728407b7a7868d6b8cd4c7f0"
  },
  {
    "url": "logo.png",
    "revision": "0b12762b16ae38ce7b5bff3e1d29aef3"
  },
  {
    "url": "logo1.png",
    "revision": "f5e9c49e5f10030597581b6af79d7eca"
  },
  {
    "url": "oracle_default_demo.png",
    "revision": "d42d7420a9b8d402e59a4f3594c25d2a"
  },
  {
    "url": "pm2.png",
    "revision": "c3c6400c1bb8fbb9a5c5142ecbcd89cb"
  },
  {
    "url": "practice/弹唱_七月上.jpg",
    "revision": "31cf0fe0d05fb9b2d4c6394f82112fea"
  },
  {
    "url": "practice/弹唱_偏爱.png",
    "revision": "3fe21d9c1f75a70a31216cc514dc6ea3"
  },
  {
    "url": "practice/弹唱_小情歌.jpg",
    "revision": "d1f4a2bb7fd207eb03d5a95b78e6301e"
  },
  {
    "url": "practice/弹唱_小手拉大手.jpg",
    "revision": "420d639e27b880d1519397fe5b736459"
  },
  {
    "url": "practice/弹唱_恋爱ing.png",
    "revision": "d2ea9d3d483edf00fa085ae0bcb68d76"
  },
  {
    "url": "practice/弹唱_恋爱ing2.png",
    "revision": "a2b78e04184548d7ac6cedfa54eaf27b"
  },
  {
    "url": "practice/弹唱_旅行的意义.png",
    "revision": "c2aeebb52b340438c62e95b665a0cec0"
  },
  {
    "url": "practice/弹唱_无与伦比的美丽.jpg",
    "revision": "2282085ec00afee207378b68966e12c3"
  },
  {
    "url": "practice/弹唱_温柔.jpg",
    "revision": "a4899bd875e7ac72cb759c00c99b3300"
  },
  {
    "url": "practice/弹唱_突然好想你.jpg",
    "revision": "7d4ae0b37b4c1d5fb4bea770f711056a"
  },
  {
    "url": "practice/弹唱_突然好想你2.jpg",
    "revision": "6f90614dbef2aa2ff7c18da5ed8e5ff3"
  },
  {
    "url": "tag/BY2/index.html",
    "revision": "65ca983d38666c632a1c5f88b35fe333"
  },
  {
    "url": "tag/index.html",
    "revision": "5763a28bf42165927817c43c59245ecc"
  },
  {
    "url": "tag/Jam/index.html",
    "revision": "27b2f32380ed9b8b62f08dae1506832c"
  },
  {
    "url": "tag/tutorial/index.html",
    "revision": "ce867091327a76a8ed6148bd32d593a2"
  },
  {
    "url": "tag/ukulele/index.html",
    "revision": "1dcd35d3e70258caa9bee34483c517b2"
  },
  {
    "url": "tag/ukulele/page/2/index.html",
    "revision": "581404bdb910201f70df92610c0ef772"
  },
  {
    "url": "tag/ukulele/page/3/index.html",
    "revision": "4545924ecf426a7bab43f67d027909f1"
  },
  {
    "url": "tag/ukulele/page/4/index.html",
    "revision": "b74979b8e5b2164ab57628f4043db948"
  },
  {
    "url": "tag/一路向北/index.html",
    "revision": "268d120e7a4bfcb13bfb5dcb6a2056cd"
  },
  {
    "url": "tag/七月上/index.html",
    "revision": "677dda568eec737881a7e728428c1b86"
  },
  {
    "url": "tag/下一秒/index.html",
    "revision": "606666f65fa82418dc2575388bd8a4b9"
  },
  {
    "url": "tag/五月天/index.html",
    "revision": "518b82f1c39f14b7f25fa1eb6b962029"
  },
  {
    "url": "tag/修炼爱情/index.html",
    "revision": "19b1000129fc1bd4a19244f35a39b956"
  },
  {
    "url": "tag/偏爱/index.html",
    "revision": "4e6978716d3fb653b6a55278f5121481"
  },
  {
    "url": "tag/同桌的你/index.html",
    "revision": "0a92bcf033b693be5d5ad458c440f49e"
  },
  {
    "url": "tag/夏威夷小曲子/index.html",
    "revision": "9d3f97b18641886baa6f7f201923465b"
  },
  {
    "url": "tag/好想你/index.html",
    "revision": "8c8757bee850c451a2f5988054c44bf4"
  },
  {
    "url": "tag/小幸运/index.html",
    "revision": "a934b708338e35678a61495ee407e8f7"
  },
  {
    "url": "tag/小情歌/index.html",
    "revision": "51ea1de5b2436c49e9a3635d255e4c62"
  },
  {
    "url": "tag/小手拉大手/index.html",
    "revision": "e871917c12a03ea29b359de7b7b03f32"
  },
  {
    "url": "tag/小星星 欢乐颂/index.html",
    "revision": "13b1ff8b208b72837cd02523e6ed41ea"
  },
  {
    "url": "tag/小步舞曲/index.html",
    "revision": "fda05835d899553123c18020636aa702"
  },
  {
    "url": "tag/张碧晨/index.html",
    "revision": "55261588b08ea27f68f74e1cacda9bf3"
  },
  {
    "url": "tag/张芸京/index.html",
    "revision": "ed20263bd9e44f0bc8ca9e8590b22080"
  },
  {
    "url": "tag/弹唱/index.html",
    "revision": "14996ca343ff089810f8bb6c06ae1783"
  },
  {
    "url": "tag/弹唱/page/2/index.html",
    "revision": "704af2f8ba3b0fa4bf8d590937f5fb75"
  },
  {
    "url": "tag/弹唱/page/3/index.html",
    "revision": "303ea5a669ca2e265e37de5a82219e85"
  },
  {
    "url": "tag/恋爱ing/index.html",
    "revision": "17c4bc04240a338ddea4519d3aab539a"
  },
  {
    "url": "tag/我还想她/index.html",
    "revision": "eb5f6e6ebe153bcc597a6d72b1bbf113"
  },
  {
    "url": "tag/指弹/index.html",
    "revision": "10f97b0e07dc0c3b332c0d084ecd0bf7"
  },
  {
    "url": "tag/旅行的意义/index.html",
    "revision": "336d223a5c6680066d1141fa0d649c7b"
  },
  {
    "url": "tag/无与伦比的美丽/index.html",
    "revision": "f4a246ee177f042a9e19b46702134e07"
  },
  {
    "url": "tag/朱主爱/index.html",
    "revision": "8cb79dd64d026b456b3f739c20929068"
  },
  {
    "url": "tag/林俊杰/index.html",
    "revision": "644262ec0b2e4791196299f27adf1f6f"
  },
  {
    "url": "tag/梁静茹/index.html",
    "revision": "a8d7e709b05a4ee8690db8521e42b8ce"
  },
  {
    "url": "tag/温柔/index.html",
    "revision": "c02aed97fa6fbd3c4062e0131eb897fa"
  },
  {
    "url": "tag/爱丫爱丫/index.html",
    "revision": "84620ac32d6b7ffd79b02f3788c972fa"
  },
  {
    "url": "tag/田馥甄/index.html",
    "revision": "0b7112edf0b454e89b909168a313eb6a"
  },
  {
    "url": "tag/白熊音乐/index.html",
    "revision": "32d8df7646a5fc1bf7c656eca483e206"
  },
  {
    "url": "tag/白熊音乐/page/2/index.html",
    "revision": "32abfdeb8578ce34b73d46a542d0256b"
  },
  {
    "url": "tag/白熊音乐/page/3/index.html",
    "revision": "8dd3cda0b0a92d7b135aff51253a8ca0"
  },
  {
    "url": "tag/白熊音乐/page/4/index.html",
    "revision": "9fc34caceae0a2004d4a2082c2e200c8"
  },
  {
    "url": "tag/视频/index.html",
    "revision": "0da7d71f699dc7892e1a0f7fa8e08604"
  },
  {
    "url": "tag/突然好想你/index.html",
    "revision": "91ef3badb26ae65e2c0758aec3f511ee"
  },
  {
    "url": "tag/练习曲/index.html",
    "revision": "7d2ad28ce5ca62eacd9580d07bedf7d0"
  },
  {
    "url": "tag/老狼/index.html",
    "revision": "6e1413a9889fbcfd6bad6babef0f2a00"
  },
  {
    "url": "tag/苏打绿/index.html",
    "revision": "d804a7379f700ee04580ab30d8f4070c"
  },
  {
    "url": "tag/陈绮贞/index.html",
    "revision": "2d2a4457ac23e7842fb130bfbf66d8c2"
  },
  {
    "url": "timeline/index.html",
    "revision": "02d2b079cd03cfaa85308f53959aa36b"
  },
  {
    "url": "u=3349602278,2684255123&fm=26&gp=0.jpg",
    "revision": "9aa6076a3f214b271d2c121c07907dae"
  },
  {
    "url": "ukuleleTutorial/lesson1/1_1-01.png",
    "revision": "4d74d84af9d33d3be287a8e7187dcd11"
  },
  {
    "url": "ukuleleTutorial/lesson1/1_2-02.png",
    "revision": "f2ae691a64c1a190aca5f43fe3632e43"
  },
  {
    "url": "ukuleleTutorial/lesson1/1_3-03.png",
    "revision": "8a07af53dcf2efa5ac77ecd063bc6130"
  },
  {
    "url": "ukuleleTutorial/lesson1/1_4-04.png",
    "revision": "0059f5d793ba33a1090d7a4a83ecc715"
  },
  {
    "url": "ukuleleTutorial/lesson1/1_5-05.png",
    "revision": "8b2758c5c35241c3f93c592bd39264bc"
  },
  {
    "url": "ukuleleTutorial/lesson1/1_6-06.png",
    "revision": "89384572220b7f66a3369598f939044e"
  },
  {
    "url": "ukuleleTutorial/lesson1/1_7-07.png",
    "revision": "11e7bb9d6f1e8ec5c380866e6abc99a5"
  },
  {
    "url": "ukuleleTutorial/lesson1/1_8_1.png",
    "revision": "c31222100e344ba43c48c9cf1cb2eb5d"
  },
  {
    "url": "ukuleleTutorial/lesson1/1_8.png",
    "revision": "35ed4ee1287c2b2fb532e66154cd3bb6"
  },
  {
    "url": "ukuleleTutorial/lesson2/2_10.png",
    "revision": "1a47b5b25844f4df5efd3f7266391dcd"
  },
  {
    "url": "ukuleleTutorial/lesson2/2_11.png",
    "revision": "56e564b58e597f839476651de454d884"
  },
  {
    "url": "ukuleleTutorial/lesson2/2_12.png",
    "revision": "7c7cb142e9c721a6bf1464ba18a3b432"
  },
  {
    "url": "ukuleleTutorial/lesson2/2_13.png",
    "revision": "f5f944f13626ff76e081a26e721f9a48"
  },
  {
    "url": "ukuleleTutorial/lesson2/2_14.png",
    "revision": "dc8c90727eb9b90477f73eab8726d03e"
  },
  {
    "url": "ukuleleTutorial/lesson2/2_15.png",
    "revision": "fe3a3a3e4a3fe17c22d6ea0c0e7b07c4"
  },
  {
    "url": "ukuleleTutorial/lesson2/2_16.png",
    "revision": "885596e403636a8d9d8de90bc7dfa0c6"
  },
  {
    "url": "ukuleleTutorial/lesson2/2_9.png",
    "revision": "10b788fe375b33de66fffee64d2028f4"
  },
  {
    "url": "ukuleleTutorial/lesson3/3_17.png",
    "revision": "295f0e0725db72119dc8318b8abb34ca"
  },
  {
    "url": "ukuleleTutorial/lesson3/3_18.png",
    "revision": "dfb5603d72c34fba7811e7fd1cbb8d0c"
  },
  {
    "url": "ukuleleTutorial/lesson3/3_19.png",
    "revision": "24d72446b08e396f95d9fc0c12134b88"
  },
  {
    "url": "ukuleleTutorial/lesson3/3_20.png",
    "revision": "f7c0b788fbb308a29b71291a1bb85244"
  },
  {
    "url": "ukuleleTutorial/lesson3/3_21.png",
    "revision": "73567954fb9dee8db003a48b1281eaad"
  },
  {
    "url": "ukuleleTutorial/lesson3/3_22.png",
    "revision": "1588f38dab9a56fc6a7b0d16351a5721"
  },
  {
    "url": "ukuleleTutorial/lesson3/3_23.png",
    "revision": "fbb8d593284948e5e1bc593958fdb137"
  },
  {
    "url": "ukuleleTutorial/lesson4/4_24.png",
    "revision": "b4d2e467893640dcf0b77a0b84b0d318"
  },
  {
    "url": "ukuleleTutorial/lesson4/4_25.png",
    "revision": "275fae44a3fcd33d632982f6d4808a58"
  },
  {
    "url": "ukuleleTutorial/lesson4/4_26.png",
    "revision": "d638a28b9e3b3129bf0a594f2d1e2992"
  },
  {
    "url": "ukuleleTutorial/lesson4/4_27.png",
    "revision": "447055fadfc87f3804eea0dba5e85c78"
  },
  {
    "url": "ukuleleTutorial/lesson4/4_28.png",
    "revision": "20326976345ed47f2c9b4543ba23b501"
  },
  {
    "url": "ukuleleTutorial/lesson4/4_29.png",
    "revision": "0346573583e4a4adf2313118323ff357"
  },
  {
    "url": "ukuleleTutorial/lesson4/4_30.png",
    "revision": "ec2da3b4076914060ad3112ee7074899"
  },
  {
    "url": "ukuleleTutorial/lesson5/5_31.png",
    "revision": "835229743596814797a2f77d18793a09"
  },
  {
    "url": "ukuleleTutorial/lesson5/5_32.png",
    "revision": "d6760efa61f17a9630c7913d018387c7"
  },
  {
    "url": "ukuleleTutorial/lesson5/5_33.png",
    "revision": "be12cc4bb1a9cca6f14695ca345b45b7"
  },
  {
    "url": "ukuleleTutorial/lesson5/5_34.png",
    "revision": "a920c1d0fad1872b3e1401dd03670718"
  },
  {
    "url": "ukuleleTutorial/lesson5/5_35.png",
    "revision": "d2fd20923aaaf6e1451741cbcdbcb6ad"
  },
  {
    "url": "ukuleleTutorial/lesson5/5_36.png",
    "revision": "7c3c30836e0aaeb0b9b9bc7efd3e55ab"
  },
  {
    "url": "ukuleleTutorial/lesson6/6_37.png",
    "revision": "84a7c8d6371a7687e188805efde0ff6f"
  },
  {
    "url": "ukuleleTutorial/lesson6/6_38.png",
    "revision": "2c9d41d5bc19313dfc38a235f8ccafa3"
  },
  {
    "url": "ukuleleTutorial/lesson6/6_39.png",
    "revision": "7f06e400092b16cc1662b2f4914875d5"
  },
  {
    "url": "ukuleleTutorial/lesson6/6_40.png",
    "revision": "ccdf6098ada1582cfcc22db160c3332e"
  },
  {
    "url": "ukuleleTutorial/lesson6/6_41.png",
    "revision": "ae2ad45ea584c697d72bb149686d4488"
  },
  {
    "url": "ukuleleTutorial/lesson6/6_42.png",
    "revision": "50b6aba8ddbd3f7567045045816044ee"
  },
  {
    "url": "ukuleleTutorial/lesson7/7_43.png",
    "revision": "b217314d2f7e1ac82a06b5e2f6fdc77d"
  },
  {
    "url": "ukuleleTutorial/lesson7/7_44.png",
    "revision": "3b5b53eed17cf767c0006b53e312a9a8"
  },
  {
    "url": "ukuleleTutorial/lesson7/7_45.png",
    "revision": "999a76a2447eb053b194a434be3fee3f"
  },
  {
    "url": "ukuleleTutorial/lesson7/7_46.png",
    "revision": "ec2304dd71e957a87e785421dbd2c888"
  },
  {
    "url": "ukuleleTutorial/lesson7/7_47.png",
    "revision": "3c62781acf4051af0e00661ffb1dc8d8"
  },
  {
    "url": "ukuleleTutorial/lesson7/7_48.png",
    "revision": "30ebb2ffd1e47995ea592038686f9684"
  },
  {
    "url": "ukuleleTutorial/lesson7/7_49.png",
    "revision": "78430f6d6c22288184bf1d1f3c98de52"
  },
  {
    "url": "ukuleleTutorial/lesson7/7_50.png",
    "revision": "597aa9390836ec821793cb4e35596edc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
