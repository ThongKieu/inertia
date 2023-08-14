<?php

use App\Http\Controllers\Api\Web\WorksController;
use App\Http\Controllers\Api\Web\WorkersController;
use App\Http\Controllers\Api\Web\DististsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::prefix('web')->group(function () {
    Route::apiResource('works',WorksController::class);
    Route::apiResource('workers',WorkersController::class);
    Route::apiResource('distrist',Distristsontroller::class);
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
