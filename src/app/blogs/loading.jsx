import Spinner from "@/ui/Spinner";

function Loading() {
  return (
    <div className="grid min-h-screen items-center justify-center gap-x-4">
      <Spinner />
      {/* <span className="text-lg text-secondary-500">loading... </span> */}
    </div>
  );
}
export default Loading;
