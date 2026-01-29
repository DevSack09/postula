<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\RegistrosController;
use App\Http\Controllers\Admin\UsuariosController;
use App\Http\Controllers\Aspirante\DashboardController as AspiranteDashboardController;
use App\Http\Controllers\Aspirante\FormularioController;
use App\Http\Controllers\Monitor\DashboardController as MonitorDashboardController;
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
    // Dashboard
    Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');
    
    // Gestión de registros/aspirantes
    Route::get('/registros', [RegistrosController::class, 'index'])->name('registros.index');
    Route::get('/registros/{id}', [RegistrosController::class, 'show'])->name('registros.show');
    
    // Gestión de usuarios
    Route::get('/usuarios', [UsuariosController::class, 'index'])->name('usuarios.index');
    Route::get('/usuarios/crear', [UsuariosController::class, 'form'])->name('usuarios.crear');
    Route::get('/usuarios/{id}/editar', [UsuariosController::class, 'form'])->name('usuarios.editar');
    Route::post('/usuarios', [UsuariosController::class, 'save'])->name('usuarios.store');
    Route::put('/usuarios/{id}', [UsuariosController::class, 'save'])->name('usuarios.update');
});

// =====================================================
// RUTAS PARA ASPIRANTES (Rol: 2)
// =====================================================
Route::middleware(['auth', 'role:2'])->prefix('aspirante')->name('aspirante.')->group(function () {
    // Dashboard
    Route::get('/dashboard', [AspiranteDashboardController::class, 'index'])->name('dashboard');
    
    // Formulario
    Route::get('/formulario', [FormularioController::class, 'index'])->name('formulario');
    Route::post('/formulario/guardar', [FormularioController::class, 'guardar'])->name('formulario.guardar');
    Route::post('/formulario/enviar', [FormularioController::class, 'enviar'])->name('formulario.enviar');
});

// =====================================================
// RUTAS PARA MONITORES (Rol: 3)
// =====================================================
Route::middleware(['auth', 'role:3'])->prefix('monitor')->name('monitor.')->group(function () {
    // Dashboard (listado de aspirantes - solo lectura)
    Route::get('/dashboard', [MonitorDashboardController::class, 'index'])->name('dashboard');
    Route::get('/aspirantes/{id}', [MonitorDashboardController::class, 'show'])->name('aspirantes.show');
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
