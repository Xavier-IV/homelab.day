"use client";

type Props = {
  title: string;
  message: string;
};

export default function Alert({ title, message }: Props) {
  return (
    <div className="border border-orange-200 dark:border-orange-800 rounded-md bg-orange-100 dark:bg-orange-900 w-full h-fit px-4 py-2 not-prose text-sm flex flex-col gap-1">
      <p className="font-semibold text-orange-800 dark:text-orange-100">{title}</p>
      <p className="text-orange-700 dark:text-orange-200">{message}</p>
    </div>
  );
}