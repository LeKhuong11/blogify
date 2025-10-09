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
                'created_at' => now()->subHours(2)->toDateTimeString(),
                'comments' => [
                    [
                        'id' => 1,
                        'user' => [
                            'id' => 2,
                            'name' => 'Jane Doe',
                            'avatar' => 'https://i.pravatar.cc/150?img=8',
                        ],
                        'text' => 'Chúc mừng nhé! Dự án này nhìn chuyên nghiệp quá 👏',
                        'created_at' => now()->subHour()->toDateTimeString(),
                        'replies' => [
                            [
                                'id' => 11,
                                'user' => [
                                    'id' => 1,
                                    'name' => 'Andy Cole',
                                    'avatar' => 'https://i.pravatar.cc/150?img=3',
                                ],
                                'text' => 'Cảm ơn bạn nhiều nha 💪',
                                'created_at' => now()->subMinutes(40)->toDateTimeString(),
                            ],
                        ],
                    ],
                    [
                        'id' => 2,
                        'user' => [
                            'id' => 3,
                            'name' => 'Michael Nguyen',
                            'avatar' => 'https://i.pravatar.cc/150?img=12',
                        ],
                        'text' => 'Mình cũng vừa học xong Laravel, có thể học hỏi thêm từ bạn không?',
                        'created_at' => now()->subMinutes(20)->toDateTimeString(),
                        'replies' => [],
                    ],
                ],
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
                'created_at' => now()->subDay()->toDateTimeString(),
                'comments' => [
                    [
                        'id' => 3,
                        'user' => [
                            'id' => 4,
                            'name' => 'Minh Anh',
                            'avatar' => 'https://i.pravatar.cc/150?img=9',
                        ],
                        'text' => 'Ảnh đẹp quá, nhìn chill ghê 💚',
                        'created_at' => now()->subHours(6)->toDateTimeString(),
                        'replies' => [],
                    ],
                ],
            ],
        ];

        return Inertia::render('home', [
            'posts' => $posts,
        ]);
    }
}
