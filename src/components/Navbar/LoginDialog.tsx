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
	loginData: any; // Replace 'any' with the actual login data type
	onLoginChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onLogin: (e: React.FormEvent) => void;
	loginSuccess: string | null;
	loginError: any; // Replace 'any' with the actual error type
	loginModal: any; // Replace 'any' with the actual modal type
}

const LoginDialog: React.FC<Props> = ({
	loginData,
	onLoginChange,
	onLogin,
	loginSuccess,
	loginError,
	loginModal,
}) => {
	return (
		<Dialog
			ref={loginModal.modalRef}
			onClick={loginModal.onBackgroundClick}
		>
			<FormRow>
				<FormHeader>Login</FormHeader>
				<CloseButton onClick={loginModal.toggle} icon={faX} />
			</FormRow>
			<form noValidate autoComplete="off" onSubmit={onLogin}>
				<FormColumn>
					<TextInput
						name="email"
						label="Email*"
						value={loginData.email}
						onChange={onLoginChange}
					/>
					<TextInput
						password
						name="password"
						label="Password*"
						value={loginData.password}
						onChange={onLoginChange}
					/>
					<hr />
					<Buttons>
						<InlineButton onClick={loginModal.toggle} $secondary>
							Cancel
						</InlineButton>
						<InlineButton type="submit" $primary>
							Save
						</InlineButton>
					</Buttons>
				</FormColumn>
			</form>
			{loginError && (
				<Alert $error={loginError}>{loginError.message}</Alert>
			)}
			{loginSuccess && (
				<Alert $success={loginSuccess}>{loginSuccess}</Alert>
			)}
		</Dialog>
	);
};

export default LoginDialog;