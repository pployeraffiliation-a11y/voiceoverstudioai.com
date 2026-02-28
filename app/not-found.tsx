export default function NotFound() {
  return (
    <section className="section">
      <div className="lang-block active" data-lang="en">
        <h1>Page not found</h1>
        <p>The page you’re looking for doesn’t exist or was moved.</p>
        <div style={{ marginTop: '12px' }}>
          <a className="secondary-link" href="/">
            Go back home
          </a>
        </div>
      </div>
    </section>
  );
}

