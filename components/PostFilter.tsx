import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const PostFilter = () => {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a filter" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Content Filters</SelectLabel>
                    <SelectItem value="newest-arrivals">Popular</SelectItem>
                    <SelectItem value="recent-posts">Recent Posts</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>

    )
}

export default PostFilter