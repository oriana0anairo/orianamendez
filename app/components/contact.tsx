export default function Contact() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-6">Contacto</h2>

      <p className="text-gray-400 mb-4">Puedes contactarme por:</p>

      <div className="flex justify-center gap-4">
        <a href="#" className="text-indigo-400">
          LinkedIn
        </a>
        <a href="#" className="text-indigo-400">
          GitHub
        </a>
        <a href="mailto:tu@email.com" className="text-indigo-400">
          Email
        </a>
      </div>
    </section>
  );
}
