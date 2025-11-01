import type { useForm } from "react-hook-form";
import FormField from "./form-field";
import { CardTitle } from "./ui/card";
import type { StepFormData } from "../types";
import { Label } from "./ui/label";
import {
	Select,
	SelectItem,
	SelectTrigger,
	SelectValue,
	SelectContent,
} from "./ui/select";
import { useState } from "react";

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
const ProfessionalInfoStep = ({ register, errors, setValue }: StepProps) => {
	const [experience, setExperience] = useState("");
	return (
		<div className="space-y-4">
			<CardTitle className="text-xl">Professional Information</CardTitle>
			<div className="grid grid-cols-2 gap-4">
				<FormField
					id="company"
					label="Company Name"
					errors={errors}
					register={register}
				/>
				<FormField
					id="position"
					label="Position"
					errors={errors}
					register={register}
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="experience">Years of Experience</Label>
				<Select
					value={experience}
					onValueChange={(val) => {
						setValue?.(
							"experience",
							val as Extract<
								StepFormData,
								{ experience: string }
							>["experience"],
							{ shouldValidate: true }
						);
						setExperience(val);
					}}
				>
					<SelectTrigger className="w-1/2">
						<SelectValue placeholder="Select Experience" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="0-2">0-2 Years</SelectItem>
						<SelectItem value="3-5">3-5 Years</SelectItem>
						<SelectItem value="6-10">6-10 Years</SelectItem>
						<SelectItem value="10+">10+ Years</SelectItem>
					</SelectContent>
				</Select>

				{errors.experience && (
					<p className="text-sm text-desctructive">
						{errors.experience?.message}
					</p>
				)}
			</div>

			<FormField
				id="industry"
				label="Industry/Domain"
				register={register}
				errors={errors}
			/>
		</div>
	);
};
const BillingInfoStep = () => {
	return <div>Billing Info Step</div>;
};

export { PersonalInfoStep, ProfessionalInfoStep, BillingInfoStep };
