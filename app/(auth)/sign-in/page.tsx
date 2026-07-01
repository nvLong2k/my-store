"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { signInSchema, SignInFormValues } from "@/schemas/auth";
import { GoogleIcon } from "@/components/GoogleIcon";
import { useSignIn } from "@/hooks/useAuth";
import { ApiError } from "@/lib/axios";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function SignInPage() {
  const router = useRouter();
  const signInMutation = useSignIn();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const formik = useFormik<SignInFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: toFormikValidationSchema(signInSchema),
    onSubmit: (values) => {
      signInMutation.mutate(values, {
        onSuccess: (res) => {
          localStorage.setItem("accessToken", res.accessToken);
          router.push("/");
        },
      });
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <p className="text-center text-xs text-gray-400 mb-1">Sign in</p>
        <h1 className="text-center text-2xl font-semibold text-gray-900 mb-6">
          Welcome back
        </h1>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors mb-4"
        >
          <GoogleIcon />
          Continue with Google
        </button>

        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-4" noValidate>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-1 ${formik.touched.email && formik.errors.email
                  ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                  : "border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                }`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm text-gray-600">Password</label>
              <Link href="/forgot-password" className="text-xs text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full border rounded-lg px-3 py-2.5 pr-10 text-sm outline-none focus:ring-1 ${formik.touched.password && formik.errors.password
                    ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                    : "border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                  }`}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOff className="hover:cursor-pointer" size={18} />
                ) : (
                  <Eye className="hover:cursor-pointer" size={18} />
                )}
              </button>
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
            )}
          </div>

          {signInMutation.isError && (
            <p className="text-red-500 text-sm text-center">
              {(signInMutation.error as ApiError)?.response?.data?.message || "Sign in failed"}
            </p>
          )}

          <button
            type="submit"
            disabled={signInMutation.isPending}
            className="w-full hover:cursor-pointer bg-[#e0781e] hover:bg-[#c96a15] disabled:opacity-60 text-white font-medium rounded-lg py-2.5 text-sm transition-colors"
          >
            {signInMutation.isPending ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}