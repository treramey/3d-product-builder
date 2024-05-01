import Link from "next/link";

import { Icons } from "@/components/icons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Button } from "./ui/button";

export function Sidebar() {
  return (
    <aside className="fixed right-0 top-0 hidden h-screen w-96 flex-shrink-0 flex-col items-center justify-between bg-gray-100 px-4 pb-4 sm:flex">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="mt-6">
          <Link href="/">
            <Icons.Logo />
          </Link>
        </div>
        <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium">Color?</AccordionTrigger>
            <AccordionContent>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full border-4 border-green-500 bg-green-500"></div>
                      Green
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-tr from-red-600 to-black"></div>
                      Cabernet
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-three" id="option-three" />
                  <Label htmlFor="option-three">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full border-4 border-sky-500 bg-sky-500"></div>
                      Sky
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium">Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium">Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Button className="bottom-0">Save + Checkout</Button>
    </aside>
  );
}
