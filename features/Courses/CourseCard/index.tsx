"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CourseCardType } from "@/types/courseType"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CourseCard({
	id,
	title,
	description,
	author,
	authorImage,
	image,
	progress,
	level,
	status,
}: CourseCardType) {
	return (
		<div className='bg-white rounded-xl shadow overflow-hidden'>
			<div className='relative'>
				<Image
					src={image}
					alt={title}
					width={400}
					height={200}
					className='w-full h-[160px] object-cover'
				/>
				<div className='absolute -mt-10 flex gap-3 items-center text-white font-semibold ml-4'>
					<Image
						src={authorImage}
						alt={author}
						width={30}
						height={30}
						className='rounded-3xl'
					/>
					<p>{author}</p>
					<ExternalLink size={18} className='hover:text-blue-500' />
				</div>
			</div>

			<div className='p-4 space-y-3'>
				<div className='flex items-center justify-between'>
					<h3 className='font-semibold text-lg'>{title}</h3>
					<Badge className='bg-blue-200 text-blue-600'>{level}</Badge>
				</div>

				<p className='text-sm text-muted-foreground'>{description}</p>

				<div className='space-y-1'>
					<div className='h-2 w-full rounded-full bg-secondary overflow-hidden'>
						<div
							className={`h-full transition-all ${
								progress < 60
									? "bg-red-500"
									: progress < 70
										? "bg-orange-400"
										: "bg-green-400"
							}`}
							style={{ width: `${progress}%` }}
						/>
					</div>

					<p className='text-xs text-muted-foreground'>
						Yakunlandi: {progress}%
					</p>
				</div>

				<div className='flex items-center justify-between'>
					<Link href={`/courses/${id}`}>
						<Button
							size='sm'
							className='bg-blue-600 rounded-2xl hover:bg-blue-700'
						>
							Boshlash
						</Button>
					</Link>

					<span
						className={`text-sm ${
							status === "Tugagan" ? "text-green-600" : "text-yellow-500"
						}`}
					>
						{status}
					</span>
				</div>
			</div>
		</div>
	)
}
