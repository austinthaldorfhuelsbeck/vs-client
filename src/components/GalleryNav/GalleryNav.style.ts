import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

export const GalleryNavContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding: 2rem 2rem 0.5rem;
`;
export const CompanyLogo = styled.img`
	border-radius: 100%;
	width: 7rem;
	height: 7rem;
	margin-bottom: 2rem;
`;

export const BrandInfo = styled.div`
	padding: 1rem 0 0 2rem;
`;
export const AltHeader = styled.h4`
	color: white;
	margin: 0;
`;
export const AltSubheader = styled.h6`
	cursor: pointer;
`;

export const HeaderLinkWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: auto;
	align-items: end;
`;

export const HeaderLinkContainer = styled.div`
	margin-top: 0.5rem;
`;

export const HeaderLink = styled(FontAwesomeIcon)`
	font-size: 250%;
	padding: 1rem;
	margin: 0 0.5rem 0 0.5rem;
	background: rgb(255, 255, 255, 0.2);
	border-radius: 0.5rem;
	cursor: pointer;

	transition: all 300ms;
	&:hover {
		background: rgb(255, 255, 255, 0.4);
	}
`;

export const DownloadContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 120%;
`;