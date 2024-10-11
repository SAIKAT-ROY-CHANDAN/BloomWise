import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <main className="h-screen w-full overflow-y-auto bg-gray-50 hide-scrollbar">
      <div className="p-4">
        <div className="space-y-4">
          {Array.from({ length: 20 }, (_, i) => (
            <PostCard key={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
