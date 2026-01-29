import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index({ usuarios }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Gestión de Usuarios
                </h2>
            }
        >
            <Head title="Usuarios" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-medium">
                                    Lista de Usuarios
                                </h3>
                                {/* TODO: Agregar botón "Nuevo Usuario" */}
                            </div>
                            
                            {/* TODO: Implementar tabla con listado de usuarios */}
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Total de usuarios: {usuarios.length}
                            </p>
                            
                            <div className="mt-4">
                                <p className="text-xs text-gray-500">
                                    Funcionalidades pendientes:
                                </p>
                                <ul className="list-disc list-inside text-xs text-gray-500 mt-2">
                                    <li>Tabla con todos los usuarios del sistema</li>
                                    <li>Filtros por rol</li>
                                    <li>Búsqueda por nombre/email</li>
                                    <li>Botón para crear nuevo usuario</li>
                                    <li>Acciones: editar, eliminar, cambiar rol</li>
                                    <li>Cambiar estado (activo/inactivo)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
