// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string; // 添加前往项目链接字段
}

export const projectsData: Project[] = [
	{
		id: "my-blog",
		title: "My Blog Based on Mizuki",
		description:
			"基于 Mizuki 进行二次主题修改的博客，正呈现在你的面前。",
		image: "",
		category: "web",
		techStack: ["Astro", "TypeScript", "Tailwind CSS", "Svelte"],
		status: "completed",
		liveDemo: "https://blog.example.com",
		sourceCode: "https://github.com/Royapagee/MyBlogByMizuki", // 更改为GitHub链接
		visitUrl: "https://blog.example.com", // 添加前往项目链接
		startDate: "2025-12-05",
		endDate: "2025-12-10",
		featured: true,
		tags: ["博客", "主题", "开源"],
	},
	{
		id: "atri-bot",
		title: "亚托莉Bot",
		description:
			"基于 Napcat + Koishi + Chatluna 制作的QQ聊天机器人，提供群聊，长期记忆，图片理解，MC服务器查询，发言统计等功能。体验请前往个人小群",
		image: "",
		category: "web",
		techStack: ["Napcat", "Koishi", "Javascript"],
		status: "completed",
		visitUrl: "https://qm.qq.com/q/8A1Y4c5WnY",
		startDate: "2025-11-08",
		endDate: "2025-11-08",
		featured: true,
		tags: ["AI", "亚托莉", "机器人"],
	},
	{
		id: "atri-curtain",
		title: "亚托莉主题宿舍床帘",
		description:
			"针对宿舍设计的以亚托莉和东方Project为主题的宿舍窗帘，为两面墙及吊顶式设计",
		image: "",
		category: "other",
		techStack: ["Photoshop"],
		status: "completed",
		visitUrl: "https://www.bilibili.com/video/BV11pC3BEEX5/",
		startDate: "2025-10-20",
		endDate: "2025-11-25",
		featured: true,
		tags: ["东方Project", "亚托莉", "床帘", "定制"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
