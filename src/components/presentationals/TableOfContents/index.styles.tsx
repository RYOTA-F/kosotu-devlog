import styled from '@emotion/styled'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const Wrapper = styled.ul`
  width: 90%;
  padding: ${SIZE.SPACE.X32};
  background: linear-gradient(
    -45deg,
    transparent 25%,
    hsla(0, 0%, 78%, 0.15) 25%,
    hsla(0, 0%, 78%, 0.15) 50%,
    transparent 50%,
    transparent 75%,
    hsla(0, 0%, 78%, 0.15) 75%,
    hsla(0, 0%, 78%, 0.15)
  );
  background-clip: padding-box;
  background-size: 4px 4px;
  border-bottom: 4px double hsla(0, 0%, 78%, 0.5);
  border-top: 4px double hsla(0, 0%, 78%, 0.5);
  color: ${COLOR.GRAY_SCALE.GRAY.TEXT_1};
`

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLOR.GRAY_SCALE.GRAY.TEXT_1};
  font-size: ${SIZE.FONT.X18};
  font-weight: 500;
`

export const ListSvgWrapper = styled.span`
  margin: ${SIZE.SPACE.X4} ${SIZE.SPACE.X8} 0 0;
`

export const List = styled.ul`
  margin-top: ${SIZE.SPACE.X16};
`

export const ListItem = styled.li`
  :before {
    content: '・|  ';
    opacity: 0.7;
    color: ${COLOR.BLUE_GROUP.MAIN};
  }
`

export const ListLink = styled.a`
  color: ${COLOR.GRAY_SCALE.GRAY.TEXT_1};
  text-decoration: none;

  :hover {
    opacity: 0.6;
  }
`

export const ListH2 = styled(ListItem)`
  margin: ${SIZE.SPACE.X16} 0 ${SIZE.SPACE.X12};
  padding-left: ${SIZE.SPACE.X8};
`
export const ListH3 = styled(ListItem)`
  margin: ${SIZE.SPACE.X12} 0;
  padding-left: ${SIZE.SPACE.X40};
`
