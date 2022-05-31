export const API_URL = "https://api.rawg.io/api/games";
export const PAGE_SIZE = 30;

export const clearPageLink = (link) => {
  const query = link.replace(API_URL, "");
  const params = new URLSearchParams(query);
  params.delete("key");
  params.delete("page_size");
  params.delete("search_precise");
  return params.toString() ? ["/", params.toString()].join("?") : "/";
};
