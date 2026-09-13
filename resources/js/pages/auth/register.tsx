import { Form, Head, Link } from '@inertiajs/react';
import { useState, type ReactNode } from 'react';
import { FlutedGlass } from '@paper-design/shaders-react';
import { Eye, EyeOff } from 'lucide-react';
import { motion } from 'motion/react';
import { login } from '@/routes';
import { store } from '@/routes/register';
import { home } from '@/routes';

const termsText = (
    <>
        By creating an account, you agree to our{' '}
        <a
            href="#"
            className="font-medium text-[#111111]/55 underline underline-offset-2"
        >
            Terms of Service
        </a>{' '}
        and{' '}
        <a
            href="#"
            className="font-medium text-[#111111]/55 underline underline-offset-2"
        >
            Privacy Policy
        </a>
    </>
);

export default function Register({ passwordRules }: { passwordRules: string }) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <section className="min-h-screen bg-[#050505] p-3 font-sans text-white antialiased [font-synthesis:none] selection:bg-[#A5ED0F] selection:text-[#111111]">
            <Head title="Create an account" />
            <div className="grid min-h-[calc(95vh-0.2rem)] gap-4 lg:grid-cols-[0.94fr_1.06fr]">
                {/* Left Side - SignUp Form */}
                <div className="flex min-h-0 items-center justify-center rounded-md border border-black/5 bg-[#f5f3ee] px-6 py-8 shadow-[0_0_0_1px_rgba(17,17,17,0.02)] lg:min-h-0 lg:px-14 lg:py-10 xl:px-20">
                    <div className="mx-auto w-full max-w-[460px]">
                        <div>
                            <h1 className="text-3xl font-medium tracking-tight text-[#111111] sm:text-4xl">
                                Create an account
                            </h1>
                        </div>

                        <div className="mt-8">
                            <Form
                                {...store.form()}
                                resetOnSuccess={[
                                    'password',
                                    'password_confirmation',
                                ]}
                                disableWhileProcessing
                                className="space-y-3"
                            >
                                {({ processing, errors }) => (
                                    <>
                                        <div className="w-full space-y-1.5 text-left">
                                            <label
                                                htmlFor="name"
                                                className="text-sm font-medium text-[#111111]/80"
                                            >
                                                Full name
                                            </label>
                                            <div className="relative flex h-11 items-center rounded-lg border border-black/10 bg-white px-3.5 transition-all focus-within:border-black/20 focus-within:ring-1 focus-within:ring-black/10">
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                    autoFocus
                                                    autoComplete="name"
                                                    placeholder="Full name"
                                                    className="w-full bg-transparent text-sm text-[#111111] outline-none placeholder:text-[#111111]/35"
                                                />
                                            </div>
                                            {errors.name && (
                                                <p className="mt-1 text-xs text-red-400">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        <div className="w-full space-y-1.5 text-left">
                                            <label
                                                htmlFor="email"
                                                className="text-sm font-medium text-[#111111]/80"
                                            >
                                                Email
                                            </label>
                                            <div className="relative flex h-11 items-center rounded-lg border border-black/10 bg-white px-3.5 transition-all focus-within:border-black/20 focus-within:ring-1 focus-within:ring-black/10">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    autoComplete="email"
                                                    placeholder="email@example.com"
                                                    className="w-full bg-transparent text-sm text-[#111111] outline-none placeholder:text-[#111111]/35"
                                                />
                                            </div>
                                            {errors.email && (
                                                <p className="mt-1 text-xs text-red-400">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>

                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div className="w-full space-y-1.5 text-left">
                                                <label
                                                    htmlFor="password"
                                                    className="text-sm font-medium text-[#111111]/80"
                                                >
                                                    Password
                                                </label>
                                                <div className="relative flex h-11 items-center rounded-lg border border-black/10 bg-white px-3.5 transition-all focus-within:border-black/20 focus-within:ring-1 focus-within:ring-black/10">
                                                    <input
                                                        id="password"
                                                        name="password"
                                                        type={
                                                            showPassword
                                                                ? 'text'
                                                                : 'password'
                                                        }
                                                        required
                                                        autoComplete="new-password"
                                                        placeholder="Password"
                                                        pattern={passwordRules}
                                                        className="w-full bg-transparent text-sm text-[#111111] outline-none placeholder:text-[#111111]/35"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setShowPassword(
                                                                !showPassword,
                                                            )
                                                        }
                                                        className="absolute right-3.5 cursor-pointer text-[#111111]/45 transition-colors hover:text-[#111111]"
                                                    >
                                                        {showPassword ? (
                                                            <EyeOff className="size-4" />
                                                        ) : (
                                                            <Eye className="size-4" />
                                                        )}
                                                    </button>
                                                </div>
                                                {errors.password && (
                                                    <p className="mt-1 text-xs text-red-400">
                                                        {errors.password}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="w-full space-y-1.5 text-left">
                                                <label
                                                    htmlFor="password_confirmation"
                                                    className="text-sm font-medium text-[#111111]/80"
                                                >
                                                    Confirm Password
                                                </label>
                                                <div className="relative flex h-11 items-center rounded-lg border border-black/10 bg-white px-3.5 transition-all focus-within:border-black/20 focus-within:ring-1 focus-within:ring-black/10">
                                                    <input
                                                        id="password_confirmation"
                                                        name="password_confirmation"
                                                        type={
                                                            showConfirmPassword
                                                                ? 'text'
                                                                : 'password'
                                                        }
                                                        required
                                                        autoComplete="new-password"
                                                        placeholder="Confirm password"
                                                        pattern={passwordRules}
                                                        className="w-full bg-transparent text-sm text-[#111111] outline-none placeholder:text-[#111111]/35"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setShowConfirmPassword(
                                                                !showConfirmPassword,
                                                            )
                                                        }
                                                        className="absolute right-3.5 cursor-pointer text-[#111111]/45 transition-colors hover:text-[#111111]"
                                                    >
                                                        {showConfirmPassword ? (
                                                            <EyeOff className="size-4" />
                                                        ) : (
                                                            <Eye className="size-4" />
                                                        )}
                                                    </button>
                                                </div>
                                                {errors.password_confirmation && (
                                                    <p className="mt-1 text-xs text-red-400">
                                                        {
                                                            errors.password_confirmation
                                                        }
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="space-y-2 pt-1 text-xs leading-5 text-[#111111]/55 sm:text-[13px]">
                                            <CheckboxLine name="marketing_opt_out">
                                                I don't want to receive emails
                                                about PickleHQ feature updates
                                                and best practices.
                                            </CheckboxLine>
                                            <CheckboxLine name="terms" required>
                                                {termsText}
                                            </CheckboxLine>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="mt-4 flex h-11 w-full items-center justify-center rounded-lg bg-[#111111] text-sm font-medium text-white transition-colors hover:bg-black disabled:opacity-50"
                                        >
                                            {processing
                                                ? 'Creating account...'
                                                : 'Submit'}
                                        </button>

                                        <div className="mt-4 text-center text-sm text-[#111111]/60">
                                            Already have an account?{' '}
                                            <Link
                                                href={login()}
                                                className="font-medium text-[#111111] underline underline-offset-4 hover:text-black/80"
                                            >
                                                Log in
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </Form>
                        </div>
                    </div>
                </div>

                {/* Right Side - Marketing Testimonial and App Mockup */}
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
                                initial={{
                                    opacity: 0,
                                    y: 12,
                                    filter: 'blur(6px)',
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    filter: 'blur(0px)',
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="flex items-center gap-4"
                            >
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#111111]">
                                    <img
                                        src="/PickleHqName.png"
                                        alt="PickleHq Logo"
                                        className="h-4 w-auto object-contain invert"
                                    />
                                </div>
                                <span className="font-bold tracking-wide text-white uppercase">
                                    PickleHQ
                                </span>
                            </motion.div>

                            <motion.blockquote
                                initial={{
                                    opacity: 0,
                                    y: 18,
                                    filter: 'blur(8px)',
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    filter: 'blur(0px)',
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.12,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="mt-7 text-3xl leading-[1.1] font-black tracking-tighter text-white uppercase sm:text-4xl lg:text-[40px]"
                            >
                                Finally, a platform that handles the scheduling
                                chaos so I can focus on playing.
                            </motion.blockquote>
                        </div>

                        <div className="mt-10 w-full translate-y-[20%] overflow-hidden rounded-xl border border-white/10 bg-black p-2 shadow-2xl backdrop-blur-xl sm:translate-y-[22%] lg:absolute lg:-bottom-96 lg:left-[20%] lg:mt-0 lg:w-[92%] lg:max-w-none lg:origin-bottom-left lg:translate-y-0 lg:-rotate-2 xl:-bottom-[220px] xl:left-[20%] xl:w-[94%] 2xl:-bottom-[240px] 2xl:left-[20%] 2xl:w-[96%]">
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 72,
                                    filter: 'blur(10px)',
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    filter: 'blur(0px)',
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 0.22,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="overflow-hidden rounded-lg border border-white/10 bg-[#111111]"
                            >
                                <div className="flex items-center gap-2 border-b border-white/10 bg-[#1C1C1C] px-4 py-3 select-none">
                                    <div className="size-2.5 rounded-full bg-white/20" />
                                    <div className="size-2.5 rounded-full bg-white/20" />
                                    <div className="size-2.5 rounded-full bg-white/20" />
                                    <span className="ml-4 font-mono text-[10px] font-bold tracking-widest text-[#A5ED0F] uppercase">
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

// Bypass default layout container
Register.layout = (page: ReactNode) => page;

function CheckboxLine({
    name,
    required,
    children,
}: {
    name: string;
    required?: boolean;
    children: ReactNode;
}) {
    return (
        <label className="flex cursor-pointer items-start gap-3">
            <span className="relative mt-[3px] size-[14px] shrink-0">
                <input
                    type="checkbox"
                    name={name}
                    required={required}
                    className="peer size-full cursor-pointer appearance-none rounded-[3px] border border-black/25 bg-transparent transition-colors checked:border-black checked:bg-black dark:border-white/30 dark:checked:border-white dark:checked:bg-white"
                />
                <svg
                    viewBox="0 0 12 12"
                    className="pointer-events-none absolute inset-0 hidden size-full p-0.5 text-white peer-checked:block dark:text-black"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M3 6.2 5 8.1 9 3.9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>
            <span>{children}</span>
        </label>
    );
}
