import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import SobreNosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";


export default function Page() {
  return (
    <main>
      <Header />
      <Menu />
      <SobreNosotros />
      <Contacto />
      <Footer />
    </main>
  );
}