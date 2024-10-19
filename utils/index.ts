export const removePTags = (html: string) => {
    return html.replace(/<p>(.*?)<\/p>/g, '$1').replace(/<\/?[^>]+(>|$)/g, ""); // Removes all HTML tags
}

export const getTimeAgo = (dateString: string): string => {
    const now = new Date();
    const createdAt = new Date(dateString);
    const seconds = Math.floor((now.getTime() - createdAt.getTime()) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    if (seconds < 60) return `${seconds} seconds ago`;
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    if (days < 7) return `${days} days ago`;
    return `${weeks} weeks ago`;
};
;