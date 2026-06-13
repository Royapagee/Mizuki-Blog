// Timeline data configuration file
// Used to manage data for the timeline page

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string; // If empty, it means current
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "current-study",
		title: "大学",
		description:
			"进入软件工程，学习C语言，",
		type: "education",
		startDate: "2025-09-15",
		location: "山东",
		organization: "山东管理学院",
		skills: ["C", "HTML/CSS"],
		achievements: [
		],
		icon: "material-symbols:school",
		color: "#059669",
		featured: true,
	},
	{
		id: "High-School",
		title: "高中",
		description:
			"平平无奇的高中生活，状态一路下滑",
		type: "education",
		startDate: "2022-08-15",
		endDate: "2025-06-12",
		location: "贵州",
		organization: "遵义航天高级中学",
		skills: ["Python"],
		achievements: [
		],
		icon: "material-symbols:school",
		color: "#ffb534",
		featured: true,
	},
	{
		id: "Middle-School",
		title: "初中",
		description:
			"进入初中，学习了图形化，研究了机器人",
		type: "education",
		startDate: "2019-08-15",
		endDate: "2022-06-25",
		location: "贵州",
		organization: "遵义市第十九中学",
		skills: ["Scratch","Robot"],
		achievements: [
			"荣获遵义市信息技术2022学科竞赛一等奖",
		],
		icon: "material-symbols:school",
		color: "#6c92ff",
		featured: true,
	},
	{
		id: "Primary-School",
		title: "小学",
		description:
			"进入小学，开启人生旅途",
		type: "education",
		startDate: "2013-09-01",
		endDate: "2019-07-10",
		location: "贵州",
		organization: "凤冈县第二小学",
		skills: ["Word", "Excel", "Powerpoint", "Email", "视频剪辑", "音频编辑", "图像处理", "Scratch", "VJC"],
		achievements: [
			"奠定了基础的计算机知识，为未来学习计算机造成了深远的影响"
		],
		icon: "material-symbols:school",
		color: "#ff6c6c",
		featured: true,
	},
];

// Get timeline statistics
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education").length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	};

	return { total, byType };
};

// Get timeline items by type
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get featured timeline items
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get current ongoing items
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// Calculate total work experience
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
