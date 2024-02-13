import { useForm } from "react-hook-form";

type FormData = {
	name: string;
	email: string;
};

export default function Contact() {
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();
	const onSubmit = handleSubmit((data) => console.log(data));

	return (
		<main className="form">
			<form onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="Name"
					{...register("name")}
					required
				/>
				<input
					type="email"
					placeholder="Email"
					{...register("email")}
					required
				/>
				<textarea
					rows={10}
					placeholder="Leave message..."
					name="message"
				/>

				<input type="submit" />
			</form>
		</main>
	);
}
