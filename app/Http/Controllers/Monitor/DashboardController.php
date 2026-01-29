<?php

namespace App\Http\Controllers\Monitor;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Display the monitor dashboard with aspirantes list.
     */
    public function index(Request $request): Response
    {
        // TODO: Implementar query de aspirantes con filtros
        // Monitor solo puede VER información, no modificar
        
        $aspirantes = User::where('rol', 2)
            ->select('idusuario', 'nombre', 'pApelldio', 'sApellido', 'email')
            ->get();

        return Inertia::render('Monitor/Dashboard', [
            'aspirantes' => $aspirantes
        ]);
    }

    /**
     * Display details of a specific aspirante (read-only).
     */
    public function show(string $id): Response
    {
        $aspirante = User::where('idusuario', $id)
            ->where('rol', 2)
            ->firstOrFail();

        // TODO: Cargar información completa del formulario y documentos

        return Inertia::render('Monitor/AspiranteDetalle', [
            'aspirante' => $aspirante
        ]);
    }
}
