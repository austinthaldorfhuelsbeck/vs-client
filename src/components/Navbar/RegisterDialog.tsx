import { faX } from "@fortawesome/free-solid-svg-icons";
import {
	Alert,
	CloseButton,
	Dialog,
	InlineButton,
} from "../../styles/common/common.style";
import {
	Buttons,
	FormColumn,
	FormHeader,
	FormRow,
} from "../../styles/forms.style";
import TextInput from "../InputGroups/TextInput";

interface Props {
	formData: any; // Replace 'any' with the actual login data type
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onRegister: (e: React.FormEvent) => void;
	loginSuccess: string | null;
	loginError: any; // Replace 'any' with the actual error type
	loginModal: any; // Replace 'any' with the actual modal type
}

const RegisterDialog: React.FC<Props> = ({
	formData,
	onChange,
	onRegister,
	loginSuccess,
	loginError,
	loginModal,
}) => (
	<Dialog ref={loginModal.modalRef} onClick={loginModal.onBackgroundClick}>
		<FormRow>
			<FormHeader>Sign Up for Vowsuite</FormHeader>
			<CloseButton onClick={loginModal.toggle} icon={faX} />
		</FormRow>
		<form noValidate autoComplete="off" onSubmit={onRegister}>
			<FormColumn>
				<TextInput
					name="email"
					label="Email*"
					value={formData.email}
					onChange={onChange}
				/>
				<TextInput
					name="name"
					label="Name*"
					value={formData.name}
					onChange={onChange}
				/>
				<TextInput
					password
					name="password"
					label="Password*"
					value={formData.password}
					onChange={onChange}
				/>
				<hr />
				<Buttons>
					<InlineButton onClick={loginModal.toggle} $secondary>
						Cancel
					</InlineButton>
					<InlineButton type="submit" $primary>
						Submit
					</InlineButton>
				</Buttons>
			</FormColumn>
		</form>

		{loginError && <Alert $error={loginError}>{loginError.message}</Alert>}
		{loginSuccess && <Alert $success={loginSuccess}>{loginSuccess}</Alert>}
	</Dialog>
);

export default RegisterDialog;
