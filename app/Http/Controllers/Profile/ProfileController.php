<?php

namespace App\Http\Controllers\Profile;
use App\Http\Controllers\Controller;
use Inertia\Inertia;


class ProfileController extends Controller
{
    public function index($username)    
    {
        $user = [
            'id' => 1,
            'username' => 'khuongledev',
            'name' => 'Khuong Le',  
            'avatar' => 'https://picsum.photos/id/237/200/300',
            'email' => '11lekhuong@gmail.com',
        ];

        return Inertia::render('profile/profile-page', [
            'user' => $user,
        ]);
    }
}   