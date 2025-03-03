"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
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
        <div>
          <input
            className="w-full rounded-md border border-gray-300 p-2"
            placeholder="نام کاربری"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            {...register("userName", {
              required: "نام کاربری الزامی است",
              maxLength: {
                value: 20,
                message: "حداکثر 20 کاراکتر مجاز است",
              },
              minLength: {
                value: 3,
                message: "حداقل 3 کاراکتر الزامی است",
              },
            })}
          />
          {errors.userName && (
            <p className="mt-2 text-sm text-red-500">
              {errors.userName.message}
            </p>
          )}
        </div>
        <div>
          <input
            className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500"
            placeholder="نام نمایشی"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            {...register("displayName", {
              required: "نام نمایشی الزامی است",
              maxLength: {
                value: 20,
                message: "حداکثر 20 کاراکتر مجاز است",
              },
              minLength: {
                value: 3,
                message: "حداقل 3 کاراکتر الزامی است",
              },
            })}
          />
          {errors.displayName && (
            <p className="mt-2 text-sm text-red-500">
              {errors.displayName.message}
            </p>
          )}
        </div>
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
            autoComplete="new-password"
            autoCorrect="off"
            spellCheck="false"
            {...register("password", {
              required: "رمز عبور الزامی است",
              minLength: {
                value: 8,
                message: "رمز عبور باید حداقل 8 کاراکتر باشد",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                message: "رمز عبور باید شامل حروف بزرگ، کوچک و اعداد باشد",
              },
            })}
          />
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>
        {/* تکرار رمز عبور */}
        <div className="flex flex-col gap-2">
          <input
            className={`w-full rounded-md border p-2 transition-colors outline-none focus:border-blue-500`}
            placeholder="تکرار رمز عبور"
            type="password"
            autoComplete="new-password"
            autoCorrect="off"
            spellCheck="false"
            {...register("confirmPassword", {
              required: "تکرار رمز عبور الزامی است",
              validate: (value) =>
                value === watch("password") || "رمز عبور مطابقت ندارد",
            })}
          />
          {errors.confirmPassword && (
            <span className="text-sm text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        <button
          className="w-full rounded-md bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600"
          type="submit"
        >
          ثبت نام
        </button>
        <Link
          className="block w-full rounded-md bg-orange-400 p-2 text-center text-white transition-colors hover:bg-orange-500"
          href="/login"
        >
          حساب کاربری دارم
        </Link>
      </form>
    </div>
  );
};

export default RegisterForm;
