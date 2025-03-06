import { Button } from "@/components/ui/button"
import { Heart, Mail } from "lucide-react"

const Index = () => {

  return (
    <div className="min-h-screen px-4 py-8 md:py-12 flex flex-col items-center justify-start text-center bg-gradient-to-b from-pink-50 via-pink-100 to-pink-200">
        <section className="flex flex-col items-center text-center mb-24">
            <div className="max-w-3xl">
                <div className="inline-flex items-center gap-1 bg-white/50 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
                    <Heart className="text-rosa-escuro" size={16} />
                    <p className="text-sm">Feliz Dia da Mulher</p>
                </div>
                <h1 className="playfair text-4xl md:text-6xl font-bold mb-6 text-rosa">Para Minha Naendrya</h1>
                <p className="montserrat text-lg md:text-xl opacity-70 max-w-2xl mx-auto leading-relaxed">
                    Neste dia especial, quero celebrar você e todo o amor que você traz para minha vida
                </p>
                <Button className="bg-rosa-escuro hover:bg-rosa text-white mt-12 p-6">
                    <Mail size={16} />
                    Abrir Carta
                </Button>
            </div>
        </section>

        <section className="mb-24">
            <div className="max-w-3xl">
                <h2 className="playfair text-4xl font-bold text-center mb-12">Você</h2>
            </div>
        </section>
    </div>
  )
}

export default Index
