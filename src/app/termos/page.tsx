import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { buildCanonicalUrl, buildServiceMetadata } from "@/lib/seo";

const route = "/termos/";

export const metadata: Metadata = buildServiceMetadata({
  title: "Termos de Uso | Gabriela Nunes",
  description: "Termos de uso do website institucional de Gabriela Nunes, psicóloga clínica.",
  pathname: route,
  image: "/images/sobre.jpeg",
});

export default function TermosPage() {
  return (
    <>
      <section className="legal-page-hero">
        <div className="container">
          <Reveal>
            <p className="legal-page-kicker">Termos Legais</p>
            <h1 className="legal-page-title">Termos de Uso</h1>
            <p className="legal-page-lead">
              Ao navegar em nosso website, você concorda e aceita as diretrizes de utilização descritas abaixo.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="legal-page-content">
        <div className="container legal-page-copy">
          <Reveal>
            <h2>1. Utilização de Conteúdo</h2>
            <p>
              Todos os artigos do blog, imagens, designs e conteúdos textuais presentes neste site são protegidos por direitos autorais. A reprodução parcial ou integral do material para fins não comerciais só é permitida mediante atribuição de autoria clara e link direto para este website. A reprodução para fins comerciais é estritamente proibida sem consentimento prévio por escrito.
            </p>

            <h2>2. Finalidade Informativa</h2>
            <p>
              As informações contidas nos artigos e páginas deste website possuem caráter estritamente educativo e informativo. Eles não substituem, sob qualquer hipótese, o diagnóstico, avaliação profissional ou tratamento psicológico/psiquiátrico individualizado conduzido por um especialista devidamente habilitado.
            </p>

            <h2>3. Canais de Contato e Comunicação</h2>
            <p>
              Este site oferece atalhos de redirecionamento para contato direto via WhatsApp e e-mail. A solicitação de agendamento ou envio de dúvidas não configura o início do vínculo psicoterapêutico formal, o qual é estabelecido unicamente após a primeira entrevista e o alinhamento de contrato terapêutico verbal ou escrito entre a profissional e o paciente.
            </p>

            <h2>4. Limitação de Responsabilidade</h2>
            <p>
              Buscamos manter as informações e conteúdos deste site o mais atualizados e corretos possível. No entanto, não nos responsabilizamos por perdas de conexões, indisponibilidades temporárias do site ou qualquer instabilidade de servidores e ferramentas de terceiros que possam afetar a navegação.
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
