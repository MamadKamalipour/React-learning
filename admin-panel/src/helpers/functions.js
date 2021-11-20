export const shorten = (title) => {
  const splitedTitle = title.split(" ");
  const newTitle = `${splitedTitle[0]} ${splitedTitle[1]} ${splitedTitle[2]} ${splitedTitle[3]} ${splitedTitle[4]}`;
  return newTitle;
};
export const descShorten = (desc) => {
  const maxstring = 240;

  const newDesk = desc.substr(0, maxstring);
  return newDesk;
};