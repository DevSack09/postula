import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Index({ formularioData }) {
    const { data, setData, post, processing, errors } = useForm({
        // Campos de ejemplo - ajustar según necesidades reales
        telefono: formularioData?.personalInfo?.telefono || '',
        direccion: formularioData?.personalInfo?.direccion || '',
        ciudad: formularioData?.personalInfo?.ciudad || '',
        // ... más campos
    });

    const handleGuardar = (e) => {
        e.preventDefault();
        
        // TODO: Implementar guardado parcial real
        // post(route('aspirante.formulario.guardar'), {
        //     onSuccess: () => {
        //         toast.success('Progreso guardado correctamente');
        //     }
        // });
        
        toast.success('Progreso guardado correctamente (simulado)');
    };

    const handleEnviar = (e) => {
        e.preventDefault();
        
        // TODO: Implementar envío final
        // post(route('aspirante.formulario.enviar'), {
        //     onSuccess: () => {
        //         toast.success('Formulario enviado correctamente');
        //     }
        // });
        
        toast.info('Envío del formulario (pendiente implementación)');
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Formulario de Aspirante
                </h2>
            }
        >
            <Head title="Formulario" />

            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="mb-6">
                                <h3 className="text-lg font-medium">
                                    Información Personal
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    Complete todos los campos. Puede guardar su progreso y continuar después.
                                </p>
                            </div>

                            <form className="space-y-6">
                                {/* Ejemplo de campos - ajustar según necesidades */}
                                <div>
                                    <InputLabel htmlFor="telefono" value="Teléfono" />
                                    <TextInput
                                        id="telefono"
                                        type="tel"
                                        className="mt-1 block w-full"
                                        value={data.telefono}
                                        onChange={(e) => setData('telefono', e.target.value)}
                                    />
                                    <InputError className="mt-2" message={errors.telefono} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="direccion" value="Dirección" />
                                    <TextInput
                                        id="direccion"
                                        className="mt-1 block w-full"
                                        value={data.direccion}
                                        onChange={(e) => setData('direccion', e.target.value)}
                                    />
                                    <InputError className="mt-2" message={errors.direccion} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="ciudad" value="Ciudad" />
                                    <TextInput
                                        id="ciudad"
                                        className="mt-1 block w-full"
                                        value={data.ciudad}
                                        onChange={(e) => setData('ciudad', e.target.value)}
                                    />
                                    <InputError className="mt-2" message={errors.ciudad} />
                                </div>

                                {/* Sección de documentos */}
                                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                                    <h4 className="text-md font-medium mb-4">Documentos</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                        Suba los documentos requeridos en formato PDF o imagen.
                                    </p>
                                    
                                    {/* TODO: Implementar carga de archivos */}
                                    <div className="text-xs text-gray-500">
                                        <p>Documentos a implementar:</p>
                                        <ul className="list-disc list-inside mt-2">
                                            <li>Documento de identidad</li>
                                            <li>Certificado de estudios</li>
                                            <li>Hoja de vida</li>
                                            <li>Otros documentos según requisitos</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Botones de acción */}
                                <div className="flex items-center gap-4 pt-6">
                                    <PrimaryButton 
                                        type="button"
                                        onClick={handleGuardar}
                                        disabled={processing}
                                        className="bg-gray-600 hover:bg-gray-700"
                                    >
                                        Guardar Progreso
                                    </PrimaryButton>
                                    
                                    <PrimaryButton 
                                        type="button"
                                        onClick={handleEnviar}
                                        disabled={processing}
                                    >
                                        Enviar Formulario
                                    </PrimaryButton>
                                </div>
                            </form>

                            <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                                <p className="text-xs text-yellow-800 dark:text-yellow-200">
                                    <strong>Nota:</strong> Este es un formulario de ejemplo. Los campos y documentos reales
                                    deben ser definidos según los requisitos específicos del proceso de reclutamiento.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
