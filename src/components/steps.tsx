import type { useForm } from "react-hook-form";
import FormField from "./form-field";
import { CardTitle } from "./ui/card";
import type { StepFormData } from "../types";

interface StepProps {
	register: ReturnType<typeof useForm<StepFormData>>["register"];
	errors: Record<string, { message?: string }>;
	setValue?: ReturnType<typeof useForm<StepFormData>>["setValue"];
}

const PersonalInfoStep = ({ register, errors }: StepProps) => {
	return (
		<div className="space-y-4">
			<CardTitle className="text-xl">Personal Information</CardTitle>
			<div className="grid grid-cols-2 gap-4">
				<FormField
					id="firstName"
					label="First Name"
					errors={errors}
					register={register}
				/>
				<FormField
					id="lastName"
					label="Last Name"
					errors={errors}
					register={register}
				/>
			</div>

			<FormField
				id="email"
				label="Email Address"
				type="email"
				errors={errors}
				register={register}
			/>
			<FormField
				id="phone"
				label="Phone Number"
				type="tel"
				errors={errors}
				register={register}
			/>
		</div>
	);
};
const ProfessionalInfoStep = () => {
	return <div>Professional Info Step</div>;
};
const BillingInfoStep = () => {
	return <div>Billing Info Step</div>;
};

export { PersonalInfoStep, ProfessionalInfoStep, BillingInfoStep };
