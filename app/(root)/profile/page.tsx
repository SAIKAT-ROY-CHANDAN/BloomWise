import ProfileCard from "@/components/ProfileCard"
import ProfilePosts from "@/components/ProfilePosts"

const ProfilePage = () => {
  return (
    <div className="w-full">
      <ProfileCard />
      <ProfilePosts />
    </div>
  )
}

export default ProfilePage