const products = [
  {
    id: 1,
    name: "Xiaomi Camera 18",
    price: 41945,
    image: "https://i02.appmifile.com/1_item_tr/18/05/2023/2af9822e4338b6ea518b67df3c5f7e87.png",
    description: "Modern tasarımı ve güçlü donanımıyla Xiaomi camera modeli, günlük kullanım için idealdir."
  },
  {
    id: 2,
    name: "Samsung Smartwatch 25",
    price: 48519,
    image: "https://www.gizerler.com/assets/product-images/147000/samsung-galaxy-watch-fesm-r861nzkatur-40-mm-siyah-akilli-saat_87984.jpg",
    description: "Modern tasarımı ve güçlü donanımıyla Samsung smartwatch modeli, günlük kullanım için idealdir."
  },
  {
    id: 3,
    name: "Xiaomi Headphones 21",
    price: 33957,
    image: "https://cdn.dsmcdn.com/mnresize/400/-/ty1694/prod/QC_PREP/20250616/13/031351a1-f313-3279-b876-f34eaea4aaa5/1_org_zoom.jpg",
    description: "Xiaomi imzalı bu headphones modeli, gelişmiş özellikleriyle teknoloji tutkunlarının ilgisini çeker."
  },
  {
    id: 4,
    name: "Apple Phone 16",
    price: 16047,
    image: "https://st-troy.mncdn.com/mnresize/775/775/Content/media/ProductImg/original/myec3tua-iphone-16-128gb-ultramarine-638617430021865858.jpg",
    description: "Apple imzalı bu phone modeli, gelişmiş özellikleriyle teknoloji tutkunlarının ilgisini çeker."
  },
  {
    id: 5,
    name: "Xiaomi Printer 18",
    price: 20445,
    image: "https://productimages.hepsiburada.net/s/45/375/10835219644466.jpg/format:webp",
    description: "Xiaomi tarafından üretilen yeni nesil printer. Fiyat/performans açısından kullanıcı dostu."
  },
  {
    id: 6,
    name: "Acer Printer 16",
    price: 13033,
    image: "https://us.v-cdn.net/6036147/uploads/X9KH2622R4QC/r-16-5-2-1200x675.jpg",
    description: "Modern tasarımı ve güçlü donanımıyla Acer printer modeli, günlük kullanım için idealdir."
  },
  {
    id: 7,
    name: "HP Monitor 26",
    price: 36286,
    image: "https://www.hpstore.com.tr/hp-s5-527sf-27-inc-100-hz-5ms-hdmi-vga-fhd-ips-monitor-gumus-94f44e9-15317-19-K.jpg",
    description: "HP tarafından üretilen yeni nesil monitor. Fiyat/performans açısından kullanıcı dostu."
  },
  {
    id: 8,
    name: "Lenovo Smartwatch 5",
    price: 21704,
    image: "https://cdn.cimri.io/image/1200x1200/lenovo-smart-watch-s2-akilli-saat_714904332.jpg",
    description: "Modern tasarımı ve güçlü donanımıyla Lenovo smartwatch modeli, günlük kullanım için idealdir."
  },
  {
    id: 9,
    name: "Apple Monitor 20",
    price: 50480,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehe1v92dgtPSRzN44_lI6-CJv94SqAVpTQQ&s",
    description: "Modern tasarımı ve güçlü donanımıyla Apple monitor modeli, günlük kullanım için idealdir."
  },
  {
    id: 10,
    name: "Dell Headphones 30",
    price: 22265,
    image: "https://m.media-amazon.com/images/I/71QECnqkG5L.jpg",
    description: "Dell imzalı bu headphones modeli, gelişmiş özellikleriyle teknoloji tutkunlarının ilgisini çeker."
  },
  {
    id: 11,
    name: "HP Laptop 28",
    price: 25184,
    image: "https://cdn.cimri.io/image/1200x1200/hp-250-g9-6q8m5es28-intel-core-i5-1235u-32gb-ram-2tb-ssd-windows-11-home-15-6-inc-laptop-notebook_878145302.jpg",
    description: "HP imzalı bu laptop modeli, gelişmiş özellikleriyle teknoloji tutkunlarının ilgisini çeker."
  },
  {
    id: 12,
    name: "Sony TV 25",
    price: 56506,
    image: "https://5.imimg.com/data5/SELLER/Default/2024/12/473913217/CP/TY/TA/46532465/sony-43-s-25-500x500.jpg",
    description: "Sony tarafından üretilen yeni nesil tv. Fiyat/performans açısından kullanıcı dostu."
  },
  {
    id: 13,
    name: "Apple Monitor 25",
    price: 31756,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEAjya312eKmoh_6qzf-_mYLj4b7voUirjg&s",
    description: "Modern tasarımı ve güçlü donanımıyla Apple monitor modeli, günlük kullanım için idealdir."
  },
  {
    id: 14,
    name: "HP Monitor 11",
    price: 24230,
    image: "https://cdn.cimri.io/image/1200x1200/hp-proone-240-g10-a54tjet03-i3-n300-16gb-ram-512gb-ssd-windows-11-home-23-8-inc-all-in-one-bilgisayar_944408160.jpg",
    description: "Modern tasarımı ve güçlü donanımıyla HP monitor modeli, günlük kullanım için idealdir."
  },
  {
    id: 15,
    name: "Huawei Camera 3",
    price: 28738,
    image: "https://fdn.gsmarena.com/imgroot/reviews/19/huawei-p30-lite/lifestyle/-727w2/gsmarena_019.jpg",
    description: "Modern tasarımı ve güçlü donanımıyla Huawei camera modeli, günlük kullanım için idealdir."
  },
  {
    id: 16,
    name: "Asus TV 28",
    price: 42636,
    image: "https://m.media-amazon.com/images/I/815gpvq2zYL._UF1000,1000_QL80_.jpg",
    description: "Asus imzalı bu tv modeli, gelişmiş özellikleriyle teknoloji tutkunlarının ilgisini çeker."
  },
  {
    id: 17,
    name: "Asus Laptop 19",
    price: 57053,
    image: "https://www.notebookcheck.net/typo3temp/_processed_/8/4/csm_asusX52F_d5cf426f15.jpg",
    description: "Modern tasarımı ve güçlü donanımıyla Asus laptop modeli, günlük kullanım için idealdir."
  },
  {
    id: 18,
    name: "Acer Printer 30",
    price: 14526,
    image: "https://elhamdstore.com/wp-content/uploads/2025/01/adyzig3_oi6fhsnuip6aklsi.webp",
    description: "Modern tasarımı ve güçlü donanımıyla Acer printer modeli, günlük kullanım için idealdir."
  },
  {
    id: 19,
    name: "Huawei Camera 7",
    price: 24595,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOk3hDcSRi7AIstH-VVBhklopJwDHhHtLS3g&s",
    description: "Huawei markasının yüksek performanslı camera modeli. Uzun pil ömrü ve kaliteli ekranıyla dikkat çeker."
  },
  {
    id: 20,
    name: "Apple Headphones 9",
    price: 18252,
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-select-202409-midnight_FMT_WHH?wid=890&hei=890&fmt=jpeg&qlt=90&.v=1724927451044",
    description: "Modern tasarımı ve güçlü donanımıyla Apple headphones modeli, günlük kullanım için idealdir."
  },
  {
    id: 21,
    name: "Samsung Smartwatch 4",
    price: 50193,
    image: "https://m.media-amazon.com/images/I/61-JUKdAW3L.jpg",
    description: "Modern tasarımı ve güçlü donanımıyla Samsung smartwatch modeli, günlük kullanım için idealdir."
  },
  {
    id: 22,
    name: "Asus Camera 29",
    price: 15235,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWD18YJulz1jO7Bz2o-yVmGMXWKvbAcNM3A&s",
    description: "Asus imzalı bu camera modeli, gelişmiş özellikleriyle teknoloji tutkunlarının ilgisini çeker."
  },
  {
    id: 23,
    name: "Dell Headphones 12",
    price: 15774,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHGViLhgey49RUePq1gsXBo3xJ0-mJoJc8Jg&s",
    description: "Modern tasarımı ve güçlü donanımıyla Dell headphones modeli, günlük kullanım için idealdir."
  },
  {
    id: 24,
    name: "Apple Smartwatch 10",
    price: 27687,
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-titanium-slate-cell-s10_VW_34FR+watch-face-46-titanium-slate-s10_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnWTc4blplVGNpSEZpNjZUNjVaN2NmQ0hYdElIVEV6MlVLNjZQdWRicTV0RXZmQXlUU2xCQ2pTN3lrcDE0UU1hK0VYZWthQXJCL2NtQ1RrVVMvZXZWQVlBdzhRZzJqU0xkSEpFODEzRDVva3d4cnowOGUwOFg4VWVNRXJPTkZzcHZQTlY1VVpZdTJWU1VmK0FXKzlpeFZuTUFmS01ENEh4NEQwRjBrU05JY28wQzNiOGxMcmwyTlFWWWQ3aG8rVWEvQithakZ1L1d4WC9tL0hOc1g4SFhobg",
    description: "Apple tarafından üretilen yeni nesil smartwatch. Fiyat/performans açısından kullanıcı dostu."
  },
  {
    id: 25,
    name: "Acer Laptop 30",
    price: 20686,
    image: "https://cdn.uc.assets.prezly.com/6b1c8a5a-a520-4af3-ae08-a0df567b5d09/Aspire5_A515-45_-A515-45G_-A515-45S_High_01.jpg",
    description: "Acer imzalı bu laptop modeli, gelişmiş özellikleriyle teknoloji tutkunlarının ilgisini çeker."
  },
  {
    id: 26,
    name: "Dell Phone 8",
    price: 31655,
    image: "https://m.media-amazon.com/images/I/61YuqexUqnL.jpg",
    description: "Dell markasının yüksek performanslı phone modeli. Uzun pil ömrü ve kaliteli ekranıyla dikkat çeker."
  },
  {
    id: 27,
    name: "Sony Speaker 24",
    price: 53920,
    image: "https://cdn.akakce.com/sony/sony-srs-hg1-24-w-sari-z.jpg",
    description: "Sony imzalı bu speaker modeli, gelişmiş özellikleriyle teknoloji tutkunlarının ilgisini çeker."
  },
  {
    id: 28,
    name: "Samsung Printer 27",
    price: 56750,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeenH9XsYefFwMiQn9Sk-IA66THIfEChSxAw&s",
    description: "Samsung imzalı bu printer modeli, gelişmiş özellikleriyle teknoloji tutkunlarının ilgisini çeker."
  },
  {
    id: 29,
    name: "Acer Monitor 22",
    price: 44740,
    image: "https://i0.shbdn.com/photos/12/47/91/x5_11721247913vl.jpg",
    description: "Modern tasarımı ve güçlü donanımıyla Acer monitor modeli, günlük kullanım için idealdir."
  },
  {
    id: 30,
    name: "Sony Laptop 26",
    price: 34157,
    image: "https://www.bhphotovideo.com/images/fb/Sony_VPCEE26FX_WI_VAIO_EE_VPCEE26FX_WI_15_5_698766.jpg",
    description: "Sony markasının yüksek performanslı laptop modeli. Uzun pil ömrü ve kaliteli ekranıyla dikkat çeker."
  },
    {
    id: 31,
    name: "Samsung Camera 1",
    price: 30771,
    image: "https://m.media-amazon.com/images/I/61bd+1M-uhL._UF894,1000_QL80_.jpg",
    description: "Samsung tarafından üretilen yeni nesil camera. Fiyat/performans açısından kullanıcı dostu."
  },
  {
    id: 32,
    name: "Xiaomi TV 3",
    price: 59983,
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/xiaomi/thumb/151768-1_large.jpg",
    description: "Modern tasarımı ve güçlü donanımıyla Xiaomi tv modeli, günlük kullanım için idealdir."
  },
  {
    id: 33,
    name: "HP Laptop 13",
    price: 41483,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVC9mh2KIJROyiULn1ZBxr2QmtA5xekMvSGw&s",
    description: "HP tarafından üretilen yeni nesil laptop. Fiyat/performans açısından kullanıcı dostu."
  },
  {
    id: 34,
    name: "Acer Tablet 8",
    price: 18356,
    image: "https://cdn.cimri.io/image/1200x1200/acer-iconia-tab-8-a1-840fhd_8550433.jpg",
    description: "Acer imzalı bu tablet modeli, gelişmiş özellikleriyle teknoloji tutkunlarının ilgisini çeker."
  },
  {
    id: 35,
    name: "Huawei Laptop 11",
    price: 50913,
    image: "https://productimages.hepsiburada.net/s/564/375-375/110000627282460.jpg",
    description: "Huawei imzalı bu laptop modeli, gelişmiş özellikleriyle teknoloji tutkunlarının ilgisini çeker."
  },
  {
    id: 36,
    name: "Sony Monitor 23",
    price: 20269,
    image: "https://www.bhphotovideo.com/images/fb/Sony_SDMP234B_SDMP234_B_PrimierPro_23_486818.jpg",
    description: "Sony imzalı bu monitor modeli, gelişmiş özellikleriyle teknoloji tutkunlarının ilgisini çeker."
  },
  {
    id: 37,
    name: "Asus Smartwatch 22",
    price: 51725,
    image: "https://dlcdnwebimgs.asus.com/files/media/7393696f-9747-4948-ba29-278a5d111aa5/V2/img/pic_app_05.jpg",
    description: "Asus tarafından üretilen yeni nesil smartwatch. Fiyat/performans açısından kullanıcı dostu."
  },
  {
    id: 38,
    name: "Lenovo Tablet 14",
    price: 15036,
    image: "https://p2-ofp.static.pub/ShareResource/na/products/tablets/560x450/lenovo-tab-extreme.png",
    description: "Modern tasarımı ve güçlü donanımıyla Lenovo tablet modeli, günlük kullanım için idealdir."
  },
  {
    id: 39,
    name: "Samsung Speaker 5",
    price: 47290,
    image: "https://image-us.samsung.com/SamsungUS/pim/migration/audio/wireless-speakers/home/wam5500-za/Pdpdefault-wam5500-za-600x600-C1-052016.jpg?$product-details-jpg$",
    description: "Samsung imzalı bu speaker modeli, gelişmiş özellikleriyle teknoloji tutkunlarının ilgisini çeker."
  },
  {
    id: 40,
    name: "Sony Printer 7",
    price: 13729,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTf7fWiXNvpnG0gR1b-Bssch3-hWh8D7hSrg&s",
    description: "Sony tarafından üretilen yeni nesil printer. Fiyat/performans açısından kullanıcı dostu."
  },
  {
    id: 41,
    name: "HP Phone 15",
    price: 54889,
    image: "https://mediatrend.mediamarkt.com.tr/wp-content/uploads/2017/05/1.jpg",
    description: "HP tarafından üretilen yeni nesil phone. Fiyat/performans açısından kullanıcı dostu."
  },
  {
    id: 42,
    name: "Dell TV 6",
    price: 30219,
    image: "https://cdn.akakce.com/z/dell/dell-ultrasharp-up2720qa-27-6-ms-4k-pivot-ips-60-hz.jpg",
    description: "Dell tarafından üretilen yeni nesil tv. Fiyat/performans açısından kullanıcı dostu."
  },
  {
    id: 43,
    name: "Apple Camera 17",
    price: 50912,
    image: "https://play-lh.googleusercontent.com/P9Cm2UYlP5Wz_YfzcPZpSjSwiXSAzwn8nvJgBePzKkwmEgql2wvqDwrkapfOgXmeIeC_",
    description: "Apple imzalı bu camera modeli, gelişmiş özellikleriyle teknoloji tutkunlarının ilgisini çeker."
  },
  {
    id: 44,
    name: "Lenovo TV 19",
    price: 19127,
    image: "https://platincdn.com/3498/pictures/QNIOK215038_rfooeimhyd121520201620_lenovo_monitor_.jpg",
    description: "Modern tasarımı ve güçlü donanımıyla Lenovo tv modeli, günlük kullanım için idealdir."
  },
  {
    id: 45,
    name: "HP Headphones 21",
    price: 54686,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0JGZXE01koU-euO4xiD48_fnxRj5FEKm15Q&s",
    description: "HP markasının yüksek performanslı headphones modeli. Uzun pil ömrü ve kaliteli ekranıyla dikkat çeker."
  },
  {
    id: 46,
    name: "Huawei Tablet 26",
    price: 18974,
    image: "https://egetelgrafcom.teimg.com/crop/1280x720/egetelgraf-com/uploads/2024/11/huawei-matepad-pro-tablet.jpg",
    description: "Huawei tarafından üretilen yeni nesil tablet. Fiyat/performans açısından kullanıcı dostu."
  },
  {
    id: 47,
    name: "Dell Camera 27",
    price: 43449,
    image: "https://m.media-amazon.com/images/I/61zxyAXeC8L._UF1000,1000_QL80_.jpg",
    description: "Dell tarafından üretilen yeni nesil camera. Fiyat/performans açısından kullanıcı dostu."
  },
  {
    id: 48,
    name: "Asus TV 12",
    price: 52633,
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/TeoriV2-104012-2_large.jpg",
    description: "Asus imzalı bu tv modeli, gelişmiş özellikleriyle teknoloji tutkunlarının ilgisini çeker."
  },
  {
    id: 49,
    name: "Lenovo Phone 27",
    price: 31331,
    image: "https://images.firstpost.com/wp-content/uploads/2018/12/Lenovo-Z5-Pro-GT-1280-2.jpg?im=FitAndFill=(596,336)",
    description: "Lenovo imzalı bu phone modeli, gelişmiş özellikleriyle teknoloji tutkunlarının ilgisini çeker."
  },
  {
    id: 50,
    name: "Huawei Smartwatch 2",
    price: 21376,
    image: "https://productimages.hepsiburada.net/s/307/375-375/110000300127364.jpg",
    description: "Huawei tarafından üretilen yeni nesil smartwatch. Fiyat/performans açısından kullanıcı dostu."
  }
];

export default products;
