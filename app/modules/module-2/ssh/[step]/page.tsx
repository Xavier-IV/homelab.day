import { TutorialStep } from "@/components/tutorial-step";
import Step1 from "@/contents/module-2/ssh/step-1.mdx";
import Step2 from "@/contents/module-2/ssh/step-2.mdx";
import Step3 from "@/contents/module-2/ssh/step-3.mdx";
import Step4 from "@/contents/module-2/ssh/step-4.mdx";
import Step5 from "@/contents/module-2/ssh/step-5.mdx";
import Step6 from "@/contents/module-2/ssh/step-6.mdx";

import Step1Flow from "@/flow/module-2/ssh/step-1-flow";
import Step2Flow from "@/flow/module-2/ssh/step-2-flow";
import Step3Flow from "@/flow/module-2/ssh/step-3-flow";
import { redirect } from "next/navigation";

const steps: Record<string, React.FC> = {
  "step-1": Step1,
  "step-2": Step2,
  "step-3": Step3,
  "step-4": Step4,
  "step-5": Step5,
  "step-6": Step6,
};

const titles: Record<string, string> = {
  "step-1": "Step 1: Getting Started",
  "step-2": "Step 2: Getting familiar with the guide",
  "step-3": "Step 3: Identifying your IP Address",
};

const flows: Record<string, React.FC> = {
  "step-1": Step1Flow,
  "step-2": Step1Flow,
  "step-3": Step1Flow,
  "step-4": Step1Flow,
  "step-5": Step3Flow,
  "step-6": Step3Flow,
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
