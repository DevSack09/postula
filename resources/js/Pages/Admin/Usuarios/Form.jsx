import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Form({ usuario }) {
    const { data, setData, post, put, processing, errors } = useForm({
        nombre: usuario?.nombre || '',
        pApelldio: usuario?.pApelldio || '',
        sApellido: usuario?.sApellido || '',
        email: usuario?.email || '',
        rol: usuario?.rol || '2',
    });

    const submit = (e) => {
        e.preventDefault();
        
        // TODO: Implementar guardado real
        if (usuario) {
            // put(route('admin.usuarios.update', usuario.idusuario));
        } else {
            // post(route('admin.usuarios.store'));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    {usuario ? 'Editar Usuario' : 'Nuevo Usuario'}
                </h2>
            }
        >
            <Head title={usuario ? 'Editar Usuario' : 'Nuevo Usuario'} />

            <div className="py-12">
                <div className="mx-auto max-w-2xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="mb-4">
                                <Link
                                    href="/admin/usuarios"
                                    className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400"
                                >
                                    ← Volver a usuarios
                                </Link>
                            </div>

                            <form onSubmit={submit} className="space-y-6">
                                <div>
                                    <InputLabel htmlFor="nombre" value="Nombre(s)" />
                                    <TextInput
                                        id="nombre"
                                        className="mt-1 block w-full"
                                        value={data.nombre}
                                        onChange={(e) => setData('nombre', e.target.value)}
                                        required
                                        autoFocus
                                    />
                                    <InputError className="mt-2" message={errors.nombre} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="pApelldio" value="Primer Apellido" />
                                    <TextInput
                                        id="pApelldio"
                                        className="mt-1 block w-full"
                                        value={data.pApelldio}
                                        onChange={(e) => setData('pApelldio', e.target.value)}
                                        required
                                    />
                                    <InputError className="mt-2" message={errors.pApelldio} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="sApellido" value="Segundo Apellido" />
                                    <TextInput
                                        id="sApellido"
                                        className="mt-1 block w-full"
                                        value={data.sApellido}
                                        onChange={(e) => setData('sApellido', e.target.value)}
                                    />
                                    <InputError className="mt-2" message={errors.sApellido} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="email" value="Email" />
                                    <TextInput
                                        id="email"
                                        type="email"
                                        className="mt-1 block w-full"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                    />
                                    <InputError className="mt-2" message={errors.email} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="rol" value="Rol" />
                                    <select
                                        id="rol"
                                        className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                        value={data.rol}
                                        onChange={(e) => setData('rol', e.target.value)}
                                        required
                                    >
                                        <option value="1">Administrador</option>
                                        <option value="2">Aspirante</option>
                                        <option value="3">Monitor</option>
                                    </select>
                                    <InputError className="mt-2" message={errors.rol} />
                                </div>

                                <div className="flex items-center gap-4">
                                    <PrimaryButton disabled={processing}>
                                        {usuario ? 'Actualizar' : 'Crear'} Usuario
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
