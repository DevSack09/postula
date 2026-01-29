import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ aspirantes }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard Monitor
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-lg font-medium mb-4">
                                Consulta de Aspirantes
                            </h3>
                            
                            <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                                <p className="text-sm text-amber-800 dark:text-amber-200">
                                    <strong>Modo Solo Lectura:</strong> Como Monitor, puede consultar información
                                    pero no realizar modificaciones.
                                </p>
                            </div>

                            {/* TODO: Implementar listado de aspirantes */}
                            <div className="space-y-4">
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Total de aspirantes: {aspirantes.length}
                                </p>

                                <div className="mt-4">
                                    <p className="text-xs text-gray-500">
                                        Funcionalidades disponibles:
                                    </p>
                                    <ul className="list-disc list-inside text-xs text-gray-500 mt-2">
                                        <li>Ver listado completo de aspirantes</li>
                                        <li>Buscar y filtrar aspirantes</li>
                                        <li>Ver información detallada de cada aspirante</li>
                                        <li>Consultar documentos adjuntos</li>
                                        <li>Ver estado de validación</li>
                                    </ul>
                                </div>

                                <div className="mt-4">
                                    <p className="text-xs text-gray-500">
                                        Restricciones del rol Monitor:
                                    </p>
                                    <ul className="list-disc list-inside text-xs text-gray-500 mt-2">
                                        <li>No puede modificar información de aspirantes</li>
                                        <li>No puede validar o rechazar documentos</li>
                                        <li>No puede crear o eliminar registros</li>
                                        <li>Solo acceso de lectura a toda la información</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
