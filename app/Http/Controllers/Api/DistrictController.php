<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\District;
use Illuminate\Http\Request;

class DistristController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
<<<<<<< HEAD:app/Http/Controllers/Api/DistristController.php
        $data = Distrists::all();
        dd($data);
        return response()->json($data);

=======
        $data = District::all();
        return response()->json($data);
>>>>>>> 850bc64b30b364d2cd82ba2fc01fecd8caa01e15:app/Http/Controllers/Api/DistrictController.php
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $vadilate = $request->validate([
            'dis_name'=>'required|max:200', 'dis_sort_name'=>'required|max 50'
        ]);
        $ne = new District([
            'dis_name'=>$request->dis_name, 'dis_sort_name'=>$request->dis_sort_name
        ]);
        $ne ->save();
        if($ne)
        {
            return response()->json('Add new Distrist done');
        }
        else
            return response()->json(' Add distrist failse');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        District::where('id','=',$id)->update(['dis_name'=>$request->dis_name,'dis_sort_name'=>$request->dis_sort_name]);
        return response()->json('Update Distrist Done');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
