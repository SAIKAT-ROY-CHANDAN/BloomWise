'use client'
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { BadgeVerified } from "@/svgs";
import EditProfile from "./EditProfile";

export default function ProfileCard() {
  const user = useAppSelector((state) => state.auth.user)

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <div className="flex gap-x-12 justify-around items-center bg-white p-8 rounded-2xl">
        {/* User Info Section */}
        <div className="flex items-center gap-10 col-span-2">
          <div className="group relative">
            <Image
              width={110}
              height={110}
              className="h-[110px] w-[110px] rounded-full bg-slate-500 object-cover"
              src={user?.profileImage as string}
              alt="card navigate ui"
            />

            {/* Optional: You can keep the SVG icon here or adjust its position */}
            <div className="absolute bottom-3 right-0 size-6 bg-green-600 text-white rounded-full">
              <BadgeVerified />
            </div>
          </div>
        </div>
          <div className="space-y-1 text-center">
            <h1 className="text-2xl text-gray-700 dark:text-white/90 capitalize">{user?.username}</h1>
            <h1 className="text-sm text-gray-400">{user?.email}</h1>
            <h1 className="text-sm text-gray-400">{user?.address}</h1>
            <h1 className="text-sm text-gray-400">{user?.phone}</h1>
          </div>

        {/* Stats Section */}
        <div className="flex gap-x-4 py-2 flex-1 rounded-xl">
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
          <EditProfile />
        </button>
      </div>
    </div>

  );
}
