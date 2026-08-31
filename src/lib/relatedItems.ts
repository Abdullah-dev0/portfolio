interface SluggedItem {
  slug: string;
}

export function getRelatedItems<T extends SluggedItem>(
  items: T[],
  currentSlug: string,
  currentValues: string[],
  getValues: (item: T) => string[],
  limit: number
): T[] {
  const normalizedValues = new Set(
    currentValues.map((value) => value.toLowerCase())
  );

  return items
    .filter((item) => item.slug !== currentSlug)
    .map((item) => ({
      item,
      score: getValues(item).filter((value) =>
        normalizedValues.has(value.toLowerCase())
      ).length,
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ item }) => item);
}
