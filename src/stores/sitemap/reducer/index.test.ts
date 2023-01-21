import {
  sitemapReducer,
  initialSitemapState,
  SITEMAP_ACTION_TYPES,
  ISitemapActions,
} from '../'
import { sitemapStateMock } from '@/stores/__mocks__/sitemap/mock'

describe('sitemapReducer', () => {
  describe(`${SITEMAP_ACTION_TYPES.UPDATE_SITEMAP}`, () => {
    test('sitemap が更新される', () => {
      const action: ISitemapActions = {
        type: SITEMAP_ACTION_TYPES.UPDATE_SITEMAP,
        payload: sitemapStateMock,
      }

      expect(sitemapReducer(initialSitemapState, action)).toEqual({
        ...initialSitemapState,
        sitemap: action.payload,
      })
    })
  })
})
