import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn, formatDate, sortPosts } from '@/lib/utils';
import { posts } from '#site/content';
import Link from 'next/link';
import { PostItem } from '@/components/post-item';
import Image from 'next/image';
import { Calendar } from 'lucide-react';

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <>
      <section className='space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32'>
        <div className='container flex flex-col gap-4 text-center bg-transparent'>
          <div className='size-[150px] rounded-full overflow-hidden mx-auto'>
            <Image
              width={300}
              height={300}
              className='w-full h-full object-cover'
              src='/static/hab.jpeg'
              alt='hero image'
            />
          </div>
          <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance'>
            I&apos;m Hab
          </h1>
          <p className='max-w-[42rem] mx-auto text-muted-foreground sm:text-xl inline-block py-4 text-pretty'>
            A skilled web developer with expertise in{' '}
            <span className='text-[#F55247] font-bold'>Laravel</span>,{' '}
            <span className='text-[#61DBFB] font-bold'>React</span>, and{' '}
            <span className='bg-gradient-to-r from-[#F55247] to-[#61DBFB] inline-block text-transparent bg-clip-text font-bold'>
              UI/UX design
            </span>
            . I specialize in creating intuitive, dynamic, and visually
            compelling web applications. My goal is to turn complex problems
            into elegant digital solutions that drive success. Let&apos;s build
            something extraordinary together.
          </p>
          <div className='flex flex-col gap-4 justify-center sm:flex-row'>
            <Link
              href='/blog'
              className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-fit')}
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
      </section>
      <section className='container py-4 flex flex-col space-y-6'>
        <h2 className='text-2xl sm:text-4xl md:text-5xl font-black text-center'>
          My Projects
        </h2>
      </section>
      <section className='container py-4 flex flex-col space-y-6'>
        <h2 className='text-2xl sm:text-4xl md:text-5xl font-black text-center'>
          Latest Posts
        </h2>
        <div className='flex flex-wrap items-stretch justify-center gap-4 '>
          {latestPosts.map((post) => {
            return (
              <Link
                href={post.slug}
                key={post.slug}
                className='flex flex-col justify-between gap-2 py-4 rounded px-4 shadow hover:bg-gray-200 w-full max-w-[450px] ring-[1px] ring-gray-100 hover:ring-none transition dark:hover:bg-gray-700 dark:ring-gray-500'
              >
                <div>
                  <div>
                    <h2 className='text-2xl font-bold'>
                      <Link href={post.slug}>{post.title}</Link>
                    </h2>
                  </div>
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
                  <span>Read more →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <section className='container py-4 flex flex-col space-y-6'>
        <h2 className='text-2xl sm:text-4xl md:text-5xl font-black text-center'>
          Contact me
        </h2>
      </section>
    </>
  );
}
