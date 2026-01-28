<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'usuario';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'idusuario';

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = true;

    /**
     * The type of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'int';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'folio',
        'email',
        'nombre',
        'pApelldio',
        'sApellido',
        'password',
        'rol',
        'activo',
        'delete',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'fecha_creacion' => 'datetime',
        'password' => 'hashed',
    ];

    /**
     * Get the role that the user belongs to.
     */
    public function roleData(): BelongsTo
    {
        return $this->belongsTo(Rol::class, 'rol', 'idrol');
    }

    /**
     * Get the user's full name.
     */
    public function getFullNameAttribute(): string
    {
        return trim("{$this->nombre} {$this->pApelldio} {$this->sApellido}");
    }
}
