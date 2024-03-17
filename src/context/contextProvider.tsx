// contextProvider.tsx
import React, {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from "react";
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
  // State declarations
  const [currentUser, setCurrentUser] = useState<IUser | undefined>();
  const [currentGallery, setCurrentGallery] = useState<IGallery | undefined>();
  const [currentVideo, setCurrentVideo] = useState<IVideo | undefined>();

  useEffect(() => {
    const loadUser = async () => {
      const user = await fetchUser("test@test.co");
      console.log("loading user", user.data);
      if (user.data) setCurrentUser(user.data);
    };
    if (!currentUser) loadUser();
  }, [currentUser]);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <GalleryContext.Provider value={{ currentGallery, setCurrentGallery }}>
        <VideoContext.Provider value={{ currentVideo, setCurrentVideo }}>
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
