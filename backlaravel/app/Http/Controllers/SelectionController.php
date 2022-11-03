<?php

namespace App\Http\Controllers;

use App\Models\Selection;
use Illuminate\Http\Request;

class SelectionController extends Controller
{
    //afficher les selections
    public function index(){
        $selection =  Selection::with('casting', 'candidat')->get();
        return response()->json($selection, 200);
    }

    //création d'un  selection
    public function store(Request $request , $id){
        $selection = new Selection();
        $selection->candidat_id = $id;
        $selection->casting_id = $request->casting_id;
        $selection->note = $request->note;
        $selection->save();
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }

      public function updateNote(Request $request, $id){
        $data['note'] = $request['note'];
        Selection::find($id)->update($data);
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

      public function updateCandidat($id){
        Selection::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
}
