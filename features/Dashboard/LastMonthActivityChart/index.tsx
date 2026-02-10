"use client"

import {
	Bar,
	BarChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarchartData } from "@/moc"

export default function LastMonthActivityChart() {
	return (
		<Card className='pt-0 rounded-xl'>
			<CardHeader className='bg-blue-300 mt-0 p-4 rounded-t-xl'>
				<CardTitle className='pl-2'>So‘nggi oydagi faollik</CardTitle>
			</CardHeader>

			<CardContent className='h-[500px] px-2'>
				<ResponsiveContainer width='100%' height='100%'>
					<BarChart data={BarchartData}>
						<CartesianGrid strokeDasharray='3 3' vertical={false} />
						<XAxis
							dataKey='day'
							tickLine={false}
							axisLine={true}
							label={{
								value: "Iyul",
								position: "insideLeft",
								dx: -35,
								dy: -5,
								angle: 0,
							}}
						/>
						<YAxis
							tickLine={false}
							axisLine={true}
							ticks={[1, 2, 3, 4, 5, 6, 7, 8]}
							tickFormatter={(value) => `${value} soat`}
							label={{
								angle: 0,
								position: "top",
								offset: 0,
							}}
						/>
						<Tooltip formatter={(value) => `${value} soat`} />{" "}
						<Bar
							dataKey='hours'
							radius={[6, 6, 0, 0]}
							className='fill-green-600'
						/>
					</BarChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	)
}
