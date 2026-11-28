"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import Navbar from "../components/Navbar";
import AuthField from "../components/Auth/AuthField";
import {ApiError, register} from "@/lib/api";
import {useAuthStore} from "@/store/useAuthStore";

const PASSWORD_MIN = 8;
const PASSWORD_MAX = 72;
const REDIRECT_TO = "/problemset";

type Fields = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type FieldErrors = Partial<Record<keyof Fields, string>>;

const validate = (f: Fields): FieldErrors => {
  const errors: FieldErrors = {};
  if (!f.firstName.trim()) errors.firstName = "Ismingizni kiriting";
  if (!f.lastName.trim()) errors.lastName = "Familiyangizni kiriting";
  if (!/^\S+@\S+\.\S+$/.test(f.email.trim()))
    errors.email = "To'g'ri email kiriting";
  if (f.password.length < PASSWORD_MIN)
    errors.password = `Parol kamida ${PASSWORD_MIN} ta belgidan iborat bo'lishi kerak`;
  else if (f.password.length > PASSWORD_MAX)
    errors.password = `Parol ${PASSWORD_MAX} ta belgidan oshmasligi kerak`;
  if (f.confirmPassword !== f.password)
    errors.confirmPassword = "Parollar mos kelmadi";
  return errors;
};

const SignupPage = () => {
  const router = useRouter();
  const {user, hydrated, setAuth} = useAuthStore();

  const [fields, setFields] = useState<Fields>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Already logged in: nothing to do here.
  useEffect(() => {
    if (hydrated && user) router.replace(REDIRECT_TO);
  }, [hydrated, user, router]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFields((prev) => ({...prev, [name]: value}));
    setErrors((prev) => ({...prev, [name]: undefined}));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const validationErrors = validate(fields);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    try {
      const {token, user} = await register({
        firstName: fields.firstName.trim(),
        lastName: fields.lastName.trim(),
        email: fields.email.trim(),
        password: fields.password,
      });
      setAuth(token, user);
      router.push(REDIRECT_TO);
    } catch (err) {
      if (err instanceof ApiError && err.status === 409) {
        setErrors({email: "Bu email allaqachon ro'yxatdan o'tgan"});
      } else {
        setFormError(err instanceof Error ? err.message : "Xatolik yuz berdi");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen bg-[#0A0A0A] text-white'>
      <Navbar />
      <div className='flex justify-center px-6 pt-32 pb-16'>
        <form
          onSubmit={onSubmit}
          noValidate
          className='w-full max-w-md rounded-xl border border-[#2A2A2A] bg-[#141414] p-8 flex flex-col gap-4'>
          <div className='mb-2'>
            <h1 className='text-3xl font-bold'>Ro&apos;yxatdan o&apos;tish</h1>
            <p className='mt-1 text-sm text-[#888888]'>
              Masalalar yechish va natijalaringizni saqlash uchun hisob yarating.
            </p>
          </div>

          <div className='grid grid-cols-2 gap-3'>
            <AuthField
              label='Ism'
              name='firstName'
              autoComplete='given-name'
              value={fields.firstName}
              onChange={onChange}
              error={errors.firstName}
            />
            <AuthField
              label='Familiya'
              name='lastName'
              autoComplete='family-name'
              value={fields.lastName}
              onChange={onChange}
              error={errors.lastName}
            />
          </div>
          <AuthField
            label='Email'
            name='email'
            type='email'
            autoComplete='email'
            placeholder='you@example.com'
            value={fields.email}
            onChange={onChange}
            error={errors.email}
          />
          <AuthField
            label='Parol'
            name='password'
            type='password'
            autoComplete='new-password'
            value={fields.password}
            onChange={onChange}
            error={errors.password}
          />
          <AuthField
            label='Parolni tasdiqlang'
            name='confirmPassword'
            type='password'
            autoComplete='new-password'
            value={fields.confirmPassword}
            onChange={onChange}
            error={errors.confirmPassword}
          />

          {formError && (
            <p className='rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-400'>
              {formError}
            </p>
          )}

          <button
            type='submit'
            disabled={submitting}
            className='mt-2 h-10 rounded-lg bg-gray-100 font-semibold text-black cursor-pointer hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed'>
            {submitting ? "Yuborilmoqda..." : "Ro'yxatdan o'tish"}
          </button>

          <p className='text-center text-sm text-[#888888]'>
            Hisobingiz bormi?{" "}
            <Link
              href='/login'
              className='text-white hover:underline'>
              Kirish
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
