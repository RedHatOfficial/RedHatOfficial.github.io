import { useEffect, useState } from 'react'
import '@rhds/elements/rh-icon/rh-icon.js'

function ThemeToggle({ slot }) {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'light',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const nextTheme = theme === 'light' ? 'dark' : 'light'

  return (
    <button
      type="button"
      slot={slot}
      className="theme-toggle"
      aria-label={`Switch to ${nextTheme} mode`}
      onClick={() => setTheme(nextTheme)}
    >
      <rh-icon set="ui" icon={`${theme}-mode`} aria-hidden="true"></rh-icon>
    </button>
  )
}

export default ThemeToggle
