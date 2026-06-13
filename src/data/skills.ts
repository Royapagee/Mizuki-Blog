// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "art" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "video",
		name: "视频剪辑",
		description:
			"一些简单的视频剪辑能力",
		icon: "material-symbols:hangout-video-outline-rounded",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: ["详见我的哔哩哔哩"],
		color: "#5cb8ff",
	},
	{
		id: "picture",
		name: "图像编辑",
		description:
			"一些简单的图片编辑能力",
		icon: "material-symbols:photo-library",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 6 },
		projects: ["详见我的相册"],
		color: "#5ddf60",
	},
	{
		id: "photograph",
		name: "摄影",
		description:
			"专业摄影技能，包括人像、风景和静物摄影，熟练掌握光线运用和构图技巧",
		icon: "material-symbols:camera",
		category: "art",
		level: "advanced",
		experience: { years: 5, months: 6 },
		projects: ["人像摄影作品集", "风景摄影系列", "商业摄影项目"],
		certifications: ["摄影艺术认证"],
		color: "#E91E63",
	},
	{
		id: "c",
		name: "C语言",
		description:
			"基础的 C 语言语法，后端开发",
		icon: "vscode-icons:file-type-c2",
		category: "backend",
		level: "intermediate",
		experience: { years: 0, months: 4 },
		projects: ["无"],
		color: "#5ddf60",
	},
	{
		id: "html",
		name: "HTML / CSS",
		description:
			"基于 CSS 和 Html 进行的前端交互开发",
		icon: "vscode-icons:file-type-htmlhint",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 2 },
		projects: ["无"],
		color: "#5cb8ff",
	},
	{
		id: "python",
		name: "Python",
		description:
			"使用 Python 进行人工智能相关的项目",
		icon: "vscode-icons:file-type-python",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: ["无"],
		color: "#5cb8ff",
	},
];

// Get skill statistics
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		art: skillsData.filter((s) => s.category === "art").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// Calculate total years of experience
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
