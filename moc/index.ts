export const courseInfo = {
	math: {
		id: "1",
		title: "Matematika 1-modul",
		progress: 63,
		teacher: "Dildora Tojiyeva",
		lessons: [
			{
				id: 1,
				title: "Kirish",
				duration: "12 min",
				video: "/videos/math1.mp4",
			},
			{ id: 2, title: "1-mavzu nomi", duration: "1 s 15 min" },
			{ id: 3, title: "2-mavzu nomi", duration: "35 min" },
			{ id: 4, title: "3-mavzu nomi", duration: "37 min" },
		],
	},

	physics: {
		id: "2",
		title: "Fizika 1-modul",
		progress: 20,
		teacher: "Akmal Qodirov",
		lessons: [
			{ id: 1, title: "Kirish", duration: "10 min" },
			{ id: 2, title: "Mexanika asoslari", duration: "45 min" },
		],
	},
}

export const courses = [
	{
		id: 1,
		title: "Matematika 1-modul",
		description: "Algebra asoslari va amaliy misollar",
		image: "/matematika.png",
		author: "Dildora Tojiyeva",
		authorImage: "/dildora.png",
		progress: 63,
		level: "Boshlang‘ich",
	},
	{
		id: 2,
		title: "Ingliz tili",
		description: "A1-A2 darajalar uchun ingliz tili",
		image: "/english.png",
		author: "Nasiba To‘raboyeva",
		authorImage: "/dildora.png",
		progress: 100,
		level: "Boshlang‘ich",
	},
	{
		id: 3,
		title: "Fizika",
		description: "O‘rta ta’lim uchun Fizika darsi",
		image: "/Fizika.png",
		author: "Feruza Jonibekova",
		authorImage: "/dildora.png",
		progress: 4,
		level: "Boshlang‘ich",
	},
]

export const DashboardStats = [
	{
		label: "O‘qilgan darslar",
		value: "12",
		comment: "Zo‘r, shunday davom eting",
		img: "/bookOpen.png",
	},
	{
		label: "Topshiriqlar",
		value: "8",
		comment: "Siz buni uddalaysiz",
		img: "/checkSquare.png",
	},
	{
		label: "Reyting",
		value: "42",
		comment: "Yanada yaxshiroq bo‘ling",
		img: "/activity.png",
	},
	{
		label: "Faollik",
		value: "12",
		comment: "Faol bo‘lishda davom eting",
		img: "/trophy.png",
	},
]

export const leaders = [
	{
		rank: 1,
		avatar: "/flag.webp",
		name: "Javoxir Abdukarimov",
		startDate: "21.12.2024",
		rating: 43,
	},
	{
		rank: 2,
		avatar: "/jd.jpg",
		name: "Oxunjon Olimov",
		startDate: "21.12.2024",
		rating: 41,
	},
	{
		rank: 3,
		avatar: "/jd.jpg",
		name: "Laziz Lazizov",
		startDate: "21.12.2024",
		rating: 35,
	},
	{
		rank: 4,
		avatar: "/jd.jpg",
		name: "Anvar Atabayev",
		startDate: "21.12.2024",
		rating: 28,
	},
	{
		rank: 5,
		avatar: "/jd.jpg",
		name: "Muhammad Sharifboyev",
		startDate: "21.12.2024",
		rating: 21,
	},
	{
		rank: 6,
		avatar: "/jd.jpg",
		name: "Suhrob Ahmedov",
		startDate: "21.12.2024",
		rating: 18,
	},
	{
		rank: 7,
		avatar: "/jd.jpg",
		name: "Ilhom Zokirov",
		startDate: "21.12.2024",
		rating: 16,
	},
	{
		rank: 8,
		avatar: "/jd.jpg",
		name: "Jahongir Olimov",
		startDate: "21.12.2024",
		rating: 15,
	},
	{
		rank: 9,
		avatar: "/jd.jpg",
		name: "Doston Allanazarov",
		startDate: "21.12.2024",
		rating: 12,
	},
]

export const trophyImages = {
	1: "/gold.png",
	2: "/silver.png",
	3: "/bronze.png",
}

export const BarchartData = [
	{ day: 1, hours: 3 },
	{ day: 2, hours: 3.2 },
	{ day: 3, hours: 3.2 },
	{ day: 4, hours: 5.1 },
	{ day: 5, hours: 5.7 },
	{ day: 6, hours: 6.1 },
	{ day: 7, hours: 3.6 },
	{ day: 8, hours: 4 },
	{ day: 9, hours: 5.1 },
	{ day: 10, hours: 1.4 },
	{ day: 11, hours: 0 },
	{ day: 12, hours: 0 },
	{ day: 13, hours: 0.3 },
	{ day: 14, hours: 3 },
	{ day: 15, hours: 3.4 },
	{ day: 16, hours: 4 },
	{ day: 17, hours: 2.3 },
	{ day: 18, hours: 2 },
	{ day: 19, hours: 4.7 },
]
