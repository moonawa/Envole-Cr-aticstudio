<?php

namespace App\Http\Controllers;

use App\Models\Casting;
use App\Models\Selection;
use Illuminate\Http\Request;

class SelectionController extends Controller
{
    //afficher les selections
    public function index(){
        $selection =  Selection::with('casting', 'candidat')->get();
        //$selection =  Selection::all();

        return response()->json($selection, 200);
    }
   


    //création d'un  selection
    public function store(Request $request ){
        $selection = new Selection();
        $selection->candidat_id = $request->candidat_id;
        $selection->casting_id = $request->casting_id;
        $selection->note = $request->note;
        $selection->save();
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
    
      public function get($id, Request $request){


        $data = Selection::with('casting', 'candidat')->find($id);
  
        return response()->json($data, 200);
      }

      public function update($id, Request $request){
        
        // $data['note'] = $request['note'];
        // $data['candidat_id'] = $request['candidat_id'];
        // $data['casting_id'] = $request['casting_id'];
        
        // Selection::find($id)->update($data);
        // return response()->json([
        //     'message' => "Successfully updated",
        //     'success' => true
        // ], 200);

        $selection = Selection::find($id);
        $selection->note = $request->note;
        $selection->candidat_id = $request->candidat_id;
        $selection->casting_id = $request->casting_id;
        $selection->save();
        return response()->json([
          'message' => "Successfully updated",
          'success' => true
      ], 200);
      }
    //   public function updateCandidat(Request $request,$id){
    //     $data['candidat_id'] = null;
    //     Selection::find($id)->update($data);
    //     return response()->json([
    //         'message' => "Successfully updated",
    //         'success' => true
    //     ], 200);
    //   }
    


      public function supCandidat($id){
        Selection::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
}
