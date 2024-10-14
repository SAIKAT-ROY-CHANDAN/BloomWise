import imageCompression from 'browser-image-compression';

export const compressImage = async (imageFile: File): Promise<File> => {
    const options = {
        maxSizeMB: 1, // Maximum file size in MB
        maxWidthOrHeight: 1920, // Resize to a max width or height of 1920px
        useWebWorker: true, // Enable web worker for performance
    };

    try {
        const compressedImage = await imageCompression(imageFile, options);
        return compressedImage;
    } catch (error) {
        console.error('Error compressing the image:', error);
        throw error;
    }
};
