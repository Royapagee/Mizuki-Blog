// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "一个由内容驱动的网站框架，本网站的缔造者",
		siteurl: "https://github.com/withastro/astro",
		tags: ["Framework", "Website"],
	},
	{
		id: 2,
		title: "Napcat",
		imgurl: "https://napcat.napneko.icu/assets/newnewlogo.png",
		desc: "现代化的基于 NTQQ 的 Bot 协议端实现",
		siteurl: "https://napcat.napneko.icu/",
		tags: ["Program", "Bot"],
	},
	{
		id: 3,
		title: "Koishi",
		imgurl: "https://koishi.chat/logo.png",
		desc: "一个跨平台、可扩展、高性能的聊天机器人框架。",
		siteurl: "https://koishi.chat/zh-CN/",
		tags: ["Framework", "Bot"],
	},
	{
		id: 4,
		title: "钦灵の小文仓库",
		imgurl: "https://slimeboyowo.github.io/LingBlog/assets/NoiQ.BFM_YSqZ.png",
		desc: "一只神秘又向往自由的白狼。",
		siteurl: "https://slimeboyowo.github.io/LingBlog/",
		tags: ["Friend"],
	},
	{
		id: 5,
		title: "七毛钱的苹果🍏",
		imgurl: "70centsapple.top/icon.ico",
		desc: "Be gentle; be simple.",
		siteurl: "https://70centsapple.top/#",
		tags: ["Friend"],
	}
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
