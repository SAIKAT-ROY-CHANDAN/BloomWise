export const removePTags = (html: string) => {
    return html.replace(/<p>(.*?)<\/p>/g, '$1').replace(/<\/?[^>]+(>|$)/g, ""); // Removes all HTML tags
};