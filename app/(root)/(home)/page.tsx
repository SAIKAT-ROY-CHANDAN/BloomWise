/* eslint-disable @typescript-eslint/no-explicit-any */
import NewPost from "@/components/NewPost";
import PostCard from "@/components/PostCard";
import TopNavbar from "@/components/shared/TopNavbar";

export default async function Home({ searchParams }: { searchParams: any }) {
  const searchTerm = searchParams.searchTerm || '';
  const category = searchParams.category || '';
  const sort = searchParams.sort || '';

  let query = `searchTerm=${searchTerm}`;
  if (category) {
    query += `&category=${category}`;
  }
  if (sort) {
    query += `&sort=${sort}`;
  }

  // const res = await fetch(`http://localhost:5000/api/post?${query}`, {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LIVE_API_URL}/api/post?${query}`, {
    next: {
      revalidate: 2
    }
  });

  const result = await res.json();
  const posts = result.data || [];

  return (
    <main className="h-screen w-full overflow-y-auto bg-gray-50 hide-scrollbar">
      <div className="p-4">
        <div className="space-y-4">
          <TopNavbar />
          {/* New Post Button */}
          <NewPost />
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
