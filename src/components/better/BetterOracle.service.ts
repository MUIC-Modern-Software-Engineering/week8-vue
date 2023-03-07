export async function ask() {
  const res = await fetch('https://yesno.wtf/api', { method: 'GET' })
  return await res.json()
}
