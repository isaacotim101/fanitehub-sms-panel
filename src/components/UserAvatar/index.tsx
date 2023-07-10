/* eslint-disable @next/next/no-img-element */
// Why disabled:
// avatars.dicebear.com provides svg avatars
// next/image needs dangerouslyAllowSVG option for that

import React, { ReactNode } from 'react'

type Props = {
  username: string
  avatar?: string | null
  api?: string
  className?: string
  children?: ReactNode
}

export default function UserAvatar({
  username,
  avatar = null,
  api = 'avataaars',
  className = '',
  children,
}: Props) {
  const avatarImage =
    avatar ?? `https://pbs.twimg.com/profile_images/1633213881823772673/nWE9IOPh_400x400.jpg`

  return (
    <div className={className}>
      <img
        src={avatar}
        alt={username}
        className="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800"
      />
      {children}
    </div>
  )
}
