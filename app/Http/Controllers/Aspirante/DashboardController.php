<?php

namespace App\Http\Controllers\Aspirante;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Display the aspirante dashboard.
     */
    public function index(): Response
    {
        $user = auth()->user();

        return Inertia::render('Aspirante/Dashboard', [
            'formularioCompletado' => false, // TODO: Verificar si formulario está completo
            'documentosPendientes' => [], // TODO: Implementar query
            'estadoValidacion' => 'pendiente', // TODO: Implementar lógica
        ]);
    }
}
