import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Formulario({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Formulario de Registro</h2>}
        >
            <Head title="Formulario de Aspirante" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-2xl font-bold mb-4">Bienvenido Aspirante</h3>
                            <p className="mb-4">Completa tu formulario de registro:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>📝 Llena tu información personal</li>
                                <li>📄 Sube tus documentos</li>
                                <li>💾 Guarda tu progreso en cualquier momento</li>
                                <li>✉️ Envía tu solicitud cuando esté completa</li>
                            </ul>
                            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                                <p className="text-sm text-blue-800 dark:text-blue-200">
                                    <strong>Nota:</strong> Puedes cerrar sesión y continuar después. Tu información se guardará automáticamente.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
