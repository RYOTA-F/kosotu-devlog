import { FC } from 'react'
/* Const */
import { ARIA_LABEL } from './const'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'

const HamburgerMenu: FC = () => {
  const { isViewSidenav, onChangeIsViewSidenav } = useCommonData()

  return (
    <button
      onClick={onChangeIsViewSidenav}
      className="absolute top-0 right-0 bg-transparent"
      aria-label={ARIA_LABEL}
    >
      <div className="relative w-[50px] h-[50px]">
        <span
          className="inline-block absolute left-[14px] h-[2px] rounded bg-white w-[45%] transition-all duration-500"
          style={
            isViewSidenav
              ? { top: '17px' }
              : {
                  top: '16px',
                  left: '16px',
                  transform: 'translateY(6px) rotate(-45deg)',
                  width: '40%',
                }
          }
        />
        <span
          className="inline-block absolute left-[14px] h-[2px] rounded bg-white w-[45%] transition-all duration-500"
          style={isViewSidenav ? { top: '24px' } : { opacity: 0 }}
        />
        <span
          className="inline-block absolute left-[14px] h-[2px] rounded bg-white w-[45%] transition-all duration-500"
          style={
            isViewSidenav
              ? { top: '31px' }
              : {
                  top: '16px',
                  left: '16px',
                  transform: 'translateY(6px) rotate(45deg)',
                  width: '40%',
                }
          }
        />
      </div>
    </button>
  )
}

export default HamburgerMenu
export * from './const'
