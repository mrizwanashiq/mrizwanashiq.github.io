const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div className="top-0 right-0 p-2 md:p-5 fixed z-50">
      <input id="toggle" className="toggle" type="checkbox" aria-label="dark mode toggle" value={darkMode} onChange={e => setDarkMode(!darkMode)}/>
    </div>
  )
}

export default DarkModeToggle;
