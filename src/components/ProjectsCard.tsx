import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface projectcardprops {
  value: any;
}
const ProjectCards: React.FC<projectcardprops> = ({ value }) => {
  return (

    <Card className="max-w-[32%] max-lg:max-w-full overflow-hidden">
      <CardHeader>
        <CardTitle>{value.title}</CardTitle>

      </CardHeader>
      <CardContent>
        <p className="text-base font-poppins">{value.description}</p>
        <div className=" w-full h-fit grid mt-2 justify-center grid-flow-col grid-rows-1 gap-3 max-lg:grid-rows-1 max-xl:grid-rows-2 max-sm:grid-rows-2">
          {
            value.tags.map((itm: string, indx: number) => {
              return <Badge key={indx}>{itm}</Badge>
            })
          }
        </div>
      </CardContent>
      <CardFooter className="items-center justify-center flex">
        <Link
          href={value.link}
          target="blank"
          className={cn(buttonVariants({ variant: "default", size: "lg" }))}
        >
          Visit Project
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCards;
