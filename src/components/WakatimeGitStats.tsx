'use client';

import React from 'react';
import Image from 'next/image';
import GitHubCalendar from "react-github-calendar";
import BlurFade from "@/components/magicui/blur-fade";

interface WakatimeGitStatsProps {
  // Add props if needed in the future
}

const BLUR_FADE_DELAY = 0.04;

// Define theme colors directly to avoid useTheme issues
const calendarThemes = {
  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
};

const WakatimeGitStats: React.FC<WakatimeGitStatsProps> = () => {
  return (
    <section id="stats" className="font-poppins py-6">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <div className="space-y-2 mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
            Activity
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Coding Stats
          </h2>
          <p className="text-muted-foreground max-w-xl">
            My development activity tracked via Wakatime and GitHub contributions over the past year.
          </p>
        </div>
      </BlurFade>
      
      <div className="space-y-8">
        {/* Main stats grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Wakatime stats - left column */}
          <div className="col-span-full lg:col-span-8 space-y-8">
            {/* Wakatime section */}
            <div className="rounded-lg p-4 border bg-card/50">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-xl font-bold">Wakatime Code Stats</h3>
                <a 
                  href="https://wakatime.com/@7a03d500-b310-4adb-9229-1bb6044d565d" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View Wakatime Profile"
                  className="h-6"
                >
                  <Image
                    src="https://wakatime.com/badge/user/7a03d500-b310-4adb-9229-1bb6044d565d.svg"
                    alt="Total time coded since Dec 28 2022"
                    width={150}
                    height={24}
                    priority={false}
                    quality={75}
                    className="h-6 w-auto"
                  />
                </a>
              </div>
              <a 
                href="https://wakatime.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View Wakatime Statistics"
                className="block relative w-full"
              >
                <Image
                  src="https://wakatime.com/share/@ivantom/46e13348-3bec-4f73-b187-eab7c71ab7c9.png"
                  alt="Tomdieu Wakatime coding activity stats"
                  width={800}
                  height={450}
                  quality={90}
                  priority={false}
                  className="w-full rounded-md"
                />
              </a>
            </div>
            
            {/* GitHub section */}
            <div className="rounded-lg p-4 border bg-card/50">
              <h3 className="text-xl font-bold mb-4">GitHub Contribution Calendar</h3>
              <div className="overflow-x-auto">
                <GitHubCalendar 
                  username="Tomdieu"
                  theme={calendarThemes}
                  fontSize={12}
                  blockSize={12}
                  blockMargin={4}
                  hideColorLegend={false}
                  hideMonthLabels={false}
                  labels={{
                    totalCount: '{{count}} contributions in the last year',
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* Languages chart - right column */}
          <div className="col-span-full lg:col-span-4 rounded-lg border p-4 bg-card/50">
            <h3 className="text-xl font-bold mb-4">Languages</h3>
            <a 
              href="https://wakatime.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="View language statistics on Wakatime"
              className="block relative w-full"
            >
              <Image
                src="https://wakatime.com/share/@ivantom/c94b351c-736a-4238-ad13-bbdebb37f6a5.png"
                alt="Tomdieu Wakatime programming languages"
                width={400}
                height={400}
                quality={90}
                priority={false}
                className="w-full rounded-md"
              />
            </a>
          </div>
        </div>
        
        {/* Editors chart - bottom section */}
        <div className="rounded-lg p-4 border bg-card/50">
          <h3 className="text-xl font-bold mb-4">Editors Usage</h3>
          <a 
            href="https://wakatime.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="View editor statistics on Wakatime"
            className="block max-w-3xl mx-auto relative"
          >
            <Image
              src="https://wakatime.com/share/@ivantom/aa994e81-7bc7-4bbf-8caa-007fec0f905d.png"
              alt="Tomdieu Editors usage over last year"
              width={600} 
              height={300}
              quality={90}
              priority={false}
              className="w-full rounded-md"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WakatimeGitStats;