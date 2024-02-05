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
import UserEditDialog from "./UserEditDialog";

interface Props {
	toggleTheme: (e: SyntheticEvent<HTMLOrSVGElement>) => void;
	isDarkMode: boolean;
}

const Navbar: FC<Props> = ({ toggleTheme, isDarkMode }) => {
	const { currentUser } = useUser();
	const { setCurrentGallery } = useGallery();
	const loginModal = useModal();
	const userModal = useModal();
	const auth = useAuth({ toggle: loginModal.toggle });

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

			{!currentUser && (
				<Button onClick={loginModal.toggle}>Log In</Button>
			)}

			{currentUser && (
				<ProfileSection
					toggleModal={userModal.toggle}
					onLogout={auth.onLogout}
				/>
			)}

			<LoginDialog
				loginData={auth.loginData}
				onLoginChange={auth.onLoginChange}
				onLogin={auth.onLogin}
				loginSuccess={auth.loginSuccess}
				loginError={auth.loginError}
				loginModal={loginModal}
			/>

			<UserEditDialog userModal={userModal} />
		</Container>
	);
};

export default Navbar;
