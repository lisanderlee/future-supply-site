import Image from 'next/image'
import Link from 'next/link'
import VideoPlayer from '@/components/VideoPlayer'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'
import webGl from '@/images/stack/webgl-w.svg'
import unreal from '@/images/stack/unreal-w.svg'
import azure from '@/images/stack/azure-w.svg'
import next from '@/images/stack/next-w.svg'
import Head from '@/components/Model'

const clients = [
  ['unreal', unreal],
  ['azure', azure],
  ['webgl', webGl],
  ['next', next],
]

function Stack() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We work with the most advance technology stack
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-16  flex grid-cols-2 justify-between gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology to Engage, inspire, and connect with your audience"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our cutting-edge technology delivers hyper-real 3D product
          visualizations, immersive interactive features, and seamless
          integration with the web, making experiences that are accessible to
          anyone, anywhere.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as you give us the chance to create new an beatiful
          experiences we are game for anything.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg: justify-between lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:  lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center ml-0 lg:ml-12 lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 ml-0 lg:ml-20 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Advertising">
              Cutting-edge advertising campaigns that leverage immersive
              technologies to captivate audiences, deliver memorable brand
              experiences, and drive customer engagement.
            </ListItem>
            <ListItem title="Architecture">
              Concept art and visual exploration: Developing the visual identity
              and exploring different aesthetics.
            </ListItem>
            <ListItem title="Entertainment">
              Virtual reality (VR) and augmented reality (AR) experiences that
              revolutionize gaming, storytelling, and immersive entertainment,
              blurring the lines between the real and virtual worlds.
            </ListItem>
            <ListItem title="Ecommerce">
              Virtual shopping experiences that enable customers to visualize
              and interact with products in realistic 3D, improving the online
              shopping journey and increasing conversion rates.
            </ListItem>
            <ListItem title="Education">
              Interactive virtual learning environments that enhance engagement
              and provide immersive educational experiences for empployees and
              students in professional as well as educational enviroments.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className=" mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            We create amazing immersive experience.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Our expert team redefines possibilities with scalable digital
            solutions. From architecture and education to entertainment,
            advertising, and ecommerce, we cater to diverse industries.
            Immersive virtual solutions, branded platforms, and more.
          </p>
        </FadeIn>
      </Container>

      <Stack />

      <CaseStudies caseStudies={caseStudies} />

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at FutureSupply went above and beyond with our onboarding
        experience, creating more engagement and interaction with our audiences.
      </Testimonial> */}

      <Services />

      <ContactSection />
    </>
  )
}
