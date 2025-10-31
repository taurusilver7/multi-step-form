import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { personalInfoSchema, type StepFormData } from "../types";

const MultistepForm = () => {
	// custom hook

	const {
		register,
		handleSubmit,
		formState: { errors },
		trigger,
		setValue,
		reset,
	} = useForm<StepFormData>({
		// resolver: zodResolver()
	});
	return <div>Multi step Form</div>;
};

export default MultistepForm;
