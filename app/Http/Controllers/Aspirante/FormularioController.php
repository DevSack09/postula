<?php

namespace App\Http\Controllers\Aspirante;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

class FormularioController extends Controller
{
    /**
     * Display the formulario.
     */
    public function index(): Response
    {
        $user = auth()->user();

        // TODO: Cargar datos del formulario si existen
        $formularioData = [
            'personalInfo' => [],
            'documentos' => [],
            'completed' => false,
        ];

        return Inertia::render('Aspirante/Formulario/Index', [
            'formularioData' => $formularioData
        ]);
    }

    /**
     * Save formulario progress (partial save).
     */
    public function guardar(Request $request): RedirectResponse
    {
        // TODO: Implementar guardado parcial
        // Permitir al usuario guardar y continuar después

        return back()->with('success', 'Progreso guardado correctamente');
    }

    /**
     * Submit formulario (final submission).
     */
    public function enviar(Request $request): RedirectResponse
    {
        // TODO: Implementar envío final del formulario
        // Validar que todos los campos requeridos estén completos
        // Cambiar estado a "enviado" o "pendiente de validación"

        return redirect()->route('aspirante.dashboard')
            ->with('success', 'Formulario enviado correctamente');
    }
}
