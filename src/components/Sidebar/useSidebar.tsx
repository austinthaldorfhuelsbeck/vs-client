import { FormEvent, useEffect } from "react";
import { useGallery, useUser } from "../../context/contextProvider";
import useStatus from "../../hooks/useStatus";
import { IApiResponse } from "../../interfaces/api.interface";
import { IGallery } from "../../interfaces/models.interface";
import {
  deleteGallery,
  fetchGalleries,
  fetchGallery,
} from "../../middleware/gallery.api";

const useSidebar = (gallery?: IGallery) => {
  // Context
  const { currentUser, setCurrentUser } = useUser();
  const { currentGallery, setCurrentGallery } = useGallery();

  // Hooks
  const { success, handleSuccess, error, handleError, clearStatus } =
    useStatus();

  // State
  const isSelected = currentGallery?._id === gallery?._id;

  // Handlers
  const onClick = async () => {
    if (gallery?._id) {
      const res = await fetchGallery(gallery?._id);
      if (res.data) setCurrentGallery(res.data);
      else if (res.error) handleError(res.error);
    }
  };
  const onCopy = () => {
    if (gallery) {
      const link = `https://vowsuite.com/galleries/${gallery._id}`;
      navigator.clipboard
        .writeText(link)
        .then(() => handleSuccess("Link successfully copied!"))
        .then(() => clearStatus())
        .catch(console.error);
    }
  };

  const onDelete = async (e: FormEvent) => {
    e.preventDefault();
    if (gallery) {
      try {
        const res: IApiResponse = await deleteGallery(gallery._id);
        if (res.data) setCurrentGallery(undefined);
        else if (res.error) handleError(res.error);
      } catch (error) {
        console.error(error);
      }
    }
  };

  // Load all galleries when the user is authenticated and set the initial gallery
  useEffect(() => {
    const loadGalleries = async (id: string) => {
      try {
        const res: IApiResponse = await fetchGalleries(id);
        if (res.data)
          setCurrentUser((prev) => {
            return prev && { ...prev, galleries: res.data };
          });
        if (!currentGallery && res.data?.[0]) setCurrentGallery(res.data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    if (currentUser?._id) loadGalleries(currentUser._id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser?._id]);

  return {
    setCurrentGallery,
    onClick,
    onCopy,
    onDelete,
    success,
    error,
    isSelected,
  };
};

export default useSidebar;
