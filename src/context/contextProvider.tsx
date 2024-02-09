// contextProvider.tsx
import React, {
	PropsWithChildren,
	ReactNode,
	useEffect,
	useState,
} from "react";
import { useCookies } from "react-cookie";
import { IGallery, IUser, IVideo } from "../interfaces/models.interface";
import { fetchUser } from "../middleware/user.api";
import {
	GalleryContext,
	UserContext,
	VideoContext,
	useGalleryContext,
	useUserContext,
	useVideoContext,
} from "./contexts";

// Load user and build provider
interface ComponentProps {
	children: ReactNode;
}

const ContextProvider: React.FC<PropsWithChildren<ComponentProps>> = ({
	children,
}) => {
	// cookie handling
	const [cookies, setCookie] = useCookies(["user"]);

	// State declarations
	const [currentUser, setCurrentUser] = useState<IUser | undefined>();
	const [currentGallery, setCurrentGallery] = useState<
		IGallery | undefined
	>();
	const [currentVideo, setCurrentVideo] = useState<IVideo | undefined>();

	useEffect(() => {
		const load = async (id: string) => {
			const res = await fetchUser(id);
			console.log("Res: ", res)
			if (res.data) {
				setCurrentUser(res.data);
			} else if (res.error) {
				setCurrentUser(undefined);
			}
		};

		if (currentUser && cookies["user"] === "undefined") {
			setCookie("user", currentUser._id, { path: "/" });
		} else if (!currentUser && cookies["user"] !== "undefined") {
			load(cookies["user"]);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<UserContext.Provider value={{ currentUser, setCurrentUser }}>
			<GalleryContext.Provider
				value={{ currentGallery, setCurrentGallery }}
			>
				<VideoContext.Provider
					value={{ currentVideo, setCurrentVideo }}
				>
					{children}
				</VideoContext.Provider>
			</GalleryContext.Provider>
		</UserContext.Provider>
	);
};

// Custom hooks for contexts
export const useUser = () => useUserContext();
export const useGallery = () => useGalleryContext();
export const useVideo = () => useVideoContext();
export default ContextProvider;
