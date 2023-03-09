/**
 * ContextのIDをチェック
 */
export const checkContextId = (id: string | string[] | undefined) => {
  return id && Array.isArray(id) ? id[0] : id ?? ''
}
