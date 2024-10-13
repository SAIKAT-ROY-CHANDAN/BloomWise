'use client'
import React, { useState } from 'react';
import { FramerModal, ModalContent } from './ui/model';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useForm } from 'react-hook-form';
import { FilePenLine } from 'lucide-react';
import { useEditProfileMutation } from '@/redux/api/authApi'; // Redux API
import { useAppDispatch, useAppSelector } from '@/redux/hooks'; // Redux Hooks
import { setUser } from '@/redux/slices/authSlice';
import { TUser } from '@/types';


interface UserFormInputs {
    username: string;
    email: string;
    phone: string;
    address: string;
    profileImage?: FileList;
}

const EditProfile = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const { user, token } = useAppSelector((state) => state.auth);
    const [editProfile, { isLoading }] = useEditProfileMutation();
    const dispatch = useAppDispatch();

    const { register, handleSubmit, reset } = useForm<UserFormInputs>({
        defaultValues: {
            username: user?.username || '',
            email: user?.email || '',
            phone: user?.phone || '',
            address: user?.address || '',
        },
    });

    const onModalOpen = () => {
        reset({
            username: user?.username,
            email: user?.email,
            phone: user?.phone,
            address: user?.address,
        });
        setModalOpen(true);
    };

    const onSubmit = async (data: UserFormInputs) => {
        const formData = new FormData();

        const profileData = {
            username: data.username,
            email: data.email,
            phone: data.phone,
            address: data.address,
        };

        formData.append('data', JSON.stringify(profileData));

        if (data.profileImage && data.profileImage.length > 0) {
            formData.append('profileImage', data.profileImage[0]);
        }

        try {
            const res = await editProfile({ formData, token, userId: user?._id }).unwrap();

            if (res.success) {
                const updatedUser: TUser = {
                    _id: res.data._id,
                    username: res.data.username,
                    email: res.data.email,
                    phone: res.data.phone,
                    address: res.data.address,
                    profileImage: res.data.profileImage,
                    role: res.data.role,
                    followerCount: res.data.followerCount,
                    followingCount: res.data.followingCount,
                    isFollowing: res.data.isFollowing,
                };

                // Dispatch the updated user
                dispatch(setUser({ user: updatedUser, token: token! }));
                setModalOpen(false);
            } else {
                console.error('Error: ', res.message);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <div className="text-center">
            <div onClick={onModalOpen}>
                <FilePenLine strokeWidth={1} />
            </div>

            <FramerModal open={modalOpen} setOpen={setModalOpen}>
                <ModalContent>
                    <div className="flex flex-col space-y-1.5 mb-2 text-center sm:text-left">
                        <h2 className="text-lg font-semibold leading-none tracking-tight mb-2">
                            Edit Profile
                        </h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        {/* Username Input */}
                        <div>
                            <Input
                                {...register('username', { required: true })}
                                placeholder="Enter username"
                                className="w-full"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <Input
                                {...register('email', { required: true })}
                                type="email"
                                placeholder="Enter email"
                                className="w-full"
                            />
                        </div>

                        {/* Phone Input */}
                        <div>
                            <Input
                                {...register('phone', { required: true })}
                                type="tel"
                                placeholder="Enter phone number"
                                className="w-full"
                            />
                        </div>

                        {/* Address Input */}
                        <div>
                            <Input
                                {...register('address', { required: true })}
                                placeholder="Enter address"
                                className="w-full"
                            />
                        </div>

                        {/* Profile Image Input */}
                        <div>
                            <Input
                                {...register('profileImage')}
                                type="file"
                                accept="image/*"
                                className="w-full"
                            />
                        </div>

                        {/* Submit Button */}
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? 'Updating...' : 'Update Profile'}
                        </Button>
                    </form>
                </ModalContent>
            </FramerModal>
        </div>

    );
};

export default EditProfile;
