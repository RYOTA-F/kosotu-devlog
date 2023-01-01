import { css } from '@emotion/react'
/* Const */
import { COLOR, SIZE } from '@/const/index'

export const blogCard = css`
  .blogCard {
    display: flex;
    padding: ${SIZE.SPACE.X24};
    border-radius: 2px;
    box-shadow: 0 1px 3px 1px rgb(0 0 0 / 8%);

    &__img {
      width: 20%;
    }

    &__content {
      margin-left: ${SIZE.SPACE.X12};
    }

    &__title {
      max-width: 100%;
      text-overflow: ellipsis;
      color: ${COLOR.GRAY_SCALE.GRAY.TEXT_1};
      line-height: 1.5;
      font-weight: bold;
    }

    &__description {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      padding: 0 ${SIZE.SPACE.X16};
      color: ${COLOR.GRAY_SCALE.GRAY.TEXT_1};
    }
  }
`
