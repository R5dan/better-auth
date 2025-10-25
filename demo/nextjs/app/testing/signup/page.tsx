import { Card } from "@/components/ui/card";
import { useTestClient } from "../store";

export default function Page() {
  const client = useTestClient();

  return (
    <Card>
      <CardHeader><h1>Sign Up</h1></CardHeader>
      
    </Card>
  )
}