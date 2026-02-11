import { Link } from "react-router-dom";

export const NotFoundPage = () => (
  <section className="page-shell text-center">
    <p className="text-sm uppercase tracking-[0.3em] text-primary">404</p>
    <h1 className="mt-4 text-4xl">Page not found</h1>
    <p className="mt-4 text-muted-foreground">The requested route does not exist in this build.</p>
    <Link to="/" className="mt-8 inline-block rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-black">
      Back to Home
    </Link>
  </section>
);
