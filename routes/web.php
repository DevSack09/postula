<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect()->route('login');
});

// =====================================================
// RUTAS PARA ADMINISTRADORES (Rol: 1)
// =====================================================
Route::middleware(['auth', 'role:1'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('dashboard');
    
    // Gestión de aspirantes
    // Route::get('/aspirantes', [AspiranteController::class, 'index'])->name('aspirantes.index');
    // Route::get('/aspirantes/{id}', [AspiranteController::class, 'show'])->name('aspirantes.show');
    // Route::put('/aspirantes/{id}/validar', [AspiranteController::class, 'validar'])->name('aspirantes.validar');
});

// =====================================================
// RUTAS PARA ASPIRANTES (Rol: 2)
// =====================================================
Route::middleware(['auth', 'role:2'])->prefix('aspirante')->name('aspirante.')->group(function () {
    Route::get('/formulario', function () {
        return Inertia::render('Aspirante/Formulario');
    })->name('formulario');
    
    // Guardado parcial del formulario
    // Route::post('/formulario/guardar', [FormularioController::class, 'guardar'])->name('formulario.guardar');
    // Route::post('/formulario/enviar', [FormularioController::class, 'enviar'])->name('formulario.enviar');
});

// =====================================================
// RUTAS PARA MONITORES (Rol: 3)
// =====================================================
Route::middleware(['auth', 'role:3'])->prefix('monitor')->name('monitor.')->group(function () {
    Route::get('/aspirantes', function () {
        return Inertia::render('Monitor/Aspirantes');
    })->name('aspirantes');
    
    // Solo lectura
    // Route::get('/aspirantes/{id}', [MonitorController::class, 'show'])->name('aspirantes.show');
});

// Dashboard genérico (fallback)
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
