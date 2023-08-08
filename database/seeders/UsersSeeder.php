<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
      User::factory()->create([
                'name' => 'Trần Mạnh',
                'email' => 'tranmanh@thoviet.com.vn',
                'password' => Hash::make('Thoviet58568!@#')
            ],);
            User::factory()->create([
                'name' => 'Tùng Phan',
                'email' => 'tung@thoviet.com.vn',
                'password' => Hash::make('Thoviet58568!@#')
            ],);
            User::factory()->create([
                'name' => 'Thống Kiều',
                'email' => 'thong@thoviet.com.vn',
                'password' => Hash::make('Thoviet58568!@#')
            ],);
    }
}
