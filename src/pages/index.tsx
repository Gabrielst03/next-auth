
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

import { FcGoogle } from "react-icons/fc";

import {signIn} from 'next-auth/react'


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Card className='w-[400px] h-[450px]'>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Preencha seus dados.</CardDescription>
        </CardHeader>

        <CardContent className='space-y-4'>
          <div className="flex flex-col gap-1">
            <Label>Email</Label>
            <Input type={'email'} placeholder='seuemail@gmail.com'/>
          </div>
          <div className="flex flex-col gap-1">
            <Label>Senha</Label>
            <Input type={'password'} placeholder='**********'/>
          </div>

          <Button className='w-full'>Entrar</Button>
          <Button onClick={() => signIn('google', {
            callbackUrl: '/home'
          })} className='w-full gap-2' variant={'outline'}>
            <FcGoogle fontSize={20}/> Entrar com Google</Button>
        </CardContent>
      </Card>
    </div>
  )
}
