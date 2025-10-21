<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => '11lekhuong@gmail.com'],
            [
                'name' => 'Khuong',
                'username' => 'khuongledev',
                'password' => Hash::make('123456'),
                'display_name' => 'Khuong',
                'status' => 'active',
                'is_private' => false,
                'bio' => 'This is the administrator account.',
            ]
        );
    }
}
