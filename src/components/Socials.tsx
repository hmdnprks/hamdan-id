import { GitHub, Linkedin, Twitter, Mail, Instagram } from "react-feather";

export default function SocialCTA() {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
        I’m always open to collaboration, chatting about tech, or just geeking out. Feel free to reach out or follow me online.
      </p>

      <div className="flex justify-center gap-6 text-primary">
        <a
          href="https://github.com/hmdnprks"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-dark transition"
        >
          <GitHub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/hamdanprakoso"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-dark transition"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://x.com/htreeve"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-dark transition"
        >
          <Twitter size={24} />
        </a>
        <a
          href="https://instagram.com/hamdanpe"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-dark transition"
        >
          <Instagram size={24} />
        </a>
        <a
          href="mailto:hello@hamdan.id"
          aria-label="Email"
          className="hover:text-dark transition"
        >
          <Mail size={24} />
        </a>
      </div>
    </section>
  );
}