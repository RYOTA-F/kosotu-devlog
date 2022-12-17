import styled from '@emotion/styled'
/* Const */
import { COLOR, SIZE } from '@/const/index'
import { IMAGE } from './const'

export const ProfileWrapper = styled.div`
  padding: ${SIZE.SPACE.X16};
  border: 1px solid ${COLOR.GRAY_SCALE.GRAY.BORDER_1};
  text-align: center;
`

export const ImageWrapper = styled.button`
  height: ${IMAGE.HEIGHT}px;
  width: ${IMAGE.WIDTH}px;
  border-radius: 50%;
  overflow: hidden;
  border: none;
  cursor: pointer;
`

export const Name = styled.span`
  display: block;
  margin: ${SIZE.SPACE.X16} auto 0;
  text-align: center;
  color: ${COLOR.GRAY_SCALE.GRAY.TEXT_1};
  font-size: ${SIZE.FONT.X14};
`

export const Copy = styled(Name)`
  margin-top: ${SIZE.SPACE.X4};
  color: ${COLOR.GRAY_SCALE.GRAY.TEXT_2};
  font-size: ${SIZE.FONT.X12};
`

export const DescriptionWrapper = styled.div`
  margin-top: ${SIZE.SPACE.X24};
  color: ${COLOR.GRAY_SCALE.GRAY.TEXT_1};
  font-size: ${SIZE.FONT.X14};
  text-align: left;
`

export const DescriptionList = styled.ul`
  list-style: none;
  padding-inline-start: ${SIZE.SPACE.X20};
`
export const DescriptionLabel = styled.li`
  ::before {
    content: '■ ';
  }
`

export const DescriptionItemList = styled.ul`
  margin-top: ${SIZE.SPACE.X8};
  list-style: none;
  padding-inline-start: ${SIZE.SPACE.X12};
`

export const DescriptionItem = styled.li`
  line-height: 1.5rem;

  ::before {
    content: '・ ';
  }
`

export const ButtonWrapper = styled.div`
  margin-top: ${SIZE.SPACE.X20};
`
