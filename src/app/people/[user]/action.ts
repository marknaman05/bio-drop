"use server";
export async function getUserData(username: string) {
  return import(`@/data/${username}.json`).then((res) => res.default);
}
