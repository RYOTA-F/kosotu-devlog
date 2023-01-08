import { css } from '@emotion/react'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const blogCard = css`
  .blogCard {
    display: flex;
    align-items: center;
    padding: ${SIZE.SPACE.X24};
    border-radius: 2px;
    color: ${COLOR.BLUE_GROUP.MAIN};
    transition: 0.3s;
    box-shadow: 0 1px 3px 1px rgb(0 0 0 / 8%);
    position: relative;

    :hover {
      box-shadow: 0 2px 6px 2px rgb(0 0 0 / 16%);
    }

    &__img {
      width: 20%;
    }

    &__content {
      display: block;
      margin-left: ${SIZE.SPACE.X24};
    }

    &__title {
      display: block;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      max-width: 100%;
      text-overflow: ellipsis;
      color: ${COLOR.GRAY_SCALE.GRAY.TEXT_1};
      line-height: 1.5;
      font-weight: bold;
    }

    &__description {
      display: block;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      margin-top: ${SIZE.SPACE.X12};
      color: ${COLOR.GRAY_SCALE.GRAY.TEXT_3};
      font-size: ${SIZE.FONT.X14};
      line-height: 1;
    }

    &__site {
      position: absolute;
      bottom: 0;
      right: 8px;
      color: ${COLOR.GRAY_SCALE.GRAY.TEXT_3};
      font-size: ${SIZE.FONT.X8};
    }
  }
`
