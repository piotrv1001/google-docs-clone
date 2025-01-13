import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Link href="/documents/123">
        <Button>Click me</Button>
      </Link>
    </div>
  );
}
