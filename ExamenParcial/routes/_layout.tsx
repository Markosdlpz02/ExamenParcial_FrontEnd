import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component}: PageProps) {
  
  return (
    <div>
        <header>
            <a href="/">Ir al formulario</a>
        </header>

        <main>
            <Component/>
        </main>

        <footer>
            <p>Copyright Nebrija 2025</p>
        </footer>
     
    </div>
  );
}

