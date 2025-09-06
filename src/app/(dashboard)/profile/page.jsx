import { fetchCardData } from "@/services/data";
import Card from "./_components/Card";

async function Profile() {
  const { numberOfComments, numberOfPosts, numberOfUsers } =
    await fetchCardData();
  // console.log(numberOfComments);
  return (
    <>
      <div className=" grid gap-6 md:grid-cols-3 mb-8">
        <Card title="users" value={numberOfUsers} type="users" />
        <Card title="posts" value={numberOfPosts} type="posts" />
        <Card title="comments" value={numberOfComments} type="comments" />
      </div>
      <h1 className="text-xl  text-secondary-700">dashboard</h1>
    </>
  );
}
export default Profile;
