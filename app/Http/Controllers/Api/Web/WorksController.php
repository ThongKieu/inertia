<?php

namespace App\Http\Controllers\Api\Web;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreWorkRequest;
use App\Models\Work;
use Illuminate\Http\Request;

class WorksController extends Controller
{
    //
    public function index ()
    {
       
        return response()->json( Work::all());
    }
    public function store (StoreWorkRequest $request)
    {
        Work::create($request->validated());
      
        return response()->json('This is your work2s');
    }

    public function update(StoreWorkRequest $request, Work $work )
    {
        // dd($request);
        $work->update($request->validated());
        return response()->json('Update Work done');

    }
}
