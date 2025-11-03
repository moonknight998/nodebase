import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";

const Page = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <Button variant={"outline"}>
        Click Me
      </Button>
    </div>
  );
};

export default Page;