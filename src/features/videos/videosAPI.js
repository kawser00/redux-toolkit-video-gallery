import axiosInstance from "../../utils/axios"

export const getVideos = async ({tags, search, author, currentPage, totalItemShow}) => {

  const tagsQuery = tags.length > 0 ? tags.map(tag => `tags_like=${tag}`).join("&") : "";
  const searchQuery = search !== "" ? `&q=${search}` : "";
  const authorQuery = author !== "" ? `&author=${author}` : "";

  const queryString = `${'&'+ tagsQuery}${searchQuery}${authorQuery}`;
  const response = await axiosInstance.get(`/videos?_page=${currentPage}&_limit=${totalItemShow}${queryString}`);

  // const nextPageLink = response.headers.link.split(",")[1].split(";")[0];
  // const PreviousPageLink = response.headers.link.split(",")[2].split(";")[0];
  return {
    videos: response.data,
    total: response.headers["x-total-count"],
    // gotoNextPage: nextPageLink,
    // gotoPrevPage: PreviousPageLink,
  };
}