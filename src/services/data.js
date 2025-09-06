import setCookieOnReq from "@/utile/setCookieOnReq";
import { cookies } from "next/headers";
import { getAllUsersApi } from "./authservice";
import { getAllCommentsApi } from "./commentService";
import { getPosts } from "./postServices";

export async function fetchCardData() {
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);

  // ARTIFICIALLY DELAY A REPONSE FOR DEMO PURPOSES
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // console.log(getAllUsersApi(options), "hiiii");
  try {
    const data = await Promise.all([
      getAllUsersApi(options),
      getAllCommentsApi(options),
      getPosts(),
    ]);
    console.log(data[2].length, "helllloooooooo");

    const numberOfUsers = Number(data[0].users.length ?? "0");
    const numberOfPosts = Number(data[2].length ?? "0");
    const numberOfComments = Number(data[1].commentsCount ?? "0");

    return {
      numberOfComments,
      numberOfPosts,
      numberOfUsers,
    };
  } catch (error) {
    console.log(error, "er");
    throw new Error("Error loading data");
  }
}

export async function fetchLatestPosts() {
  try {
    const posts = await getPosts("sort=latest&limit=5");
    return posts;
  } catch (error) {
    throw new Error(error?.reponse?.data?.message);
  }
}
