import { TutorialStep } from "@/components/tutorial-step";
import Step1 from "@/contents/module-2/kamal/step-1.mdx";
import Step2 from "@/contents/module-2/kamal/step-2.mdx";
import Step3 from "@/contents/module-2/kamal/step-3.mdx";
import Step4 from "@/contents/module-2/kamal/step-4.mdx";
import Step5 from "@/contents/module-2/kamal/step-5.mdx";
import Step6 from "@/contents/module-2/kamal/step-6.mdx";
import Step7 from "@/contents/module-2/kamal/step-7.mdx";
import Step8 from "@/contents/module-2/kamal/step-8.mdx";

import Step1Flow from "@/flow/module-2/kamal/step-1-flow";
import Step2Flow from "@/flow/module-2/kamal/step-2-flow";
import { redirect } from "next/navigation";

const steps: Record<string, React.FC> = {
  "step-1": Step1,
  "step-2": Step2,
  "step-3": Step3,
  "step-4": Step4,
  "step-5": Step5,
  "step-6": Step6,
  "step-7": Step7,
  "step-8": Step8,
};

const titles: Record<string, string> = {
  "step-1": "Step 1: Getting Started",
};

const flows: Record<string, React.FC> = {
  "step-1": Step1Flow,
  "step-2": Step1Flow,
  "step-3": Step1Flow,
  "step-4": Step1Flow,
  "step-5": Step1Flow,
  "step-6": Step2Flow,
  "step-7": Step2Flow,
  "step-8": Step2Flow,
};

export default function Page({ params }: { params: { step: string } }) {
  if (!steps[params.step]) {
    redirect("/");
  }

  // Select the page based on current step
  const SelectedPage = steps[params.step] || Step1;

  // Extract the current step number and calculate the next step
  const currentStepNumber = parseInt(params.step.split("-")[1]);
  const nextStepNumber = currentStepNumber + 1;
  const prevStepNumber = currentStepNumber - 1;

  const nextPageUrl = !!steps[`step-${nextStepNumber}`]
    ? `step-${nextStepNumber}`
    : null;
  const prevPageUrl = !!steps[`step-${prevStepNumber}`]
    ? `step-${prevStepNumber}`
    : null;

  const FlowChart = flows[params.step];

  return (
    <TutorialStep
      nextPageUrl={nextPageUrl}
      prevPageUrl={prevPageUrl}
      title={titles[params.step]}
      flow={<FlowChart />}
    >
      <SelectedPage />
    </TutorialStep>
  );
}
