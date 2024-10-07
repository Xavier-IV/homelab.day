import Header from "@/components/header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen max-h-screen h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header />

      <main className="w-full max-w-7xl px-5 md:px-10 md:mx-auto prose dark:prose-invert">
        <div className="pl-1">
          <h2 className="text-gray-900 dark:text-gray-100">Module 1: Getting Started</h2>
          <p className="text-gray-500 dark:text-gray-400">
            A small module to give you a quick sense of winning and dopamine,
            and laying out foundation for our next modules.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 not-prose">
          <Link
            href={`/modules/module-1/step-1`}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            <Card key={module.id} className="hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800">
              <CardHeader>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Getting Started
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Let&apos;s get your hand dirty with hands-on experience of
                  building your first homelab.
                </p>
                <br />
                <p className="text-gray-600 dark:text-gray-300">We will setup your server for our upcoming modules.</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="pl-1">
          <h2 className="text-gray-900 dark:text-gray-100">
            Module 2: Real World Usage{" "}
            <span className="text-gray-400 dark:text-gray-500">(In Progress)</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            This module will give you excitement of using terminal, and exposing
            your project into the world!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 not-prose">
          <Link
            href={`/modules/module-2/ssh/step-1`}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            <Card key={module.id} className="hover:shadow-lg transition-shadow duration-300 min-h-[200px] bg-white dark:bg-gray-800">
              <CardHeader>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Connecting with SSH</h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Now that your server is up, we need to figure out how to
                  connect and get into it.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link
            href={`/modules/module-2/kamal/step-1`}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            <Card key={module.id} className="hover:shadow-lg transition-shadow duration-300 min-h-[200px] bg-white dark:bg-gray-800">
              <CardHeader>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Deploying your Website
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  We will now use Kamal and Docker to quickly deploy our first
                  web-app!
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  );
}