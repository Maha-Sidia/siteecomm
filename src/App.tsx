import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown, Menu, X, BookOpen, Cpu, Lightbulb, FileText,
  ArrowRight, Download, Zap, Shield, TrendingUp, Layers,
  Database, Brain, Server, Clock, Target, BarChart3, Code,
  GitBranch, CheckCircle, ChevronRight, Home, Eye, ShoppingCart,
  Search, Sparkles, Settings, Box, Globe, Lock, Gauge,
  XCircle, DollarSign, TrendingDown, Check, Scale, Minus, Puzzle, Cog
} from 'lucide-react';
import './index.css';

/* ─────────── NAVIGATION STRUCTURE ─────────── */
const NAV_STRUCTURE = [
  {
    id: 'hero',
    label: 'Accueil',
    icon: Home,
    submenus: []
  },
  {
    id: 'analyse',
    label: 'Analyse de Spécification',
    icon: BookOpen,
    submenus: [
      { id: 'contexte', label: 'Contexte & Problématique' },
      { id: 'existant', label: 'Analyse de l\'Existant' },
      { id: 'limites', label: 'Limites des Solutions' },
      { id: 'concurrents', label: 'Solutions Concurrentes' },
      { id: 'solution', label: 'Ma Solution Proposée' },
      { id: 'avantages', label: 'Avantages & Valeur Ajoutée' },
    ]
  },
  {
    id: 'conception',
    label: 'Conception',
    icon: Lightbulb,
    submenus: [
      { id: 'vision', label: 'Vision du Système' },
      { id: 'usecases', label: 'Cas d\'Utilisation' },
      { id: 'sequence', label: 'Diagrammes de Séquence' },
      { id: 'architecture', label: 'Architecture Globale' },
      { id: 'choix-archi', label: 'Choix Architecturaux' },
    ]
  },
  {
    id: 'technique',
    label: 'Partie Technique',
    icon: Cpu,
    submenus: [
      { id: 'stack', label: 'Stack Utilisée' },
      { id: 'choix-tech', label: 'Choix Techniques Détaillés' },
      { id: 'pipeline', label: 'Pipeline de Données' },
      { id: 'etapes', label: 'Étapes de Réalisation' },
    ]
  },
  {
    id: 'documentation',
    label: 'Documentation',
    icon: FileText,
    submenus: []
  },
  {
    id: 'conclusion',
    label: 'Conclusion',
    icon: Sparkles,
    submenus: []
  },
];

/* ─────────── SCROLL-TO UTILITY ─────────── */
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/* ─────────── HERO SECTION ─────────── */
function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg" alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1E]/60 via-[#0B0F1E]/80 to-[#0B0F1E]" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#FF6B4A]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 section-padding max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="badge-coral flex items-center gap-2">
              <Sparkles size={14} />
              Projet de Fin d'Études 2025/2026
            </span>
            <span className="badge-teal">PFE Ingénieur</span>
          </div>

          <h1 className="heading-xl mb-6">
            <span className="text-white">Moteur de </span>
            <span className="gradient-text">Recommandation IA</span>
            <br />
            <span className="text-white">pour E-Commerce</span>
          </h1>

          <p className="body-lg max-w-3xl mx-auto mb-10">
            Un système de recommandation intelligent basé sur le <span className="text-[#00D9C0] font-semibold">tracking comportemental</span>,
            combinant <span className="text-[#FF6B4A] font-semibold">MetaRank</span>, <span className="text-[#7B61FF] font-semibold">LightFM</span> et{' '}
            <span className="text-[#FF8C61] font-semibold">Sentence-BERT</span> pour des recommandations personnalisées en temps réel.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('analyse')}
              className="px-8 py-4 bg-gradient-to-r from-[#FF6B4A] to-[#FF8C61] rounded-full text-white font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-[#FF6B4A]/30 transition-all hover:scale-105"
            >
              Découvrir le projet
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('documentation')}
              className="px-8 py-4 glass-card text-white font-semibold flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              <Download size={20} />
              Documentation
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: 'Produits catalogués', value: '524K+', icon: Box },
              { label: 'Latence API', value: '< 100ms', icon: Gauge },
              { label: 'Commandes analysées', value: '189K', icon: Database },
              { label: 'Précision @10', value: '> 5%', icon: Target },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass-card p-4 text-center"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-[#FF6B4A]" />
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-gray-500" />
      </motion.div>
    </section>
  );
}

/* ─────────── SECTION HEADER COMPONENT ─────────── */
function SectionHeader({ badge, title, subtitle }: { badge?: string; title: string; subtitle: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {badge && <span className="badge-coral mb-4 inline-block">{badge}</span>}
      <h2 className="heading-lg mb-4">{title}</h2>
      <p className="body-lg max-w-3xl mx-auto">{subtitle}</p>
    </motion.div>
  );
}

/* ─────────── DATA FOR EXISTANT / CONCURRENTS ─────────── */
const existingProblems = [
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Impact SEO',
    description: "Injection JavaScript côté client incompatible avec le SSR headless. Les moteurs de recherche ne peuvent pas indexer les recommandations.",
    severity: 'high',
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    title: 'Coût élevé',
    description: 'Abonnement annuel récurrent avec frais supplémentaires à chaque modification des règles de personnalisation.',
    severity: 'high',
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: 'Absence de flexibilité',
    description: 'Règles imposées par le fournisseur sans possibilité de configuration métier spécifique (exclusions, priorités, saisonnalité).',
    severity: 'medium',
  },
  {
    icon: <TrendingDown className="w-5 h-5" />,
    title: 'Non-scalabilité',
    description: "Extension vers de nouveaux sites (Snoop) impossible sans nouveau contrat et coûts supplémentaires.",
    severity: 'high',
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Pas d'IA",
    description: "Aucune capacité d'apprentissage automatique ni de personnalisation dynamique basée sur le comportement utilisateur.",
    severity: 'high',
  },
];

const severityColors: Record<string, string> = {
  high: 'bg-red-500/15 text-red-400 border-red-500/20',
  medium: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
  low: 'bg-green-500/15 text-green-400 border-green-500/20',
};

const severityLabels: Record<string, string> = {
  high: 'Critique',
  medium: 'Majeur',
  low: 'Mineur',
};

const solutions = [
  {
    name: 'Recombee',
    founded: '2015, Prague',
    description: 'Solution de recommandation as a service, orientée e-commerce et contenus.',
    clients: 'Tripadvisor, 9GAG, DAZN',
    logo: 'R',
    color: 'from-blue-500 to-indigo-500',
    highlight: false,
    features: [
      { label: 'Pertinence', value: 'advanced', icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: 'Personnalisation', value: 'full', icon: <Cog className="w-3.5 h-3.5" /> },
      { label: 'Flexibilité', value: 'good', icon: <Puzzle className="w-3.5 h-3.5" /> },
      { label: 'Coût', value: 'medium', icon: <DollarSign className="w-3.5 h-3.5" /> },
      { label: 'Intégration', value: 'good', icon: <Globe className="w-3.5 h-3.5" /> },
    ],
    pricing: '99$ - 2499$/mois',
  },
  {
    name: 'Dynamic Yield',
    founded: 'Acquis par Mastercard',
    description: 'Plateforme enterprise de personnalisation, leader Gartner 8 années consécutives.',
    clients: 'Enterprise uniquement',
    logo: 'DY',
    color: 'from-purple-500 to-pink-500',
    highlight: false,
    features: [
      { label: 'Pertinence', value: 'advanced', icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: 'Personnalisation', value: 'full', icon: <Cog className="w-3.5 h-3.5" /> },
      { label: 'Flexibilité', value: 'limited', icon: <Puzzle className="w-3.5 h-3.5" /> },
      { label: 'Coût', value: 'expensive', icon: <DollarSign className="w-3.5 h-3.5" /> },
      { label: 'Intégration', value: 'limited', icon: <Globe className="w-3.5 h-3.5" /> },
    ],
    pricing: 'Sur devis uniquement',
  },
  {
    name: 'Notre Solution',
    founded: 'PFE 2025/2026',
    description: "Moteur de recommandation interne, souverain et entièrement maîtrisé.",
    clients: "La Foir'Fouille",
    logo: 'LF',
    color: 'from-orange-500 to-amber-500',
    highlight: true,
    features: [
      { label: 'Pertinence', value: 'advanced', icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: 'Personnalisation', value: 'full', icon: <Cog className="w-3.5 h-3.5" /> },
      { label: 'Flexibilité', value: 'full', icon: <Puzzle className="w-3.5 h-3.5" /> },
      { label: 'Coût', value: 'low', icon: <DollarSign className="w-3.5 h-3.5" /> },
      { label: 'Intégration', value: 'native', icon: <Globe className="w-3.5 h-3.5" /> },
    ],
    pricing: "Interne, sans abonnement",
  },
];

const valueConfig: Record<string, { icon: React.ReactNode; label: string }> = {
  full: { icon: <Check className="w-4 h-4 text-green-400" />, label: 'Complète' },
  advanced: { icon: <Check className="w-4 h-4 text-green-400" />, label: 'Avancée' },
  good: { icon: <Minus className="w-4 h-4 text-amber-400" />, label: 'Bonne' },
  limited: { icon: <X className="w-4 h-4 text-red-400" />, label: 'Limitée' },
  expensive: { icon: <X className="w-4 h-4 text-red-400" />, label: 'Très élevé' },
  medium: { icon: <Minus className="w-4 h-4 text-amber-400" />, label: 'Modéré' },
  low: { icon: <Check className="w-4 h-4 text-green-400" />, label: 'Maîtrisé' },
  native: { icon: <Check className="w-4 h-4 text-green-400" />, label: 'Native' },
};

/* ─────────── ANALYSE DE SPECIFICATION ─────────── */
function AnalyseSpecSection() {
  return (
    <section id="analyse" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1E] via-[#0F172A] to-[#0B0F1E]" />
      <div className="relative z-10 section-padding max-w-7xl mx-auto">
        <SectionHeader
          badge="Chapitre 1"
          title="Analyse de Spécification"
          subtitle="Une analyse approfondie du contexte métier, des solutions existantes et de la stratégie de différenciation"
        />

        {/* Contexte & Problématique */}
        <div id="contexte" className="mb-20 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF6B4A]/15 flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#FF6B4A]" />
                </div>
                <h3 className="heading-md">Contexte & Problématique</h3>
              </div>
              <p className="body-md mb-4">
                Dans un environnement e-commerce ultra-concurrentiel, la capacité à proposer des services <span className="text-[#00D9C0]">pertinents et hautement personnalisés</span> constitue un levier stratégique essentiel.
              </p>
              <p className="body-md mb-6">
                Pour <strong>La Foir'Fouille</strong>, chaîne française de maxidiscompte spécialisée dans l'équipement maison, cette problématique est amplifiée par :
              </p>
              <ul className="space-y-3">
                {[
                  'Un catalogue produit fortement saisonnier nécessitant des recommandations dynamiques',
                  'Une stratégie omnicanale intégrant web et magasins physiques',
                  'Une architecture headless moderne (SAP Commerce + Next.js)',
                  'Un besoin de personnalisation temps réel sur 524K produits',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FF6B4A] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="gradient-border rounded-2xl">
                <div className="gradient-border-inner p-8">
                  <h4 className="text-xl font-bold mb-4 text-[#FF6B4A]">Objectifs du Projet</h4>
                  <div className="space-y-4">
                    {[
                      { icon: TrendingUp, text: 'Augmenter le taux de conversion', color: '#FF6B4A' },
                      { icon: ShoppingCart, text: 'Encourager la vente croisée', color: '#00D9C0' },
                      { icon: Eye, text: 'Améliorer l\'engagement utilisateur', color: '#7B61FF' },
                      { icon: Shield, text: 'Garantir la conformité SEO (SSR)', color: '#FF8C61' },
                    ].map((goal, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/5">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${goal.color}15` }}>
                          <goal.icon className="w-5 h-5" style={{ color: goal.color }} />
                        </div>
                        <span className="font-medium">{goal.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Analyse de l'Existant */}
        <div id="existant" className="mb-20 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
              <Search className="w-4 h-4" />
              Analyse de l'Existant
            </div>
            <h3 className="heading-md">Solution Actuelle : <span className="text-red-400">BEyable</span></h3>
            <p className="body-md max-w-2xl mx-auto mt-2">BEyable est la solution actuelle de La Foir'Fouille. Bien que fonctionnelle, elle présente des limitations structurelles qui freinent la croissance.</p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="glass-card p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">BEyable</h4>
                    <p className="text-xs text-gray-400">Plateforme française de personnalisation</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-white/5">
                    <h5 className="text-sm font-semibold mb-2">Fonctionnalités actuelles</h5>
                    <ul className="space-y-2">
                      {['Affichage des top ventes globales', 'Top ajouts au panier', 'Logique par magasin de rattachement', 'Injection JavaScript côté client'].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                          <Check className="w-3.5 h-3.5 text-green-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                    <h5 className="text-sm font-semibold text-red-400 mb-2">Approche technique</h5>
                    <p className="text-sm text-gray-400">Client-side rendering uniquement, sans capacité d'apprentissage automatique. Les recommandations sont basées sur des règles métier prédéfinies statiques.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div id="limites" className="glass-card p-8 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                  <h4 className="text-xl font-bold">Limites Identifiées</h4>
                </div>
                <div className="space-y-4">
                  {existingProblems.map((problem, index) => (
                    <motion.div
                      key={problem.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.08 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/20 transition-all"
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${severityColors[problem.severity]}`}>
                        {problem.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h5 className="font-semibold text-sm">{problem.title}</h5>
                          <span className={`text-xs px-2 py-0.5 rounded-full border ${severityColors[problem.severity]}`}>{severityLabels[problem.severity]}</span>
                        </div>
                        <p className="text-xs text-gray-400">{problem.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Solutions Concurrentes */}
        <div id="concurrents" className="mb-20 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
              <Scale className="w-4 h-4" />
              Solutions Concurrentes
            </div>
            <h3 className="heading-md">Comparaison du <span className="text-[#00D9C0]">Marché</span></h3>
            <p className="body-md max-w-2xl mx-auto mt-2">Face aux limites de BEyable, nous avons analysé les solutions du marché les plus pertinentes pour identifier la meilleure approche.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative rounded-2xl border ${
                  solution.highlight
                    ? 'border-orange-500/50 bg-gradient-to-b from-orange-500/10 to-transparent'
                    : 'border-white/10 bg-white/5'
                } p-6 backdrop-blur-sm`}
              >
                {solution.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold">
                    Solution Retenue
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center text-white font-bold text-lg`}>
                    {solution.logo}
                  </div>
                  <div>
                    <h4 className="font-bold">{solution.name}</h4>
                    <p className="text-xs text-gray-400">{solution.founded}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">{solution.description}</p>
                <div className="text-xs text-gray-400 mb-4">
                  <span className="font-medium text-white">Clients :</span> {solution.clients}
                </div>
                <div className="space-y-2.5 mb-6">
                  {solution.features.map((feature) => (
                    <div key={feature.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        {feature.icon}
                        {feature.label}
                      </div>
                      <div className="flex items-center gap-1.5">
                        {valueConfig[feature.value].icon}
                        <span className="text-xs font-medium text-white">{valueConfig[feature.value].label}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={`p-3 rounded-lg text-center text-sm font-medium ${
                  solution.highlight
                    ? 'bg-orange-500/15 text-orange-400 border border-orange-500/20'
                    : 'bg-white/5 text-gray-400'
                }`}>
                  {solution.pricing}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card overflow-hidden"
          >
            <div className="p-6 border-b border-white/10">
              <h4 className="text-lg font-bold">Tableau Comparatif Détaillé</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-sm font-semibold text-gray-400">Critère</th>
                    <th className="text-center p-4 text-sm font-semibold text-gray-400">Recombee</th>
                    <th className="text-center p-4 text-sm font-semibold text-gray-400">Dynamic Yield</th>
                    <th className="text-center p-4 text-sm font-semibold text-orange-400">Notre Solution</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ['Pertinence', 'Filtrage collaboratif + content-based', 'Deep learning + RL', 'Hybride : LightFM + S-BERT + MetaRank'],
                    ['Personnalisation', 'Comportement + historique', 'Comportement + CRM + météo', 'Comportement temps réel + session'],
                    ['Flexibilité métier', 'Configurable via ReQL', 'Limitée (interface propriétaire)', 'Contrôle total, règles métier internes'],
                    ['Intégration', 'API REST + SDKs', 'API générique', 'Native SAP Commerce + FastAPI'],
                    ['Coût', '99$ - 2499$/mois', 'Très élevé (devis)', "Infra interne, pas d'abonnement"],
                    ['SEO', 'SSR possible', 'SSR possible', 'SSR natif (Next.js)'],
                    ['Scalabilité', 'Par paliers tarifaires', 'Enterprise (surcoût)', 'Naturelle, multi-sites sans surcoût'],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4 font-medium">{row[0]}</td>
                      <td className="p-4 text-center text-gray-400">{row[1]}</td>
                      <td className="p-4 text-center text-gray-400">{row[2]}</td>
                      <td className="p-4 text-center text-orange-400 font-medium">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Ma Solution */}
        <div id="solution" className="mb-20 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#00D9C0]/15 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-[#00D9C0]" />
                </div>
                <h3 className="heading-md">Ma Solution Proposée</h3>
              </div>
              <p className="body-md mb-6">
                Un <span className="text-[#00D9C0] font-semibold">moteur de recommandation interne</span> combinant IA moderne, flexibilité métier et intégration native à l'architecture SAP Commerce existante.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Personnalisation avancée', desc: 'MetaRank apprend des clicks/achats en temps réel pour re-ranker les recommandations', icon: Brain },
                  { title: 'Adaptation contextuelle', desc: 'Saisonnalité, magasin de rattachement, stock — tous paramétrables', icon: Settings },
                  { title: 'SEO natif', desc: 'Server-Side Rendering via SAP OCC. Les recommandations sont indexables', icon: Globe },
                  { title: 'Scalabilité naturelle', desc: 'Architecture microservices. Extension vers Snoop sans surcoût', icon: Layers },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#00D9C0]/15 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#00D9C0]" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">{item.title}</h5>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="/comparison-visual.jpg" alt="Solution comparison" className="rounded-2xl w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1E] via-transparent to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Avantages */}
        <div id="avantages" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#FF8C61]/15 flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#FF8C61]" />
              </div>
              <h3 className="heading-md">Avantages & Valeur Ajoutée</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: '< 100ms', label: 'Latence garantie', desc: 'Redis cache + FAISS index', color: '#FF6B4A', icon: Gauge },
                { value: '5-10ms', label: 'Re-ranking MetaRank', desc: 'Personnalisation temps réel', color: '#00D9C0', icon: Clock },
                { value: '0€', label: 'Coût récurrent', desc: 'Solution interne souveraine', color: '#7B61FF', icon: TrendingUp },
                { value: '100%', label: 'Contrôle métier', desc: 'Règles personnalisables', color: '#FF8C61', icon: Shield },
              ].map((avantage, i) => (
                <motion.div
                  key={avantage.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 text-center hover:bg-white/10 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: `${avantage.color}15` }}>
                    <avantage.icon className="w-7 h-7" style={{ color: avantage.color }} />
                  </div>
                  <div className="text-3xl font-bold mb-1" style={{ color: avantage.color }}>{avantage.value}</div>
                  <div className="font-semibold mb-2">{avantage.label}</div>
                  <div className="text-sm text-gray-400">{avantage.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── CONCEPTION SECTION ─────────── */
function ConceptionSection() {
  const [activeDiagram, setActiveDiagram] = useState<string | null>(null);

  const diagramContent: Record<string, { title: string; desc: string; steps: string[] }> = {
    'sequence-homepage': {
      title: 'Diagramme de Séquence — Page d\'Accueil',
      desc: 'Flux de recommandation des top ventes avec personnalisation selon le profil utilisateur',
      steps: [
        'Utilisateur accède à la page d\'accueil (connecté ou anonyme)',
        'Next.js SSR appelle SAP OCC GET /recommendations/top-sales',
        'SAP Commerce vérifie le statut : anonyme / connecté / magasin rattaché',
        'Si connecté : FastAPI récupère candidats bruts Redis (topsales:global)',
        'MetaRank re-rank personnalisé (~10ms) via POST /api/v1/rank',
        'FastAPI retourne liste re-rankée + rankingId à SAP',
        'SAP convertit product codes en ProductData via populators',
        'Next.js reçoit RecommendationWsFoirDTO et affiche les produits',
      ],
      img:'../sequence_home.png',
    },
    'sequence-product': {
      title: 'Diagramme de Séquence — Fiche Produit',
      desc: 'Affichage des produits similaires (Sentence-BERT) et cross-sell (LightFM)',
      steps: [
        'Utilisateur consulte la fiche produit P123',
        'Next.js appelle SAP OCC pour similar et cross-sell en parallèle',
        'FastAPI récupère similar:{P123} depuis Redis (Sentence-BERT)',
        'FastAPI récupère crosssell:{P123} depuis Redis (LightFM)',
        'Si connecté : MetaRank re-rank les deux listes séparément',
        'SAP enrichit les codes produits avec images, prix, disponibilité',
        'Frontend affiche "Produits similaires" + "Souvent achetés ensemble"',
      ],
      img:'../public/sequence_product.png',
    },
    'sequence-cart': {
      title: 'Diagramme de Séquence — Panier',
      desc: 'Recommandations cross-sell agrégées à partir des items du panier',
      steps: [
        'Utilisateur ajoute des produits au panier',
        'Page panier appelle GET /recommendations/cart?items=P1,P2,P3',
        'FastAPI agrège les cross-sell de chaque item du panier',
        'Exclusion des produits déjà dans le panier',
        'MetaRank re-rank la liste agrégée si utilisateur connecté',
        'Affichage : "Complétez votre commande" avec produits complémentaires',
      ],
      img:'../public/sequence_cart.png',
    },
    'sequence-tracking': {
      title: 'Diagramme de Séquence — Tracking Closed-Loop',
      desc: 'Propagation du rankingId pour lier chaque interaction à sa recommandation source',
      steps: [
        'Frontend stocke le rankingId retourné avec chaque liste de recommandations',
        'Utilisateur clique sur un produit recommandé',
        'Frontend envoie POST /events {productCode, rankingId, eventType: "click"}',
        'SAP transmet à FastAPI qui double-écrit : PostgreSQL + MetaRank',
        'MetaRank feedback POST /api/v1/feedback avec le rankingId',
        'Au prochain appel /rank, MetaRank tient compte de ce click',
        'Système d\'apprentissage en boucle fermée (closed-loop)',
      ],
      img:'../public/sequence_tracking.png',
    },
  };

  return (
    <section id="conception" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1E] via-[#0F172A] to-[#0B0F1E]" />
      <div className="relative z-10 section-padding max-w-7xl mx-auto">
        <SectionHeader
          badge="Chapitre 2"
          title="Conception Technique"
          subtitle="Vision architecturale, cas d'utilisation et flux d'interaction du système de recommandation"
        />

        {/* Vision du Système */}
        <div id="vision" className="mb-20 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#7B61FF]/15 flex items-center justify-center">
                <Eye className="w-6 h-6 text-[#7B61FF]" />
              </div>
              <h3 className="heading-md">Vision du Système de Recommandation</h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="body-md">
                  Le système s'intègre harmonieusement dans l'écosystème <strong>La Foir'Fouille</strong>, centré autour de <span className="text-[#00D9C0]">SAP Commerce</span>. Il est conçu comme un ensemble de microservices Python autonomes communiquant via API RESTful.
                </p>
                <div className="glass-card p-6">
                  <h4 className="font-bold mb-4 text-[#FF6B4A]">Principes Architecturaux Clés</h4>
                  <div className="space-y-3">
                    {[
                      { title: 'Microservices', desc: 'Découplage complet du système e-commerce principal' },
                      { title: 'Performance', desc: 'Caches Redis + recherche vectorielle FAISS < 100ms' },
                      { title: 'Batch + Temps Réel', desc: 'Calculs lourds en arrière-plan, réponses instantanées' },
                      { title: 'Personnalisation', desc: 'MetaRank apprend des interactions en temps réel' },
                    ].map((p, i) => (
                      <div key={p.title} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#FF6B4A]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-[#FF6B4A]">{i + 1}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-sm">{p.title}</span>
                          <span className="text-gray-400 text-sm"> — {p.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src="/architecture-hero.jpg" alt="Architecture vision" className="rounded-2xl w-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1E] via-transparent to-transparent rounded-2xl" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cas d'Utilisation */}
        <UseCasesSection />

        {/* Diagrammes de Séquence */}
        <div id="sequence" className="mb-20 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#00D9C0]/15 flex items-center justify-center">
                <Layers className="w-6 h-6 text-[#00D9C0]" />
              </div>
              <h3 className="heading-md">Diagrammes de Séquence</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {Object.entries(diagramContent).map(([key, content]) => (
                <motion.button
                  key={key}
                  onClick={() => setActiveDiagram(activeDiagram === key ? null : key)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 }}
                  className={`glass-card p-6 text-left transition-all hover:bg-white/10 ${activeDiagram === key ? 'ring-2 ring-[#00D9C0] bg-white/10' : ''}`}
                >
                  <h4 className="font-bold mb-2 text-[#00D9C0]">{content.title}</h4>
                  <p className="text-sm text-gray-400">{content.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-[#00D9C0]">
                    {activeDiagram === key ? 'Masquer le détail' : 'Voir le flux détaillé'}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDiagram === key ? 'rotate-180' : ''}`} />
                  </div>
                  {content.img && <div className="mt-4"><img src={content.img} alt={content.title} /></div>}
                </motion.button>
              ))}
            </div>

            <AnimatePresence>
              {activeDiagram && diagramContent[activeDiagram] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="glass-card p-8 overflow-hidden"
                >
                  <h4 className="text-xl font-bold mb-2">{diagramContent[activeDiagram].title}</h4>
                  <p className="text-gray-400 mb-6">{diagramContent[activeDiagram].desc}</p>
                  <div className="space-y-4">
                    {diagramContent[activeDiagram].steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6B4A] to-[#FF8C61] flex items-center justify-center flex-shrink-0 text-sm font-bold">
                          {i + 1}
                        </div>
                        <div className="pt-1">
                          <p className="text-gray-300">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Architecture Globale */}
        <div id="architecture" className="mb-20 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#7B61FF]/15 flex items-center justify-center">
                <Server className="w-6 h-6 text-[#7B61FF]" />
              </div>
              <h3 className="heading-md">Architecture Globale</h3>
            </div>

            <div className="glass-card p-8">
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {[
                  { layer: 'Présentation', tech: 'Next.js (SSR)', role: 'Affichage SEO-friendly', color: '#FF6B4A' },
                  { layer: 'API', tech: 'FastAPI + SAP OCC', role: 'Orchestration & routing', color: '#00D9C0' },
                  { layer: 'Cache + Index', tech: 'Redis + FAISS', role: '< 10ms latence garantie', color: '#7B61FF' },
                  { layer: 'Données', tech: 'PostgreSQL + SAP', role: 'Catalogue + historique', color: '#FF8C61' },
                ].map((layer, i) => (
                  <motion.div
                    key={layer.layer}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center p-4 rounded-xl bg-white/5"
                  >
                    <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: `${layer.color}15` }}>
                      <Layers className="w-6 h-6" style={{ color: layer.color }} />
                    </div>
                    <div className="font-bold text-sm mb-1">{layer.layer}</div>
                    <div className="text-xs font-semibold mb-1" style={{ color: layer.color }}>{layer.tech}</div>
                    <div className="text-xs text-gray-400">{layer.role}</div>
                  </motion.div>
                ))}
              </div>

              <div className="relative">
                <img src="/pipeline-visual.jpg" alt="Data pipeline" className="rounded-xl w-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1E]/80 via-transparent to-transparent rounded-xl" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Choix Architecturaux */}
        <div id="choix-archi" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#FF8C61]/15 flex items-center justify-center">
                <Settings className="w-6 h-6 text-[#FF8C61]" />
              </div>
              <h3 className="heading-md">Choix Architecturaux — Microservices vs Monolithe</h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="glass-card p-6 border-l-4 border-red-400">
                <h4 className="font-bold mb-4 text-red-400">Monolithe SAP Commerce Seul</h4>
                <div className="space-y-3">
                  {[
                    'Dépendance technologique Java — IA Python impossible nativement',
                    'Scalabilité limitée : pic reco = impact global',
                    'Cycles de déploiement lents et rigides',
                    'Isolation des pannes : bug reco = crash e-commerce',
                    'Coût CPU/GPU appliqué à toute la plateforme',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card p-6 border-l-4 border-[#00D9C0]">
                <h4 className="font-bold mb-4 text-[#00D9C0]">Microservices Python Autonome</h4>
                <div className="space-y-3">
                  {[
                    'Flexibilité technologique : Hugging Face, FAISS, FastAPI natifs',
                    'Scalabilité indépendante : scale reco sans toucher SAP',
                    'Déploiement agile : CI/CD découplé du cycle SAP',
                    'Résilience : fallback sur suggestions par défaut',
                    'Optimisation des coûts : ressources ciblées IA uniquement',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#00D9C0] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── PARTIE TECHNIQUE ─────────── */
function PartieTechniqueSection() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const techChoices = [
    {
      id: 'metarank',
      name: 'MetaRank',
      role: 'Re-ranking Personnalisé Temps Réel',
      icon: Sparkles,
      color: '#FF6B4A',
      badge: 'Cœur du système',
      why: [
        'Re-ranking personnalisé en ~5-10ms par requête',
        'Apprend automatiquement des interactions via LambdaMART/XGBoost',
        'Features item + features session (clicks récents)',
        'Remplace le scoring hybride manuel (α, β, γ, δ, ε)',
        'Modèle entraîné en batch (1x/jour), inférence temps réel',
      ],
    },
    {
      id: 'lightfm',
      name: 'LightFM (WARP)',
      role: 'Candidats Cross-Sell',
      icon: Brain,
      color: '#00D9C0',
      badge: 'Filtrage Collaboratif',
      why: [
        'Hybrid : combine collaborative filtering + content-based',
        'Gère élégamment le cold start (nouveaux produits/utilisateurs)',
        'WARP loss : optimise directement le ranking (pas seulement la prédiction)',
        'CPU-friendly : entraînement < 10 min sur 189K commandes',
        'Compétence ML valorisable en soutenance',
      ],
    },
    {
      id: 'sentencebert',
      name: 'Sentence-BERT',
      role: 'Candidats Similarité Sémantique',
      icon: Search,
      color: '#7B61FF',
      badge: 'NLP Avancé',
      why: [
        'Modèle all-MiniLM-L6-v2 : 80MB, rapide CPU, bon pour le français',
        'Similarité sémantique vs TF-IDF (mots-clés)',
        '"Lampe de bureau" ≈ "Luminaire de travail" — compréhension contextuelle',
        'Embeddings pré-calculés une fois, stockés dans Redis',
        'Cosine similarity ultra-rapide sur les vecteurs 384-dim',
      ],
    },
    {
      id: 'sql',
      name: 'SQL Time-Decay',
      role: 'Candidats Top Ventes',
      icon: Database,
      color: '#FF8C61',
      badge: 'Scoring Temps Réel',
      why: [
        'Pas de ML nécessaire : agrégation SQL avec décroissance temporelle',
        'Inspiré de l\'algorithme Hacker News pour la fraîcheur',
        'Adapté à la forte saisonnalité du catalogue',
        'Recalcul 1x/jour via cron job',
        'Résultat stocké Redis : topsales:global',
      ],
    },
  ];

  return (
    <section id="technique" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1E] via-[#0F172A] to-[#0B0F1E]" />
      <div className="relative z-10 section-padding max-w-7xl mx-auto">
        <SectionHeader
          badge="Chapitre 3"
          title="Partie Technique"
          subtitle="Architecture détaillée, choix technologiques justifiés et pipeline de données complet"
        />

        {/* Stack Utilisée */}
        <div id="stack" className="mb-20 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#FF6B4A]/15 flex items-center justify-center">
                <Layers className="w-6 h-6 text-[#FF6B4A]" />
              </div>
              <h3 className="heading-md">Stack Utilisée</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: 'Next.js', category: 'Frontend', color: '#FF6B4A' },
                { name: 'SAP Commerce', category: 'Backend Java', color: '#FF8C61' },
                { name: 'FastAPI', category: 'API Python', color: '#00D9C0' },
                { name: 'PostgreSQL', category: 'Données', color: '#7B61FF' },
                { name: 'Redis', category: 'Cache', color: '#EAB308' },
                { name: 'MetaRank', category: 'Re-ranking', color: '#FF6B4A' },
                { name: 'LightFM', category: 'ML', color: '#00D9C0' },
                { name: 'Sentence-BERT', category: 'NLP', color: '#7B61FF' },
                { name: 'XGBoost', category: 'Boosting', color: '#FF8C61' },
                { name: 'FAISS', category: 'Index ANN', color: '#00D9C0' },
                { name: 'asyncpg', category: 'DB Async', color: '#7B61FF' },
                { name: 'httpx', category: 'HTTP Client', color: '#EAB308' },
              ].map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="glass-card p-4 text-center hover:bg-white/10 transition-all group cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: `${tech.color}15` }}>
                    <Code className="w-5 h-5" style={{ color: tech.color }} />
                  </div>
                  <div className="font-semibold text-sm">{tech.name}</div>
                  <div className="text-xs text-gray-500">{tech.category}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Choix Techniques Détaillés */}
        <div id="choix-tech" className="mb-20 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#00D9C0]/15 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-[#00D9C0]" />
              </div>
              <h3 className="heading-md">Choix Techniques Détaillés</h3>
            </div>

            <div className="relative mb-8">
              <img src="/ml-stack.jpg" alt="ML Stack" className="rounded-2xl w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1E] via-[#0B0F1E]/40 to-transparent rounded-2xl" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {techChoices.map((tech) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedCard(expandedCard === tech.id ? null : tech.id)}
                    className="w-full p-6 text-left flex items-start justify-between"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${tech.color}15` }}>
                        <tech.icon className="w-6 h-6" style={{ color: tech.color }} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-lg">{tech.name}</h4>
                          <span className="px-2 py-0.5 rounded text-xs font-semibold" style={{ backgroundColor: `${tech.color}15`, color: tech.color }}>
                            {tech.badge}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">{tech.role}</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedCard === tech.id ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {expandedCard === tech.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="p-4 rounded-xl bg-white/5 space-y-2">
                            <p className="text-sm font-semibold text-gray-300 mb-3">Pourquoi ce choix ?</p>
                            {tech.why.map((reason, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: tech.color }} />
                                <span className="text-sm text-gray-400">{reason}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Pipeline de Données */}
        <div id="pipeline" className="mb-20 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#7B61FF]/15 flex items-center justify-center">
                <GitBranch className="w-6 h-6 text-[#7B61FF]" />
              </div>
              <h3 className="heading-md">Pipeline de Données</h3>
            </div>

            <div className="glass-card p-8">
              <p className="body-md mb-8 text-center">
                Du <span className="text-[#FF6B4A]">tracking comportemental</span> à la <span className="text-[#00D9C0]">recommandation personnalisée</span> : flux complet de données
              </p>

              <div className="grid md:grid-cols-5 gap-4 items-center">
                {[
                  { title: 'Tracking', desc: 'Clicks, ajouts panier, achats', icon: Eye, color: '#FF6B4A' },
                  { title: 'Collecte', desc: 'SAP OCC → FastAPI', icon: Server, color: '#FF8C61' },
                  { title: 'Stockage', desc: 'PostgreSQL + Redis', icon: Database, color: '#00D9C0' },
                  { title: 'Entraînement', desc: 'LightFM + MetaRank batch', icon: Brain, color: '#7B61FF' },
                  { title: 'Recommandation', desc: 'API temps réel < 100ms', icon: Sparkles, color: '#FF6B4A' },
                ].map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="glass-card p-4 text-center">
                      <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: `${step.color}15` }}>
                        <step.icon className="w-6 h-6" style={{ color: step.color }} />
                      </div>
                      <div className="font-bold text-sm mb-1">{step.title}</div>
                      <div className="text-xs text-gray-400">{step.desc}</div>
                    </div>
                    {i < 4 && (
                      <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-4 h-4 text-gray-600" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-xl bg-white/5">
                <h4 className="font-bold mb-4 text-[#00D9C0]">Flux Détaillé — Requête Utilisateur</h4>
                <div className="space-y-3">
                  {[
                    '1. Utilisateur interagit avec le frontend Next.js (Page Accueil, Produit, Panier)',
                    '2. Frontend déclenche des appels SSR vers SAP Commerce OCC',
                    '3. SAP Commerce appelle le Microservice IA (FastAPI) via API Gateway',
                    '4. FastAPI récupère les candidats bruts depuis Redis (< 5ms)',
                    '5. Si connecté : MetaRank re-rank personnalisé (~10ms)',
                    '6. SAP convertit les product codes en ProductData enrichis',
                    '7. Réponse au frontend avec rankingId pour tracking closed-loop',
                    '8. En parallèle : Pipeline ETL batch entraîne les modèles chaque nuit',
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                      <span className="text-xs font-mono text-[#7B61FF] mt-1">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-sm text-gray-300">{step.replace(/^\d+\.\s*/, '')}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Étapes de Réalisation */}
        <div id="etapes" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#FF8C61]/15 flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#FF8C61]" />
              </div>
              <h3 className="heading-md">Étapes de Réalisation — Planning 12 Semaines</h3>
            </div>

            <div className="relative">
              <img src="/roadmap-visual.jpg" alt="Roadmap" className="rounded-2xl w-full mb-8" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1E] via-transparent to-transparent rounded-2xl" />
            </div>

            <div className="space-y-4">
              {[
                {
                  phase: 'Phase 1',
                  weeks: 'Sem. 1-3',
                  title: 'Infrastructure & Données',
                  color: '#FF6B4A',
                  tasks: ['Setup PostgreSQL + Redis + MetaRank', 'Export MSSQL → PostgreSQL', 'Conversion 189K commandes → events MetaRank JSONL', 'Config MetaRank + EDA'],
                },
                {
                  phase: 'Phase 2',
                  weeks: 'Sem. 4-6',
                  title: 'Modèles ML + Candidats',
                  color: '#00D9C0',
                  tasks: ['SQL time-decay top ventes + Sentence-BERT embeddings', 'LightFM cross-sell + pré-calcul Redis', 'Évaluation offline + pipeline batch'],
                },
                {
                  phase: 'Phase 3',
                  weeks: 'Sem. 7-8',
                  title: 'API FastAPI + Tracking',
                  color: '#7B61FF',
                  tasks: ['Endpoints recommandations + client MetaRank', 'Tracking events closed-loop (rankingId)', 'Tests unitaires + intégration'],
                },
                {
                  phase: 'Phase 4',
                  weeks: 'Sem. 8-10',
                  title: 'Intégration SAP Commerce',
                  color: '#FF8C61',
                  tasks: ['Service Layer + Facade Layer Java', 'Controller OCC + WsDTO', 'Spring beans + configuration'],
                },
                {
                  phase: 'Phase 5',
                  weeks: 'Sem. 10-12',
                  title: 'Frontend + Démo',
                  color: '#EAB308',
                  tasks: ['Composants Next.js + lazy loading', 'Tracking frontend avec rankingId', 'Tests finaux + documentation + rapport'],
                },
              ].map((phase, i) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${phase.color}15` }}>
                        <span className="font-bold" style={{ color: phase.color }}>{i + 1}</span>
                      </div>
                      <div>
                        <div className="font-bold">{phase.phase} — {phase.title}</div>
                        <div className="text-sm text-gray-400">{phase.weeks}</div>
                      </div>
                    </div>
                    <div className="hidden md:block flex-1 h-px bg-white/10" />
                    <span className="badge-coral">{phase.tasks.length} livrables</span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {phase.tasks.map((task, j) => (
                      <div key={j} className="flex items-start gap-2 p-2 rounded-lg bg-white/5">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: phase.color }} />
                        <span className="text-sm text-gray-300">{task}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── USE CASES SECTION (sub-component) ─────────── */
function UseCasesSection() {
  const [showDiagram, setShowDiagram] = React.useState(false);
  return (
    <div id="usecases" className="mb-20 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-[#FF6B4A]/15 flex items-center justify-center">
            <GitBranch className="w-6 h-6 text-[#FF6B4A]" />
          </div>
          <h3 className="heading-md">Diagramme de Cas d'Utilisation</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="glass-card p-8">
            <h4 className="text-lg font-bold mb-6 text-[#FF6B4A]">Cas d'Utilisation Général — La Foir'Fouille</h4>
            <div className="space-y-4">
              {[
                { actor: 'Client', actions: ['Consulter catalogue', 'Ajouter au panier', 'Commander', 'Suivre commande'] },
                { actor: 'Admin', actions: ['Gérer produits', 'Configurer saisonnalité', 'Visualiser analytics'] },
                { actor: 'Système', actions: ['Générer recommandations', 'Tracker comportements', 'Entraîner modèles'] },
              ].map((uc) => (
                <div key={uc.actor} className="p-4 rounded-xl bg-white/5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FF6B4A]/15 flex items-center justify-center">
                      <span className="text-sm font-bold text-[#FF6B4A]">{uc.actor[0]}</span>
                    </div>
                    <span className="font-semibold">{uc.actor}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {uc.actions.map(a => (
                      <span key={a} className="px-2 py-1 rounded-md text-xs bg-white/5 text-gray-300">{a}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-8">
            <h4 className="text-lg font-bold mb-6 text-[#00D9C0]">Cas d'Utilisation Raffiné — Système de Recommandation</h4>
            <div className="space-y-3">
              {[
                'Afficher top ventes global/magasin/personnalisé',
                'Afficher produits similaires (Sentence-BERT)',
                'Afficher cross-sell (LightFM)',
                'Afficher top ajout au panier',
                'Tracker clicks / ajouts panier / achats',
                'Re-ranker en temps réel (MetaRank)',
                'Gérer saisonnalité admin (rule-based)',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                  <CheckCircle className="w-5 h-5 text-[#00D9C0] flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Diagram toggle button */}
        <motion.button
          onClick={() => setShowDiagram(v => !v)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full glass-card p-5 flex items-center justify-between hover:bg-white/10 transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B4A]/15 flex items-center justify-center">
              <Eye className="w-5 h-5 text-[#FF6B4A]" />
            </div>
            <div className="text-left">
              <p className="font-bold text-sm">Diagramme de Cas d'Utilisation Global</p>
              <p className="text-xs text-gray-400">{showDiagram ? 'Cliquez pour masquer' : 'Cliquez pour afficher le diagramme UML'}</p>
            </div>
          </div>
          <ChevronDown className={`w-5 h-5 text-[#FF6B4A] transition-transform duration-300 ${showDiagram ? 'rotate-180' : ''}`} />
        </motion.button>

        <AnimatePresence>
          {showDiagram && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="mt-4 glass-card p-4">
                <img
                  src="/topVenteSequenceDiag-Page-6.drawio.png"
                  alt="Diagramme de Cas d'Utilisation"
                  className="w-full rounded-xl object-contain max-h-[600px]"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

/* ─────────── CONCLUSION SECTION ─────────── */
function ConclusionSection() {
  return (
    <section id="conclusion" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1E] via-[#0F172A] to-[#0B0F1E]" />
      <div className="relative z-10 section-padding max-w-7xl mx-auto">
        <SectionHeader
          badge="Bilan & Perspectives"
          title="Conclusion & Perspectives"
          subtitle="De l'expérience passive à l'engagement intelligent — ce que ce projet accomplit et ouvre comme horizons"
        />

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="glass-card p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF6B4A] via-[#00D9C0] to-[#7B61FF]" />
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6B4A]/20 to-[#00D9C0]/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-7 h-7 text-[#FF6B4A]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Ce que ce projet accomplit</h3>
                <p className="body-md mb-6">
                  Ce moteur de recommandation transforme radicalement l'expérience utilisateur sur La Foir'Fouille : on passe d'un <span className="text-red-400 font-semibold">comportement passif</span> — l'utilisateur entre sur le site, visite quelques pages, clique çà et là, puis repart sans achat — vers une <span className="text-[#00D9C0] font-semibold">expérience intelligente et proactive</span> qui anticipe ses besoins, retient son attention et le fidélise.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { from: 'Visite anonyme', to: 'Profil comportemental temps réel', color: '#FF6B4A' },
                    { from: 'Règles statiques BEyable', to: 'IA hybride apprenante (LightFM + MetaRank)', color: '#00D9C0' },
                    { from: 'Coût abonnement récurrent', to: 'Solution interne souveraine à coût maîtrisé', color: '#7B61FF' },
                  ].map((t, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <p className="text-xs text-red-400 line-through mb-2">{t.from}</p>
                      <p className="text-sm font-semibold" style={{ color: t.color }}>{t.to}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Perspectives */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#7B61FF]/15 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#7B61FF]" />
            </div>
            <h3 className="heading-md">Perspectives d'Évolution</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Search,
                title: 'Reco dans la Recherche',
                desc: 'Intégration des recommandations directement dans la barre de recherche : suggestions personnalisées en temps réel basées sur l\'historique et le contexte.',
                color: '#FF6B4A',
                tag: 'Court terme',
              },
              {
                icon: TrendingUp,
                title: 'Upsell Intelligent',
                desc: 'Proposer automatiquement la version premium ou la gamme supérieure d\'un produit consulté, optimisé par MetaRank selon le profil d\'achat.',
                color: '#00D9C0',
                tag: 'Court terme',
              },
              {
                icon: ShoppingCart,
                title: 'Bundle & Pack Dynamiques',
                desc: 'Générer des offres groupées personnalisées ("Achetez ensemble") calculées en temps réel à partir des patterns d\'achat collaboratif.',
                color: '#7B61FF',
                tag: 'Moyen terme',
              },
              {
                icon: Globe,
                title: 'Extension Multi-Sites',
                desc: 'Déploiement natif sur Snoop et autres enseignes du groupe sans surcoût contractuel, grâce à l\'architecture microservices.',
                color: '#FF8C61',
                tag: 'Moyen terme',
              },
              {
                icon: Brain,
                title: 'LLM & Reco Conversationnelle',
                desc: 'Intégration d\'un assistant IA conversationnel capable de recommander des produits via dialogue naturel ("Je cherche quelque chose pour...").',
                color: '#00D9C0',
                tag: 'Long terme',
              },
              {
                icon: BarChart3,
                title: 'Dashboard Analytics Temps Réel',
                desc: 'Interface admin de monitoring : CTR, taux de conversion par recommandation, A/B testing des stratégies de ranking.',
                color: '#7B61FF',
                tag: 'Long terme',
              },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-6 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110" style={{ backgroundColor: `${p.color}15` }}>
                    <p.icon className="w-5 h-5" style={{ color: p.color }} />
                  </div>
                  <div>
                    <span className="text-xs px-2 py-0.5 rounded-full font-semibold mb-2 inline-block" style={{ backgroundColor: `${p.color}15`, color: p.color }}>{p.tag}</span>
                    <h4 className="font-bold text-sm">{p.title}</h4>
                  </div>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── DOCUMENTATION SECTION ─────────── */
function DocumentationSection() {
  return (
    <section id="documentation" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1E] via-[#0F172A] to-[#0B0F1E]" />
      <div className="relative z-10 section-padding max-w-7xl mx-auto">
        <SectionHeader
          badge="Ressources"
          title="Documentation Complète"
          subtitle="Accédez à l'ensemble des documents de conception et de spécification du projet"
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: 'Conception Technique',
              desc: 'Diagrammes de cas d\'utilisation, séquence système, architecture détaillée et choix architecturaux.',
              icon: Lightbulb,
              color: '#FF6B4A',
              file: 'Conception technique de systeme de recommandation.docx',
            },
            {
              title: 'Plan Technique V2',
              desc: 'Stack MetaRank, modèles ML, endpoints FastAPI, tracking closed-loop et planning complet.',
              icon: Cpu,
              color: '#00D9C0',
              file: 'Untitled_Document.pdf',
            },
            {
              title: 'Étude Générale',
              desc: 'Contexte, analyse de l\'existant, solutions concurrentes, choix algorithmiques et architecture.',
              icon: BookOpen,
              color: '#7B61FF',
              file: 'pfemaha (2).pdf',
            },
          ].map((doc, i) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 text-center hover:bg-white/10 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: `${doc.color}15` }}>
                <doc.icon className="w-8 h-8" style={{ color: doc.color }} />
              </div>
              <h4 className="text-lg font-bold mb-3">{doc.title}</h4>
              <p className="text-sm text-gray-400 mb-6">{doc.desc}</p>
              <a
                href={`/${doc.file}`}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
                style={{ backgroundColor: `${doc.color}15`, color: doc.color }}
              >
                <Download className="w-4 h-4" />
                Télécharger
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8 max-w-3xl mx-auto text-center"
        >
          <Sparkles className="w-8 h-8 mx-auto mb-4 text-[#FF6B4A]" />
          <h4 className="text-xl font-bold mb-3">Méthodologie de Documentation</h4>
          <p className="text-gray-400 mb-6">
            Tous les documents suivent une structure pédagogique : contexte → analyse → conception → implémentation → évaluation.
            Les choix techniques sont systématiquement justifiés avec comparaisons quantitatives.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['UML', 'ArchiMate', 'Merise', 'BPMN', 'Mathematica'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs bg-white/5 text-gray-400">{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── FOOTER ─────────── */
function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-1">SmartRec</h3>
            <p className="text-sm text-gray-500">Moteur de Recommandation IA — La Foir'Fouille</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span>PFE 2025/2026</span>
            <span>DECADE Tunisia</span>
            <span>La Foir'Fouille</span>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-gray-600">
          Projet de Fin d'Études — Ingénierie Informatique — Système de Recommandation E-Commerce basé sur le Tracking Comportemental
        </div>
      </div>
    </footer>
  );
}

/* ─────────── BREADCRUMB ─────────── */
function Breadcrumb({ activeSection }: { activeSection: string }) {
  const sectionMap: Record<string, { parent: string; parentId: string }> = {
    contexte: { parent: 'Analyse de Spécification', parentId: 'analyse' },
    existant: { parent: 'Analyse de Spécification', parentId: 'analyse' },
    limites: { parent: 'Analyse de Spécification', parentId: 'analyse' },
    concurrents: { parent: 'Analyse de Spécification', parentId: 'analyse' },
    solution: { parent: 'Analyse de Spécification', parentId: 'analyse' },
    avantages: { parent: 'Analyse de Spécification', parentId: 'analyse' },
    vision: { parent: 'Conception', parentId: 'conception' },
    usecases: { parent: 'Conception', parentId: 'conception' },
    sequence: { parent: 'Conception', parentId: 'conception' },
    architecture: { parent: 'Conception', parentId: 'conception' },
    'choix-archi': { parent: 'Conception', parentId: 'conception' },
    stack: { parent: 'Partie Technique', parentId: 'technique' },
    'choix-tech': { parent: 'Partie Technique', parentId: 'technique' },
    pipeline: { parent: 'Partie Technique', parentId: 'technique' },
    etapes: { parent: 'Partie Technique', parentId: 'technique' },
  };

  const info = sectionMap[activeSection];
  if (!info) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-20 left-0 right-0 z-40 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm">
          <button onClick={() => scrollToSection(info.parentId)} className="text-gray-400 hover:text-white transition-colors">
            {info.parent}
          </button>
          <ChevronRight className="w-3 h-3 text-gray-600" />
          <span className="text-white font-medium">{activeSection}</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────── MAIN APP ─────────── */
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('hero');
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  /* Scroll spy */
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_STRUCTURE.flatMap(n => [
        n.id,
        ...n.submenus.map(s => s.id)
      ]);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveNav(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((id: string, parentId?: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
    setExpandedMenu(null);
    if (parentId) {
      setTimeout(() => scrollToSection(id), 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F1E] text-white">
      {/* Navigation */}
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F1E]/80 backdrop-blur-xl border-b border-white/10">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button onClick={() => scrollToSection('hero')} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B4A] to-[#FF8C61] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg hidden sm:block">
                <span className="gradient-text">SmartRec</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_STRUCTURE.map((item) => (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => {
                      if (item.submenus.length > 0) {
                        setExpandedMenu(expandedMenu === item.id ? null : item.id);
                      } else {
                        handleNavClick(item.id);
                      }
                    }}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeNav === item.id || item.submenus.some(s => s.id === activeNav)
                        ? 'text-[#FF6B4A] bg-[#FF6B4A]/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                    {item.submenus.length > 0 && (
                      <ChevronDown className={`w-3 h-3 transition-transform ${expandedMenu === item.id ? 'rotate-180' : ''}`} />
                    )}
                  </button>

                  {/* Submenu */}
                  <AnimatePresence>
                    {expandedMenu === item.id && item.submenus.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute top-full left-0 mt-1 w-64 glass-card py-2"
                      >
                        {item.submenus.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => handleNavClick(sub.id, item.id)}
                            className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                              activeNav === sub.id ? 'text-[#FF6B4A] bg-[#FF6B4A]/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/5"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-white/10"
            >
              <div className="section-padding py-4 space-y-2">
                {NAV_STRUCTURE.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => {
                        if (item.submenus.length === 0) handleNavClick(item.id);
                        else setExpandedMenu(expandedMenu === item.id ? null : item.id);
                      }}
                      className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm font-medium ${
                        activeNav === item.id ? 'text-[#FF6B4A] bg-[#FF6B4A]/10' : 'text-gray-400'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                      {item.submenus.length > 0 && (
                        <ChevronDown className={`w-3 h-3 ml-auto transition-transform ${expandedMenu === item.id ? 'rotate-180' : ''}`} />
                      )}
                    </button>
                    {expandedMenu === item.id && item.submenus.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleNavClick(sub.id, item.id)}
                        className={`w-full text-left pl-10 pr-3 py-2 text-sm ${
                          activeNav === sub.id ? 'text-[#FF6B4A]' : 'text-gray-500'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Breadcrumb */}
      <Breadcrumb activeSection={activeNav} />

      {/* Main Content */}
      <main className="pt-16">
        <HeroSection />
        <AnalyseSpecSection />
        <ConceptionSection />
        <PartieTechniqueSection />
        <ConclusionSection />
        <DocumentationSection />
        <Footer />
      </main>
    </div>
  );
}
