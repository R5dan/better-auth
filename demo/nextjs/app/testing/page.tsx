import {useAtom} from "jotai"
import { optionsAtom, TestClientProvider } from "./store"
import { Card, CardHeader } from "@/components/ui/card";

export function Page() {
  const options = useAtom(optionsAtom);
  
  return (
    <TestClientProvider>
      <Card>
        <CardHeader>
          <h1>Better Auth Testing Suite</h1>
        </CardHeader>
        
      </Card>
    </TestClientProvider>
  )
}