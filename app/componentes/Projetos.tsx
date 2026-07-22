
export default function Projetos(){

    const projetos = [
        {
            titulo: "Mapa Social do Maranhão",
            subtitulo: "Parceria MPMA & NARA",
            descricao:
                "Plataforma full-stack de infraestrutura de dados para mapeamento de indicadores sociais do Estado do Maranhão, usada pelo Ministério Público (MPMA) para apoiar análise e tomada de decisões institucionais. Deploy em produção na Railway.",
            tecnologias: ["Next.js", "Spring Boot", "Python (ETL)", "PostgreSQL"],
            linkGithub: "https://github.com/GRUPO-NARA/mapa-social-do-maranhao",
            linkDeploy: "https://mapasocialdomaranhao.up.railway.app/",
        },
        {
            titulo: "Tempo Ilha",
            subtitulo: "Visualização Climática em Tempo Real",
            descricao:
                "Aplicação web que exibe dados meteorológicos em tempo real e o histórico climatológico da Ilha do Maranhão (São Luís, São José de Ribamar, Paço do Lumiar e Raposa), com base na localização atual do usuário e consumindo a API pública Open-Meteo.",
            tecnologias: ["Next.js", "Open-Meteo API", "Data Viz"],
            linkGithub: "https://github.com/JulioCesra/tempo-ilha",
            linkDeploy: "https://tempo-ilha.vercel.app/",
        },
        {
            titulo: "VizuTemp",
            subtitulo: "Monitoramento com ESP32",
            descricao:
                "Sistema de coleta e visualização de dados de temperatura com ESP32, parte de um recorte do meu TCC sobre detecção de anomalias comportamentais. Firmware em C/C++ integrado a uma API Python com migrations via Alembic.",
            tecnologias: ["C/C++", "ESP32", "Python", "FastAPI", "Alembic"],
            linkGithub: "https://github.com/JulioCesra/VizuTemp",
            linkDeploy: "#",
        },
        {
            titulo: "Análise da taxa de analfabetismo da população com 15 anos ou mais nos municípios do Maranhão",
            subtitulo: "NARA",
            descricao:
                "Projeto desenvolvido com o propósito de disponibilizar, de forma gratuita (open source), um dashboard interativo online que contém informações sobre a taxa de analfabetismo nos municípios do estado do Maranhão.",
            tecnologias: ["Streamlit", "Pandas", "Python"],
            linkGithub: "https://github.com/NARA-UEMA/analise-de-analfabetismo-dos-municipios-do-maranhao",
            linkDeploy: "https://alfabetizacaomaranhao.streamlit.app/",
            },
            {
            titulo: "Análise de dados do ENAMED",
            subtitulo: "NARA",
            descricao:
                "Projeto encomendado para o NARA. Nele examinamos os dados coletados de documentos do ENAMED (Exame Nacional de Avaliação da Formação Médica) e criamos um dashboard interativo em Streamlit. Realizei o tratamento das informações do questionário de estudante e contextual.",
            tecnologias: ["Streamlit", "Pandas", "Python"],
            linkGithub: "https://github.com/NARA-UEMA/analise-ENAMED",
            linkDeploy: "https://enamednara.streamlit.app/",
        },
    
    ];

    return (
        <section className="w-full min-h-screen bg-[rgb(233,230,225)] p-8 md:p-20 flex flex-col gap-8" id='projetos'>
        
            <div className="w-full bg-[#2B475C] rounded-lg p-8 md:p-10 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h2 className="font-roboto text-3xl text-white font-bold tracking-wide">
                Projetos em Destaque
                </h2>
                <p className="text-gray-300 text-sm mt-1">
                Alguns dos principais trabalhos desenvolvidos em análise de dados, backend e sistemas.
                </p>
            </div>
            <span className="text-[#5E8A75] font-mono text-sm bg-[#1e3241] px-4 py-2 rounded-md border border-[#5E8A75]/30">
                {projetos.length} Projetos Exibidos
            </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projetos.map((projeto, index) => (
                <article 
                key={index}
                className="bg-[#2B475C] rounded-lg p-6 md:p-8 shadow-lg border-t-4 border-[#5E8A75] flex flex-col justify-between gap-6 transition-transform hover:-translate-y-1 duration-200"
                >
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold text-white tracking-wide">
                        {projeto.titulo}
                        </h3>
                        <span className="text-xs text-[#5E8A75] font-semibold uppercase tracking-wider block mt-0.5">
                        {projeto.subtitulo}
                        </span>
                    </div>
                    </div>

                    <p className="text-gray-200 text-sm leading-relaxed mt-2 font-light">
                    {projeto.descricao}
                    </p>
                </div>

                <div className="flex flex-col gap-4 border-t border-[#5E8A75]/30 pt-4">
                    
                    <div className="flex flex-wrap gap-2">
                    {projeto.tecnologias.map((tecnologia, tagIndex) => (
                        <span 
                        key={tagIndex} 
                        className="text-xs text-gray-200 bg-[#1e3241] px-2.5 py-1 rounded border border-[#5E8A75]/40"
                        >
                        {tecnologia}
                        </span>
                    ))}
                    </div>

                    <div className="flex items-center gap-4 pt-2">
                    <a 
                        href={projeto.linkGithub} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-white bg-[#5E8A75] hover:bg-[#4d7261] px-4 py-2 rounded transition-colors"
                    >
                        Ver Repositório
                    </a>
                    <a 
                        href={projeto.linkDeploy} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-gray-300 hover:text-white transition-colors border border-gray-500 hover:border-white px-4 py-2 rounded"
                    >
                        Acessar Projeto
                    </a>
                    </div>

                </div>
                </article>
            ))}
            </div>
        </section>
    )
}