'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import ErrorField from './ErrorField'

type FormValues = {
  firstName: string,
  lastName: string,
  email: string,
  tel: string,
  message: string,
  googleReCaptchaToken: string
}


const MailForm = () => {
  const formStyle = "w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring";
  const mailValidate = {
    value: /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
    message: 'メールアドレスの入力に誤りがあります。'
  };
  const telValidate = {
    value: /^0\d{2,3}-\d{1,4}-\d{4}$/,
    message: '電話番号の入力に誤りがあります。'
  };
  const japaneseValidate = {
    value: /^[ぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠]+$/,
    message: '迷惑メール対策として日本語以外の入力ができなくなっております。お手数ですがカタカナ等でご入力をお願い致します。'
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onSubmit' });
  const { executeRecaptcha } = useGoogleReCaptcha()

  const onSubmit = handleSubmit(async (data) => {
    if (!executeRecaptcha) return
    const token = await executeRecaptcha('submit')
    data.googleReCaptchaToken = token


    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    });


    const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? '', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })

  })

  return (

    <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
      <div>
        <label htmlFor="firstName" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">姓*</label>
        <input
          type='text'
          id="firstName"
          className={formStyle}
          {...register('firstName', {
            required: '苗字が未入力です。',
            pattern: japaneseValidate

          })}
        />

        {errors.firstName && (<ErrorField>{errors.firstName.message}</ErrorField>)}
      </div>

      <div>
        <label htmlFor="lastName" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">名*</label>
        <input
          type='text'
          id="lastName"
          className={formStyle}
          {...register('lastName', {
            required: 'お名前が未入力です。',
            pattern: japaneseValidate
          })}
        />

        {errors.lastName && (<ErrorField>{errors.lastName.message}</ErrorField>)}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email*</label>
        <input
          id="email"
          className={formStyle}
          {...register('email', {
            required: 'メールアドレスが未入力です。',
            pattern: mailValidate
          })}
        />
        {errors.email && (<ErrorField>{errors.email.message}</ErrorField>)}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="tel" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">電話番号*</label>
        <input
          type='tel'
          id="tel"
          className={formStyle}
          {...register('tel', {
            required: '電話番号が未入力です。',
            pattern: telValidate
          })}
        />
        {errors.tel && (<ErrorField>{errors.tel.message}</ErrorField>)}

      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">メッセージ*</label>
        <textarea id="message" className={"h-64 " + formStyle} {...register('message', { required: 'メッセージを入力してください', pattern: /[ぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠]+/ })}></textarea>
        {errors.message && (<ErrorField>{errors.message.message}</ErrorField>)}
      </div>

      <div className="flex items-center justify-between sm:col-span-2">
        <input type='submit' className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base" value='送信' />

        <span className="text-sm text-gray-500">*Required</span>
      </div>

      <p className="text-xs text-gray-400">By signing up to our newsletter you agree to our <a href="#" className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>.</p>
    </form>
  )
}

export default MailForm