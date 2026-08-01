import { ExternalLink } from "@/app/components/ui/external-link";
import { contactLinks, profile } from "@/app/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between md:px-12 lg:px-20">
        <p>
          © {currentYear} {profile.name}. Portafolio profesional.
        </p>

        <ul className="flex flex-wrap gap-5">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <ExternalLink
                href={link.href}
                ariaLabel={link.description}
                className="transition hover:text-fuchsia-200"
              >
                {link.label}
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
