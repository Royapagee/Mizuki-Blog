// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	数码电子: [
		{
			name: "华为 Mate60",
			image: "/images/device/mate60.png",
			specs: "白 / 12G + 512GB",
			description: "主力用机但性能拉跨，日用很好，游戏不如电脑模拟器",
			link: "https://consumer.huawei.com/cn/phones/mate60/",
		},
		{
			name: "索尼 XZ2C",
			image: "/images/device/xz2c.png",
			specs: "白 / 4G + 64GB",
			description: "闲鱼150，高中在校自用小屏宝藏，性能够用还能轻松隐藏",
			link: "https://www.sony.com.hk/zh/electronics/support/mobile-phones-tablets-mobile-phones/xperia-xz2-compact/specifications",
		},
		{
			name: "机械革命 旷世X",
			image: "/images/device/X.png",
			specs: "灰 / i7-14650HX / 5070 / 32GB + 1TB",
			description: "性价比神机，主力用完全够用",
			link: "https://www.mechrevo.com/cn/products/kuang-shi-xpro",
		},
		{
			name: "雷柏 V700DIY-98",
			image: "/images/device/rapoov700diy98.png",
			specs: "快银轴 / 客制化三模 / 10000Mah电池",
			description: "误打误撞上了车，用起来还不错",
			link: "https://www.rapoo.cn/product/871",
		},
		{
			name: "罗技 G502HERO",
			image: "https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/non-braid/hyjal-g502-hero/2025/g502-hero-mouse-top-angle-gallery-1.png",
			specs: "1000Hz / 25kdpi MAX / 11 键",
			description: "100多就能入手，性价比无敌",
			link: "https://www.logitechg.com/zh-cn/shop/p/g502-hero-gaming-mouse.910-005474",
		},
		{
			name: "水月雨 兰",
			image: "/images/device/lan.png",
			specs: "32Ω±15%(@1kHz) / 120dB/Vrms(@1kHz)",
			description: "Hifi性价比之选，充满高中记忆",
			link: "https://moondroplab.com/cn/products/lan",
		},
		{
			name: "水月雨 Old Fashioned",
			image: "/images/device/oldfashioned.png",
			specs: "复古风格 / 模块化可拆卸 / 开放式头戴",
			description: "复古风格，声音醇厚复古",
			link: "https://moondroplab.com/cn/products/old-fashioned",
		},
		{
			name: "华为 FreeArc",
			image: "/images/device/freearc.png",
			specs: "IP57防水 / AAC / 挂耳式",
			description: "网友赠礼，轻便舒适好用",
			link: "https://consumer.huawei.com/cn/headphones/freearc/",
		},
		{
			name: "酷态科15Ultra",
			image: "/images/device/powerbank2.png",
			specs: "20000Mah / 165W in & 210W out MAX",
			description: "支持双枪充电的全能型猛兽，有望成为下一个耐久王",
			link: "https://cuktech.com.cn/h5/show_procon.thtml?id=219",
		},
		{
			name: "华为移动电源 CP12S",
			image: "/images/device/powerbank1.png",
			specs: "12000Mah / 40W Max in&out",
			description: "华为原装，质量保证，服役6年，宝刀未老",
			link: "https://www.vmall.com/product/10086523569557.html",
		},
		{
			name: "三星T7 PSSD",
			image: "/images/device/t7.png",
			specs: "蓝 / 2TB PSSD / 1050MB/s",
			description: "为了拍摄准备的，庆幸自己做了个正确的决定",
			link: "https://www.samsung.com.cn/memory-storage/portable-ssd/portable-ssd-t7-2tb-gray-mu-pc2t0t-ww/",
		},
		{
			name: "希捷 ST500LM021",
			image: "/images/device/st500lm021.png",
			specs: "500GB / HDD / 7200RPM",
			description: "旧电脑遗物，拿来做重要数据备份还是不错的",
			link: "https://baike.baidu.com/item/%E5%B8%8C%E6%8D%B7ST500LM021/19633879",
		},
		{
			name: "奥睿科2518S3硬盘盒",
			image: "/images/device/orico.png",
			specs: "5Gbps / Micro-B / 金属外壳",
			description: "喜欢金属的质感，配合ST500LM021食用",
			link: "https://www.orico.com.cn/index/product/detail/5.html",
		},
		{
			name: "高漫 M6",
			image: "/images/device/m6.png",
			specs: "16384级压感 / 多端兼容",
			description: "亲戚家一个爱画画的大哥哥送的，板绘启蒙",
			link: "https://www.gaomon.cn/Pen_Tablet/M6.html",
		},
	],
	摄影: [
		{
			name: "索尼 α6700",
			image: "/images/device/a6700.png",
			specs: "26MP / 4K120P / 10Bit4:2:2",
			description: "朋友力荐，4K120，妥妥的水桶机，旅游利器",
			link: "https://www.sonystyle.com.cn/products/ilc/ilce_6700/ilce_6700_feature_m.html",
		},
		{
			name: "索尼 SEL18135",
			image: "/images/device/sel18135.png",
			specs: "18-135mm / F3.5-5.6 / OSS",
			description: "天涯镜，解析力很好，性价比很高",
			link: "https://www.sonystyle.com.cn/products/lenses/sel18135/sel18135_feature_m.html",
		},
		{
			name: "雷克沙 1800X",
			image: "/images/device/1800x.png",
			specs: "128GB / UHS-Ⅱ / V60",
			description: "拍摄超级利器，连拍不停的感觉超级爽",
			link: "https://www.lexar.com/zh-hans/products/Lexar-Professional-1800x-SDXC-UHS-II-Card-GOLD-Series/",
		},
		{
			name: "卡色 MCUV",
			image: "/images/device/1800x.png",
			specs: "",
			description: "随镜头买的UV，保护镜头",
			link: "https://www.lexar.com/zh-hans/products/Lexar-Professional-1800x-SDXC-UHS-II-Card-GOLD-Series/",
		},
		{
			name: "海大 SlimProⅡ CPL",
			image: "/images/device/1800x.png",
			specs: "",
			description: "偏振镜，消除反光好用的",
			link: "https://www.lexar.com/zh-hans/products/Lexar-Professional-1800x-SDXC-UHS-II-Card-GOLD-Series/",
		},
		{
			name: "海大 SlimProⅡ VND3~32",
			image: "/images/device/1800x.png",
			specs: "",
			description: "降低快门速度，压制高光，慢门必备",
			link: "https://www.lexar.com/zh-hans/products/Lexar-Professional-1800x-SDXC-UHS-II-Card-GOLD-Series/",
		},
		{
			name: "优篮子 TT39三脚架",
			image: "/images/device/1800x.png",
			specs: "128GB / UHS-Ⅱ / V60",
			description: "轻巧便携，入门",
			link: "https://www.lexar.com/zh-hans/products/Lexar-Professional-1800x-SDXC-UHS-II-Card-GOLD-Series/",
		},
	],
	实体专辑: [
	    {
			name: "冰空夏日葵",
			image: "/images/device/SWBR002.jpg",
			specs: "Static World & bunny_rhyTHm / 东方Project",
			description: "朋友送的。听了这张专，你的数学就能考高达⑨分！",
			link: "https://www.dizzylab.net/d/SWBR002/",
		},
		{
			name: "末纪天穹",
			image: "/images/device/SW07.jpg",
			specs: "Static World / 东方Project",
			description: "也是朋友送的，很有意境，有一种浴火重生的感觉",
			link: "https://www.dizzylab.net/d/SW07/",
		},
		{
			name: "拂晓雀啼时",
			image: "/images/device/BRDP004.jpg",
			specs: "bunny_rhyTHm / 东方Project",
			description: "夜雀食堂的总集，讲述了一段温暖治愈的幻想时光",
			link: "https://www.dizzylab.net/d/BRDP004/",
		},
	],
	猛男的娃: [
	    {
			name: "莉莉白fumo",
			image: "/images/device/lilywhite.png",
			specs: "20cm / 漫踪 / 东方Project",
			description: "春ですよ～ 可可爱爱的报春精，非常的治愈",
			link: "https://item.taobao.com/item.htm?id=719429664589",
		},
		{
			name: "黑白莉莉白fumo",
			image: "/images/device/blackwhitelily.png",
			specs: "30cm / LLB社 / 东方Project",
			description: "朋友送的。是可爱的报春精的黑白双煞版",
			link: "",
		},
		{
			name: "巫女服萃香fumo",
			image: "/images/device/mikosuika.png",
			specs: "30cm / PBG社 / 东方Project",
			description: "巫女萃香摇摇.gif",
			link: "https://item.taobao.com/item.htm?abbucket=5&id=975444654782&skuId=6035705492482",
		},
		{
			name: "亚托莉",
			image: "/images/device/atri.png",
			specs: "30cm / 美琦 / 亚托莉",
			description: "亚托莉可是高性能的嘛！幻肢痛良药（不是）",
			link: "https://detail.tmall.com/item.htm?id=898483544954",
		},
		{
			name: "青灵梦fumo",
			image: "/images/device/40bluereimu.png",
			specs: "40cm / 宇佐社 / 东方Project",
			description: "做工精美，细节完善，性价比非常高的好fumo",
			link: "https://o24t1joq88fdonnhy24exl034yf5qn3.taobao.com/shop/view_shop.htm",
		},
		{
			name: "哔哩哔哩2233公式服",
			image: "/images/device/2233.png",
			specs: "50cm*2 / 官方 / 22娘 & 33娘",
			description: "是我的外公买给我的大娃，现今也算是外公留给我的遗物了吧……",
			link: "",
		},
		{
			name: "灵梦1.5fumo",
			image: "/images/device/50reimu.png",
			specs: "50cm / PBG社 / 东方Project",
			description: "开团等了好久才等来，细节远不如青灵梦，但她可是灵梦啊",
			link: "https://mel7m8i76gxk5v1tposj2r0jc4hh8xz.taobao.com/shop/view_shop.htm",
		},
		{
			name: "雪初音2024 fufu",
			image: "/images/device/snowmiku2024.png",
			specs: "50cm(吧) / 世嘉 / 初音未来",
			description: "极致体积，带来极致的满足感，350我直呼超值",
			link: "https://b23.tv/LFU032e",
		},
		{
			name: "香霖堂灵梦大大大fumo",
			image: "/images/device/100reimu.png",
			specs: "100cm / PBG社 / 东方Project",
			description: "1m的极致大小，8kg的压迫感，展会吸睛利器，镇床必备",
			link: "https://mel7m8i76gxk5v1tposj2r0jc4hh8xz.taobao.com/shop/view_shop.htm",
		},
	],
}