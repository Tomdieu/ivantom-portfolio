import React from 'react';
import GitHubCalendar from "react-github-calendar";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

function WakatimeGitStats(props) {
    return (

        <section id={"stats"} className={"font-poppins"}>
            <BlurFade delay={BLUR_FADE_DELAY * 11}>

                <div className={"space-y-2"}>
                    <span className="text-xl lg:text-2xl font-bold">My Git & Wakatime Stats</span>

                </div>
            </BlurFade>
            <div className={"flex flex-col"}>


                <div className={"grid grid-cols-1  lg:grid-cols-12 gap-2 p-2 px-2"}>
                    <div className="col-span-8 grid grid-cols-1">


                        <div>
                            <div>
                                <div className={"flex gap-1 items-center"}>
                                    <h1 className="text-xl font-bold">Wakatime Code Stats</h1>
                                    <a href="https://wakatime.com/@7a03d500-b310-4adb-9229-1bb6044d565d"><img
                                        src="https://wakatime.com/badge/user/7a03d500-b310-4adb-9229-1bb6044d565d.svg"
                                        alt="Total time coded since Dec 28 2022"/></a>
                                </div>
                                <a href="https://wakatime.com"><img
                                    src="https://wakatime.com/share/@ivantom/46e13348-3bec-4f73-b187-eab7c71ab7c9.png"
                                    alt={"Tomdieu Wakatime code stats"}/></a>

                            </div>

                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Github commits</h1>
                            <GitHubCalendar username="Tomdieu"/>
                        </div>
                    </div>
                    <a href="https://wakatime.com" className={" col-span-4"}><img

                        src="https://wakatime.com/share/@ivantom/c94b351c-736a-4238-ad13-bbdebb37f6a5.png"
                        alt={"Tomdieu Wakatime languages"}/></a>

                </div>
                <div className={"grid grid-cols-2"}>
                    <a href="https://wakatime.com"><img
                        className={"w-full lg:w-3/4"}
                        src="https://wakatime.com/share/@ivantom/aa994e81-7bc7-4bbf-8caa-007fec0f905d.png"
                        alt={"Tomdieu Editors over last year"}/></a>

                </div>
            </div>
        </section>

    );
}

export default WakatimeGitStats;