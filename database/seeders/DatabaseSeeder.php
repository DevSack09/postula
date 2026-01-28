<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Crear usuario administrador
        User::firstOrCreate(
            ['email' => 'admin@recluta.test'],
            [
                'nombre' => 'Administrador',
                'pApelldio' => 'Sistema',
                'sApellido' => 'Recluta',
                'password' => Hash::make('password123'),
                'rol' => 1, // Administrador
                'activo' => 1,
                'delete' => 1,
            ]
        );

        // Crear usuario aspirante de prueba
        User::firstOrCreate(
            ['email' => 'aspirante@recluta.test'],
            [
                'nombre' => 'Juan',
                'pApelldio' => 'Pérez',
                'sApellido' => 'García',
                'password' => Hash::make('password123'),
                'rol' => 2, // Aspirante
                'activo' => 1,
                'delete' => 1,
            ]
        );
    }
}
