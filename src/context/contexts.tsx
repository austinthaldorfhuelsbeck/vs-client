import {
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useContext,
} from "react";
import { IGallery, IUser, IVideo } from "../interfaces/models.interface";

// Generic context creator
function createContextProvider<T>(
	defaultValue: T,
	contextName: string,
): {
	Context: React.Context<T>;
	useContextProvider: () => T;
	ContextProvider: React.FC<PropsWithChildren<{ value: T }>>;
} {
	const Context = createContext<T>(defaultValue);

	const useContextProvider = () => {
		const contextValue = useContext(Context);
		if (contextValue === undefined) {
			throw new Error(
				`use${contextName} must be used with a ${contextName}`,
			);
		}
		return contextValue;
	};

	const ContextProvider: React.FC<PropsWithChildren<{ value: T }>> = ({
		children,
		value,
	}) => {
		return <Context.Provider value={value}>{children}</Context.Provider>;
	};

	return { Context, useContextProvider, ContextProvider };
}

// User context
interface IUserContext {
	currentUser: IUser | undefined;
	setCurrentUser: Dispatch<SetStateAction<IUser | undefined>>;
}

const { Context: UserContext, useContextProvider: useUserContext } =
	createContextProvider<IUserContext>(
		{ currentUser: undefined, setCurrentUser: () => {} },
		"UserContext",
	);

// Gallery context
interface IGalleryContext {
	currentGallery: IGallery | undefined;
	setCurrentGallery: Dispatch<SetStateAction<IGallery | undefined>>;
}

const { Context: GalleryContext, useContextProvider: useGalleryContext } =
	createContextProvider<IGalleryContext>(
		{ currentGallery: undefined, setCurrentGallery: () => {} },
		"GalleryContext",
	);

// Video context
interface IVideoContext {
	currentVideo: IVideo | undefined;
	setCurrentVideo: Dispatch<SetStateAction<IVideo | undefined>>;
}

const { Context: VideoContext, useContextProvider: useVideoContext } =
	createContextProvider<IVideoContext>(
		{ currentVideo: undefined, setCurrentVideo: () => {} },
		"VideoContext",
	);

export {
	GalleryContext,
	UserContext,
	VideoContext,
	useGalleryContext,
	useUserContext,
	useVideoContext,
};
