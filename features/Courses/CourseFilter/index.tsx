"use client"
import { Button } from "@/components/ui/button"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

export default function CourseFilter() {
	return (
		<div className='bg-white rounded-xl p-4 shadow'>
			<p className='font-bold mb-2'>Filter</p>
			<div className='flex flex-wrap gap-4 items-center'>
				<Select>
					<SelectTrigger className='w-[300px] ring-1 ring-gray-300 ring-offset-0 bg-white'>
						<SelectValue placeholder='Fanni tanlang' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='math'>Matematika</SelectItem>
						<SelectItem value='english'>Ingliz tili</SelectItem>
						<SelectItem value='physics'>Fizika</SelectItem>
					</SelectContent>
				</Select>

				<Select>
					<SelectTrigger className='w-[300px] ring-1 ring-gray-300 ring-offset-0 bg-white'>
						<SelectValue placeholder='Daraja' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='beginner'>Boshlang‘ich</SelectItem>
						<SelectItem value='middle'>O‘rta</SelectItem>
						<SelectItem value='advanced'>Yuqori</SelectItem>
					</SelectContent>
				</Select>

				<Select>
					<SelectTrigger className='w-[300px] ring-1 ring-gray-300 ring-offset-0 bg-white'>
						<SelectValue placeholder='Holati' />
					</SelectTrigger>

					<SelectContent>
						<SelectItem value='started'>Boshlangan</SelectItem>
						<SelectItem value='finished'>Tugagan</SelectItem>
					</SelectContent>
				</Select>

				<Button className='ml-auto w-52 bg-blue-600'>
					Natijani ko‘rsatish
				</Button>
			</div>
		</div>
	)
}
