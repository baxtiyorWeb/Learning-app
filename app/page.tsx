import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import Dashboard from "@/features/Dashboard"

export default function Home() {
	return (
		<div className='h-screen flex flex-col bg-gray-100'>
			<Header />

			<div className='flex flex-1 overflow-hidden'>
				<Sidebar />
				<main className='flex-1 p-6 overflow-y-auto'>
					<Dashboard />
				</main>
			</div>
		</div>
	)
}
