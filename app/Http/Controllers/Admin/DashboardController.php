<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Display the admin dashboard.
     */
    public function index(): Response
    {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'totalAspirantes' => 0, // TODO: Implementar query
                'pendientesValidacion' => 0, // TODO: Implementar query
                'validados' => 0, // TODO: Implementar query
                'rechazados' => 0, // TODO: Implementar query
            ]
        ]);
    }
}
