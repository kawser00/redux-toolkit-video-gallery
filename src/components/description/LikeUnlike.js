import React from 'react';
import { useDispatch } from 'react-redux';
import LikeImage from '../../assets/like.svg';
import unlikeImage from '../../assets/unlike.svg';
import { updateLikes, updateUnlikes } from '../../features/likeUnlike/updateLikeUnlikeAPI';

const LikeUnlike = ({ likes, unlikes, videoId }) => {
  const dispatch = useDispatch();
  const [totalLikes, setTotalLikes] = React.useState(likes);
  const [totalUnlikes, setTotalUnlikes] = React.useState(unlikes);

  const handleLikes = async (videoId, likes) => {
    const response = await dispatch(updateLikes(videoId, likes));
    setTotalLikes(response.payload.likes);
  }

  const handleUnlikes = async (videoId, unlikes) => {
    const response = await dispatch(updateUnlikes(videoId, unlikes));
    setTotalUnlikes(response.payload.unlikes);
  }

  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div
          className="shrink-0"
          onClick={() => handleLikes({ videoId: videoId, likes: totalLikes + 1 })}
        >
          <img
            className="w-5 block cursor-pointer"
            src={LikeImage}
            alt="Like"
          />
        </div>
        <div
          className="text-sm leading-[1.7142857] text-slate-600"
        >
          {totalLikes}
        </div>
      </div>
      <div className="flex gap-1">
        <div
          className="shrink-0"
          onClick={() => handleUnlikes({ videoId: videoId, unlikes: totalUnlikes + 1 })}
        >
          <img
            className="w-5 block cursor-pointer"
            src={unlikeImage}
            alt="Unlike"
          />
        </div>
        <div
          className="text-sm leading-[1.7142857] text-slate-600"
        >
          {totalUnlikes}
        </div>
      </div>
    </div>
  );
};

export default LikeUnlike;