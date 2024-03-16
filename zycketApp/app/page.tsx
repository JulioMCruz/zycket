import { Button } from "@/components/ui/button"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div key="1" className="min-h-screen bg-gray-100 p-8">
      <main>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Events</h2>
          <div className="flex space-x-4">
            <Button variant="outline">Upcoming</Button>
            <Button variant="outline">Past</Button>
          </div>
        </div>
        <section className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Sunday, March 17</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Arsenal vs. Chelsea</CardTitle>
                  <CardDescription>Emirates Stadium, London</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">93 Feet East</p>
                  <Button variant="ghost">Attendee</Button>
                  <Badge variant="secondary">+776</Badge>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Manchester United vs. Liverpool</CardTitle>
                  <CardDescription>Old Trafford, Manchester</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Rich Mix</p>
                  <Button variant="ghost">Attendee</Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Manchester City vs. Tottenham</CardTitle>
                  <CardDescription>2b Worship St, Manchester</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost">Attendee</Button>
                  <Badge variant="secondary">+118</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Monday, March 18</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Real Madrid vs. Barcelona</CardTitle>
                  <CardDescription>Bernabeu Stadium, Madrid</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">10 York Rd</p>
                  <Button variant="ghost">Attendee</Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Bayern Munich vs. RB Leipzig</CardTitle>
                  <CardDescription>Allianz Arena, Munich</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost">Attendee</Button>
                  <Badge variant="secondary">+245</Badge>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>PSG vs. Marseille</CardTitle>
                  <CardDescription>Parc des Princes, Paris</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost">Attendee</Button>
                  <Badge variant="secondary">+312</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

