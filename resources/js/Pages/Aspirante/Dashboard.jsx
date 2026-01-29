import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ formularioCompletado, documentosPendientes, estadoValidacion }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard Aspirante
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-lg font-medium mb-4">
                                Bienvenido, Aspirante
                            </h3>
                            
                            <div className="space-y-4">
                                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <h4 className="font-medium text-blue-900 dark:text-blue-200">
                                        Estado del Formulario
                                    </h4>
                                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-2">
                                        Estado: {estadoValidacion}
                                    </p>
                                    <p className="text-sm text-blue-700 dark:text-blue-300">
                                        Formulario completado: {formularioCompletado ? 'Sí' : 'No'}
                                    </p>
                                </div>

                                <div className="mt-6">
                                    <h4 className="font-medium mb-2">Acciones Disponibles:</h4>
                                    <ul className="list-disc list-inside space-y-2 text-sm">
                                        <li>
                                            <a href="/aspirante/formulario" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                                                Llenar/Continuar Formulario
                                            </a>
                                        </li>
                                        <li>Ver estado de validación de documentos</li>
                                        <li>Descargar comprobantes</li>
                                    </ul>
                                </div>

                                <div className="mt-4 text-xs text-gray-500">
                                    <p>Funcionalidades pendientes:</p>
                                    <ul className="list-disc list-inside mt-2">
                                        <li>Mostrar progreso del formulario (porcentaje completado)</li>
                                        <li>Lista de documentos pendientes por subir</li>
                                        <li>Notificaciones de validación/rechazo</li>
                                        <li>Historial de actividades</li>
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
