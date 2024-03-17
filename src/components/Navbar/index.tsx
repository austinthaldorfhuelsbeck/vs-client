import { FC, SyntheticEvent } from "react";

import { faGear, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useGallery, useUser } from "../../context/contextProvider";
import useModal from "../../hooks/useModal";
import { Label } from "../ContextMenu/ContextMenu.style";
import { Company, Container, Icon, Logo, LogoLink } from "./Navbar.style";
import ProfileSection from "./ProfileSection";
import UserEditDialog from "./UserEditDialog";

interface Props {
  toggleTheme: (e: SyntheticEvent<HTMLOrSVGElement>) => void;
  isDarkMode: boolean;
}

const Navbar: FC<Props> = ({ toggleTheme, isDarkMode }) => {
  const { currentUser } = useUser();
  const { setCurrentGallery } = useGallery();
  const userModal = useModal();

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

      <ProfileSection toggleModal={userModal.toggle} />

      <UserEditDialog userModal={userModal} />
    </Container>
  );
};

export default Navbar;
