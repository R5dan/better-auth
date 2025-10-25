import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import {Steps, Step} from "@/components/ui/steps"

export default function Page() {
  return (
    <Card>
      <CardHeader><h1>Setup</h1></CardHeader>
      <CardDescription>
        <p>How to setup your application for testing</p>
      </CardDescription>
      <CardContent>
        <div>
          <h1>Option 1</h1>
          <div>
            <Code>
              
            </Code>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}