import { useState } from 'react';
import './Content.css';

const heroHighlights = [
	{ label: 'Activos tokenizados', value: '$2.4B', detail: 'equity, deuda y flujos híbridos' },
	{ label: 'Redes integradas', value: '11', detail: 'L2 públicas y consorcios privados' },
	{ label: 'Tiempo al mercado', value: '-42%', detail: 'vs rails tradicionales' },
];

const strategyCards = [
	{
		title: 'Originación inteligente',
		description: 'Capta oportunidades inmobiliarias, commodities o crédito privado con scoring en cadena y verificación documental automática.',
		badge: 'Pipeline',
		points: ['Data rooms con permisos dinámicos', 'Firmas MPC nativas', 'Alertas de compliance en vivo'],
	},
	{
		title: 'Distribución fraccionada',
		description: 'Lanza shares tokenizados para LPs globales con whitelists segmentados y pricing orquestado por oráculos seguros.',
		badge: 'Liquidity',
		points: ['Bookbuilding interactivo', 'Mercados secundarios integrados', 'Integraciones con custodios'],
	},
	{
		title: 'Automatización de reporting',
		description: 'Conecta flujos contables, métricas ESG y feeds IoT para generar dashboards regulatorios y métricas de impacto en minutos.',
		badge: 'Ops',
		points: ['Templates IFRS / GAAP', 'Certificados NFT para auditoría', 'Workflows con IA supervisada'],
	},
];

const insightSlides = [
	{
		tag: 'Caso real',
		sector: 'Logística sostenible',
		title: 'Tokenización del hub frío más grande de LATAM',
		summary: 'Estructuramos notas respaldadas por ingresos, fragmentadas para 1.200 inversionistas con liquidación diaria y panel ESG en tiempo real.',
		metrics: ['ROI 18.4% anualizado', 'Emisión en 21 días', 'Participación en 4 jurisdicciones'],
		author: 'Equipo Structured Finance',
	},
	{
		tag: 'Sandbox',
		sector: 'Energía renovable',
		title: 'Celdas solares modulares para retail investors',
		summary: 'Simulamos pagos por performance y redimimos posiciones vía stablecoins programables para reducir costos operativos 37%.',
		metrics: ['4 cadenas piloto', 'KPI IoT cada 15 min', 'Swap automático a moneda local'],
		author: 'Lab de Integraciones',
	},
	{
		tag: 'Playbook',
		sector: 'Crédito agrícola',
		title: 'Financiamiento climático bajo demanda',
		summary: 'Combinamos pólizas paramétricas con tokenización de facturas para ofrecer liquidez inmediata a cooperativas.',
		metrics: ['Tasa mora <1%', 'Más de 900 productores', 'KPIs públicos en IPFS'],
		author: 'Risk & Compliance',
	},
];

const partnerBadges = ['Circle', 'Fireblocks', 'Chainlink', 'Polygon Labs', 'Avalanche', 'Near', 'Securitize', 'Goldfinch'];

const Content = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const handleNext = () => setSlideIndex((prev) => (prev + 1) % insightSlides.length);
	const handlePrev = () => setSlideIndex((prev) => (prev - 1 + insightSlides.length) % insightSlides.length);

	return (
		<div className="content-shell">
			<section className="content-hero">
				<div>
					<p className="pill">Estrategia end-to-end</p>
					<h1>
						Orquesta tus activos reales <span>en un stack orquestado</span>
					</h1>
					<p className="lead">
						Modelamos la tokenización como producto digital: desde due diligence y gobernanza hasta distribución y liquidez secundaria.
					</p>
				</div>
				<ul className="hero-highlights">
					{heroHighlights.map((item) => (
						<li key={item.label}>
							<p>{item.label}</p>
							<strong>{item.value}</strong>
							<span>{item.detail}</span>
						</li>
					))}
				</ul>
			</section>

			<section className="strategy-grid">
				{strategyCards.map((card) => (
					<article key={card.title}>
						<p className="badge">{card.badge}</p>
						<h3>{card.title}</h3>
						<p>{card.description}</p>
						<ul>
							{card.points.map((point) => (
								<li key={point}>{point}</li>
							))}
						</ul>
					</article>
				))}
			</section>

			<section className="insight-carousel">
				<header>
					<p className="pill">Historias verificadas</p>
					<h2>Casos que escalan la tokenización</h2>
				</header>
				<div className="carousel-shell">
					<button type="button" aria-label="anterior" onClick={handlePrev}>
						◂
					</button>
					<div className="carousel-window">
						<div className="carousel-track" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
							{insightSlides.map((slide) => (
								<article key={slide.title}>
									<p className="badge">{slide.tag}</p>
									<span className="sector">{slide.sector}</span>
									<h3>{slide.title}</h3>
									<p>{slide.summary}</p>
									<ul>
										{slide.metrics.map((metric) => (
											<li key={metric}>{metric}</li>
										))}
									</ul>
									<footer>{slide.author}</footer>
								</article>
							))}
						</div>
					</div>
					<button type="button" aria-label="siguiente" onClick={handleNext}>
						▸
					</button>
				</div>
				<div className="carousel-dots">
					{insightSlides.map((_, index) => (
						<button
							key={`dot-${index}`}
							type="button"
							onClick={() => setSlideIndex(index)}
							aria-label={`Ir al slide ${index + 1}`}
							className={index === slideIndex ? 'active' : ''}
						/>
					))}
				</div>
			</section>

			<section className="case-grid">
				<div className="case-card">
					<h4>Playbook de cumplimiento</h4>
					<p>
						Automatiza reportes CNBV, SEC o ESMA exportando cada operación en formatos auditables y anclados en IPFS.
					</p>
					<ul>
						<li>Alertas Tier-1 y Tier-2</li>
						<li>Versionado legal con hashes</li>
						<li>Dashboards personalizables</li>
					</ul>
				</div>
				<div className="case-card highlight">
					<h4>Mercados secundarios privados</h4>
					<p>
						Construye matching engines de liquidez con límites de exposición, neteo automático y liquidaciones en stablecoins reguladas.
					</p>
					<ul>
						<li>OTC rooms token-gated</li>
						<li>Netting T+0 con smart settlements</li>
						<li>APIs para custodios y bancos</li>
					</ul>
				</div>
				<div className="case-card">
					<h4>Inteligencia operativa</h4>
					<p>Orquesta tareas y SLAs entre equipos legales, riesgo y producto con playbooks reutilizables.</p>
					<ul>
						<li>Workflows multijurisdicción</li>
						<li>Scorecards en vivo</li>
						<li>Integraciones vía webhooks</li>
					</ul>
				</div>
			</section>

			<section className="partner-marquee">
				<p className="pill">Ecosistema avalado</p>
				<div className="marquee-track">
					{partnerBadges.concat(partnerBadges).map((partner, index) => (
						<span key={`${partner}-${index}`}>{partner}</span>
					))}
				</div>
			</section>
		</div>
	);
};

export default Content;
