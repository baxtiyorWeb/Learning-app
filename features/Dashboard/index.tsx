import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { DashboardStats, leaders, trophyImages } from "@/moc"
import { Star } from "lucide-react"
import Image from "next/image"
import LastMonthActivityChart from "./LastMonthActivityChart"

export default function Dashboard() {
	return (
		<div className='min-h-screen  p-4 md:p-8'>
			<div className='max-w-7xl mx-auto pt-0 mt-0'>
				<div className='mb-8 bg-gradient-to-br from-blue-500 via-blue-700 to-blue-900 rounded-xl p-6'>
					<h1 className='text-2xl font-bold text-white'>
						Xush kelibsiz, Anvar!
					</h1>
					<p className='text-gray-200 mt-2'>
						O‘qishni davom ettiring va natijangizni oshiring.
					</p>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
					{DashboardStats.map((stat, index) => {
						return (
							<Card
								key={index}
								className='bg-white shadow-sm border border-gray-200'
							>
								<CardContent className='p-0'>
									<div className='flex items-center justify-between'>
										<div className='px-4'>
											<p className='text-lg font-semibold'>{stat.label}</p>
											<p className='text-3xl font-bold mt-2'>{stat.value}</p>
										</div>
										<div>
											<Image
												alt='img'
												src={stat.img}
												width={20}
												height={20}
												className='h-20 w-20'
											/>
										</div>
									</div>
									<p className='text-sm text-gray-400 mt-1 px-4'>
										{stat.comment}
									</p>
								</CardContent>
							</Card>
						)
					})}
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<Card className='bg-white shadow-sm border border-gray-200'>
						<CardHeader>
							<CardTitle className='text-2xl font-bold'>
								Peshqadamlar jadvali
							</CardTitle>
							<p className='text-sm text-gray-500 py-0'>
								5 kunlik seriya! Maxsus nishonga ega bo‘lish uchun davom eting!
							</p>
						</CardHeader>
						<Separator className='py-0 my-0' />
						<CardContent className='p-0'>
							<div className='overflow-x-auto'>
								<table className='w-full'>
									<thead>
										<tr className='border-b border-gray-200 font-bold text-sm justify-center'>
											<th></th>
											<th>№</th>
											<th>Avatar</th>
											<th>Foydalanuvchilar</th>
											<th>Boshlash sanasi</th>
											<th>Reytingi</th>
										</tr>
									</thead>
									<tbody>
										{leaders.map((leader, index) => {
											const isTopThree = leader.rank <= 3

											return (
												<tr
													key={leader.rank}
													className={`border-b text-center border-gray-100 ${
														index % 2 === 0 ? "bg-blue-50" : "bg-white"
													} hover:bg-blue-100 p-0`}
												>
													<td className='text-center pl-3 py-1'>
														{isTopThree && (
															<Image
																src={trophyImages[leader.rank as 1 | 2 | 3]}
																alt='trophy'
																width={24}
																height={24}
															/>
														)}
													</td>

													<td className='py-1 text-center'>{leader.rank}</td>

													<td className='py-1 text-center'>
														<div className='flex justify-center'>
															<Image
																alt='avatar'
																src={leader.avatar}
																width={30}
																height={30}
																className='rounded-full'
															/>
														</div>
													</td>

													<td className='py-1'>{leader.name}</td>

													<td className='py-1 text-gray-500'>
														{leader.startDate}
													</td>

													<td className='py-1'>
														<div className='flex items-center justify-center gap-1'>
															<Star className='h-4 w-4 fill-amber-500 text-amber-500' />
															<span>{leader.rating}</span>
														</div>
													</td>
												</tr>
											)
										})}
									</tbody>
								</table>
							</div>
						</CardContent>
					</Card>

					<LastMonthActivityChart />
				</div>
			</div>
		</div>
	)
}
