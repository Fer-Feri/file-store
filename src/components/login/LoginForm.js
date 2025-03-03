"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <div className="mx-auto mt-24 flex max-w-96 flex-col gap-6 px-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-6"
        autoComplete="off"
      >
        {/* ایمیل */}
        <div>
          <input
            className={`w-full rounded-md border p-2 transition-colors outline-none focus:border-blue-500`}
            placeholder="ایمیل"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            {...register("email", {
              required: "ایمیل الزامی است",
              minLength: {
                value: 9,
                message: "ایمیل صحیح نیست",
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "ایمیل صحیح نیست",
              },
            })}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* رمز عبور */}
        <div className="flex flex-col gap-2">
          <input
            className={`w-full rounded-md border p-2 transition-colors outline-none focus:border-blue-500`}
            placeholder="رمز عبور"
            type="password"
            autoComplete="current-password"
            autoCorrect="off"
            spellCheck="false"
            {...register("password", {
              required: "رمز عبور الزامی است",
              minLength: {
                value: 8,
                message: "رمز عبور باید حداقل 8 کاراکتر باشد",
              },
            })}
          />
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* دکمه ورود */}
        <button
          className="w-full rounded-md bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600"
          type="submit"
        >
          ورود
        </button>

        {/* لینک ثبت نام */}
        <Link
          className="block w-full rounded-md bg-orange-400 p-2 text-center text-white transition-colors hover:bg-orange-500"
          href="/register"
        >
          ثبت نام نکرده‌ای؟
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
