export const firstLitterHelper = (name: string): string | void => {
  if (!name) {
    return;
  }
  return name.split('')[0];
};
