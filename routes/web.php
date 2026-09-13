<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\SupabaseAuthController;

Route::inertia('/', 'welcome')->name('home');

Route::post('/auth/supabase/sync', [SupabaseAuthController::class, 'sync'])
    ->name('auth.supabase.sync');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
