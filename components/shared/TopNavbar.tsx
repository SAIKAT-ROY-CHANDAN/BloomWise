import { InputFocusAnimation } from "../input-focus-animation"
import PostFilter from "../PostFilter"
import { Button } from "../ui/button"


const TopNavbar = () => {
    return (
        <div className="w-full border-b p-8 bg-white">
            <div className="flex gap-4 w-[60%] items-center justify-center mx-auto">
                <div className="w-full flex gap-x-3 items-center">
                    <InputFocusAnimation
                        label="Search"
                        type="text"
                        name="text"
                        autoComplete="text"
                    />
                    <Button className="bg-teal-600 hover:bg-teal-500 h-10">Search</Button>
                </div>
                <PostFilter />
            </div>
        </div>
    )
}

export default TopNavbar