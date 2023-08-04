<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('workers', function (Blueprint $table) {
            $table->id();
            $table->string('worker_Firstname')->nullable();
            $table->string('worker_name')->nullable();
            $table->string('sort_name');
            $table->string('add_woker', 500)->nullable();
            $table->string('phone_ct');
            $table->string('phone_cn')->nullable();
            $table->string('folder_path')->nullable();
            $table -> tinyInteger('kind_worker')->default(0)->comment('0: điện nước; 1 điện lạnh; 2: xây dựng; 3 đồ gỗ; 4: cơ khí; 5: Tài Xế; 6: Khác');
            $table -> tinyInteger('has_work')->default(0);
            $table -> tinyInteger('status_worker')->default(0)->comment('0: Đang làm; 1: Nghỉ Phép; 2: Nghỉ luôn ');
            $table-> tinyInteger('check_acc')->default('0');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('workers');
    }
};
