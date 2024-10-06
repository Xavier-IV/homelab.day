"use client";

import Image from "next/image";

type Props = {
  students: string[];
};

export default function Graduated({ students }: Props) {
  return (
    <div className="flex gap-2">
      {students.map((student, key) => (
        <a href={student} key={key} target="_blank">
          <Image src={`${student}.png`} alt="student" width={30} height={30} />
        </a>
      ))}
    </div>
  );
}
