"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import "reactflow/dist/style.css";
import Header from "./header";

export const dynamic = "force-dynamic";

type Props = {
  children: React.ReactNode;
  nextPageUrl: string | null;
  prevPageUrl: string | null;
  title?: string;
  flow: React.ReactNode;
};

export function TutorialStep({
  children,
  nextPageUrl,
  prevPageUrl,
  flow,
  title,
}: Props) {
  return (
    <div className="min-h-screen max-h-screen h-screen flex flex-col hide-scrollbar">
      <Header />

      <div className="w-full h-fit px-2 py-2 flex items-center bg-red-300 dark:bg-red-900 text-red-900 dark:text-red-100 text-center justify-center text-sm">
        This document is still being written. Only for reading purpose...for
        now.
      </div>

      <main className="min-h-[150vh] md:min-h-0 p-4 h-full flex-grow w-full max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-3 gap-4 px-2 md:px-10 hide-scrollbar">
        <Card className="w-full h-full flex flex-col col-span-2 mx-auto pb-0 bg-white dark:bg-gray-800 overflow-hidden">
          <CardHeader className="h-fit">
            <div className="md:hidden space-y-0 flex flex-row items-center justify-between gap-2 w-full max-w-full bg-white dark:bg-gray-800">
              {prevPageUrl ? (
                <Button
                  className={`w-fit ${buttonVariants({ variant: "outline" })}`}
                  size="sm"
                >
                  <Link href={prevPageUrl}>Previous</Link>
                </Button>
              ) : (
                <div></div>
              )}

              {nextPageUrl ? (
                <Button
                  className={`w-fit ${buttonVariants({ variant: "default" })}`}
                  size="sm"
                >
                  <Link href={nextPageUrl}>Next Step</Link>
                </Button>
              ) : (
                <div></div>
              )}
            </div>
          </CardHeader>
          <CardContent className="overflow-y-auto flex-grow">
            <div className="prose prose-sm h-full pr-4 hide-scrollbar">
              <h2 className="p-0 m-0 text-gray-900 dark:text-gray-100">
                {title}
              </h2>
              <article className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
                {children}
              </article>
            </div>
          </CardContent>
          <CardFooter>
            <div className="hidden md:grid grid-cols-3 gap-2 w-full sticky bottom-0 bg-white min-h-10 dark:bg-gray-800 pt-8">
              {prevPageUrl ? (
                <Button
                  className={`hidden md:block w-fit  ${buttonVariants({ variant: "outline" })}`}
                  asChild
                >
                  <Link href={prevPageUrl}>Previous</Link>
                </Button>
              ) : (
                <div></div>
              )}

              <div className="hidden text-xs text-gray-400 dark:text-gray-500 text-center md:flex items-center justify-center">
                <p> Scroll to bottom</p>
              </div>

              <div className="hidden md:flex justify-end">
                {nextPageUrl ? (
                  <Button asChild className="w-fit">
                    <Link href={nextPageUrl}>Next Step</Link>
                  </Button>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </CardFooter>
        </Card>

        {/* react flow here */}
        <div className="w-full mx-auto max-w-full h-full min-h-[300px] md:min-h-20 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
          {flow}
        </div>
      </main>
    </div>
  );
}

export default TutorialStep;
