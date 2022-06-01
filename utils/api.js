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

export const getPrevPageLink = (link, last = 1) => {
  const query = link.replace(API_URL, "").replace(/^\/\?/, "");
  const params = new URLSearchParams(query);
  params.delete("key");
  params.delete("page_size");
  params.delete("search_precise");
  const rawPage = params.get("page");
  if (rawPage && !isNaN(rawPage)) {
    const page = parseInt(rawPage);
    const prevPage = page - 1;
    if (prevPage > last) {
      params.set("page", prevPage);
      return ["/", params.toString()].join("?");
    }
    if (prevPage === last) {
      params.delete("page");
      return params.toString() ? ["/", params.toString()].join("?") : "/";
    }
  }
  return link;
};

export const changeRouteKeepParams = (currentPath, newPath) => {
  const hasQueries = currentPath.indexOf("?");
  const searchQuery = hasQueries >= 0 ? currentPath.substring(hasQueries) : "";
  const params = new URLSearchParams(searchQuery);
  const paramsStr = params.toString() !== "" ? `?${params.toString()}` : "";
  return `${newPath}${paramsStr}`;
};
