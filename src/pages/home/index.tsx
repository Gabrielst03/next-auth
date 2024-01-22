import { Avatar, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

import {useSession} from 'next-auth/react'

export default function Home() {

    const {data, status} = useSession();

  return (
    <div className='flex flex-col min-h-screen items-center justify-center'>
        <Avatar>
            <AvatarImage src={`${data?.user?.image}`}/>
        </Avatar>
        <p>{data?.user?.name}</p>
        <p>{data?.user?.email}</p>
    </div>
  )
}
