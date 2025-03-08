import { Button } from "@/components/ui/button"
import { Heart, Mail } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import imagem1 from '@/assets/naendryacirco.jpg'
import imagem2 from '@/assets/naendryasaudade.jpg'
import imagem3 from '@/assets/naendryavestidoazul.jpg'
import imagem4 from '@/assets/naendryaaniversario.jpg'
import imagem5 from '@/assets/naendryanivertia.webp'

const Index = () => {

    const memorias = [
        {
            imagem: imagem1,
            descricao: "Você de azul no circo... fiquei sem ar quando vi essa foto."
        },
        {
            imagem: imagem2,
            descricao: "Até com saudade você fica linda. Queria estar no lugar desse elefante. (amo essa foto"
        },
        {
            imagem: imagem3,
            descricao: "Esse olhar... e essa boca... me deixam completamente bobo."
        },
        {
            imagem: imagem4,
            descricao: "Toda de rosa e feliz. Exatamente como quero te ver sempre."
        },
        {
            imagem: imagem5,
            descricao: "Perfeita. Não tem outro jeito de descrever. Simplesmente você."
        }
    ]

    return (
        <div className="min-h-screen px-4 py-8 md:py-12 flex flex-col items-center justify-start text-center bg-gradient-to-b from-pink-50 via-pink-100 to-pink-200">
            <section className="flex flex-col items-center text-center mb-16">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-1 bg-white/50 backdrop-blur-sm px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-4 md:mb-6">
                        <p className="text-xs md:text-sm"> 🌷 Feliz Dia da Mulher</p>
                    </div>
                    <h1 className="playfair text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-rosa">Para Minha Naendrya</h1>
                    <p className="montserrat text-base md:text-lg opacity-70 max-w-2xl mx-auto leading-relaxed">
                        Para a mulher que transforma momentos comuns em memórias inesquecíveis.
                    </p>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="bg-rosa-escuro hover:bg-rosa text-white mt-8 md:mt-12 px-4 py-3 md:p-6 animate-bounce text-sm md:text-base">
                                <Mail size={16} className="mr-1 md:mr-2" />
                                Abrir Carta
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-[92%] sm:max-w-[80%] md:max-w-xl bg-white remove-close-icon px-6 md:px-10 py-4 md:py-8 max-h-[90vh] overflow-auto rounded-xl border border-rosa/30">
                            <DialogHeader>
                                <DialogTitle className="playfair text-left text-xl md:text-2xl font-bold text-rosa-escuro">
                                    Para a minha Anjinha!
                                </DialogTitle>
                            </DialogHeader>

                            <div>
                                <div className="text-left">
                                    <p className="leading-relaxed mb-2 text-sm md:text-base">
                                        Meu amor,
                                    </p>
                                    <p className="leading-relaxed text-sm md:text-base mb-2">
                                        Neste Dia das Mulheres, quero te celebrar como faço todos os dias quando te observo em silêncio. Seu olhar me desarma completamente.
                                    </p>
                                    <p className="leading-relaxed text-sm md:text-base mb-2">
                                        Amo seu jeito intenso e como você se entrega por inteiro às coisas que importam. Sua risada, que eu tanto amo ouvir e sempre me faz sorrir junto, ilumina meus dias. Você transforma qualquer lugar só de estar ali.
                                    </p>
                                    <p className="leading-relaxed text-sm md:text-base mb-2">
                                        Sua força não precisa ser anunciada, todo mundo sente. Mesmo com medo, você segue em frente com uma dignidade única. Ver você feliz, com os olhos brilhando, é tudo pra mim.
                                    </p>
                                    <p className="leading-relaxed text-sm md:text-base">
                                        Agradeço a Deus por ter você na minha vida e por cada momento que vivemos juntos. A cada dia, me apaixono mais por você.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="text-end w-full mb-3 md:mb-4">
                                    <p className="playfair font-bold text-rosa-escuro text-lg md:text-xl mb-0 md:mb-1">Com todo meu amor,</p>
                                    <p className="playfair font-bold text-rosa-escuro text-lg md:text-xl">Mário</p>
                                </div>
                                <DialogClose asChild>
                                    <Button className="bg-rosa-escuro hover:bg-rosa text-white text-sm md:text-base py-2 px-3 md:py-3 md:px-4">
                                        <Heart size={16} className="mr-1 md:mr-2" /> Fechar com carinho
                                    </Button>
                                </DialogClose>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </section>

            <section className="mb-12 md:mb-24 w-full">
                <div className="w-full max-w-xl mx-auto">
                    <h2 className="playfair text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8 text-rosa">Você</h2>
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay, EffectFade]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            effect="fade"
                            loop={true}
                            className="bg-white rounded-t-2xl"
                        >
                            {memorias.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative">
                                        <img
                                            src={item.imagem}
                                            alt={`Memória ${index + 1}`}
                                            className="w-full h-[300px] md:h-[450px] lg:h-[600px] object-cover"
                                        />
                                        <div className="bg-white/90 backdrop-blur-sm p-4 md:p-6 w-full">
                                            <p className="playfair text-md md:text-sm lg:text-xl font-bold text-rosa-escuro">
                                                {item.descricao}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className="mb-12 md:mb-24 w-full px-2">
                <div className="w-full max-w-2xl mx-auto">
                    <h2 className="playfair text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8 text-rosa">Por Que Você é Especial</h2>
                    <div className="grid grid-cols-1 gap-4 md:gap-6">
                        <div className="bg-pink-50 p-4 md:p-6 rounded-lg shadow-md transform rotate-0 transition-all duration-300 hover:-rotate-1 hover:-translate-y-2 border-t-4 border-rosa">
                            <p className="leading-relaxed text-sm md:text-md font-bold text-black">Adoro o seu jeito intenso. Isso me faz te admirar cada dia mais.</p>
                        </div>

                        <div className="bg-pink-50 p-4 md:p-6 rounded-lg shadow-md transform rotate-0 transition-all duration-300 hover:-rotate-1 hover:-translate-y-2 border-t-4 border-rosa">
                            <p className="leading-relaxed text-sm md:text-md font-bold text-black">Você ama de verdade. Não tem meio termo, não tem fingimento. É real, é você por inteira.</p>
                        </div>

                        <div className="bg-pink-50 p-4 md:p-6 rounded-lg shadow-md transform rotate-0 transition-all duration-300 hover:-rotate-1 hover:-translate-y-2 border-t-4 border-rosa">
                            <p className="leading-relaxed text-sm md:text-md font-bold text-black">Você não desiste. Mesmo estando com medo, você vai lá e segue em frente. Isso me inspira pra caramba.</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Index
