import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

const learningModules = [
  { id: 1, title: "Module 1: Intro and setup" },
  { id: 2, title: "Module 2: Connecting with SSH" },
  { id: 3, title: "Module 3: Your first website" },
];

export default function Page() {
  return (
    <div className="min-h-screen max-h-screen h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <header className="p-4 border-b dark:border-gray-800">
        <nav className="flex justify-between items-center max-w-7xl px-2 md:px-10 mx-auto">
          <Link href="/">
            <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              homelab.day
            </h1>
          </Link>
        </nav>
      </header>

      <main className="w-full max-w-7xl px-5 md:px-10 md:mx-auto prose">
        <div className="pl-1">
          <h2>Module 1: Getting Started</h2>
          <p className="text-gray-500">
            A small module to give you a quick sense of winning and dopamine,
            and laying out foundation for our next modules.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 not-prose">
          <Link href={`/step-1`} className="text-blue-600 dark:text-blue-400">
            <Card key={module.id} className="hover:shadow-lg">
              <CardHeader>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Getting Started
                </h2>
              </CardHeader>
              <CardContent>
                <p>
                  Let's get your hand dirty with hands-on experience of building
                  your first homelab.
                </p>
                <br />
                <p>We will setup your server for our upcoming modules.</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="pl-1">
          <h2>
            Module 2: Real World Usage{" "}
            <span className="text-gray-300 ">(In Progress)</span>
          </h2>
          <p className="text-gray-500">
            This module will give you excitement of using terminal, and exposing
            your project into the world!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 not-prose">
          <Card
            key={module.id}
            className="hover:shadow-lg min-h-[200px] bg-gray-200 text-gray-400"
          >
            <CardHeader>
              <h2 className="text-2xl font-semibold">Connecting with SSH</h2>
            </CardHeader>
            <CardContent>
              <p>
                Now that your server is up, we need to figure out how to connect
                and get into it.
              </p>
            </CardContent>
          </Card>

          <Card
            key={module.id}
            className="hover:shadow-lg min-h-[200px] bg-gray-200 text-gray-400"
          >
            <CardHeader>
              <h2 className="text-2xl font-semibold">Deploying your Website</h2>
            </CardHeader>
            <CardContent>
              <p>
                We will now use Kamal and Docker to quickly deploy our first
                web-app!
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
