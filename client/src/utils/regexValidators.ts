//regular expression to validate an email
export const isValidEmail = (email: string) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

//regular expression validates that the string is between n and n characters long
export function isValidText(text: string, min: number, max: number): boolean {
  const regex = new RegExp(`^.{${min},${max}}$`);
  return regex.test(text);
}
