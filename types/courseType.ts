export interface Lesson {
	id: number
	title: string
	duration: string
	video?: string
}

export interface CourseType {
	id: number
	title: string
	progress: number
	teacher: string
	lessons: Lesson[]
}

export type CourseCardType = {
	id: number
	title: string
	description: string
	author: string
	authorImage: string
	image: string
	progress: number
	level: string
	status: "Boshlangan" | "Tugagan"
}
