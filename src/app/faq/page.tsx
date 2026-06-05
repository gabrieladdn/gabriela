"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "Como funcionam as sessões de psicoterapia online?",
    answer:
      "As sessões são realizadas por chamada de vídeo (normalmente via Google Meet) em um ambiente seguro, com total sigilo e criptografia. Você só precisa de uma conexão estável de internet e de um espaço reservado e silencioso onde se sinta confortável para falar livremente.",
  },
  {
    question: "Qual é a duração e a frequência das sessões?",
    answer:
      "Cada sessão individual de psicoterapia dura aproximadamente 50 minutos. A frequência recomendada é semanal, o que possibilita a continuidade e o aprofundamento do processo terapêutico.",
  },
  {
    question: "Você atende convênios médicos (planos de saúde)?",
    answer:
      "Os atendimentos são realizados de forma particular. No entanto, emito recibos e notas fiscais com todas as especificações necessárias (registro do CRP) para que você possa solicitar o reembolso diretamente junto ao seu plano de saúde.",
  },
  {
    question: "Como funciona o reembolso do plano de saúde?",
    answer:
      "A maioria dos convênios possui a modalidade de reembolso de livre escolha para consultas de psicologia. Você realiza o pagamento da sessão, eu te forneço o recibo profissional correspondente e você dá entrada no aplicativo do seu convênio para receber o valor de volta (conforme a tabela e contrato do seu plano).",
  },
  {
    question: "Como posso agendar uma primeira consulta?",
    answer:
      "O agendamento é feito de forma simples e rápida diretamente via WhatsApp. Basta clicar no botão de contato presente no site para falar diretamente comigo. Alinharemos um dia e horário de sua preferência para darmos início.",
  },
  {
    question: "Os atendimentos são estritamente confidenciais?",
    answer:
      "Sim, absolutamente. O sigilo é um dos pilares mais fundamentais do atendimento psicológico, assegurado por lei através do Código de Ética Profissional do Psicólogo.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <section className="faq-hero">
        <div className="container">
          <Reveal>
            <p className="faq-kicker">Dúvidas Frequentes</p>
            <h1 className="faq-title">Perguntas Frequentes (FAQ)</h1>
            <p className="faq-lead">
              Encontre respostas para as principais dúvidas sobre como funcionam os atendimentos,
              agendamento, reembolso e a dinâmica da psicoterapia online.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="faq-content">
        <div className="container faq-layout">
          <div className="faq-list">
            {faqList.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal key={index} delay={(index % 3) as 0 | 1 | 2}>
                  <div className={`faq-item ${isOpen ? "faq-item-open" : ""}`}>
                    <button
                      className="faq-question-btn"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-question-text">{item.question}</span>
                      <span className="faq-toggle-icon">{isOpen ? "−" : "+"}</span>
                    </button>
                    <div className="faq-answer-wrap">
                      <div className="faq-answer-text">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .faq-hero {
          background: linear-gradient(180deg, #fff4ec 0%, var(--color-background) 100%);
          padding-top: clamp(100px, 12vh, 140px);
          padding-bottom: 48px;
        }

        .faq-kicker {
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-secondary);
          margin-bottom: 14px;
        }

        .faq-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.2;
          color: var(--color-on-surface);
          margin-bottom: 16px;
        }

        .faq-lead {
          font-size: 1.06rem;
          line-height: 1.75;
          color: var(--color-on-surface-variant);
          max-width: 65ch;
        }

        .faq-content {
          background: var(--color-background);
          padding-bottom: clamp(64px, 10vh, 120px);
        }

        .faq-layout {
          max-width: 800px;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          background: #fff;
          border: 1px solid rgba(199, 199, 191, 0.4);
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .faq-item:hover {
          border-color: rgba(143, 75, 66, 0.35);
          box-shadow: 0 4px 16px rgba(143, 75, 66, 0.04);
        }

        .faq-item-open {
          border-color: rgba(143, 75, 66, 0.5);
          box-shadow: 0 8px 24px rgba(143, 75, 66, 0.06);
        }

        .faq-question-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 28px;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          font-family: var(--font-body);
          transition: color 0.2s;
        }

        .faq-question-text {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-on-surface);
          padding-right: 16px;
        }

        .faq-toggle-icon {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--color-secondary);
          flex-shrink: 0;
        }

        .faq-answer-wrap {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .faq-item-open .faq-answer-wrap {
          max-height: 250px; /* Adjust maximum height as needed */
        }

        .faq-answer-text {
          padding: 0 28px 24px;
          font-size: 0.98rem;
          line-height: 1.75;
          color: var(--color-on-surface-variant);
        }
      `}</style>
    </>
  );
}
