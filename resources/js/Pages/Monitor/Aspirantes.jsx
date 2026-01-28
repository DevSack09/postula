import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Aspirantes({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Monitor de Aspirantes</h2>}
        >
            <Head title="Monitor - Aspirantes" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-2xl font-bold mb-4">Bienvenido Monitor</h3>
                            <p className="mb-4">Tienes acceso de solo lectura:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>👁️ Ver información de aspirantes</li>
                                <li>📊 Consultar datos y documentos</li>
                                <li>🔍 Buscar y filtrar registros</li>
                                <li>🚫 Sin permisos de modificación</li>
                            </ul>
                            <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
                                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                                    <strong>Nota:</strong> Tu rol es de solo lectura. No podrás modificar ninguna información.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
