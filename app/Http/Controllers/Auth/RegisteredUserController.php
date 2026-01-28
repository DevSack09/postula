<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'nombre' => 'required|string|max:100',
            'pApelldio' => 'required|string|max:100',
            'sApellido' => 'nullable|string|max:100',
            'email' => 'required|string|lowercase|email|max:100|unique:usuario',
        ]);

        $user = User::create([
            'nombre' => $request->nombre,
            'pApelldio' => $request->pApelldio,
            'sApellido' => $request->sApellido,
            'email' => $request->email,
            'password' => Hash::make(uniqid('temp_', true)),
            'rol' => 2, // Aspirante
            'activo' => 1,
            'delete' => 1,
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
