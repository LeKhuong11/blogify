<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable
{
    use HasFactory, Notifiable, SoftDeletes;

    protected $fillable = [
        'name',
        'username',
        'email',
        'password',
        'display_name',
        'bio',
        'avatar',
        'cover',
        'location',
        'birthday',
        'preferences',
        'is_private',
        'status',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];


    protected $casts = [
        'preferences' => 'array',
        'is_private' => 'boolean',
        'birthday' => 'date',
    ];

    public function posts()
    {
        return $this->hasMany(Post::class);
    }


    public function followers()
    {
        return $this->belongsToMany(
            User::class,
            'follows',
            'followed_id',
            'follower_id'
        )->withTimestamps();
    }


    public function following()
    {
        return $this->belongsToMany(
            User::class,
            'follows',
            'follower_id',
            'followed_id'
        )->withTimestamps();
    }

    /**
     * Trả về URL ảnh đại diện.
     */
    public function getAvatarUrlAttribute()
    {
        if ($this->avatar && !str_starts_with($this->avatar, 'http')) {
            return asset('storage/' . $this->avatar);
        }
        return $this->avatar ?? asset('images/default-avatar.png');
    }

    /**
     * Trả về URL ảnh bìa.
     */
    public function getCoverUrlAttribute()
    {
        if ($this->cover && !str_starts_with($this->cover, 'http')) {
            return asset('storage/' . $this->cover);
        }
        return $this->cover ?? asset('images/default-cover.jpg');
    }
}
