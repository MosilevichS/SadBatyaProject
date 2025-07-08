import type { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../shared/ui/button/Button'
import { Input } from '@/shared/ui/input/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { validateForm } from '@/shared/validation/validateForm'
import { ErrorMessage } from '@/shared/ui/error/ErrorMessage'

interface IForm {
  className?: string
  children?: ReactNode
}

type FormData = {
  name: string
  email: string
  phone: string
}

export default function Form({ children, className }: IForm) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(validateForm),
    mode: 'onChange',
  })

  const onSubmit = (data: FormData) => {
    alert(`Form is successful submitted, ${data.name}!`)
    reset({} as FormData)
  }
  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-5 flex flex-col gap-4 "
      >
        <Input
          name="name"
          placeholder="Name"
          register={register}
          error={errors.name?.message}
        />

        <Input
          name="email"
          type="email"
          placeholder="Email"
          register={register}
          error={errors.email?.message}
        />

        <Input
          name="phone"
          type="tel"
          placeholder="Phone"
          register={register}
          error={errors.phone?.message}
        />

        <Button state={isValid && isSubmitting} children="Submit" />

        {children}
      </form>
    </div>
  )
}
