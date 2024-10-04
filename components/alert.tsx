"use client";

type Props = {
  title: string;
  message: string;
};

export default function Alert({ title, message }: Props) {
  return (
    <div className="border border-orange-200 rounded-md bg-orange-300 w-full h-fit px-4 py-2 not-prose text-sm flex flex-col gap-1">
      <p className="font-semibold">{title}</p>

      <p>{message}</p>
    </div>
  );
}
