<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $posts = [
            [
                'id' => 1,
                'author' => [
                    'id' => 1,
                    'username' => 'andycole',
                    'name' => 'Andy Cole',
                    'avatar' => 'https://i.pravatar.cc/150?img=3'
                ],
                'content' => 'Vừa hoàn thành xong dự án Laravel + React! 🎉 Cảm giác thật tuyệt!',
                'images' => [
                    'https://picsum.photos/seed/1/800/500',
                    'https://picsum.photos/seed/2/800/500',
                    'https://picsum.photos/seed/3/800/500',
                    'https://picsum.photos/seed/1/800/500',
                    'https://picsum.photos/seed/2/800/500',
                    'https://picsum.photos/seed/3/800/500',
                ],
                'likes' => 58,
                'comments' => 14,
                'created_at' => now()->subHours(2)->toDateTimeString(),
            ],
            [
                'id' => 2,
                'author' => [
                    'id' => 2,
                    'username' => 'janedoe',
                    'name' => 'Jane Doe',
                    'avatar' => 'https://i.pravatar.cc/150?img=8'
                ],
                'content' => 'Chia sẻ vài bức ảnh trong chuyến đi Đà Lạt 🌿',
                'images' => [
                    'https://picsum.photos/seed/4/800/500',
                    'https://picsum.photos/seed/5/800/500',
                ],
                'likes' => 91,
                'comments' => 27,
                'created_at' => now()->subDay()->toDateTimeString(),
            ],
            [
                'id' => 3,
                'author' => [
                    'id' => 2,
                    'username' => 'janedoe',
                    'name' => 'Jane Doe',
                    'avatar' => 'https://i.pravatar.cc/150?img=8'
                ],
                'content' => 'Chia sẻ vài bức ảnh trong chuyến đi Đà Lạt 🌿',
                'images' => [
                    'https://picsum.photos/seed/5/800/500',
                ],
                'likes' => 91,
                'comments' => 27,
                'created_at' => now()->subDay()->toDateTimeString(),
            ],
        ];

        return Inertia::render('home', [
            'posts' => $posts,
        ]);
    }
}
