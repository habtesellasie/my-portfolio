import { certificates, projects, siteConfig } from '@/config/site';
import Link from 'next/link';
import Image from 'next/image';
import { Download, Mail, MoveRight, PhoneCall } from 'lucide-react';
import { Icons } from '@/components/icons';
import { ModeToggle } from '@/components/mode-toggle';

export default function Home() {
  return (
    <>
      <div className='relative flex flex-col xl:flex-row sm:container mx-auto gap-10 xl:items-stretch items-center'>
        <section className='space-y-6 xl:sticky top-0 h-fit'>
          <div className='relative flex flex-col gap-4 bg-transparent sm:px-0 px-4'>
            <div className='relative z-2 flex flex-col justify-between xl:h-[90vh] xl:h-[90dvh] xl:h-[90svh] xl:pt-[6.5rem] pt-10'>
              <div>
                <div className='size-[6.25rem] rounded-full overflow-hidden mb-4'>
                  <Image
                    width={300}
                    height={300}
                    className='w-full h-full object-cover'
                    src='https://i.ibb.co/fxqww3R/pp2-Large.jpg'
                    alt='hero image'
                  />
                </div>
                <h1 className='text-2xl text-balance z-3 font-roboto font-bold inline-flex items-center'>
                  Habtesellasie Fissha <ModeToggle />
                </h1>
                <p className='text-muted-foreground font-bold sm:text-lg pt-1 pb-4 text-pretty'>
                  {/* A skilled web developer with expertise in{' '}
                  <span className='dark:text-[#61DBFB] text-[#287588] font-bold'>
                    React
                  </span>{' '}
                  and <span className='text-[#F55247] font-bold'>Laravel.</span> */}
                  A Skilled Full Stack Developer
                  {/* , and{' '}
                <span className='bg-gradient-to-r dark:to-[#F55247] to-[#F55247] dark:from-[#61DBFB] from-[#287588] inline-block text-transparent bg-clip-text font-bold'>
                  UI/UX design
                </span> */}
                  <span className='block mt-4 xl:max-w-lg max-w-2xl font-normal'>
                    I specialize in creating intuitive, dynamic, and visually
                    compelling web applications. My goal is to turn complex
                    problems into elegant digital solutions that drive success.
                  </span>
                </p>

                <Link
                  href='https://i.ibb.co/7kzqqMt/Fullstack-Developer-Resume.jpg'
                  target='_blank'
                  className='inline-block underline underline-offset-[6px] transition-all hover:underline-offset-4 dark:hover:text-gray-200 hover:text-gray-700 xl:mb-0 mb-4'
                >
                  Resume
                </Link>
              </div>

              <div>
                <nav className='flex flex-wrap items-center gap-4 xl:-ml-1 mt-4 xl:mt-6'>
                  <Link
                    href={siteConfig.links.github}
                    target='_blank'
                    rel='noreferrer'
                    className='hover:scale-105 text-gray-700 dark:text-gray-300'
                  >
                    <Icons.gitHub className='size-[1.6rem]' />
                    <span className='sr-only'>GitHub</span>
                  </Link>
                  <Link
                    className='flex items-center gap-2 transition text-gray-700 dark:text-gray-300 hover:scale-105'
                    href='mailto:havecodesoft@gmail.com'
                  >
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 24 24'
                      height='34px'
                      width='34px'
                      xmlns='http://www.w3.org/2000/svg'
                      data-darkreader-inline-fill=''
                      data-darkreader-inline-stroke=''
                    >
                      <path fill='none' d='M0 0h24v24H0z'></path>
                      <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z'></path>
                    </svg>
                    <span className='sr-only'>havecodesoft@gmail.com</span>
                  </Link>
                  <Link
                    className='flex items-center gap-2 transition text-gray-700 dark:text-gray-300 hover:scale-105'
                    href={siteConfig.links.telegram}
                    target='_blank'
                  >
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 496 512'
                      height='27px'
                      width='27px'
                      xmlns='http://www.w3.org/2000/svg'
                      data-darkreader-inline-fill=''
                      data-darkreader-inline-stroke=''
                    >
                      <path d='M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z'></path>
                    </svg>
                    <span className='sr-only'>telegram</span>
                  </Link>
                  <Link
                    href={siteConfig.links.linkedin}
                    target='_blank'
                    rel='noreferrer'
                    className='hover:scale-105 text-gray-700 dark:text-gray-300'
                  >
                    <Icons.linkedin className='size-8' />
                    <span className='sr-only'>Linkedin</span>
                  </Link>
                  <Link
                    className='flex items-center gap-2 transition text-gray-700 dark:text-gray-300 hover:scale-105'
                    href='tel:0945596959'
                  >
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0.5'
                      viewBox='0 0 16 16'
                      height='24'
                      width='24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'></path>
                      <path d='M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2'></path>
                    </svg>
                    <span className='sr-only'>+251 945 596 959</span>
                  </Link>
                  <Link
                    className='flex items-center gap-2 transition text-gray-700 dark:text-gray-300 hover:scale-105'
                    href={siteConfig.links.upwork}
                    target='_blank'
                  >
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 448 512'
                      height='200px'
                      width='200px'
                      xmlns='http://www.w3.org/2000/svg'
                      data-darkreader-inline-fill=''
                      data-darkreader-inline-stroke=''
                      className='size-7'
                    >
                      <path d='M56 32l336 0c30.9 0 56 25.1 56 56l0 336c0 30.9-25.1 56-56 56L56 480c-30.9 0-56-25.1-56-56L0 88C0 57.1 25.1 32 56 32zM270.9 274.2c6.6-52.9 25.9-69.5 51.4-69.5c25.3 0 44.9 20.2 44.9 49.7s-19.7 49.7-44.9 49.7c-27.9 0-46.3-21.5-51.4-29.9zm-26.7-41.8c-8.2-15.5-14.3-36.3-19.2-55.6l-29.7 0-33.2 0 0 78.1c0 28.4-12.9 49.4-38.2 49.4s-39.8-20.9-39.8-49.3l.3-78.1-36.2 0 0 78.1c0 22.8 7.4 43.5 20.9 58.2c13.9 15.2 32.8 23.2 54.8 23.2c43.7 0 74.2-33.5 74.2-81.5l0-52.5c4.6 17.3 15.4 50.5 36.2 79.7L215 392.6l36.8 0 12.8-78.4c4.2 3.5 8.7 6.6 13.4 9.4c12.3 7.8 26.4 12.2 40.9 12.6l.1 0c.5 0 1.1 0 1.6 0c.6 0 1.1 0 1.7 0c45.1 0 80.9-34.9 80.9-81.9s-35.9-82.2-80.9-82.2c-45.4 0-70.9 29.7-78.1 60.1z'></path>
                    </svg>
                    <span className='sr-only'>upwork</span>
                  </Link>
                  <Link
                    className='flex items-center gap-2 transition text-gray-700 dark:text-gray-300 hover:scale-105'
                    href={siteConfig.links.fiverr}
                    target='_blank'
                  >
                    <svg
                      stroke='currentColor'
                      fill='none'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      height='200px'
                      width='200px'
                      xmlns='http://www.w3.org/2000/svg'
                      data-darkreader-inline-stroke=''
                      className='size-7'
                    >
                      <path d='M15 3h-2a6 6 0 0 0 -6 6h-3v4h3v8h4v-7h4v7h4v-11h-8v-1.033a1.967 1.967 0 0 1 2 -1.967h2v-4z'></path>
                    </svg>
                    <span className='sr-only'>Fiverr</span>
                  </Link>
                  <Link
                    href={siteConfig.links.x}
                    target='_blank'
                    rel='noreferrer'
                    className='hover:scale-105'
                  >
                    <Icons.twitter className='size-6' />
                    <span className='sr-only'>X</span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <div className='xl:mt-24 mt-6 xl:mb-[5.4rem] mb-8 sm:px-0 px-4'>
          <h2 className='text-2xl font-black mb-4 xl:hidden'>About</h2>
          <p className='xl:max-w-3xl max-w-2xl text-muted-foreground sm:text-lg '>
            I love creating robust and dynamic web applications. With a solid
            background in full stack development and coding in my DNA, I aim to
            deliver high-quality solutions that meet user needs and business
            goals. I&apos;m always excited to learn new things and keep up with
            the latest trends in the industry.
            <span className='inline-block pb-2 pt-4'>
              Spoiler alert: I also love{' '}
              <Link href='https://habfis.netlify.app' target='_blank'>
                designing!
              </Link>{' '}
              One of the reasons I&apos;m so into development is because I can
              ensure my code brings beautiful designs to life.
            </span>
            <span className='inline-block mt-2 text-pretty'>
              I have honed my full stack & front end development skills through
              courses offered by{' '}
              <span className='inline-block font-medium'>
                <span className='text-[#4285f4]'>G</span>
                <span className='text-[#ea4335]'>o</span>
                <span className='text-[#fbbc04]'>o</span>
                <span className='text-[#4285f4]'>g</span>
                <span className='text-[#34a853]'>l</span>
                <span className='text-[#ea4335]'>e</span>
              </span>
              , <span className='text-[#0081FB] font-medium'>Meta</span>,{' '}
              <span className='text-[#0f62fe] font-medium'>IBM</span>, Scrimba
              and freecodecamp. I hold a degree in Information Technology, which
              has provided me with a strong technical foundation. My dedication
              to learning and growing is unwavering, and I am always on the
              lookout for new opportunities to expand my knowledge and improve
              my craft.{' '}
            </span>
            <span className='inline-block mt-4'>
              I&apos;m bad at answering{' '}
              <Link
                href='tel:0945596959'
                className='dark:text-white text-black font-medium hover:underline'
              >
                phone calls
              </Link>{' '}
              because only when I am not busy can anyone find me. However,
              I&apos;m known to be active on my{' '}
              <Link
                href={siteConfig.links.telegram}
                target='_blank'
                className='dark:text-white text-black font-medium hover:underline'
              >
                Telegram.
              </Link>{' '}
              I&apos;m also active on{' '}
              <Link
                href={siteConfig.links.linkedin}
                target='_blank'
                className='dark:text-white text-black font-medium hover:underline'
              >
                LinkedIn.
              </Link>{' '}
              I regularly post things there. I prefer someone to{' '}
              <Link
                href={`mailto:${siteConfig.links.email}`}
                target='_blank'
                className='dark:text-white text-black font-medium hover:underline'
              >
                email
              </Link>{' '}
              me about work rather than to DM me.
            </span>
          </p>
          <section className='flex-1 py-4 flex flex-col space-y-6 xl:max-w-3xl max-w-2xl xl:mt-32 mt-12'>
            <h2 className='text-2xl font-black'>Projects</h2>
            <div className='sm:space-y-16 space-y-8'>
              {projects.map((project, projIndex) => {
                return (
                  <div
                    key={projIndex}
                    className='flex flex-col items-center gap-10 group justify-center hover:outline hover:outline-2 hover:outline-gray-400 hover:dark:outline-gray-600 rounded-md hover:outline-offset-8'
                  >
                    <div className='flex flex-col justify-center gap-2'>
                      <div className='flex flex-col justify-center w-full gap-4'>
                        <h3 className='text-xl font-bold'>{project.title}</h3>
                        <p className='sm:text-lg text-pretty text-muted-foreground'>
                          {project.description}
                        </p>
                      </div>
                      {project.link && (
                        <Link
                          href={project.link}
                          target='_blank'
                          className='text-blue-500 inline-flex items-center gap-2 mt-4 hover:underline transition'
                        >
                          View Project
                          <MoveRight size={20} />
                        </Link>
                      )}
                    </div>

                    <div className='w-full relative'>
                      <Image
                        width={300}
                        height={500}
                        className='w-full h-full rounded-lg object-contain border border-gray-500'
                        src={project.desktopImage}
                        alt={project.title}
                      />
                      {project.mobileImage ? (
                        <Image
                          width={300}
                          height={300}
                          className='absolute right-2 border border-gray-500 max-sm:w-[200px] -top-12 rounded-xl w-[250px] shadow-md sm:block hidden'
                          src={project.mobileImage}
                          alt={project.title}
                        />
                      ) : (
                        ''
                      )}
                      <div className='flex gap-2 flex-wrap mt-6'>
                        {project.usedTechnology.map((tech, i) => {
                          return (
                            <span
                              key={i}
                              className='px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm'
                            >
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className='py-4 flex flex-col space-y-4 xl:mt-32 mt-12'>
            <h2 className='text-2xl font-black'>Certifications</h2>
            <p className='text-sm text-gray-400'>
              If the verification links do not work
              <a
                href='mailto:havecodesoft@gmail.com'
                className='font-bold hover:text-blue-500'
              >
                {' '}
                email me
              </a>
              .
            </p>
            <div className='grid sm:grid-cols-2 max-sm:space-y-4 gap-4 items-stretch flex-wrap mt-10'>
              {certificates.map((certificate, certIndex) => {
                return certificate.status === 'Completed' ? (
                  <div
                    key={certIndex}
                    className='hover:scale-[1.02] transition bg-gray-100 dark:bg-gray-800/60 border-2 border-gray-400 dark:border-gray-700 rounded-lg '
                  >
                    <div className='p-2'>
                      <Image
                        src={certificate.file}
                        alt=''
                        className='sm:min-w-[300px] w-full object-cover rounded-md'
                        width={100}
                        height={24}
                        priority
                      />
                    </div>
                    <div className='flex flex-col px-4 py-2 gap-2'>
                      <p className='font-bold inline-block lg:max-w-[240px] w-full'>
                        {certificate.name}{' '}
                      </p>
                      <span className='text-md font-medium text-gray-600 dark:text-gray-300'>
                        By {certificate.instructor}
                      </span>

                      <div className='flex justify-between'>
                        <Link
                          href={certificate.link}
                          target='_blank'
                          className='text-blue-500 dark:text-blue-400 hover:underline transition underline-offset-2 lg:mb-0 inline w-fit'
                        >
                          verification link
                        </Link>
                        <a
                          href={certificate.file}
                          target='_blank'
                          className='group transition'
                          // download={certificate.file}
                        >
                          <Download
                            size={20}
                            className='group-hover:text-blue-500'
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    key={certIndex}
                    className='hover:scale-[1.02] transition bg-gray-100 dark:bg-gray-800/60 border-2 border-gray-400 dark:border-gray-700 rounded-lg max-sm:w-full'
                  >
                    <div className='p-2'>
                      <div className='sm:min-w-[300px] w-full object-cover rounded-md'>
                        <p className='relative block rounded-md w-full h-[200px] lg:w-full dark:bg-gray-700 bg-gray-200'>
                          <span className='inline-block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -rotate-[20deg] font-bold dark:text-gray-400 text-gray-400'>
                            Comming Soon . . .
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className='flex flex-col px-4 py-2 gap-2'>
                      <p className='font-bold inline-block lg:max-w-[240px] w-full'>
                        {certificate.name}{' '}
                      </p>
                      <span className='text-md font-medium text-gray-600 dark:text-gray-300'>
                        By {certificate.instructor}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>{' '}
      </div>
      {/* <section className='container py-4 flex flex-col space-y-6'>
        <h2 className='text-2xl sm:text-3xl font-black text-center'>
          Latest Posts
        </h2>
        <div className='flex flex-wrap items-stretch justify-center gap-4 '>
          {latestPosts.map((post) => {
            return (
              <div
                key={post.slug}
                className='flex flex-col justify-between gap-2 py-4 rounded px-4 shadow hover:bg-gray-200 w-full max-w-[450px] ring-[1px] ring-gray-100 hover:ring-none transition dark:hover:bg-gray-700 dark:ring-gray-500'
              >
                <div>
                  <h2 className='text-2xl font-bold'>
                    <Link href={post.slug}>{post.title}</Link>
                  </h2>
                  <div className='max-w-none text-muted-foreground'>
                    {post.description}
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <dl>
                    <dt className='sr-only'>Published On</dt>
                    <dd className='text-sm sm:text-base font-medium flex items-center gap-1'>
                      <Calendar className='h-4 w-4' />
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </dd>
                  </dl>
                  <Link href={post.slug} className='hover:underline'>
                    Read more →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section> */}
    </>
  );
}
