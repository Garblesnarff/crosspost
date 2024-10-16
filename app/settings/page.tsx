"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Settings() {
  const { data: session } = useSession()
  const [connectedPlatforms, setConnectedPlatforms] = useState({
    twitter: false,
    instagram: false,
    linkedin: false,
    youtube: false,
  })

  const [apiKeys, setApiKeys] = useState({
    twitter: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  })

  const handleApiKeyChange = (platform: keyof typeof apiKeys, value: string) => {
    setApiKeys(prev => ({ ...prev, [platform]: value }))
  }

  const handleSaveChanges = () => {
    console.log("Saving changes:", { connectedPlatforms, apiKeys })
    // Here you would typically send this data to your backend
  }

  if (!session) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>Please sign in to access settings.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link href="/auth">Go to Authentication Page</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Account Settings</h1>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Connected Platforms</CardTitle>
            <CardDescription>Manage your connected social media accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(connectedPlatforms).map(([platform, isConnected]) => (
                <div key={platform} className="flex items-center justify-between">
                  <Label htmlFor={platform} className="text-lg">
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </Label>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id={platform}
                      checked={isConnected}
                      onCheckedChange={() => {}}
                      disabled
                    />
                    <span>{isConnected ? "Connected" : "Disconnected"}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/auth">Manage Connections</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API Key Management</CardTitle>
            <CardDescription>Enter your API keys for each platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(apiKeys).map(([platform, apiKey]) => (
                <div key={platform} className="space-y-2">
                  <Label htmlFor={`${platform}-api-key`} className="text-lg">
                    {platform.charAt(0).toUpperCase() + platform.slice(1)} API Key
                  </Label>
                  <Input
                    id={`${platform}-api-key`}
                    type="password"
                    value={apiKey}
                    onChange={(e) => handleApiKeyChange(platform as keyof typeof apiKeys, e.target.value)}
                    placeholder={`Enter your ${platform} API key`}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Button onClick={handleSaveChanges} className="w-full">Save All Changes</Button>
      </div>
    </div>
  )
}