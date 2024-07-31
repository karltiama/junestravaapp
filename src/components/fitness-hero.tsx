"use client";
import React from "react";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const authorizeUrl = `https://www.strava.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_STRAVA_REDIRECT_URI}&approval_prompt=force&scope=read,activity:read,activity:read_all`;

const FitnessHero = () => {
	return (
		<div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1400px] mx-auto">
			<div className="flex-1 pt-36 sm:px-16 px-6">
				<h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
					Empower your fitness journey -- set goals and track your progress
				</h1>
				<p className="text-[27px] text-black-100 font-light mt-5">
					Monitor your workouts, see your progress, and stay inspired on your
					fitness journey!
				</p>
				<Link
					className={`${buttonVariants({
						variant: "outline",
					})} mt-10 bg-blue-400`}
					href={authorizeUrl}>
					Connect your Strava Account!
				</Link>
			</div>
			<div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen ">
				<div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
					<Image
						src="/fitness.svg"
						alt="hero"
						fill
						className="object-contain"
					/>
					<div className="hero__image-overlay" />
				</div>
			</div>
		</div>
	);
};

export default FitnessHero;