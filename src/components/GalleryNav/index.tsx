import {
	faChevronDown,
	faCloudDownloadAlt,
	faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { SyntheticEvent, useState } from "react";
import useModal from "../../hooks/useModal";
import { IGallery, IUser, IVideo } from "../../interfaces/models.interface";
import { addDownload } from "../../middleware/video.api";
import { Alert, Dialog, InlineButton } from "../../styles/common/common.style";
import BrandDetails from "../BrandDetails";
import {
	AltHeader,
	AltSubheader,
	BrandInfo,
	CompanyLogo,
	DownloadContainer,
	GalleryNavContainer,
	HeaderLink,
	HeaderLinkContainer,
	HeaderLinkWrapper,
} from "./GalleryNav.style";

interface Props {
	user: IUser;
	gallery: IGallery;
}
export const GalleryNav: React.FC<Props> = ({ user, gallery }) => {
	// Hooks
	const detailsModal = useModal();
	const downloadModal = useModal();

	// status message state and handlers
	const [status, setStatus] = useState<string | undefined>(undefined);
	const onCopy = (e: SyntheticEvent<SVGSVGElement>) => {
		e.preventDefault();
		// function to copy text
		const copyText = async (text: string) => {
			try {
				await navigator.clipboard.writeText(text);
				setStatus("Link successfully copied!");
			} catch (err) {
				console.error("Failed to copy: ", err);
			}
		};
		const url: string = `https://vowsuite.com/${gallery._id}`;
		copyText(url);
	};

	const downloadVideo = async (video: Partial<IVideo>) => {
		// update downloads count
		if (video._id) await addDownload(video._id);

		// anchor link
		const element: HTMLAnchorElement = document.createElement("a");
		if (video.video) {
			element.href = video.video;
			const fileName: string =
				String(gallery.name) + "_" + video.video.slice(-4);
			element.download = fileName;
		}

		// simulate link click
		document.body.appendChild(element);
		element.click();
	};

	return (
		<GalleryNavContainer>
			<CompanyLogo src={user.companyImg} />

			<BrandInfo>
				<AltHeader>{user.companyName}</AltHeader>
				<AltSubheader onClick={detailsModal.toggle}>
					Learn more <FontAwesomeIcon icon={faChevronDown} />
				</AltSubheader>
			</BrandInfo>

			<HeaderLinkWrapper>
				<HeaderLinkContainer>
					<HeaderLink
						onMouseOver={() => {
							if (!status) setStatus("Download media");
						}}
						onMouseLeave={() => setStatus(undefined)}
						onClick={downloadModal.toggle}
						icon={faCloudDownloadAlt}
					/>

					<HeaderLink
						onMouseOver={() => {
							if (!status) setStatus("Copy share link");
						}}
						onMouseLeave={() => setStatus(undefined)}
						onClick={onCopy}
						icon={faShareAlt}
					/>
				</HeaderLinkContainer>
				{status && <Alert>{status}</Alert>}
			</HeaderLinkWrapper>

			<Dialog
				ref={downloadModal.modalRef}
				onClick={downloadModal.onBackgroundClick}
			>
				<DownloadContainer>
					<AltSubheader>Downloads</AltSubheader>
					<hr />
					{gallery.videos.map((video: Partial<IVideo>) => (
						<InlineButton
							$secondary
							key={video._id}
							onClick={() => downloadVideo(video)}
						>
							<FontAwesomeIcon icon={faCloudDownloadAlt} />
							{" " + video.name}
						</InlineButton>
					))}
				</DownloadContainer>
			</Dialog>

			<Dialog
				ref={detailsModal.modalRef}
				onClick={detailsModal.onBackgroundClick}
			>
				{<BrandDetails user={user} />}
			</Dialog>
		</GalleryNavContainer>
	);
};
