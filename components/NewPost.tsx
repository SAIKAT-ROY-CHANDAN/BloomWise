'use client'
import React, { useState } from 'react'
import { FramerModal, ModalContent } from './ui/model'
import { Input } from './ui/input';
import { Button } from './ui/button';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';
import { useCreateNewPostMutation } from '@/redux/api/postApi';
import { ReduxProvider } from './ReduxProvider/ReduxProvider';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface PostFormInputs {
    title: string;
    category: string;
    content: string;
    image: FileList;
}

const NewPost = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const { register, handleSubmit } = useForm<PostFormInputs>();
    const [content, setContent] = useState('');
    const [createNewPost] = useCreateNewPostMutation()

    const onSubmit = (data: PostFormInputs) => {
        const formData = new FormData();

        const postData = {
            title: data.title,
            category: data.category,
            content: content // Content from the rich text editor
        };

        formData.append('data', JSON.stringify(postData));
        formData.append('postImage', data.image[0]);

        const token = localStorage.getItem('token');

        createNewPost({ newPost: formData, token })
            .unwrap()
            .then((response) => {
                console.log('Post created:', response);
            })
            .catch((error) => {
                console.error('Error creating post:', error);
            });
    };

    return (
        <ReduxProvider>
            <div className="text-center">
                <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex w-28 h-10 items-center justify-center rounded-md border-2 bg-teal-600 text-white px-5 font-medium transition-colors focus:outline-none focus:ring-offset-gray-50 text-sm"
                >
                    New Post
                </button>

                <FramerModal open={modalOpen} setOpen={setModalOpen}>
                    <ModalContent>
                        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
                            <h2 className="text-lg font-semibold leading-none tracking-tight mb-2">
                                New Post
                            </h2>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            {/* Title Input */}
                            <div>
                                <Input
                                    {...register('title', { required: true })}
                                    placeholder="Enter title"
                                    className="w-full"
                                />
                            </div>

                            {/* Category Input */}
                            <div>
                                <Input
                                    {...register('category', { required: true })}
                                    placeholder="Enter category"
                                    className="w-full"
                                />
                            </div>

                            {/* Rich Text Editor (Quill) for Content */}
                            <div>
                                <Input
                                    {...register('image')}
                                    placeholder="Enter image"
                                    accept='image/*'
                                    className="w-full"
                                    type='file'
                                />
                            </div>
                            <div>
                                <ReactQuill value={content} onChange={setContent} className="h-48 pb-10" />
                            </div>


                            {/* Submit Button */}
                            <Button type="submit" className="w-full">
                                Submit Post
                            </Button>
                        </form>
                        {/* <div className="mt-4">
                        <button
                            onClick={() => setModalOpen(false)}
                            className="w-full p-3 bg-black dark:bg-white text-white dark:text-black rounded-md"
                            type="button"
                        >
                            Got it, thanks!
                        </button>
                    </div> */}
                    </ModalContent>
                </FramerModal>
            </div>
        </ReduxProvider>
    )
}

export default NewPost