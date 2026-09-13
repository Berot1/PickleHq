<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class SupabaseAuthController extends Controller
{
    public function sync(Request $request): JsonResponse
    {
        $accessToken = $request->input('access_token');

        if (! $accessToken) {
            return response()->json(['message' => 'Missing access token.'], 422);
        }

        // Validate token against Supabase Auth API
        $response = Http::withToken($accessToken)
            ->get(rtrim(config('services.supabase.url'), '/').'/auth/v1/user');

        if (! $response->successful()) {
            return response()->json(['message' => 'Invalid Supabase session.'], 401);
        }

        $supabaseUser = $response->json();
        $email = $supabaseUser['email'];
        $supabaseId = $supabaseUser['id'];
        $name = $supabaseUser['user_metadata']['full_name']
            ?? $supabaseUser['user_metadata']['name']
            ?? strstr($email, '@', true);

        // Find or create local Laravel user
        $user = User::firstOrCreate(
            ['supabase_id' => $supabaseId],
            [
                'name' => $name,
                'email' => $email,
                'email_verified_at' => now(),
            ]
        );

        Auth::login($user, remember: true);
        $request->session()->regenerate();

        return response()->json(['redirect' => route('dashboard')]);
    }
}
