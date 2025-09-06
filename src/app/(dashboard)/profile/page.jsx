import PostsTable from "./posts/_/components/PostsTable";
import Spinner from "@/ui/Spinner";
import { Suspense } from "react";
import CardsWrapper from "./posts/_/components/CardsWrapper";

async function Profile() {
  return (
    <>
      <h1 className="text-xl mb-3 text-secondary-700">Dashboard</h1>
      <Suspense fallback={<Spinner />}>
        <CardsWrapper />
      </Suspense>
      <h1 className="text-xl  text-secondary-700 my-3">Latest Post</h1>
      <Suspense fallback={<Spinner />}>
        <PostsTable query="sort=latest&limit=5" />
      </Suspense>
    </>
  );
}
export default Profile;
