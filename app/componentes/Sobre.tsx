
export default function Sobre(){
    return (
        <section className="w-full min-h-screen font-roboto bg-[rgb(233,230,225)] p-8 md:p-20 grid grid-cols-1 md:grid-cols-4 gap-8 items-start" id='sobre'>
        
            <aside className="col-span-1 flex flex-col gap-4">
            <img 
                src="/foto.jpg" 
                alt="Foto de perfil"
                className="rounded w-full max-w-[320px] h-auto aspect-square object-cover border-2 border-[#5E8A75] shadow-md"
            />

            <div className="w-full max-w-[320px] bg-[#2B475C] text-white p-5 rounded-lg shadow-md border-l-4 border-[#5E8A75] flex flex-col gap-3">
                <div>
                <span className="text-xs uppercase tracking-wider text-[#5E8A75] font-semibold block">
                    Formação & Status
                </span>
                <p className="text-sm font-semibold mt-0.5">Engenharia da Computação</p>
                <p className="text-xs text-gray-300">6º Período</p>
                </div>

                <div className="border-t border-[#5E8A75]/30 pt-2">
                <span className="text-xs uppercase tracking-wider text-[#5E8A75] font-semibold block">
                    Instituição
                </span>
                <p className="text-sm font-medium">UEMA (Universidade Estadual do Maranhão)</p>
                </div>

                <div className="border-t border-[#5E8A75]/30 pt-2 flex justify-between items-center text-xs text-gray-300">
                <div>
                    <span className="block text-[#5E8A75] font-semibold uppercase text-[10px]">Localização</span>
                    <span>São Luís - MA</span>
                </div>
                <div className="text-right">
                    <span className="block text-[#5E8A75] font-semibold uppercase text-[10px]">Atuação</span>
                    <span>FullStack & Data</span>
                </div>
                </div>
            </div>
            </aside>

            <main className="col-span-1 md:col-span-3 flex flex-col gap-8">
            
            <article className="w-full bg-[#2B475C] rounded-lg p-8 md:p-10 flex flex-col gap-5 shadow-lg">
                <h1 className="font-roboto text-3xl text-white font-bold tracking-wide border-b border-[#5E8A75] pb-3">
                Sobre Mim
                </h1>
                <p className="text-gray-200 leading-relaxed font-light text-base md:text-lg">
                    Sou Julio Cesar, estudante de Engenharia da Computação na UEMA e desenvolvedor focado em Full-Stack, análise de dados e sistemas embarcados. Durante minha trajetória como bolsista PIBITI/FAPEMA no Laboratório de Engenharia Aplicada (LEA), cofundei o Núcleo de Análise de Dados e Recursos Analíticos (NARA) e colaborei na estruturação do Mapa Social do Maranhão junto ao Ministério Público (MPMA). Gosto de construir projetos de ponta a ponta, do hardware à nuvem — integrando desde sensores ESP32 até plataformas em produção — sempre com foco em organização e código limpo. Atualmente, busco oportunidades de estágio.
                </p>
            </article>

            <article className="w-full bg-[#2B475C] rounded-lg p-8 md:p-10 shadow-lg flex flex-col gap-6">
                <h2 className="font-roboto text-2xl text-white font-semibold border-b border-[#5E8A75] pb-3">
                Histórico de Atividades
                </h2>

                <div className="relative border-l-2 border-[#5E8A75] ml-3 flex flex-col gap-8 pl-6">
                
                <div className="relative">
                    <span className="absolute -left-7.75 top-1.5 w-4 h-4 bg-[#5E8A75] rounded-full border-2 border-[#2B475C]"></span>
                    <span className="text-sm font-medium text-[#5E8A75] uppercase tracking-wider">2026 - Presente</span>
                    <h3 className="text-xl font-bold text-white mt-1">Novos Projetos</h3>
                    <p className="text-sm font-medium text-gray-300">NARA / LEA</p>
                    <p className="text-gray-200 text-sm mt-2 leading-relaxed">
                    Desenvolvimento de projetos para análise do ENAMED, segunda etapa do Mapa Social do Maranhão e ampliação do grupo.
                    </p>
                </div>

                <div className="relative">
                    <span className="absolute -left-7.75 top-1.5 w-4 h-4 bg-[#5E8A75] rounded-full border-2 border-[#2B475C]"></span>
                    <span className="text-sm font-medium text-[#5E8A75] uppercase tracking-wider">2025 - 2026</span>
                    <h3 className="text-xl font-bold text-white mt-1">Desenvolvimento de Projetos & NARA</h3>
                    <p className="text-sm font-medium text-gray-300">Projetos Acadêmicos e Pessoais</p>
                    <p className="text-gray-200 text-sm mt-2 leading-relaxed">
                    Entrada como bolsista do projeto do Mapa Social do Maranhão, estruturação de projetos e criação do grupo NARA (Núcleo de Análise de Dados e Recursos Analíticos).
                    Além de desenvolvimento de projetos que misturam hardware e software.
                    </p>
                </div>

                <div className="relative">
                    <span className="absolute -left-7.75 top-1.5 w-4 h-4 bg-[#5E8A75] rounded-full border-2 border-[#2B475C]"></span>
                    <span className="text-sm font-medium text-[#5E8A75] uppercase tracking-wider">2024 - Presente</span>
                    <h3 className="text-xl font-bold text-white mt-1">Graduação em Engenharia da Computação</h3>
                    <p className="text-sm font-medium text-gray-300">Universidade Estadual do Maranhão (UEMA)</p>
                    <p className="text-gray-200 text-sm mt-2 leading-relaxed">
                    Estudo focado em cálculo, arquitetura de computadores, estruturas de dados, algoritmos avançados e sistemas embarcados.
                    </p>
                </div>

                </div>
            </article>

            </main>

        </section>  
    )
}