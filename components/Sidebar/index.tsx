"use client"
import {
	ClipboardCheck,
	ClipboardList,
	GraduationCap,
	Layers,
	MessageSquareText,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const menu = [
	{ name: "Asosiy", path: "/", icon: <GraduationCap /> },
	{ name: "Darslar", path: "/courses", icon: <Layers size={18} /> },
	{ name: "Vazifalar", path: "/tasks", icon: <ClipboardCheck size={18} /> },
	{ name: "Testlar", path: "/tests", icon: <ClipboardList size={18} /> },
	{ name: "Chatlar", path: "/chats", icon: <MessageSquareText size={18} /> },
]

const Sidebar = () => {
	const pathname = usePathname()
	return (
		<aside className='w-64 bg-white border-r h-full flex flex-col pt-7'>
			<nav className='flex-1 space-y-1'>
				{menu.map((item) => {
					const isActive = pathname === item.path
					return (
						<Link
							key={item.path}
							href={item.path}
							className={`block px-4 py-2 text-md font-semibold
              ${
								isActive
									? "bg-blue-500 text-white"
									: "text-gray-700 hover:bg-gray-100"
							}`}
						>
							<div className='flex items-center gap-4'>
								<p>{item.icon}</p>
								<p>{item.name}</p>
							</div>
						</Link>
					)
				})}
			</nav>
			<div className='p-4 border-t text-sm text-gray-500'>Tungi rejim</div>
		</aside>
	)
}

export default Sidebar
