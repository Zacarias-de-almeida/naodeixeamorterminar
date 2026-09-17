import { useEffect, useState } from "react";
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
  Timer,
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


const faqs = [
  ["É um produto digital?", "Sim. Recebes um e-book em formato digital, sem esperas e sem custos de envio."],
  ["Como vou receber?", "Depois da confirmação da compra, o acesso é enviado por via digital."],
  ["Posso ler no telemóvel?", "Sim. Podes ler no telemóvel, tablet ou computador, onde te for mais confortável."],
  ["Funciona para qualquer relacionamento?", "O guia apresenta princípios aplicáveis a diferentes histórias. Cada relação é única, por isso não promete um resultado obrigatório."],
];

const chapters = [
  ["01", "A verdade sobre o término", "O que realmente levou ao fim — e por que perceber isto muda toda a tua estratégia a partir de hoje."],
  ["02", "Domina as tuas emoções", "Como parar de agir por impulso e recuperar o controlo nos primeiros dias, quando a saudade dói mais."],
  ["03", "Corrige os 5 erros antes que seja tarde", "Identifica exatamente o que tens feito para afastar a pessoa — e como reverter cada um deles."],
  ["04", "O poder do espaço certo", "Como usar a distância a teu favor, para que a tua ausência seja sentida — nunca esquecida."],
  ["05", "A comunicação que reabre portas", "As palavras que aproximam e as frases que fecham para sempre. Saber o que dizer — e o momento certo."],
  ["06", "O momento da reconexão", "Quando e como voltar a falar, sem pressão, sem cobrança — com calma e confiança."],
  ["07", "A tua nova posição de força", "Como sair desta fase mais forte, com ou sem reconciliação — e nunca mais ficar à mercê do medo."],
];

const CHECKOUT_URL = "https://pay.kursinha.com/c/6aa67ea6f254eb2601f7748b";

const OFFER_SECONDS = 5 * 60 + 30; // 5 minutos e 30 segundos
const DEADLINE_KEY = "ndat-oferta-deadline";

function readDeadline(): number {
  try {
    const stored = window.localStorage.getItem(DEADLINE_KEY);
    const now = Date.now();
    if (stored) {
      const parsed = Number(stored);
      if (Number.isFinite(parsed) && parsed > now) return parsed;
    }
    const fresh = now + OFFER_SECONDS * 1000;
    window.localStorage.setItem(DEADLINE_KEY, String(fresh));
    return fresh;
  } catch {
    return Date.now() + OFFER_SECONDS * 1000;
  }
}

function CountdownTimer() {
  const [remaining, setRemaining] = useState<number>(OFFER_SECONDS);

  useEffect(() => {
    const deadline = readDeadline();
    const tick = () => {
      const left = Math.round((deadline - Date.now()) / 1000);
      setRemaining(Math.max(0, left));
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  const urgent = remaining <= 60;

  return (
    <div
      className={`border p-4 text-center ${urgent ? "animate-pulse border-destructive/70 bg-destructive/10" : "border-accent/50 bg-accent/10"}`}
      role="timer"
      aria-live="polite"
    >
      <p className="flex items-center justify-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-accent">
        <Timer className="h-4 w-4" aria-hidden="true" />
        {remaining > 0 ? "Esta oferta expira em" : "Oferta expirada"}
      </p>
      <p className={`mt-2 font-display text-4xl tabular-nums sm:text-5xl ${urgent ? "text-destructive" : "text-accent"}`}>
        {pad(minutes)}:{pad(seconds)}
      </p>
      <p className="mt-2 text-xs leading-5 text-muted-foreground">
        {remaining > 0
          ? "Quando o tempo acabar, o preço pode voltar a 15.000 Kz. Garante os 5.773 Kz agora."
          : "O tempo acabou — mas ainda podes tentar garantir o preço de lançamento no botão abaixo."}
      </p>
    </div>
  );
}

function Cta({ children, inverse = false, href = CHECKOUT_URL }: { children: string; inverse?: boolean; href?: string }) {
  return (
    <a
      href={href}
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
              Garantia de 7 dias. Compra sem risco.
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
            className="aspect-[4/3] h-full w-full object-cover sm:aspect-[16/10]"
          />
          <div className="flex flex-col justify-center bg-ink p-7 text-paper sm:p-12">
            <p className="section-label text-accent">A conversa certa muda o tom</p>
            <h3 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">Falar para compreender. Não para vencer.</h3>
            <p className="mt-5 leading-7 text-muted-foreground">Aprende a preparar uma aproximação mais serena, ouvir com atenção e expressar o que sentes sem transformar a conversa numa cobrança.</p>
          </div>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-3xl">
            <p className="section-label">Tudo o que vais receber dentro do guia</p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-tight sm:text-6xl">7 capítulos. Diretos ao ponto. Sem enrolação.</h2>
            <p className="mt-5 text-lg leading-8 text-ink-muted">Nada de teoria complicada: cada capítulo diz-te exatamente o que fazer — e o que evitar — a partir de hoje, passo a passo.</p>
          </div>
          <ol className="mt-12 divide-y divide-paper-border border-y border-paper-border">
            {chapters.map(([number, title, text]) => (
              <li key={number} className="grid gap-2 py-7 sm:grid-cols-[64px_0.9fr_1.1fr] sm:items-center sm:gap-8">
                <span className="font-display text-3xl text-accent">{number}</span>
                <h3 className="text-lg font-bold uppercase">{title}</h3>
                <p className="leading-7 text-ink-muted">{text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center"><Cta>Quero receber o meu e-book</Cta></div>
        </div>
      </section>

      <section id="oferta" className="relative overflow-hidden border-y border-accent/30 bg-offer py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/5 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-xs font-extrabold uppercase text-primary-foreground shadow-lg">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Oferta especial de lançamento
            </span>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl uppercase leading-[1.05] sm:text-5xl lg:text-6xl">
              Ainda acreditas no amor de vocês? <span className="text-accent">Então não pares agora.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Não é um livro para ler e esquecer. É um plano de ação completo — o guia principal mais 5 ferramentas práticas — para saberes exatamente o que fazer a cada passo, sem implorar, sem perder a dignidade e sem deixar o silêncio decidir por ti.
            </p>
          </div>
          <div className="relative mt-12 grid overflow-hidden border border-accent/40 bg-background shadow-2xl lg:grid-cols-[0.85fr_1.15fr]">
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary via-accent to-primary" aria-hidden="true" />
            <div className="grid place-items-center border-b border-accent/25 bg-surface p-8 lg:border-b-0 lg:border-r">
              <img src={ebookCover} alt="E-book Não Deixa o Amor Terminar incluído na oferta" width={1024} height={1536} loading="lazy" className="aspect-[2/3] w-full max-w-[260px] object-cover shadow-2xl" />
              <p className="mt-6 max-w-[260px] text-center text-xs leading-5 text-muted-foreground">
                Pagou, recebeu. Em menos de 2 minutos o e-book completo e os 5 bónus chegam ao telemóvel ou ao e-mail — para começares hoje, ainda com a dor fresca e a chance intacta.
              </p>
            </div>
            <div className="p-6 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-sm bg-accent/10 px-3 py-1 text-xs font-extrabold uppercase text-accent">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  Recebe hoje
                </span>
                <span className="inline-flex items-center gap-2 rounded-sm bg-primary/10 px-3 py-1 text-xs font-extrabold uppercase text-primary-foreground">
                  Acesso imediato
                </span>
              </div>
              <h3 className="mt-5 font-display text-3xl leading-tight sm:text-4xl">Tudo o que recebes quando dizes "sim" hoje</h3>
              <ul className="mt-7 divide-y divide-border border-y border-border">
                <li className="flex items-start gap-3 py-3 text-sm leading-6 sm:text-base">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center bg-primary text-primary-foreground"><Check className="h-4 w-4" aria-hidden="true" /></span>
                  <span className="min-w-0 flex-1">
                    <span className="font-bold">E-book “Não Deixa o Amor Terminar”</span>
                    <span className="block text-xs text-muted-foreground sm:text-sm">Os 7 capítulos que te levam do término à reconquista — um plano, não conselhos soltos</span>
                  </span>
                  <span className="whitespace-nowrap text-sm font-bold text-muted-foreground">5.000 Kz</span>
                </li>
                <li className="flex items-start gap-3 py-3 text-sm leading-6 sm:text-base">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center border border-accent text-xs font-bold text-accent">B1</span>
                  <span className="min-w-0 flex-1">
                    <span className="font-bold">50 Mensagens Para Reabrir Uma Conversa</span>
                    <span className="block text-xs text-muted-foreground sm:text-sm">Mensagens prontas para copiar, adaptar e enviar — que despertam curiosidade em vez de desespero</span>
                  </span>
                  <span className="whitespace-nowrap text-sm font-bold text-muted-foreground">1.500 Kz</span>
                </li>
                <li className="flex items-start gap-3 py-3 text-sm leading-6 sm:text-base">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center border border-accent text-xs font-bold text-accent">B2</span>
                  <span className="min-w-0 flex-1">
                    <span className="font-bold">Guia da Primeira Conversa</span>
                    <span className="block text-xs text-muted-foreground sm:text-sm">O momento certo, as palavras certas e os erros que arruinam tudo nos primeiros 5 minutos</span>
                  </span>
                  <span className="whitespace-nowrap text-sm font-bold text-muted-foreground">1.500 Kz</span>
                </li>
                <li className="flex items-start gap-3 py-3 text-sm leading-6 sm:text-base">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center border border-accent text-xs font-bold text-accent">B3</span>
                  <span className="min-w-0 flex-1">
                    <span className="font-bold">Frases Que Podem Destruir Uma Reconciliação</span>
                    <span className="block text-xs text-muted-foreground sm:text-sm">As frases que parecem inofensivas mas matam qualquer reconciliação — identifica-as antes de as dizeres</span>
                  </span>
                  <span className="whitespace-nowrap text-sm font-bold text-muted-foreground">1.500 Kz</span>
                </li>
                <li className="flex items-start gap-3 py-3 text-sm leading-6 sm:text-base">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center border border-accent text-xs font-bold text-accent">B4</span>
                  <span className="min-w-0 flex-1">
                    <span className="font-bold">Checklist “Ainda Existe Uma Chance?”</span>
                    <span className="block text-xs text-muted-foreground sm:text-sm">Responde com honestidade e descobre, em minutos, se ainda há uma chance real — sem ilusões</span>
                  </span>
                  <span className="whitespace-nowrap text-sm font-bold text-muted-foreground">1.500 Kz</span>
                </li>
                <li className="flex items-start gap-3 py-3 text-sm leading-6 sm:text-base">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center border border-accent text-xs font-bold text-accent">B5</span>
                  <span className="min-w-0 flex-1">
                    <span className="font-bold">Desafio de 7 Dias Para Recuperar o Controlo Emocional</span>
                    <span className="block text-xs text-muted-foreground sm:text-sm">Um exercício por dia para trocar o desespero pela calma — porque é a tua versão estável que ele(a) sente falta</span>
                  </span>
                  <span className="whitespace-nowrap text-sm font-bold text-muted-foreground">4.000 Kz</span>
                </li>
              </ul>
              <div className="mt-7">
                <CountdownTimer />
              </div>
              <div className="my-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-border" />
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Valor real de tudo isto</p>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <p className="font-display text-2xl text-muted-foreground line-through decoration-2">15.000 Kz</p>
                <span className="rounded-sm bg-accent px-2 py-1 text-xs font-extrabold uppercase text-accent-foreground">Poupe 62%</span>
              </div>
              <p className="mt-3 flex flex-wrap items-baseline gap-2">
                <span className="font-display text-5xl text-accent sm:text-6xl">5.773 Kz</span>
                <span className="text-sm font-bold uppercase text-muted-foreground">pagamento único</span>
              </p>
              <p className="mt-2 text-sm font-semibold text-muted-foreground">Menos do que um jantar. Pela chance de salvar uma história inteira. Pagamento único — sem mensalidades, sem custos escondidos.</p>
              <div className="mt-7"><Cta inverse>Sim, quero começar agora</Cta></div>
              <p className="mt-3 text-center text-xs font-bold uppercase tracking-wide text-accent sm:text-left">Oferta de lançamento — cada dia de silêncio aproxima o fim. E o preço pode voltar a 15.000 Kz a qualquer momento.</p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-subtle">
                <span className="flex items-center gap-2"><Smartphone className="h-4 w-4 text-accent" />Leitura no telemóvel</span>
                <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" />Acesso digital</span>
              </div>
              <div className="mt-6 border border-accent/50 bg-accent/10 p-5">
                <p className="flex items-center gap-2 font-display text-xl text-accent sm:text-2xl">
                  <ShieldCheck className="h-5 w-5 shrink-0" aria-hidden="true" />
                  Garantia incondicional de 7 dias
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                  Lê o e-book, aplica o desafio de 7 dias. Se dentro de 7 dias sentires que não valeu cada kwanza investido, basta uma única mensagem e devolvemos 100% do teu dinheiro — sem perguntas, sem burocracia, sem desculpas. Ou funciona para ti, ou não pagas. O risco é todo nosso.
                </p>
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
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-final-overlay" aria-hidden="true" />
        <div className="mx-auto flex min-h-[640px] max-w-5xl flex-col items-center justify-center px-5 py-20 text-center sm:min-h-[680px] sm:px-8 sm:py-28">
          <HeartCrack className="mx-auto h-10 w-10 text-accent" aria-hidden="true" />
          <h2 className="mx-auto mt-7 max-w-4xl font-display text-4xl uppercase leading-tight sm:text-6xl">Ainda acreditas que esta história merece uma última oportunidade?</h2>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-primary-foreground">Não deixes que o medo decida por ti. Recupera primeiro a tua clareza — e descobre o próximo passo possível.</p>
          <div className="mx-auto mt-8 w-full max-w-md"><CountdownTimer /></div>
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