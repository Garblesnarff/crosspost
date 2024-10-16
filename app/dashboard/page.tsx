"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const data = [
  { name: 'Twitter', likes: 4000, shares: 2400, comments: 2400 },
  { name: 'Instagram', likes: 3000, shares: 1398, comments: 2210 },
  { name: 'LinkedIn', likes: 2000, shares: 9800, comments: 2290 },
  { name: 'YouTube', likes: 2780, shares: 3908, comments: 2000 },
]

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Engagement Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="likes" fill="var(--chart-1)" />
                <Bar dataKey="shares" fill="var(--chart-2)" />
                <Bar dataKey="comments" fill="var(--chart-3)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Posts</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add a list or table of recent posts here */}
            <p>Recent posts will be displayed here.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}