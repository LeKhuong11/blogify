<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Profile\ProfileController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::group(['prefix' => 'profile'], function () {
    Route::get('/{username}', [ProfileController::class, 'index'])->name('profile');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
