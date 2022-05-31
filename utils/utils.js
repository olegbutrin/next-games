export const rawToGamesInfo = (data) => {
  return {
    count: data.count,
    next: data.next.replace(/key\=[^\&]+\&*/, ""),
    previous: data.previous,
    results: data.results.map((game) => {
      return {
        slug: game.slug,
        name: game.name,
        platforms: game.platforms,
        released: game.released,
        background_image: game.background_image,
        rating: game.rating,
        short_screenshots: game.short_screenshots,
      };
    }),
  };
};
