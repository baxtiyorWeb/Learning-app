import { Bell, Search } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select"

const Header = () => {
	return (
		<header className='h-16 w-full bg-white border-b flex items-center justify-between px-6'>
			<div className='font-bold'>LOGO</div>

			<div className='relative w-full max-w-xl'>
				<Input
					type='text'
					placeholder='Qidirish...'
					className='pl-9 h-9 text-sm'
				/>

				<Search className='absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500' />
			</div>

			<div className='flex items-center gap-4'>
				<Bell className='w-5 h-5 text-gray-600' />

				<Image
					alt='flag'
					src='/flag.webp'
					width={24}
					height={24}
					className='rounded-sm'
				/>

				<Select defaultValue='uz'>
					<SelectTrigger className='w-[80px] h-9'>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value='uz'>O‘ZB</SelectItem>
							<SelectItem value='ru'>RU</SelectItem>
							<SelectItem value='en'>EN</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>

				<Button variant='default' className='h-8 bg-blue-500'>
					Anvar A.
				</Button>
			</div>
		</header>
	)
}

export default Header
