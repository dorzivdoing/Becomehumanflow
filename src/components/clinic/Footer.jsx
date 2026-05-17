export default function Footer() {
  return (
    <footer className="bg-navy py-8 px-6 text-center">
      <p className="text-white/30 text-sm font-light">
        © {new Date().getFullYear()} דור – פסיכותרפיה גופנית וביוסינתזה. כל הזכויות שמורות.
      </p>
    </footer>
  );
}