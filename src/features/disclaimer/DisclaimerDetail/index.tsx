import { FC } from 'react'
/* Components */
import { H1, H3 } from '@/components/Elements/Heading'
/* Const */
import { DISCLAIMER, ARIA_LABEL } from './const'

const DisclaimerDetail: FC = () => {
  return (
    <div
      className="w-full text-gray-text-t3"
      aria-label={ARIA_LABEL.DISCLAIMER_DETAIL}
    >
      <H1>{DISCLAIMER.TITEL}</H1>
      <p className="my-[60px] leading-[1.8]">{DISCLAIMER.DESCRIPTION}</p>
      {/* コメント */}
      <H3>{DISCLAIMER.COMMENT.TITLE}</H3>
      <div className="leading-[1.8]">
        {DISCLAIMER.COMMENT.CONTENT}
        <ul className="my-8 pl-6">
          {DISCLAIMER.COMMENT.LIST.map((v) => (
            <li key={v} className="relative">
              <span className="absolute -left-5 font-bold">
                {DISCLAIMER.LIST.POINTER}
              </span>
              {v}
            </li>
          ))}
        </ul>
      </div>
      {/* 情報 */}
      <H3>{DISCLAIMER.INFORMATION.TITLE}</H3>
      <div className="leading-[1.8]">{DISCLAIMER.INFORMATION.CONTENT}</div>
      {/* 損害等の責任 */}
      <H3>{DISCLAIMER.RESPONSIBILITY.TITLE}</H3>
      <div className="leading-[1.8]">{DISCLAIMER.RESPONSIBILITY.CONTENT}</div>
      {/* 著作権・肖像権 */}
      <H3>{DISCLAIMER.COPYRIGHT.TITLE}</H3>
      <div className="leading-[1.8]">{DISCLAIMER.COPYRIGHT.CONTENT}</div>
      {/* 無断転載 */}
      <H3>{DISCLAIMER.REPRINT.TITLE}</H3>
      <div className="leading-[1.8]">{DISCLAIMER.REPRINT.CONTENT}</div>
    </div>
  )
}

export default DisclaimerDetail
export * from './const'
