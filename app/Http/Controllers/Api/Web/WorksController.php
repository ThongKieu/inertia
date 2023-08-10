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
        dd($request->all());
        Work::create($request->validated());
        $id = Work::where('phone_number','=',$request->phone_number)->where('work_content','=',$request->work_content)->value('id');
        $files = [];
        
        if($request->hasfile('image_work_path'))
		{
        dd($request->file('image_work_path'));
			foreach($request->file('image_work_path') as $file)
			{
			    $name = time().rand(1,100).'.'.$request->file('image_work_path')->extension();
                $path = $request->file('image_work_path')->move('assets/images/work', $name);  
			    $files[] = $name;  
            }
			Work::where('id','=',$id)->update(['image_work_path'=>$path]);

            return response()->json('Add image Done');
		}
        return response()->json('Create Work Done');
       
    }

    public function update(StoreWorkRequest $request, Work $work )
    {
        // dd($request);
        $work->update($request->validated());
        return response()->json('Update Work done');

    }
    public static function upload($file)
    {
        if ($file->hasFile('image')) {
            $image = $file->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('uploads'), $imageName);

            return response()->json(['message' => 'Image uploaded successfully']);
        }

        return response()->json(['message' => 'No image uploaded'], 400);
    }
}