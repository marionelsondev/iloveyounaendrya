import { Button } from "@/components/ui/button"
import { Heart, Mail } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'

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
            descricao: "Imagem 1"
        },
        {
            imagem: imagem2,
            descricao: "Imagem 2"
        },
        {
            imagem: imagem3,
            descricao: "Imagem 3"
        },
        {
            imagem: imagem4,
            descricao: "Imagem 4"
        },
        {
            imagem: imagem5,
            descricao: "Imagem 5"
        }
    ]

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
                <div className="max-w-xl mx-auto">
                    <h2 className="playfair text-4xl font-bold text-center mb-8 text-rosa">Você</h2>
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay, EffectFade]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
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
                                            className="w-full h-[600px] object-cover"
                                        />
                                        <div className="bg-white/90 backdrop-blur-sm p-6 w-full">
                                            <p className="playfair text-sm md:text-xl font-bold text-rosa mb-4">
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

            <section className="mb-24">
                <div className="max-w-2xl mx-auto">
                    <h2 className="playfair text-4xl font-bold text-center mb-8 text-rosa">Por Que Você é Especial</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-pink-50 p-6 rounded-lg shadow-md transform rotate-1 transition-all duration-300 hover:rotate-0 hover:-translate-y-2 border-t-4 border-rosa">
                            <p className="playfair text-xl font-bold mb-3 text-black">Seu sorriso</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-pink-50 p-6 rounded-lg shadow-md transform rotate-1 transition-all duration-300 hover:rotate-0 hover:-translate-y-2 border-t-4 border-rosa">
                            <p className="playfair text-xl font-bold mb-3 text-black">Seu sorriso</p>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-pink-50 p-6 rounded-lg shadow-md transform rotate-1 transition-all duration-300 hover:rotate-0 hover:-translate-y-2 border-t-4 border-rosa">
                            <p className="playfair text-xl font-bold mb-3 text-black">Seu sorriso</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Index
