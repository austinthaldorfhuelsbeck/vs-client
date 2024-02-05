// VideoList.tsx
import React from "react";
import Card from "../../components/Card";
import { IVideo } from "../../interfaces/models.interface";

interface VideoListProps {
	videos: (Partial<IVideo> | undefined)[];
}

const VideoList: React.FC<VideoListProps> = ({ videos }) => (
	<ul>
		{videos
			.filter((video) => !!video)
			.map(
				(video) =>
					video && <Card key={video?._id} video={video as IVideo} />,
			)}
	</ul>
);

export default VideoList;