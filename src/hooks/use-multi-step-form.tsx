import { Briefcase, CreditCard, User2 } from "lucide-react";
import {
	billingInfoSchema,
	personalInfoSchema,
	professionalInfoSchema,
	type Step,
	type StepFormData,
} from "../types";
import { useState } from "react";

const stepSchema = [
	personalInfoSchema,
	professionalInfoSchema,
	billingInfoSchema,
];

export const steps: Step[] = [
	{
		id: "personal",
		name: "Personal Info",
		icon: User2,
	},
	{
		id: "professional",
		name: "Professional Info",
		icon: Briefcase,
	},
	{
		id: "billing",
		name: "Billing Info",
		icon: CreditCard,
	},
];

export function useMultiStepForm() {
	const [currentStep, setCurrentStep] = useState(2);
	const [formData, setFormData] = useState<Partial<StepFormData>>({});
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

	const isFirstStep = currentStep === 0;
	const isLastStep = currentStep === steps.length - 1;

	// return the schema for the current step
	const getCurrentStepSchema = () => stepSchema[currentStep];

	// goto next step
	const gotoNextStep = () => {
		if (!isLastStep) setCurrentStep((prev) => prev + 1);
	};

	// goto the previous step
	const gotoPrevStep = () => {
		if (!isFirstStep) setCurrentStep((prev) => prev - 1);
	};

	// Function to update the step into the form: Merge & update form data
	const updateFormData = (newData: Partial<StepFormData>) => {
		setFormData((prev) => ({ ...prev, ...newData }));
	};

	// handle final submission
	const handleFinalSubmit = (data: StepFormData) => {
		console.log("✔ Final Submitted data:", data);
		setIsSubmitted(true);
	};

	// reset the form
	const resetForm = () => {
		setFormData({});
		setCurrentStep(0);
		setIsSubmitted(false);
	};

	return {
		currentStep,
		formData,
		isFirstStep,
		isLastStep,
		isSubmitted,
		steps,

		gotoNextStep,
		gotoPrevStep,
		updateFormData,
		handleFinalSubmit,
		resetForm,
		getCurrentStepSchema,
	};
}
