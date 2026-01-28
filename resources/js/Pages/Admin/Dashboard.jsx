import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Panel de Administrador</h2>}
        >
            <Head title="Admin Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-2xl font-bold mb-4">Bienvenido Administrador</h3>
                            <p className="mb-4">Tienes acceso completo al sistema:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>✅ Ver todos los aspirantes</li>
                                <li>✅ Validar documentos</li>
                                <li>✅ Modificar información</li>
                                <li>✅ Gestionar usuarios</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
