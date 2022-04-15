import type { NextPage } from 'next';
import NextLink from 'next/link';

import {
  FaFile,
  FaFileAlt,
  FaFileCode,
  FaFolder,
  FaFolderOpen,
  FaFolderPlus,
} from 'react-icons/fa';

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-cblue to-cred w-min-w-screen min-h-screen">
      <div className="flex items-center bg-gray-800 rounded-xl lg:p-8 p-5 flex-col">
        <NextLink
          href="https://github.com/Drageast/nextjs-boilerplate"
          passHref
        >
          <h1 className="bg-gradient-to-l from-cblue to-cred bg-clip-text font-extrabold lg:text-6xl text-xl text-transparent p-2 cursor-pointer">Nextjs boilerplate by Drageast</h1>
        </NextLink>
        <h2 className="text-white lg:text-2xl text-base font-bold pt-1">Using Prettier, EsLint, Tailwindcss and React icons</h2>
        <section className="flex flex-col m-5 mt-12 items-center justify-center lg:text-2xl text-base text-white">
            <p>Folder structure</p>
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-4 lg:m-5 m-2">
              <div className="flex flex-col">
                {/* src */}
                <div className="flex flex-row text-green-400">
                    <h2><FaFolderOpen className="lg:mr-2 mr-0.5"/>src</h2>
                </div>
                {/* Grid for src */}
                <div className="grid grid-cols-2 gap-5  mt-1 lg:text-xl text-sm border border-green-400 lg:p-2 p-1 rounded-lg">
                  {/* components */}
                  <div className="flex flex-row text-pink-300">
                    <h2><FaFolder className="lg:mr-2 mr-0.5"/>components</h2>
                  </div>
                  {/* constants */}
                  <div className="flex flex-row text-gray-300">
                    <h2><FaFolder className="lg:mr-2 mr-0.5"/>constants</h2>
                  </div>
                  {/* hooks */}
                  <div className="flex flex-row text-purple-600">
                    <h2><FaFolder className="lg:mr-2 mr-0.5"/>hooks</h2>
                  </div>
                  {/* modules */}
                  <div className="flex flex-row text-cyan-400">
                    <h2><FaFolder className="lg:mr-2 mr-0.5"/>modules</h2>
                  </div>
                  {/* styles */}
                  <div className="flex flex-row text-blue-400">
                    <h2><FaFolder className="lg:mr-2 mr-0.5"/>styles</h2>
                  </div>
                  {/* types */}
                  <div className="flex flex-row text-blue-600">
                    <h2><FaFolder className="lg:mr-2 mr-0.5"/>types</h2>
                  </div>
                  {/* lib */}
                  <div className="flex flex-row text-green-700">
                    <h2><FaFolder className="lg:mr-2 mr-0.5"/>lib</h2>
                  </div>
                  <section>
                    {/* pages */}
                    <div className="flex flex-row text-orange-400">
                      <h2><FaFolderOpen className="lg:mr-2 mr-0.5"/>pages</h2>
                    </div>
                    {/* Grid for pages */}
                     <div className="grid grid-cols-2 gap-5  mt-1 lg:text-lg text-xs border border-orange-400 lg:p-2 p-1 rounded-lg">
                        {/* api */}
                        <div className="flex flex-row text-yellow-400">
                          <h2><FaFolder className="lg:mr-2 mr-0.5"/>api</h2>
                        </div>
                     </div>
                  </section>
                </div>
              </div>
              <div className="flex flex-col">
                {/* public */}
                <div className="flex flex-row text-blue-400">
                    <h2><FaFolderOpen className="lg:mr-2 mr-0.5"/>public</h2>
                </div>
                {/* Grid for public */}
                <div className="grid grid-cols-2 gap-5  mt-1 lg:text-xl text-sm border border-blue-400 lg:p-2 p-1 rounded-lg">
                  {/* mainfest */}
                  <div className="flex flex-row text-gray-400">
                    <h2><FaFolder className="lg:mr-2 mr-0.5"/>mainfest</h2>
                  </div>
                  {/* svg */}
                  <div className="flex flex-row text-yellow-200">
                    <h2><FaFolder className="lg:mr-2 mr-0.5"/>svg</h2>
                  </div>
                  {/* images */}
                  <div className="flex flex-row text-green-500">
                    <h2><FaFolder className="lg:mr-2 mr-0.5"/>images</h2>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                {/* root */}
                <div className="flex flex-row text-white">
                    <h2><FaFolderPlus className="lg:mr-2 mr-0.5"/>root</h2>
                </div>
                {/* Grid for root */}
                <div className="grid grid-cols-2 gap-5  mt-1 lg:text-xl text-sm border border-white lg:p-2 p-1 rounded-lg">
                  {/* prettierrc */}
                  <div className="flex flex-row text-red-400">
                    <h2><FaFile className="lg:mr-2 mr-0.5"/>prettierrc</h2>
                  </div>
                  {/* prettierignore */}
                  <div className="flex flex-row text-red-500">
                    <h2><FaFile className="lg:mr-2 mr-0.5"/>prettierignore</h2>
                  </div>
                  {/* eslintrc */}
                  <div className="flex flex-row text-teal-400">
                    <h2><FaFile className="lg:mr-2 mr-0.5"/>eslintrc</h2>
                  </div>
                  {/* eslintignore */}
                  <div className="flex flex-row text-teal-500">
                    <h2><FaFile className="lg:mr-2 mr-0.5"/>eslintignore</h2>
                  </div>
                  {/* tsconfig */}
                  <div className="flex flex-row text-blue-500">
                    <h2><FaFileCode className="lg:mr-2 mr-0.5"/>tsconfig</h2>
                  </div>
                  {/* gitignore */}
                  <div className="flex flex-row text-orange-500">
                    <h2><FaFileAlt className="lg:mr-2 mr-0.5"/>gitignore</h2>
                  </div>
                </div>
              </div>
            </div>
        </section>
        <section className="flex flex-col justify-center items-center">
          <p className="font-bold text-white text-lg">Installation:</p>
          <code className="bg-white rounded-md m-1">npx create-next-app --example https://github.com/Drageast/nextjs-boilerplate/tree/Tailwind</code>
        </section>
      </div>
    </div>
  );
};

export default Home;
