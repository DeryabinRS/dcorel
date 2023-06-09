<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'firstname' => 'Admin',
            'lastname' => 'Dcore',
            'email' => 'admin@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make('Vi5gaibe'),
        ])->assignRole('admin');

        User::create([
            'firstname' => 'User',
            'lastname' => 'Dcore',
            'email' => 'user@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make('Vi5gaibe'),
        ])->assignRole('user');
    }
}
