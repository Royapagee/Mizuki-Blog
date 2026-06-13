// 日记数据配置
// 用于管理日记页面的数据

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
}

// 示例日记数据
const diaryData: DiaryItem[] = [
	{
		id: 1,
		content:
			"经历了几天的修改，主题终于迎来了敲定，网站也得以开张！现在坐等备案成功，我们在www.roysgensokyo.space见！",
		date: "2025-12-09T22:30:00Z",
		images: ["/images/diary/1-1.webp"]
	},
	{
		id: 2,
		content:
			"今天，邂逅了大学生活中的第一场雪，很大，很美，深深的震撼了我这个南方人。",
		date: "2025-12-12T22:30:00Z",
		images: ["/images/diary/2-1.jpg","/images/diary/2-2.jpg","/images/diary/2-3.jpg"]
	},
	{
		id: 3,
		content:
			"今天，经历了高强度的高数，怀疑人生，我的数学为什么能这么菜！枯了QWQ",
		date: "2025-12-17T22:30:00Z",
	},
	{
		id: 4,
		content:
			"今天，收到了工信部的短信，我的这个小网站备案成功啦～以后就可以让所有人都来看我了，也可以在线部署自己想做的东西了～不过……",
		date: "2025-12-24T22:30:00Z",
	},
	{
		id: 5,
		content:
			"今天看了网易云的年度音乐报告，亚托莉以泰山之势力压群雄，好耶！",
		date: "2025-12-29T22:30:00Z",
		images: ["/images/diary/5-1.jpg"]
	},
	{
		id: 6,
		content:
			"不知名小卒，敬祝所有路人新年快乐！（附一张朋友服务器的跨年合影）",
		date: "2026-01-01T00:30:00Z",
		images: ["/images/diary/6-1.jpg"]
	},
	{
		id: 7,
		content:
			"今天完成了很多东西，先是写了两天的教程博客终于做完发布了，还有就是成功抱上 CloudFlare 的大腿了，同时今天又出血了，因为博客每日刷新必让同服的 MC Java 崩溃，所以花了 99 元上阿里云租了一个 2c2g3m 的服务器用来跑博客网站，但是配置 CF 解析的时候才发现这个服务器也需要备案才能跑网站，那……还能怎么办，好麻烦，我备案就是😭",
		date: "2026-01-03T13:30:00Z",
		images: ["/images/diary/7-1.jpg"]
	},
	{
		id: 8,
		content:
			"今天收到了工信部备案的短信，备案成功了！……不过好快，快的我有点不适应的说（）然后光速配置服务器，分业务布置好了！现在所有东西都已经准备好了！但是好像还是没有人来（）",
		date: "2026-01-06T21:30:00Z",
	},
	{
		id: 9,
		content:
			"为期一个周的 C语言 实训结束啦，虽然和组员还有一些不愉快，但是好在答辩还是通过了，有惊无险。实训原本是想用手工学习写完的，但是最后因为全组摆烂被当成路边一条踹走了，被迫跟着组里使用面向ai的编程做完了（瘫），啊啊啊啊啊啊啊啊，不过也借此别人摆烂的空闲时间完成了 Code-Server 的搭建，为了方便在手机上进行编程（卷）而已",
		date: "2026-01-09T17:30:00Z",
		images: ["/images/diary/9-1.jpg"]
	},
	{
		id: 10,
		content:
			"期末周就要来啦……转发这个琪露诺十遍，你的高数成绩就会高达 90 分！（🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏高数不要挂🙏）",
		date: "2026-01-10T08:30:00Z",
		images: ["/images/diary/10-1.jpg"]
	},
];

// 获取日记统计数据
export const getDiaryStats = () => {
	const total = diaryData.length;
	const hasImages = diaryData.filter(
		(item) => item.images && item.images.length > 0,
	).length;
	const hasLocation = diaryData.filter((item) => item.location).length;
	const hasMood = diaryData.filter((item) => item.mood).length;

	return {
		total,
		hasImages,
		hasLocation,
		hasMood,
		imagePercentage: Math.round((hasImages / total) * 100),
		locationPercentage: Math.round((hasLocation / total) * 100),
		moodPercentage: Math.round((hasMood / total) * 100),
	};
};

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
	const sortedData = diaryData.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

// 获取最新的日记
export const getLatestDiary = () => {
	return getDiaryList(1)[0];
};

// 根据ID获取日记
export const getDiaryById = (id: number) => {
	return diaryData.find((item) => item.id === id);
};

// 获取包含图片的日记
export const getDiaryWithImages = () => {
	return diaryData.filter((item) => item.images && item.images.length > 0);
};

// 根据标签筛选日记
export const getDiaryByTag = (tag: string) => {
	return diaryData
		.filter((item) => item.tags?.includes(tag))
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// 获取所有标签
export const getAllTags = () => {
	const tags = new Set<string>();
	diaryData.forEach((item) => {
		if (item.tags) {
			item.tags.forEach((tag) => tags.add(tag));
		}
	});
	return Array.from(tags).sort();
};

export default diaryData;
