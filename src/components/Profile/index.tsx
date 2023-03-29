import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
/* Components */
import LinkButton from '@/components/Elements/LinkButton'
import { TwitterSvg } from '@/components/Elements/Svg'
/* Const */
import { AUTHOR, PAGE, TWITTER } from '@/const/index'
import {
  ARIA_LABEL,
  IMAGE,
  DESCRIPTION,
  DECORATION,
  BUTTON_LABEL,
  ICON,
} from './const'

const Profile: FC = () => (
  <div
    className="border border-gray-border p-4 text-center"
    aria-label={ARIA_LABEL.PROFILE}
  >
    <div className="mx-auto h-[120px] w-[120px] overflow-hidden rounded-full">
      <Link href={PAGE.PROFILE}>
        <Image
          src={IMAGE.PATH}
          alt={IMAGE.ALT}
          width={IMAGE.WIDTH}
          height={IMAGE.HEIGHT}
          className="duration-300 hover:scale-110"
        />
      </Link>
    </div>

    <span className="mx-auto  mt-4 block text-base text-gray-text-t3">
      {AUTHOR.NAME}
    </span>
    <span className="mx-auto text-sm text-gray-text-t2">{AUTHOR.COPY}</span>

    <div className="mt-6 text-left text-[14px] text-gray-text-t3">
      {DESCRIPTION.map((v) => (
        <ul key={v.LABEL} className="mt-3 pl-5">
          <li>
            {DECORATION.LABEL}
            {v.LABEL}
            <ul className="mt-2 pl-3">
              {v.ITEMS.map((v) => (
                <li key={v} className="leading-normal">
                  {DECORATION.ITEM}
                  {v}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      ))}
    </div>

    <div className="mt-5">
      <LinkButton href={PAGE.PROFILE}>{BUTTON_LABEL}</LinkButton>
    </div>

    <div className="mt-5 flex justify-center">
      <Link href={TWITTER.URL} target="_blank">
        <TwitterSvg
          height={ICON.HEIGHT}
          width={ICON.WIDTH}
          color={ICON.COLOR}
        />
      </Link>
    </div>
  </div>
)

export default Profile
export * from './const'
