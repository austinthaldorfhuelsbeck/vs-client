import { FC, SyntheticEvent } from "react";

import { faGear, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useGallery, useUser } from "../../context/contextProvider";
import useAuth from "../../hooks/useAuth";
import useModal from "../../hooks/useModal";
import { Label } from "../ContextMenu/ContextMenu.style";
import LoginDialog from "./LoginDialog";
import {
	Button,
	Company,
	Container,
	Icon,
	Logo,
	LogoLink,
} from "./Navbar.style";
import ProfileSection from "./ProfileSection";
import RegisterDialog from "./RegisterDialog";
import UserEditDialog from "./UserEditDialog";

interface Props {
	toggleTheme: (e: SyntheticEvent<HTMLOrSVGElement>) => void;
	isDarkMode: boolean;
}

const Navbar: FC<Props> = ({ toggleTheme, isDarkMode }) => {
	const { currentUser } = useUser();
	const { setCurrentGallery } = useGallery();
	const loginModal = useModal();
	const registerModal = useModal();
	const userModal = useModal();
	const loginAuth = useAuth({ toggle: loginModal.toggle });
	const registerAuth = useAuth({ toggle: registerModal.toggle });

	return (
		<Container>
			<LogoLink
				onClick={() => setCurrentGallery(undefined)}
				to={currentUser ? "/studio" : "/"}
			>
				<Logo>Vowsuite</Logo>
			</LogoLink>

			{currentUser?.companyName && (
				<Company onClick={() => setCurrentGallery(undefined)}>
					<Label>
						{currentUser.companyName}
						<FontAwesomeIcon icon={faGear} />
					</Label>
				</Company>
			)}

			<Icon onClick={toggleTheme} icon={isDarkMode ? faSun : faMoon} />

			{currentUser ? (
				<ProfileSection
					toggleModal={userModal.toggle}
					onLogout={loginAuth.onLogout}
				/>
			) : (
				<>
					<Button onClick={registerModal.toggle}>Sign Up</Button>
					<Button $secondary onClick={loginModal.toggle}>
						Log In
					</Button>
				</>
			)}

			<LoginDialog
				formData={loginAuth.formData}
				onChange={loginAuth.onChange}
				onLogin={loginAuth.onLogin}
				loginSuccess={loginAuth.loginSuccess}
				loginError={loginAuth.loginError}
				loginModal={loginModal}
			/>

			<RegisterDialog
				formData={registerAuth.formData}
				onChange={registerAuth.onChange}
				onRegister={registerAuth.onRegister}
				loginSuccess={registerAuth.loginSuccess}
				loginError={registerAuth.loginError}
				loginModal={registerModal}
			/>

			<UserEditDialog userModal={userModal} />
		</Container>
	);
};

export default Navbar;
