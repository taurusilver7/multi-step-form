import { Check } from "lucide-react";
import type { Step } from "../types";

const ProgressSteps = ({
	currentStep,
	steps,
}: {
	currentStep: number;
	steps: Step[];
}) => {
	return (
		<div className="flex justify-between items-center">
			{steps.map((step, index) => {
				const Icon = step.icon;
				const isCompleted = index < currentStep;
				const isActive = index === currentStep;

				return (
					<div key={step.id} className="flex items-center flex-1">
						<div className="flex flex-col items-center">
							<div
								className={`size-10 rounded-full flex items-center justify-center transition-colors ${
									isCompleted
										? "bg-primary text-primary-foreground"
										: isActive
										? "bg-primary text-primary-foreground"
										: "bg-gray-300 text-gray-500"
								}`}
							>
								{isCompleted ? (
									<Check className="size-5" />
								) : (
									<Icon className="size-5" />
								)}
							</div>
							<span className="text-xs mt-2 font-medium">
								{step.name}
							</span>
						</div>

						{index < steps.length - 1 && (
							<div
								className={`flex-1 h-0.5 mx-2 transition-colors ${
									isCompleted ? "bg-primary" : "bg-gray-300"
								}`}
							/>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default ProgressSteps;
