import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { keyframes, styled } from "styled-components";

interface ContainerProps {
	$bg: string;
	$primaryFont: string;
	$secondaryFont: string;
	$hex1: string;
	$hex2: string;
	$hex3: string;
}
export const Container = styled.div<ContainerProps>`
	display: flex;
	flex-direction: column;
	height: 100%;
	background-image: ${(ContainerProps) =>
		`linear-gradient(rgba(0, 0, 0, 0.6),
		rgba(0, 0, 0, 0.2)),url(${ContainerProps.$bg})`};
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	transition: all 300ms;
	font-family: ${(GalleryHeaderProps) => GalleryHeaderProps.$secondaryFont};

	h1,
	h4 {
		font-family: ${(GalleryHeaderProps) => GalleryHeaderProps.$primaryFont};
		font-weight: 200;
	}

	h5,
	h6 {
		text-transform: uppercase;
		margin: 0.5rem 0 0 0;
		font-size: 100%;
		letter-spacing: 0.2rem;
		font-weight: 100;
	}

	a,
	h6 {
		color: ${(GalleryHeaderProps) => GalleryHeaderProps.$hex1};
	}

	hr,
	a {
		border-color: ${(GalleryHeaderProps) => GalleryHeaderProps.$hex2};
	}

	hr {
		opacity: 50%;
		margin: 2rem;
	}

	button {
		background-color: ${(GalleryHeaderProps) => GalleryHeaderProps.$hex1};
		margin-bottom: 1rem;
		color: ${(GalleryHeaderProps) => GalleryHeaderProps.$hex2};

		&:hover {
			background-color: ${(GalleryHeaderProps) =>
				GalleryHeaderProps.$hex3};
		}
	}
`;

export const Header = styled.h1`
	padding: 6rem;
	font-size: 700%;
	color: white;
	cursor: default;
`;

export const AltHeader = styled.h4`
	color: white;
	margin: 0;
`;

export const Subheader = styled.h6`
	cursor: pointer;
`;

const spinAnimation = keyframes`
	0% { transform: rotate(0deg); }
	100% { transform: rotate(720deg); }
`;
export const Loader = styled(FontAwesomeIcon)`
	color: ${({ theme }) => theme.text};
	font-size: 500%;
	margin: 15px auto;
	animation-name: ${spinAnimation};
	animation-duration: 2.5s;
	animation-iteration-count: infinite;
`;

export const PlayButton = styled.button`
	max-width: 200px;
	margin-left: 70px;
	padding: 15px;
	font-size: 200%;
	text-transform: uppercase;
	color: black;
	letter-spacing: 0.1rem;
	font-weight: 100;
	cursor: pointer;
	border: none;
	border-radius: 3rem;

	transition: all 300ms;
	&:hover {
		transform: scale(1.08);
	}
`;

export const PlayIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	background: rgba(255, 255, 255, 0.6);
	width: 7rem;
	height: 4.5rem;
	border-radius: 0.5rem;
	color: rgba(0, 0, 0, 0.85);
	font-size: 300%;
`;

export const Wrapper = styled.ul`
	margin: auto 0 3rem 4rem;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;
	grid-auto-rows: auto;

	@media (max-width: 1545px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 1150px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 780px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

interface VideoProps {
	url: string;
}
export const Video = styled.li<VideoProps>`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 2rem;
	margin: 1rem;
	min-width: 35rem;
	height: 20rem;
	border-radius: 2rem;
	cursor: pointer;
	box-shadow: 0 0 3rem 4px rgba(0, 0, 0, 0.5);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	background-image: ${(VideoProps) =>
		`linear-gradient(rgba(0, 0, 0, 0.1) 0%,
		rgba(0, 0, 0, 0.5) 70%,
		rgba(0, 0, 0, 0.9) 100%),url(${VideoProps.url})`};

	transition: all 300ms;
	&:hover {
		transform: scale(1.08);
		box-shadow: 0 0 3rem 4px rgba(255, 255, 255, 0.2);
	}
`;
