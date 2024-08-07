import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import badgemagic from '@/images/clients/badgemagic.png'
import eventyay from '@/images/clients/eventyay.png'
import fossasia from '@/images/clients/fossasia.png'
import huekee from '@/images/clients/huekee.png'
import menck from '@/images/clients/menck.png'
import pslab from '@/images/clients/pslab.png'
import susiai from '@/images/clients/susiai.png'
import onestopfinancial from '@/images/clients/onestopfinancial.png'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Eventyay', eventyay, "https://www.eventyay.com/"],
  ['Chinatown Tai Chong Kok Confectionery Hue Kee', huekee, "https://chinatowntaichongkokconfectioneryhuekee.com/"],
  ['FOSSASIA', fossasia, "https://fossasia.org/"],
  ['Menck', menck, "#"],
  ['Badge Magic', badgemagic, "https://play.google.com/store/apps/details?id=org.fossasia.badgemagic&hl=en_SG"],
  ['PSLab', pslab, "https://pslab.io/"],
  ['SUSI.AI', susiai, "https://susi.ai/"],
  ['One-Stop Financial', onestopfinancial, "https://onestopfinancial.sg/"],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl py-20 sm:mt-32 sm:py-32">
        <FadeIn>
         <SectionIntro
          title="We’ve worked with amazing people"
        >
        </SectionIntro>
      </FadeIn>
      <Container>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo, href]) => (
              <li key={client}>
                <FadeIn>
                  <Link href={href}>
                  <Image src={logo} alt={client} unoptimized />
                  </Link>
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
      <FadeIn>
        <SectionIntro
          title="Harnessing technology for a brighter future"
          className="mt-24 sm:mt-32 lg:mt-40"
        >
          <p>
            We believe technology is the answer to the world’s greatest
            challenges.
          </p>
        </SectionIntro>
      </FadeIn>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-auto"
                      unoptimized
                    />
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
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ListItem>
            <ListItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like Vue 3 and Flutter.
            </ListItem>
            <ListItem title="E-commerce">
              We are at the forefront of modern e-commerce development. Which
              mainly means adding your logo to the Woocommerce store template we’ve
              used for the past nine years.
            </ListItem>
            <ListItem title="Custom content management">
              We understand the importance of having a robust and
              customised CMS. That’s why we run all of our client projects out
              of a single, enormous Wordpress instance.
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
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Development studio based in <br />Singapore. Germany.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are a development studio working at the intersection of design
            and technology. It’s a really busy intersection though — a lot of
            our staff have been involved in hit and runs.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Services />

      <ContactSection />

    </>
  )
}
