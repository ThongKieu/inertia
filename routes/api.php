<?php

<<<<<<< HEAD
=======
use App\Http\Controllers\Api\DistrictController;
>>>>>>> 0f84b2affe5aaa9db758f9cf20493a6db53fa0fb
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
<<<<<<< HEAD
    Route::apiResource('distrist',Distristsontroller::class);
=======
    Route::apiResource('district',DistrictController::class);
>>>>>>> 0f84b2affe5aaa9db758f9cf20493a6db53fa0fb
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
