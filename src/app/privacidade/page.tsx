import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { buildCanonicalUrl, buildServiceMetadata } from "@/lib/seo";

const route = "/privacidade/";

export const metadata: Metadata = buildServiceMetadata({
  title: "Política de Privacidade | Gabriela Nunes",
  description: "Política de privacidade de Gabriela Nunes, psicóloga clínica. Transparência no tratamento de dados e sigilo profissional.",
  pathname: route,
  image: "/images/sobre.jpeg",
});

export default function PrivacidadePage() {
  return (
    <>
      <section className="legal-page-hero">
        <div className="container">
          <Reveal>
            <p className="legal-page-kicker">Termos Legais</p>
            <h1 className="legal-page-title">Política de Privacidade</h1>
            <p className="legal-page-lead">
              Esta política explica como lidamos com as suas informações e garante a proteção da sua privacidade de acordo com as leis vigentes e o sigilo profissional da psicologia.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="legal-page-content">
        <div className="container legal-page-copy">
          <Reveal>
            <h2>1. Sigilo Profissional</h2>
            <p>
              Todos os atendimentos psicológicos realizados pela psicóloga Gabriela Nunes seguem rigorosamente o Código de Ética Profissional do Psicólogo, estabelecido pelo Conselho Federal de Psicologia (CFP). Isso garante que toda e qualquer informação compartilhada em sessão é estritamente confidencial e protegida por sigilo profissional.
            </p>

            <h2>2. Coleta de Informações</h2>
            <p>
              Coletamos informações pessoais que você nos fornece diretamente através de formulários de contato, e-mail ou WhatsApp, tais como nome, telefone, e-mail e mensagens de contato. Estes dados são utilizados exclusivamente para agendamentos e esclarecimento de dúvidas sobre o serviço de psicoterapia.
            </p>

            <h2>3. Cookies e Dados Analíticos</h2>
            <p>
              Utilizamos cookies e tecnologias similares (como o Google Analytics) para analisar o tráfego do site, melhorar a sua experiência de navegação e entender como os visitantes interagem com o nosso conteúdo. Esses dados são anônimos e não identificam o usuário pessoalmente.
            </p>

            <h2>4. Compartilhamento de Dados</h2>
            <p>
              Suas informações pessoais nunca serão vendidas, alugadas ou compartilhadas com terceiros para fins comerciais. O compartilhamento de dados pessoais só ocorrerá mediante sua autorização prévia por escrito ou sob obrigação legal específica, de acordo com as diretrizes do Código de Ética e da Lei Geral de Proteção de Dados (LGPD).
            </p>

            <h2>5. Alterações nesta Política</h2>
            <p>
              Esta política pode ser atualizada periodicamente. Recomendamos a leitura regular desta página para estar ciente de quaisquer atualizações nas diretrizes de privacidade.
            </p>
          </Reveal>
        </div>
      </section>

      <style>{`
        .legal-page-hero {
          background: linear-gradient(180deg, #fff4ec 0%, var(--color-background) 100%);
          padding-top: clamp(100px, 12vh, 140px);
          padding-bottom: 48px;
        }

        .legal-page-kicker {
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-secondary);
          margin-bottom: 14px;
        }

        .legal-page-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.2;
          color: var(--color-on-surface);
          margin-bottom: 16px;
        }

        .legal-page-lead {
          font-size: 1.06rem;
          line-height: 1.75;
          color: var(--color-on-surface-variant);
          max-width: 65ch;
        }

        .legal-page-content {
          background: var(--color-background);
          padding-bottom: clamp(64px, 10vh, 120px);
        }

        .legal-page-copy {
          max-width: 800px;
          display: grid;
          gap: 24px;
        }

        .legal-page-copy h2 {
          font-family: var(--font-display);
          font-size: 1.35rem;
          color: var(--color-on-surface);
          margin-top: 24px;
          margin-bottom: 8px;
        }

        .legal-page-copy p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--color-on-surface-variant);
        }
      `}</style>
    </>
  );
}
