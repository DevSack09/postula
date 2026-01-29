import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index({ registros }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Registros
                </h2>
            }
        >
            <Head title="Registros" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-lg font-medium mb-4">
                                Lista de Registros
                            </h3>
                            
                            {/* TODO: Implementar tabla con listado de aspirantes/registros */}
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Aquí se mostrará la lista de todos los registros de aspirantes.
                            </p>
                            
                            <div className="mt-4">
                                <p className="text-xs text-gray-500">
                                    Funcionalidades pendientes:
                                </p>
                                <ul className="list-disc list-inside text-xs text-gray-500 mt-2">
                                    <li>Tabla con datos de aspirantes</li>
                                    <li>Filtros por estado (pendiente, validado, rechazado)</li>
                                    <li>Búsqueda por nombre/email</li>
                                    <li>Paginación</li>
                                    <li>Link para ver detalle de cada registro</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
