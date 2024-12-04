import { MainLayout } from "@/components/Layouts";

export default function Home() {
  return (
    <MainLayout>
      <div className="grid grid-cols-12 grid-rows-12 gap-y-4 gap-x-8 [&>div]:bg-neutral-700 [&>div]:py-4 [&>div]:px-8">
        <div className="col-span-12 row-span-4">
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2">
            Running Strategies
          </h2>
        </div>

        <div className="col-span-7 row-start-5 row-end-13">
          <h2 className="text-3xl font-bold">Create Now</h2>
        </div>

        <div className="col-start-8 col-end-13 row-start-5 row-end-9">
          <h2 className="text-3xl font-bold">Trading View Chart</h2>
        </div>

        <div className="col-start-8 col-end-13 row-start-9 row-end-13">
          <h2 className="text-3xl font-bold">Chat with AI</h2>
        </div>
      </div>
    </MainLayout>
  );
}
