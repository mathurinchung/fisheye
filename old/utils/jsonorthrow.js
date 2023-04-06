export const jsonOrThrowIfError = async response => {
  if(!response.ok) throw new Error((await response.json()).message);
  return response.json();
};