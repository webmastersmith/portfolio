export const decodeEmail = () => {
  const e =
    '89-110-74-53-98-50-53-65-99-50-49-112-100-71-104-104-100-88-82-118-76-110-86-122'
  const ascii = e.split('-').map((item) => +item)
  let res = String.fromCharCode(...ascii)
  return atob(res)
}
