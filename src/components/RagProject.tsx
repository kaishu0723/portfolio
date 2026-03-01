'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function RagProject() {
  const IMG_SIZE=28
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8 font-sans text-white">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header Section */}
        <header className="text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              RAG System
            </h1>
            <p className="text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
            Google Gemini を搭載したドキュメント検索チャットシステム。<br/>
            PDF、CSV、テキストファイルを瞬時にインテリジェントな FAQ ボットに変換します。
            </p>
          </motion.div>
        </header>

        {/* Hero / Visual Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative overflow-hidden shadow-xl border border-neutral-200 bg-neutral-900 aspect-16/8 flex items-center justify-center group"
        >
          <Image src="/img/rag-flow.png" fill alt='rag image' className='object-cover'/>
        </motion.div>

        {/* Key Features Grid */}
        <section>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard 
              title="Multi-Format Support"
              description="Seamlessly indexes .txt, .pdf, and .csv files. Just drop them into the source directory."
            />
            <FeatureCard 
              title="Context-Aware Search"
              description="Rewrites queries based on conversation history to find relevant documents even with vague follow-up questions."
            />
            <FeatureCard 
              title="Persistent Logging"
              description="Automatically records all Q&A interactions into a local SQLite database for analysis and improvement."
            />
          </div>
        </section>

        {/* Tech Stack Badges */}
        <section className="border-t border-neutral-200 pt-10 relative">
          <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">Built With</h3>
          <div className="flex flex-wrap gap-3">
            <Badge>Python 3.10+</Badge>
            <Badge>Google Gemini API</Badge>
            <Badge>LangChain (Inferred)</Badge>
            <Badge>ChromaDB</Badge>
            <Badge>SQLite</Badge>
            <Badge>RAG Architecture</Badge>
          </div>
          <a href="http://github.com/kaishu0723/rag-system" className="max-w-max text-[18px] flex justify-between items-center gap-2 transition-all duration-300 shadow-lg px-4 py-2 bg-white text-black absolute bottom-0 rounded-md right-0">
                <Image
                    src="/img/github-mark.png" width={IMG_SIZE} height={IMG_SIZE} alt="github-mark"
                />
                <span className="relative top-px">GitHub</span>
            </a>
        </section>

      </div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="bg-neutral-800 text-white p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-200">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-neutral-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 text-neutral-200 text-sm font-medium border border-neutral-200">
      {children}
    </span>
  );
}
