import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <Section>
    {/* <FooterCopyright site_name={AppConfig.site_name} /> */}
    <div className="border-t-[1px] pt-2">
      Reach out to me at{' '}
      <a href="mailto:torstein@korten.no" className="text-cyan-500 underline">
        torstein@korten.no
      </a>{' '}
      💌
    </div>
  </Section>
);

export { Footer };
