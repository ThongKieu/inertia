<?php

namespace App\Http\Controllers\Api\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PushOnlineController extends Controller
{
    public function __invoke()
    {
        
    }
    public function updateOnline(Request $re)
    {
        // echo '1111111111111111111111111111111111111111';
        DB::table('users')->where('id','=',$re->id)->update(['is_online'=> 1]);
        return 1;
    }
}
