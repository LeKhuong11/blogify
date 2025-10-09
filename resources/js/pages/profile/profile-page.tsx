import React from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';

interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  joinedAt: string;
  avatarUrl?: string;
}

interface ProfilePageProps {
  user: User;
}

export default function ProfilePage({ user }: ProfilePageProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
        {/* Header section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6">
          <img
            src={user.avatar || '/default-avatar.png'}
            alt={user.name}
            className="w-32 h-32 rounded-full border-4 border-gray-200 dark:border-gray-700 object-cover"
          />
          <div className="text-center sm:text-left mt-4 sm:mt-0 flex-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
            <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
            <p className="mt-2 text-sm text-gray-400">Joined {user.joinedAt}</p>
          </div>
          <button className="mt-4 sm:mt-0 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            <PencilIcon className="h-5 w-5" />
            Edit Profile
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>

        {/* About section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">About Me</h3>
          <p className="text-gray-700 dark:text-gray-300">
            {user.bio || 'No bio yet.'}
          </p>
        </div>
      </div>
    </div>
  );
}
