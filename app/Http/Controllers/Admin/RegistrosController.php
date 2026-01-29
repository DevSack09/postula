<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class RegistrosController extends Controller
{
    /**
     * Display a listing of the registros.
     */
    public function index(): Response
    {
        // TODO: Implementar query de registros/aspirantes
        $registros = [];

        return Inertia::render('Admin/Registros/Index', [
            'registros' => $registros
        ]);
    }

    /**
     * Display the specified registro.
     */
    public function show(string $id): Response
    {
        // TODO: Implementar query del registro específico
        $registro = [
            'id' => $id,
            // ... más campos
        ];

        return Inertia::render('Admin/Registros/Show', [
            'registro' => $registro
        ]);
    }
}
