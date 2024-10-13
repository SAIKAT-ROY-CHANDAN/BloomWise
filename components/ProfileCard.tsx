'use client'
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { FilePenLine } from "lucide-react";

export default function ProfileCard() {
  const user = useAppSelector((state) => state.auth.user)

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <div className="grid grid-cols-4 items-center bg-white p-8 rounded-2xl">
        {/* User Info Section */}
        <div className="flex items-center gap-10 col-span-1">
          <div className="group relative">
            <Image
              width={110}
              height={110}
              className="h-[110px] w-[110px] rounded-full bg-slate-500 object-cover"
              src={user?.profileImage as string}
              alt="card navigate ui"
            />

            {/* Optional: You can keep the SVG icon here or adjust its position */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute bottom-3 right-0 size-6 bg-green-600 text-white rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
          </div>
          <div className="space-y-1 text-center">
            <h1 className="text-2xl text-gray-700 dark:text-white/90 capitalize">{user?.username}</h1>
            <p className="text-sm text-gray-400">UI/UX Designer</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-between col-span-2 py-2 rounded-xl">
          <div className="text-center flex-1">
            <p className="text-gray-500 dark:text-white/70">Posts</p>
            <p className="font-mono text-xl text-gray-700 dark:text-white/50">11</p>
          </div>
          <div className="text-center flex-1">
            <p className="text-gray-500 dark:text-white/70">Following</p>
            <p className="font-mono text-xl text-gray-700 dark:text-white/50">{user?.followingCount}</p>
          </div>
          <div className="text-center flex-1">
            <p className="text-gray-500 dark:text-white/70">Followers</p>
            <p className="font-mono text-xl text-gray-700 dark:text-white/50">{user?.followerCount}</p>
          </div>
        </div>

        {/* Icon Section */}
        <button className="flex items-center justify-center col-span-1">
          <FilePenLine strokeWidth={1} />
        </button>
      </div>
    </div>

  );
}
