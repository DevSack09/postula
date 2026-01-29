import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Show({ registro }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Detalle del Registro
                </h2>
            }
        >
            <Head title="Detalle del Registro" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="mb-4">
                                <Link
                                    href="/admin/registros"
                                    className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400"
                                >
                                    ← Volver a registros
                                </Link>
                            </div>

                            <h3 className="text-lg font-medium mb-4">
                                Información del Aspirante
                            </h3>
                            
                            {/* TODO: Implementar vista detallada del registro */}
                            <div className="space-y-4">
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Vista detallada del registro #{registro.id}
                                </p>
                                
                                <div className="mt-4">
                                    <p className="text-xs text-gray-500">
                                        Funcionalidades pendientes:
                                    </p>
                                    <ul className="list-disc list-inside text-xs text-gray-500 mt-2">
                                        <li>Información personal completa</li>
                                        <li>Documentos adjuntos (visualización)</li>
                                        <li>Estado del registro</li>
                                        <li>Histórico de cambios</li>
                                        <li>Botones de validación/rechazo</li>
                                        <li>Campo de comentarios/observaciones</li>
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
