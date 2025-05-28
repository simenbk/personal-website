import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, GithubIcon, Linkedin, Twitter, Globe } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto shadow-lg">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src="/portrait-square.png" alt="Profile picture" />
              <AvatarFallback className="text-2xl">SK</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Simen Kristiansen</h1>
          <p className="text-gray-600 mt-1">Software Developer</p>
          <Badge variant="secondary" className="mt-2 mx-auto">
            PowerAI
          </Badge>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Contact Information */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-600">
              <Mail className="w-4 h-4" />
              <span className="text-sm">simen.kristiansen@powerai.no</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+47 930 70 174</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Oslo, NO</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Connect with me</h3>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" className="justify-start">
                <GithubIcon className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="sm" className="justify-start">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* About */}
          <div className="pt-4 border-t">
            <h3 className="text-sm font-medium text-gray-900 mb-2">About</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              I like building cool stuff.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}