import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaReact, FaShoppingCart} from 'react-icons/fa'; // Importa los iconos sociales
import { Card, CardHeader, CardBody, CardFooter, Link } from '@nextui-org/react';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col py-4 md:py-6 items-center justify-center p-10">
      <div className="container max-w-3xl flex-1">
      <nav className="container sticky top-0 z-50 mb-1 flex w-full max-w-4xl items-center justify-between bg-neutral-100/80 py-4 backdrop-blur-md dark:bg-neutral-900/80 md:mx-[-25px] md:px-[25px]">
      <a href="https://youssefportfolio-rouge.vercel.app" className="">YoussefAKQ</a>
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/YoussefAKQ"
              className="hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/youssef-alexander-khalifa-quispe-622a6b2bb/"
              className="hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/youssefakq/"
              className="hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://x.com/YoussefAKQ"
              className="hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
            >
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </nav>

        <div className="container max-w-4xl flex-1">
          <b className="text-xl">Sobre mí</b>
          <p className="mt-4 text-sm">
            Hey! Soy Youssef. Tengo 20 años y estoy estudiando programación. Actualmente, estoy en mi segundo año de un ciclo superior de Desarrollo de Aplicaciones en Madrid, España.
          </p>
        </div>

        <div className="container max-w-4xl flex-1 flex flex-col space-y-4 delay-100 duration-500 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards">
          <br />
          <b className="text-xl">Proyectos</b>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="relative flex flex-col rounded-md border-[1px] border-neutral-300 px-2 py-2 shadow-sm dark:border-neutral-800 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50">
              <Card className="max-w-[400px] text-sm ">
                <CardHeader className="flex gap-2 p-1">
                <FaShoppingCart className="text-2xl" />
                  <div className="flex flex-col">
                    <Link
                      isExternal
                      showAnchorIcon
                      href="https://github.com/YoussefAKQ/SmartCart"
                      className="flex justify-between items-center w-full"
                    >
                      <b className="text-1xl">SmartCart</b>
                    </Link>
                  </div>
                </CardHeader>

                <CardBody className="p-2 text-sm">
                  <p>
                    SmartCart es una app para planificar compras, encontrar opciones económicas y recibir recomendaciones de recetas hecha en React Native
                  </p>
                </CardBody>

                <CardFooter className="p-2">
                  <FaReact className="text-2xl" />
                </CardFooter>
              </Card>
            </div>
            
          </div>
        </div>
        <div className="container max-w-4xl flex-1 flex flex-col space-y-4 delay-100 duration-500 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards">
          <br />
          <b className="text-xl">Skills</b>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 ">
          <div className="text-xs md:text-sm text-sm items-center justify-center relative flex flex-col rounded-md border-[1px] border-neutral-300 px-2 py-2 shadow-sm dark:border-neutral-800 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50">
              Java
            </div>
            <div className="text-xs md:text-sm text-sm items-center justify-center relative flex flex-col rounded-md border-[1px] border-neutral-300 px-2 py-2 shadow-sm dark:border-neutral-800 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50">
              Python
            </div>
            <div className="text-xs md:text-sm text-sm items-center justify-center relative flex flex-col rounded-md border-[1px] border-neutral-300 px-2 py-2 shadow-sm dark:border-neutral-800 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50">
              MySQL
            </div>
            <div className="text-xs md:text-sm text-sm items-center justify-center relative flex flex-col rounded-md border-[1px] border-neutral-300 px-2 py-2 shadow-sm dark:border-neutral-800 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50">
              React Native
            </div>
            <div className="text-xs md:text-sm text-sm items-center justify-center relative flex flex-col rounded-md border-[1px] border-neutral-300 px-2 py-2 shadow-sm dark:border-neutral-800 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50">
              Android Studio Java
            </div>
            <div className="text-xs md:text-sm text-sm items-center justify-center relative flex flex-col rounded-md border-[1px] border-neutral-300 px-2 py-2 shadow-sm dark:border-neutral-800 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50">
              Visual Basic .NET
            </div>
            <div className="text-xs md:text-sm text-sm items-center justify-center relative flex flex-col rounded-md border-[1px] border-neutral-300 px-2 py-2 shadow-sm dark:border-neutral-800 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50">
              HTML + CSS
            </div>
            <div className="text-xs md:text-sm text-sm items-center justify-center relative flex flex-col rounded-md border-[1px] border-neutral-300 px-2 py-2 shadow-sm dark:border-neutral-800 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50">
              JavaScript
            </div>
            <div className="text-xs md:text-sm text-sm items-center justify-center relative flex flex-col rounded-md border-[1px] border-neutral-300 px-2 py-2 shadow-sm dark:border-neutral-800 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50">
              Git
            </div>
            <div className="text-xs md:text-sm text-sm items-center justify-center relative flex flex-col rounded-md border-[1px] border-neutral-300 px-2 py-2 shadow-sm dark:border-neutral-800 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50">
              NextJS
            </div>
          </div>
        </div>
      </div>
      <footer className="container mt-10 flex items-center max-w-4xl flex-col items-center justify-center space-y-1 md:flex-col md:items-center md:justify-center md:space-y-1">
        <div className="flex items-center space-x-1 text-sm md:text-md">
            <h2>YoussefAKQ</h2>
            <span className="text-gray-500 dark:text-gray-400">-</span>
            <p>2025</p>
        </div>
      </footer>
    </main>
  );
}
