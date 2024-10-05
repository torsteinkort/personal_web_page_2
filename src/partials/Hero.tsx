import { HeroAvatar, HeroSocial, Section } from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={<>Hi, I am Torstein 👋</>}
      description={
        <>
          I study Computer Science at NTNU. I like programming, AI, football,
          running and mountain biking (as well as a few other things). On this
          page I will experiment with various technologies, and showcase some of
          my projects.
          <br />
          <br />
          Feel free to explore!
          <br />
          <br />
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            malesuada
          </a>{' '}
          nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet,{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            consectetur
          </a>{' '}
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. */}
        </>
      }
      avatar={
        <img
          className="h-80 w-64 rounded-md border-4 border-gray-200"
          src="/assets/images/profile-img-cropped.jpg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a> */}
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a> */}
          <a href="https://www.linkedin.com/in/torstein-korten-0a72ba227/">
            <HeroSocial
              src="/assets/images/linkedin-svgrepo-com.svg"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://github.com/torsteinkort">
            <HeroSocial
              src="/assets/images/github-142-svgrepo-com.svg"
              alt="Github icon"
            />
          </a>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a> */}
        </>
      }
    />
  </Section>
);

export { Hero };
