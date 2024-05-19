import { buttonVariants } from '@/components/ui/button';
import { certificates, projects, siteConfig } from '@/config/site';
import { cn, formatDate, sortPosts } from '@/lib/utils';
import { posts } from '#site/content';
import Link from 'next/link';
import { PostItem } from '@/components/post-item';
import Image from 'next/image';
import {
  ArrowRightIcon,
  Calendar,
  Download,
  Mail,
  MoveRight,
  PhoneCall,
} from 'lucide-react';
import { Icons } from '@/components/icons';

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <>
      <section className='space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32 mb-10'>
        <div className='relative container flex flex-col gap-4 text-center bg-transparent'>
          <div className='bg-[#df5b73] -translate-x-1/2 left-1/2 md:size-[450px] size-[300px] blur-[200px]  md:blur-[400px] -z-2 rounded-full absolute'></div>
          <div className='relative z-2'>
            <div className='size-[150px] rounded-full overflow-hidden mx-auto my-4'>
              <Image
                width={300}
                height={300}
                className='w-full h-full object-cover'
                src='/static/hab.jpeg'
                // src={`${process.env.NEXT_PUBLIC_APP_URL}/static/hab.jpeg`}
                alt='hero image'
              />
            </div>
            <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance z-3'>
              I&apos;m Hab
            </h1>
            <p className='max-w-[42rem] mx-auto text-muted-foreground sm:text-xl inline-block py-4 text-pretty'>
              A skilled web developer with expertise in{' '}
              <span className='dark:text-[#61DBFB] text-[#287588] font-bold'>
                React
              </span>
              , <span className='text-[#F55247] font-bold'>Laravel</span>, and{' '}
              <span className='bg-gradient-to-r dark:to-[#F55247] to-[#F55247] dark:from-[#61DBFB] from-[#287588] inline-block text-transparent bg-clip-text font-bold'>
                UI/UX design
              </span>
              . I specialize in creating intuitive, dynamic, and visually
              compelling web applications. My goal is to turn complex problems
              into elegant digital solutions that drive success.
              <span className='block mt-4'>
                Let&apos;s build something extraordinary together.
              </span>
            </p>
            <div className='flex flex-col gap-4 justify-center sm:flex-row'>
              <Link
                href='/blog'
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'w-full sm:w-fit'
                )}
              >
                View my blog
              </Link>
              <Link
                href={siteConfig.links.github}
                target='_blank'
                rel='noreferrer'
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'w-full sm:w-fit'
                )}
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='container py-4 flex flex-col space-y-6'>
        <h2 className='text-2xl mb-4 sm:text-3xl font-black text-center'>
          My Projects
        </h2>
        <div className='space-y-40 max-lg:space-y-50'>
          {projects.map((project, projIndex) => {
            return (
              <div
                key={projIndex}
                className='flex max-lg:flex-col items-center lg:even:flex-row-reverse gap-10 group justify-center'
              >
                <div className='flex flex-col justify-center gap-2'>
                  <div className='flex flex-col justify-center w-full max-w-[600px] gap-4'>
                    <h3 className='text-xl font-bold md:text-2xl'>
                      {project.title}
                    </h3>
                    <p className='md:text-lg lg:text-xl text-md text-pretty'>
                      {project.description}
                    </p>
                  </div>
                  <div className='flex gap-2 flex-wrap mt-4'>
                    {project.usedTechnology.map((tech, i) => {
                      return (
                        <span
                          key={i}
                          className='px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm'
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                  <Link
                    href={project.link}
                    target='_blank'
                    className='text-blue-500 inline-flex items-center gap-2 mt-4 hover:underline transition'
                  >
                    View Project
                    <MoveRight size={20} />
                  </Link>
                </div>

                <div className='w-full max-w-[600px] relative'>
                  <Image
                    width={300}
                    height={500}
                    className='w-full h-full rounded-lg object-contain '
                    src={project.desktopImage}
                    alt={project.title}
                  />
                  {project.mobileImage ? (
                    <Image
                      width={300}
                      height={300}
                      className='absolute right-1 max-sm:w-[200px] lg:group-even:left-1 -top-10 rounded-xl w-[250px] shadow-md '
                      src={project.mobileImage}
                      alt={project.title}
                    />
                  ) : (
                    ''
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className='container py-4 flex flex-col space-y-6'>
        <h2 className='text-2xl sm:text-3xl font-black text-center'>
          Certifications
        </h2>
        <div className='flex lg:flex-col gap-4 flex-wrap justify-center w-fit lg:mx-auto'>
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
          {certificates.map((certificate, certIndex) => {
            return certificate.status === 'Completed' ? (
              <div
                key={certIndex}
                className='max-w-[420px] lg:max-w-[unset] shadow-lg dark:shadow-gray-200/20 ring-1 rounded-lg ring-gray-200 px-4 py-2 lg:flex lg:gap-4 lg:items-start lg:py-4 '
              >
                <h3 className='inline-flex gap-2 my-2 text-balance items-center lg:w-full'>
                  {<Icons.certification_badge className='size-14' />}
                  <span className='inline-flex flex-col'>
                    <p className='text-xl font-bold inline-block lg:max-w-[230px] w-full'>
                      {certificate.name}
                    </p>
                    <span className='text-md font-medium text-gray-600 dark:text-gray-300'>
                      By {certificate.instructor}
                    </span>
                  </span>
                </h3>
                <div className='max-w-[600px]'>
                  <p className='text-pretty'>{certificate.description}</p>
                  <div className='flex items-center mt-4 mb-2 gap-4'>
                    <Link
                      href={certificate.link}
                      target='_blank'
                      className='text-blue-500 dark:text-blue-400 hover:underline transition underline-offset-2 inline-block lg:mb-0'
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
              <div className='max-w-[420px] lg:max-w-[100%] shadow-lg dark:shadow-gray-200/20 ring-1 rounded-lg ring-gray-200 px-4 py-2 lg:flex lg:gap-4 lg:items-start lg:py-4'>
                <h3 className='inline-flex gap-2 my-2 text-balance items-center lg:w-full'>
                  {<Icons.certification_badge className='size-14' />}
                  <span className='inline-flex flex-col'>
                    <p className='text-xl font-bold inline-block lg:max-w-[230px] w-full'>
                      {certificate.name}
                    </p>
                    <span className='text-md font-medium text-gray-600 dark:text-gray-300'>
                      By {certificate.instructor}
                    </span>
                  </span>
                </h3>
                <div className='max-w-[600px] w-full'>
                  <div className='inline-flex flex-col gap-2 w-full'>
                    <p className='relative block rounded-md w-full h-[200px] lg:w-[600px] dark:bg-gray-700 bg-gray-200'>
                      <span className='inline-block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -rotate-[20deg] font-bold dark:text-gray-400 text-gray-400'>
                        Comming Soon . . .
                      </span>
                    </p>
                  </div>
                  <p className='text-blue-500 dark:text-blue-400 hover:underline transition underline-offset-2 inline-block mt-2 mb-2 lg:mb-0 bg-blue-500 w-32 h-3 rounded-full'></p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className='container py-4 flex flex-col space-y-6'>
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
      </section>
      <section className='container py-4 flex flex-col space-y-6'>
        <h2 className='text-2xl sm:text-3xl font-black text-center'>
          Contact me
        </h2>
        <div className='sm:flex justify-center mx-auto items-center gap-5'>
          <Image
            width={300}
            height={500}
            className='w-full max-w-[400px] rounded-lg object-contain '
            src='/static/contact.jpg'
            alt='Contact Me'
          />

          <div className='flex flex-col gap-2 sm:mt-0 mt-4 max-sm:items-center'>
            <a
              className='flex items-center gap-2 transition hover:text-blue-500 ml-2'
              href='tel:0945596959'
            >
              <PhoneCall size={20} />
              +251 945 596 959
            </a>
            <a
              className='flex items-center gap-2 transition hover:text-blue-500 ml-2'
              href='mailto:havecodesoft@gmail.com'
            >
              <Mail size={20} />
              havecodesoft@gmail.com
            </a>
            <nav className='flex items-center'>
              <Link
                href={siteConfig.links.linkedin}
                target='_blank'
                rel='noreferrer'
              >
                <div
                  className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'w-10 px-0'
                  )}
                >
                  <Icons.linkedin className='size-6' />
                  <span className='sr-only'>Linkedin</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.github}
                target='_blank'
                rel='noreferrer'
              >
                <div
                  className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'w-10 px-0'
                  )}
                >
                  <Icons.gitHub className='h-4 w-4' />
                  <span className='sr-only'>GitHub</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target='_blank'
                rel='noreferrer'
              >
                <div
                  className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'w-10 px-0'
                  )}
                >
                  <Icons.twitter className='h-4 w-4' />
                  <span className='sr-only'>Twitter</span>
                </div>
              </Link>
              {/* <ModeToggle /> */}
              {/* <MobileNav /> */}
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
