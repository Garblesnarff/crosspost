"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function CreatePost() {
  const [content, setContent] = useState("")
  const [selectedPlatforms, setSelectedPlatforms] = useState({
    twitter: true,
    instagram: false,
    linkedin: false,
    youtube: false,
  })

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  const handlePlatformChange = (platform: keyof typeof selectedPlatforms) => {
    setSelectedPlatforms(prev => ({ ...prev, [platform]: !prev[platform] }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitting post:", { content, selectedPlatforms })
    // Here you would typically send this data to your backend
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Post Content</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="What's on your mind?"
              value={content}
              onChange={handleContentChange}
              className="min-h-[200px]"
            />
          </CardContent>
          <CardFooter className="flex-col items-start">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Select Platforms</h3>
              <div className="space-y-2">
                {Object.entries(selectedPlatforms).map(([platform, isChecked]) => (
                  <div key={platform} className="flex items-center space-x-2">
                    <Checkbox
                      id={platform}
                      checked={isChecked}
                      onCheckedChange={() => handlePlatformChange(platform as keyof typeof selectedPlatforms)}
                    />
                    <Label htmlFor={platform}>{platform.charAt(0).toUpperCase() + platform.slice(1)}</Label>
                  </div>
                ))}
              </div>
            </div>
            <Button type="submit">Post</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}