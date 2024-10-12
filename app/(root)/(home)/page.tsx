/* eslint-disable @typescript-eslint/no-explicit-any */
import PostCard from "@/components/PostCard";

export default async function Home() {
  const res = await fetch('http://localhost:5000/api/post', {
    next: { revalidate: 60 }
  });
  const result = await res.json();

  const posts = result.data || [];
  console.log("Fetched Data:", res);
  
  return (
    <main className="h-screen w-full overflow-y-auto bg-gray-50 hide-scrollbar">
      <div className="p-4">
        <div className="space-y-4">
          {Array.isArray(posts) && posts.length > 0 ? (
            posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>
      </div>
    </main>
  );
}
