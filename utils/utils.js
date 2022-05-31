export const rawToGamesInfo = (data) => {
  return {
    count: data.count || 0,
    next: data.next ? data.next.replace(/key\=[^\&]+\&*/, "") : null,
    previous: data.previous || null,
    results: data.results?.map((game) => {
      return {
        slug: game.slug || "",
        name: game.name || "",
        platforms: game.platforms || [],
        released: game.released || "",
        background_image: game.background_image || "",
        rating: game.rating || "",
        short_screenshots: game.short_screenshots || [],
      };
    }) || [],
  };
};

export const rawToSingleGameInfo = (data) => {
  return {
    slug: data.slug || null,
    name: data.name || null,
    platforms: data.platforms || null,
    released: data.released || null,
    background_image: data.background_image || null,
    rating: data.rating || null,
    short_screenshots: data.short_screenshots || null,
    description: data.description || null,
  };
}

export const capFL = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
