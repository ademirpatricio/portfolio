import { useEffect } from 'react'

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — Ademir Patrício` : 'Ademir Patrício | Product Designer · UX · Design Systems'
  }, [title])
}
