<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

class UsuariosController extends Controller
{
    /**
     * Display a listing of the usuarios.
     */
    public function index(): Response
    {
        $usuarios = User::with('rolRelation')
            ->select('idusuario', 'nombre', 'pApelldio', 'sApellido', 'email', 'rol')
            ->get();

        return Inertia::render('Admin/Usuarios/Index', [
            'usuarios' => $usuarios
        ]);
    }

    /**
     * Show the form for creating or editing a usuario.
     */
    public function form(?string $id = null): Response
    {
        $usuario = $id ? User::findOrFail($id) : null;

        return Inertia::render('Admin/Usuarios/Form', [
            'usuario' => $usuario
        ]);
    }

    /**
     * Store or update a usuario.
     */
    public function save(Request $request, ?string $id = null): RedirectResponse
    {
        // TODO: Implementar validación y guardado
        
        return redirect()->route('admin.usuarios.index')
            ->with('success', 'Usuario guardado correctamente');
    }
}
