import Image from 'next/image'
import React from 'react'

interface Icons {
  iconPath: string
}

export default function HeaderIcons({ iconPath }: Icons) {
  return <Image src={iconPath} alt="" width={32} height={32} />
}
