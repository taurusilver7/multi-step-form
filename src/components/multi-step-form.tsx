import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { personalInfoSchema, type StepFormData } from "../types";
import { useMultiStepForm } from "../hooks/use-multi-step-form";
import { useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import ProgressSteps from "./progress-step";
import {
	BillingInfoStep,
	PersonalInfoStep,
	ProfessionalInfoStep,
} from "./steps";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MultistepForm = () => {
	// custom hook
	const {
		getCurrentStepSchema,
		gotoNextStep,
		gotoPrevStep,
		handleFinalSubmit,
		updateFormData,
		resetForm,
		currentStep,
		formData,
		isFirstStep,
		isLastStep,
		isSubmitted,
		steps,
	} = useMultiStepForm();

	const {
		register,
		handleSubmit,
		formState: { errors },
		trigger,
		setValue,
		reset,
	} = useForm<StepFormData>({
		resolver: zodResolver(getCurrentStepSchema()),
		mode: "onChange",
		defaultValues: formData,
	});

	useEffect(() => {
		reset(formData);
	}, [currentStep, formData, reset]);

	const onNext = async (data: StepFormData) => {
		// Check for input validations manually
		// Merge current step data with prev data.
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
			<Card className="w-full max-w-2xl">
				<CardHeader>
					<ProgressSteps currentStep={currentStep} steps={steps} />
				</CardHeader>
				<CardContent className="space-y-6">
					{currentStep === 0 && <PersonalInfoStep />}
					{currentStep === 1 && <ProfessionalInfoStep />}
					{currentStep === 2 && <BillingInfoStep />}

					<div className="flex items-center justify-between pt-4">
						<Button
							onClick={gotoPrevStep}
							disabled={isFirstStep}
							type="button"
							variant={"outline"}
						>
							<ChevronLeft className="size-4 mr-1" />
							Previous
						</Button>
						<Button type="button" onClick={handleSubmit(onNext)}>
							{isLastStep ? "Submit" : "Next"}
							{!isLastStep && <ChevronRight className="size-4 mr-1" />}
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default MultistepForm;
