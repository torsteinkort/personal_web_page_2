import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/" className="text-cyan-500 text-opacity-100">
        <Logo
          icon={
            <svg
              className="mr-1 h-10 w-10 stroke-cyan-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="7" r="4"></circle>
              <path d="M12 14c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z"></path>
            </svg>
          }
          name="Torstein Korten"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Posts</NavMenuItem>
        {/* <NavMenuItem href="https://github.com/torsteinkort">GitHub</NavMenuItem>
        <NavMenuItem href="https://www.linkedin.com/in/torstein-korten-0a72ba227/">
          LinkedIn
        </NavMenuItem> */}
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
