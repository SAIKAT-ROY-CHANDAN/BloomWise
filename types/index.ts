export type TUser = {
    username: string,
    email: string;
    password: string;
    phone: string;
    role: 'user' | 'admin';
    address: string;
    profileImage?: string;
    followerCount: number;
    followingCount: number;
    isFollowing: boolean;
}

export type Comment = {
    _id: string;
    post: string;
    commentText: string;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
};

export type TPost = {
    _id: string;
    title: string;
    content: string;
    category: string;
    isPremium: boolean;
    createdBy: string;
    upvotes: number;
    downvotes: number;
    upvotedBy: string
    downvotedBy: string;
    comments: Comment[];
    createdAt: Date;
    updatedAt: Date;
    image: string
};
