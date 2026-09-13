import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  HeartCrack,
  MessageCircleOff,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TriangleAlert,
} from "lucide-react";
import ebookCover from "../assets/ebook-cover.jpg";
import coupleConversation from "../assets/couple-conversation.jpg";
import coupleDistance from "../assets/couple-distance.jpg";
import coupleWalking from "../assets/couple-walking.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Não Deixa o Amor Terminar | Guia de Reconquista" },
      {
        name: "description",
        content:
          "Um guia prático para controlar as emoções, evitar erros após o término e criar condições para uma possível reconexão.",
      },
      { property: "og:title", content: "Não Deixa o Amor Terminar" },
      {
        property: "og:description",
        content:
          "Descobre como agir com clareza depois do término e criar uma nova oportunidade para o amor.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const mistakes = [
  ["01", "Implorar por outra oportunidade", "Quando tentas convencer pelo cansaço, o amor começa a parecer uma obrigação."],
  ["02", "Mandar mensagens sem parar", "Cada nova mensagem sem resposta pode aumentar a distância que tanto temes."],
  ["03", "Demonstrar desespero", "A ansiedade fala mais alto e transforma carinho em pressão emocional."],
  ["04", "Provocar ciúmes", "Jogos e indiretas destroem a confiança que uma reconexão precisa de recuperar."],
  ["05", "Pressionar para voltar", "Tentar acelerar o processo pode fechar a porta antes da conversa certa acontecer."],
];

const benefits = [
  "Entender o que realmente aconteceu no término",
  "Recuperar o controlo das tuas emoções",
  "Saber quando falar — e quando dar espaço",
  "Comunicar sem pressão, cobrança ou desespero",
  "Criar condições reais para uma possível reconexão",
];

const bonuses = [
  "50 Mensagens Para Reabrir Uma Conversa",
  "Guia da Primeira Conversa",
  "Frases Que Podem Destruir Uma Reconciliação",
  "Checklist “Ainda Existe Uma Chance?”",
  "Desafio de 7 Dias Para Recuperar o Controlo Emocional",
];

const faqs = [
  ["É um produto digital?", "Sim. Recebes um e-book em formato digital, sem esperas e sem custos de envio."],
  ["Como vou receber?", "Depois da confirmação da compra, o acesso é enviado por via digital."],
  ["Posso ler no telemóvel?", "Sim. Podes ler no telemóvel, tablet ou computador, onde te for mais confortável."],
  ["Funciona para qualquer relacionamento?", "O guia apresenta princípios aplicáveis a diferentes histórias. Cada relação é única, por isso não promete um resultado obrigatório."],
];

function Cta({ children, inverse = false }: { children: string; inverse?: boolean }) {
  return (
    <a
      href="#oferta"
      className={`group inline-flex min-h-14 w-full items-center justify-center gap-3 px-6 py-4 text-center text-sm font-extrabold uppercase transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:w-auto sm:min-w-72 ${inverse ? "bg-background text-foreground" : "bg-primary text-primary-foreground"}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </a>
  );
}

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative min-h-[92svh] border-b border-border">
        <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
        <div className="mx-auto grid min-h-[92svh] max-w-7xl items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.7fr)] lg:gap-20 lg:px-12 lg:py-16">
          <div className="relative z-10 pt-4 lg:pt-0">
            <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase text-accent">
              <span className="h-px w-8 bg-accent" />
              Para quem ainda acredita no amor
            </div>
            <h1 className="max-w-4xl font-display text-[2.65rem] leading-[0.98] uppercase sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
              Ainda amas o teu ex? <span className="text-primary">Então não desistas</span> antes de descobrir o que podes fazer.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              O término aconteceu, mas a saudade ficou. Se ainda sentes que esta história não terminou, há uma forma mais consciente de agir — sem implorar, sem pressionar e sem perder quem tu és.
            </p>
            <div className="mt-8">
              <Cta>Quero reconquistar</Cta>
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs text-subtle">
              <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
              Conteúdo responsável. Sem promessas impossíveis.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px]">
            <div className="absolute -inset-5 border border-accent/30" aria-hidden="true" />
            <div className="absolute -bottom-8 -right-8 hidden h-full w-full border border-primary/40 sm:block" aria-hidden="true" />
            <img
              src={ebookCover}
              alt="Capa do e-book Não Deixa o Amor Terminar"
              width={1024}
              height={1536}
              fetchPriority="high"
              className="relative z-10 aspect-[2/3] w-full object-cover shadow-2xl"
            />
            <div className="absolute -bottom-5 -left-5 z-20 bg-accent px-4 py-3 text-center text-foreground shadow-lg">
              <span className="block text-[10px] font-bold uppercase">E-book</span>
              <span className="font-display text-2xl">+ 5 Bónus</span>
            </div>
          </div>
        </div>
        <a href="#dor" aria-label="Continuar a ler" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-subtle transition-colors hover:text-accent lg:block">
          <ArrowDown className="h-5 w-5" aria-hidden="true" />
        </a>
      </section>

      <section id="dor" className="bg-paper text-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="section-label">Talvez estejas a viver isto agora</p>
              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-6xl">O silêncio depois do fim pode ser ensurdecedor.</h2>
            </div>
            <div className="space-y-7 border-l border-paper-border pl-6 sm:pl-10">
              <p className="font-display text-2xl leading-snug sm:text-3xl">Acordas a pensar naquela pessoa. Revês conversas. Procuras sinais. E perguntas-te se ainda há alguma coisa que possas fazer.</p>
              <p className="leading-7 text-ink-muted">O medo de perder definitivamente quem amas pode levar-te a agir no impulso. Mas entre a saudade e a pressa existe um espaço decisivo: o espaço onde recuperas a clareza.</p>
              <blockquote className="border-y border-accent/40 py-6 font-display text-2xl italic text-primary sm:text-3xl">“Não precisas de desistir. Mas precisas de parar de agir pelo medo.”</blockquote>
            </div>
          </div>
          <figure className="relative mt-14 sm:mt-20">
            <img
              src={coupleDistance}
              alt="Casal sentado em silêncio depois de uma conversa difícil"
              width={1536}
              height={1024}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/7]"
            />
            <figcaption className="absolute bottom-0 left-0 max-w-md bg-paper px-5 py-4 font-display text-xl sm:px-7 sm:py-5 sm:text-2xl">
              A distância cresce quando o medo fala por nós.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <TriangleAlert className="mx-auto h-9 w-9 text-primary" aria-hidden="true" />
            <p className="section-label mt-5">Atenção ao impulso</p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-tight sm:text-6xl">Estes erros podem estar a afastar o teu ex ainda mais</h2>
            <p className="mt-5 text-muted-foreground">Quando a emoção assume o controlo, aquilo que parece aproximar pode provocar exatamente o contrário.</p>
          </div>
          <div className="mt-14 divide-y divide-border border-y border-border">
            {mistakes.map(([number, title, text]) => (
              <article key={number} className="grid gap-3 py-7 sm:grid-cols-[70px_0.8fr_1.2fr] sm:items-center sm:gap-8">
                <span className="font-display text-3xl text-accent">{number}</span>
                <h3 className="text-lg font-bold uppercase">{title}</h3>
                <p className="leading-7 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center"><Cta>Quero fazer diferente</Cta></div>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">
          <div className="relative mx-auto w-full max-w-[310px]">
            <div className="absolute -left-5 -top-5 h-24 w-24 border-l border-t border-primary" aria-hidden="true" />
            <img src={ebookCover} alt="Capa do guia Não Deixa o Amor Terminar" width={1024} height={1536} loading="lazy" className="relative aspect-[2/3] w-full object-cover shadow-2xl" />
          </div>
          <div>
            <p className="section-label">Uma direção quando tudo parece confuso</p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-tight sm:text-6xl">Não é sobre correr atrás. É sobre saber como avançar.</h2>
            <p className="mt-6 text-lg leading-8 text-ink-muted">“Não Deixa o Amor Terminar” é um guia para te ajudar a sair do desespero, compreender o momento e tomar decisões com mais calma, dignidade e intenção.</p>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-4 border-b border-paper-border pb-4">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center bg-primary text-primary-foreground"><Check className="h-4 w-4" aria-hidden="true" /></span>
                  <span className="font-semibold">{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-sm italic text-ink-muted">Uma reconexão depende de duas pessoas. Este guia não garante que alguém voltará — ajuda-te a fazer a tua parte de forma mais consciente.</p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28 lg:grid-cols-[1.2fr_0.8fr]">
          <img
            src={coupleConversation}
            alt="Casal a conversar com calma e atenção"
            width={1536}
            height={1024}
            loading="lazy"
            className="aspect-[4/3] h-full w-full object-cover sm:aspect-[16/10]"
          />
          <div className="flex flex-col justify-center bg-ink p-7 text-paper sm:p-12">
            <p className="section-label text-accent">A conversa certa muda o tom</p>
            <h3 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">Falar para compreender. Não para vencer.</h3>
            <p className="mt-5 leading-7 text-muted-foreground">Aprende a preparar uma aproximação mais serena, ouvir com atenção e expressar o que sentes sem transformar a conversa numa cobrança.</p>
          </div>
        </div>
      </section>

      <section id="oferta" className="relative border-y border-accent/30 bg-offer py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="text-center">
            <p className="section-label">Acesso completo</p>
            <h2 className="mt-5 font-display text-4xl uppercase sm:text-6xl">Tudo o que precisas para começar com clareza</h2>
          </div>
          <div className="mt-12 grid overflow-hidden border border-accent/40 bg-background lg:grid-cols-[0.85fr_1.15fr]">
            <div className="grid place-items-center border-b border-accent/25 bg-surface p-8 lg:border-b-0 lg:border-r">
              <img src={ebookCover} alt="E-book Não Deixa o Amor Terminar incluído na oferta" width={1024} height={1536} loading="lazy" className="aspect-[2/3] w-full max-w-[260px] object-cover shadow-2xl" />
            </div>
            <div className="p-6 sm:p-10 lg:p-12">
              <div className="flex items-center gap-3 text-accent"><Sparkles className="h-5 w-5" aria-hidden="true" /><span className="text-xs font-bold uppercase">Recebe hoje</span></div>
              <h3 className="mt-4 font-display text-3xl sm:text-4xl">E-book completo + 5 bónus práticos</h3>
              <ul className="mt-7 space-y-4">
                {bonuses.map((bonus, index) => (
                  <li key={bonus} className="flex gap-3 text-sm leading-6 sm:text-base">
                    <span className="grid h-6 w-6 shrink-0 place-items-center border border-accent text-xs font-bold text-accent">{index + 1}</span>
                    {bonus}
                  </li>
                ))}
              </ul>
              <div className="my-8 h-px bg-border" />
              <p className="text-xs font-bold uppercase text-muted-foreground">Investimento único</p>
              <p className="mt-1 font-display text-4xl text-accent sm:text-5xl">[INSERIR PREÇO] Kz</p>
              <div className="mt-7"><Cta inverse>Quero o meu e-book agora</Cta></div>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-subtle">
                <span className="flex items-center gap-2"><Smartphone className="h-4 w-4 text-accent" />Leitura no telemóvel</span>
                <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" />Acesso digital</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="section-label">Perguntas frequentes</p>
          <h2 className="mt-5 font-display text-4xl uppercase sm:text-6xl">Antes de começar</h2>
          <div className="mt-10 divide-y divide-paper-border border-y border-paper-border">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-6">
                <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_auto] items-center gap-5 font-bold uppercase">
                  <span className="min-w-0">{question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="max-w-2xl pt-4 leading-7 text-ink-muted">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate min-h-[640px] overflow-hidden bg-primary text-primary-foreground sm:min-h-[680px]">
        <img
          src={coupleWalking}
          alt="Casal a caminhar junto ao pôr do sol"
          width={1536}
          height={1024}
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-final-overlay" aria-hidden="true" />
        <div className="mx-auto flex min-h-[640px] max-w-5xl flex-col items-center justify-center px-5 py-20 text-center sm:min-h-[680px] sm:px-8 sm:py-28">
          <HeartCrack className="mx-auto h-10 w-10 text-accent" aria-hidden="true" />
          <h2 className="mx-auto mt-7 max-w-4xl font-display text-4xl uppercase leading-tight sm:text-6xl">Ainda acreditas que esta história merece uma última oportunidade?</h2>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-primary-foreground">Não deixes que o medo decida por ti. Recupera primeiro a tua clareza — e descobre o próximo passo possível.</p>
          <div className="mt-9"><Cta inverse>Sim, quero começar agora</Cta></div>
        </div>
      </section>

      <footer className="border-t border-border bg-background px-5 py-8 text-center text-xs leading-6 text-subtle">
        <MessageCircleOff className="mx-auto mb-3 h-4 w-4 text-accent" aria-hidden="true" />
        Este material tem caráter educativo e não garante a reconciliação. Cada relacionamento e cada decisão são únicos.
      </footer>
    </main>
  );
}