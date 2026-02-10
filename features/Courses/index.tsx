"use client"
import { courses } from "@/moc"
import CourseCard from "./CourseCard"
import CourseFilter from "./CourseFilter"

export default function Courses() {
	return (
		<div className='p-6 space-y-6'>
			<CourseFilter />

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{courses.map((course) => (
					<CourseCard
						key={course.id}
						id={course.id}
						title={course.title}
						description={course.description}
						image={course.image}
						author={course.author}
						authorImage={course.authorImage}
						progress={course.progress}
						level={course.level}
						status={course.progress === 100 ? "Tugagan" : "Boshlangan"}
					/>
				))}
			</div>
		</div>
	)
}
