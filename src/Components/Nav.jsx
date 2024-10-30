const Nav = ({ menuItems, scrollToSection, IntroSection, ProjectsSection, ValueSection, BackgroundSection, AboutSection, ContactSection }) => {
  const getSection = (item) => {
    switch (item) {
      case 'Intro':
        return IntroSection;
      case 'Projects':
        return ProjectsSection;
      case 'Value':
        return ValueSection;
      case 'Background':
        return BackgroundSection;
      case 'About':
        return AboutSection;
      case 'Contact':
        return ContactSection;
      default:
        return IntroSection;
    }
  }
  return (
    <aside className='fixed left-0 top-24 bottom-0 w-[200px] mt-9 font-16px border-r-2 border-red-500 font-bold text-white bg-black overflow-y-auto'>
      <nav>
        <ul className="mt-4 px-4 space-y-2">
          {menuItems.map((item) => (
            <li
              onClick={() => {
                const sectionRef = getSection(item);
                scrollToSection(sectionRef);
              }}
              className='font-medium opacity-65 hover:opacity-100 hover:cursor-pointer hover:font-bold border-2 border-green-400' key={item}>{item}</li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Nav