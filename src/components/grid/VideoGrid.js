import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../features/videos/videosSlice';
import Loading from '../ui/Loading';
import VideoGridItem from './VideoGridItem';

const VideoGrid = () => {
  const dispatch = useDispatch();
  const {videos, isLoading, isError, error} = useSelector(state => state.videos); 

  const {tags, search, author} = useSelector(state => state.filter);
  const {currentPage, totalItemShow} = useSelector(state => state.pagination);

  useEffect(() => {
    dispatch(fetchVideos({ tags, search, author, currentPage, totalItemShow }));
  }, [dispatch, tags, search, author, currentPage, totalItemShow]);

  let content;

  if (isLoading) {
    content =<Loading />;
  }

  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }

  if (!isLoading && !isError && videos?.length === 0) {
    content = <h3 className="col-span-12 flex justify-center text-xl font-bold text-rose-500">No videos found!</h3>;
  }

  if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map(video => (
      <VideoGridItem key={video.id} video={video} />
    ));
  }

  return (
    <section className="pt-12">
      <section>
        <div
          className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
        >
          {content}
        </div>
      </section>
    </section>
  );
};

export default VideoGrid;