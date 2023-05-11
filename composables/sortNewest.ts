export const sortNewest = (data: { date: string }[]): { date: string }[] => {
  return data.sort(
    (a: { date: string }, b: { date: string }) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};
