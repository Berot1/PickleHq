import { Form, Head, Link } from '@inertiajs/react';
import { useState, type ReactNode } from 'react';
import { FlutedGlass } from '@paper-design/shaders-react';
import { Eye, EyeOff } from 'lucide-react';
import { motion } from 'motion/react';
import { home, register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { supabase } from '@/lib/supabase';

const handleOAuthSignIn = async (provider: 'google' | 'facebook') => {
    await supabase.auth.signInWithOAuth({
        provider,
        options: {
            redirectTo: `${window.location.origin}/auth/callback`,
        },
    });
};

export default function Login({ status, canResetPassword }: { status?: string; canResetPassword?: boolean }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen bg-[#050505] p-3 font-sans text-white antialiased selection:bg-[#A5ED0F] selection:text-[#111111]">
      <Head title="Log in" />
      <div className="grid min-h-[calc(100vh-1.5rem)] gap-4 lg:grid-cols-[0.94fr_1.06fr]">
        
        {/* Left Side - Login Form */}
        <div className="flex min-h-0 items-center justify-center rounded-md border border-black/5 bg-[#f5f3ee] px-6 py-8 shadow-[0_0_0_1px_rgba(17,17,17,0.02)] lg:min-h-0 lg:px-14 lg:py-10 xl:px-20">
          <div className="mx-auto w-full max-w-[460px]">
            <div>
              <h1 className="text-3xl font-medium tracking-tight text-[#111111] sm:text-4xl">
                Welcome back
              </h1>
              <p className="mt-2 text-sm text-[#111111]/60">
                Log in to your account to continue.
              </p>
            </div>

            {status && (
              <div className="mt-4 rounded-md border border-green-500/30 bg-green-900/30 p-4 text-sm font-medium text-green-400">
                {status}
              </div>
            )}

            {/* Social Login Buttons */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4">
              <button 
                type="button" 
                onClick={() => handleOAuthSignIn('google')}
                className="flex h-11 w-full min-w-0 items-center justify-center gap-2 rounded-lg border border-black/10 bg-white px-4 text-sm font-medium text-[#111111] transition-colors hover:bg-black/[0.02]"
              >
                <GoogleIcon />
                <span className="whitespace-nowrap">Log in with Google</span>
              </button>
              
              <button 
                type="button" 
                onClick={() => handleOAuthSignIn('facebook')}
                className="flex h-11 w-full min-w-0 items-center justify-center gap-2 rounded-lg border border-black/10 bg-white px-4 text-sm font-medium text-[#111111] transition-colors hover:bg-black/[0.02]"
              >
                <FacebookIcon />
                <span className="whitespace-nowrap">Log in with Facebook</span>
              </button>
            </div>

            <div className="my-4 flex items-center gap-4 text-xs font-medium text-[#111111]/40">
              <div className="h-px flex-1 bg-black/10" />
              or
              <div className="h-px flex-1 bg-black/10" />
            </div>

            <Form {...store.form()} resetOnSuccess={['password']} className="space-y-4">
              {({ processing, errors }) => (
                <>
                  <div className="w-full space-y-1.5 text-left">
                    <label htmlFor="email" className="text-sm font-medium text-[#111111]/80">Email</label>
                    <div className="relative flex h-11 items-center rounded-lg border border-black/10 bg-white px-3.5 transition-all focus-within:border-black/20 focus-within:ring-1 focus-within:ring-black/10">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoFocus
                        autoComplete="email"
                        placeholder="email@example.com"
                        className="w-full bg-transparent text-sm text-[#111111] outline-none placeholder:text-[#111111]/35"
                      />
                    </div>
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                  </div>

                  <div className="w-full space-y-1.5 text-left">
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="text-sm font-medium text-[#111111]/80">Password</label>
                      {canResetPassword && (
                        <Link href={request()} className="text-xs font-medium text-[#111111]/55 underline-offset-2 transition-colors hover:text-black hover:underline">
                          Forgot password?
                        </Link>
                      )}
                    </div>
                    <div className="relative flex h-11 items-center rounded-lg border border-black/10 bg-white px-3.5 transition-all focus-within:border-black/20 focus-within:ring-1 focus-within:ring-black/10">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        autoComplete="current-password"
                        placeholder="Password"
                        className="w-full bg-transparent text-sm text-[#111111] outline-none placeholder:text-[#111111]/35"
                      />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 cursor-pointer text-[#111111]/45 transition-colors hover:text-[#111111]">
                        {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                      </button>
                    </div>
                    {errors.password && <p className="mt-1 text-xs text-red-400">{errors.password}</p>}
                  </div>

                  <div className="pt-2">
                    <label className="flex cursor-pointer items-start gap-3">
                      <span className="relative mt-1 size-3.5 shrink-0">
                        <input
                          type="checkbox"
                          name="remember"
                          className="peer size-full cursor-pointer appearance-none rounded-[3px] border border-black/20 bg-white transition-colors checked:border-black checked:bg-black"
                        />
                        <svg viewBox="0 0 12 12" className="pointer-events-none absolute inset-0 hidden size-full p-0.5 text-white peer-checked:block" fill="none" aria-hidden="true">
                          <path d="M3 6.2 5 8.1 9 3.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-sm font-medium text-[#111111]/60">Remember me</span>
                    </label>
                  </div>

                  <button type="submit" disabled={processing} className="mt-6 flex h-11 w-full items-center justify-center rounded-lg bg-[#111111] text-sm font-medium text-white transition-colors hover:bg-black disabled:opacity-50">
                    {processing ? 'Logging in...' : 'Log in'}
                  </button>

                  <div className="mt-6 text-center text-sm text-[#111111]/60">
                    Don't have an account? <Link href={register()} className="font-medium text-[#111111] underline underline-offset-4 hover:text-black/80">Sign up</Link>
                  </div>
                </>
              )}
            </Form>
          </div>
        </div>

        {/* Right Side - Marketing Testimonial and Mockup */}
        <div className="relative hidden min-h-[720px] flex-col overflow-hidden rounded-md bg-[#111111] p-8 text-white sm:p-12 lg:flex lg:min-h-0 lg:p-16">
          <div className="pointer-events-none absolute inset-0 z-0">
            <FlutedGlass
              size={0.89}
              shape="lines"
              angle={0}
              distortionShape="prism"
              distortion={0.5}
              shift={0}
              blur={0}
              edges={0.25}
              stretch={0}
              scale={1.11}
              fit="cover"
              highlights={0.1}
              shadows={0.2}
              grainMixer={0.1}
              grainOverlay={0.1}
              colorBack="#111111"
              colorHighlight="#A5ED0F"
              colorShadow="#050505"
              className="h-full w-full bg-transparent opacity-80"
            />
          </div>

          <div className="relative z-10 h-full w-full">
            <div className="max-w-[460px] lg:pt-12">
              <motion.div
                initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-4"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#111111]">
                  <img src="/PickleHqName.png" alt="PickleHq Logo" className="h-4 w-auto object-contain invert" />
                </div>
                <span className="font-bold uppercase tracking-wide text-white">PickleHQ</span>
              </motion.div>

              <motion.blockquote
                initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="mt-7 text-3xl font-black uppercase leading-[1.1] tracking-tighter text-white sm:text-4xl lg:text-[40px]"
              >
                Finally, a platform that handles the scheduling chaos so I can focus on playing.
              </motion.blockquote>
            </div>

            <div className="mt-10 w-full translate-y-[20%] overflow-hidden rounded-xl border border-white/10 bg-black p-2 shadow-2xl backdrop-blur-xl sm:translate-y-[22%] lg:absolute lg:-bottom-96 lg:left-[20%] lg:mt-0 lg:w-[92%] lg:max-w-none lg:origin-bottom-left lg:-rotate-2 lg:translate-y-0 xl:-bottom-[220px] xl:left-[20%] xl:w-[94%] 2xl:-bottom-[240px] 2xl:left-[20%] 2xl:w-[96%]">
              <motion.div
                initial={{ opacity: 0, y: 72, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-lg border border-white/10 bg-[#111111]"
              >
                <div className="flex select-none items-center gap-2 border-b border-white/10 bg-[#1C1C1C] px-4 py-3">
                  <div className="size-2.5 rounded-full bg-white/20" />
                  <div className="size-2.5 rounded-full bg-white/20" />
                  <div className="size-2.5 rounded-full bg-white/20" />
                  <span className="ml-4 font-mono text-[10px] font-bold uppercase tracking-widest text-[#A5ED0F]">
                    picklehq.com/dashboard
                  </span>
                </div>
                <img
                  src="/home-bg/bg-1.jpg"
                  alt="App Mockup"
                  className="h-auto w-full object-cover object-top opacity-90"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Bypass the default layout constraints for this specific page
Login.layout = (page: ReactNode) => page;

function GoogleIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z" fill="#34A853" />
      <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84Z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z" fill="#EB4335" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0 text-[#1877F2]">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}