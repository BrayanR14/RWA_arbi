import { Fragment, useMemo, useState } from 'react';
import './counts.css';

const heroMetrics = [
	{ label: 'Órdenes en vivo', value: '1,382', delta: '+18% m/m' },
	{ label: 'Ofertas firmadas', value: '642', delta: '+9% m/m' },
	{ label: 'Liquidaciones T+0', value: '312', delta: '+41% m/m' },
];


const accountTypes = [
	{
		id: 'trading-desk',
		title: 'Mesa institucional',
		description: 'Opera originaciones complejas, firma paquetes masivos y coordina aprobaciones multilínea.',
		badge: 'Pro',
		limits: { operations: 'Sin límite', offers: '≥ 200 simultáneas', settlement: 'Stablecoin + fiat' },
		features: ['Roles y permisos avanzados', 'Gobernanza con MPC', 'API FIX + REST'],
	},
	{
		id: 'market-maker',
		title: 'Market maker',
		description: 'Inyecta liquidez a libros secundarios, automatiza cotizaciones y spreads dinámicos.',
		badge: 'Liquidity',
		limits: { operations: '15,000 diarias', offers: '500 por pool', settlement: 'Stablecoin regulada' },
		features: ['Feeds en milisegundos', 'Monitor de riesgo intradía', 'Treasury multimoneda'],
	},
	{
		id: 'issuer',
		title: 'Originador',
		description: 'Crea ofertas tokenizadas, controla bookbuilding y habilita reportes regulatorios automáticos.',
		badge: 'Issuer',
		limits: { operations: '5,000 diarias', offers: 'Campañas ilimitadas', settlement: 'Smart escrow' },
		features: ['Templates legal-compliance', 'Onboarding inversionistas', 'Firmas digitales certificadas'],
	},
];

const operationFlows = [
	{ stage: 'Originación', owners: 'Issuer, Legal', sla: '24h', tooling: 'Data rooms cifrados, KYC modular' },
	{ stage: 'Oferta primaria', owners: 'Issuer, Market maker', sla: 'Tiempo real', tooling: 'Bookbuilding, whitelists dinámicos' },
	{ stage: 'Trading secundario', owners: 'Market maker', sla: '15 ms', tooling: 'Motor matching, alertas de spreads' },
	{ stage: 'Liquidación', owners: 'Mesa institucional', sla: 'T+0/T+1', tooling: 'Smart settlements, netting automático' },
];

const downPaymentOptions = [
	{ id: '20', label: '20% anticipo', percent: 0.2 },
	{ id: '35', label: '35% anticipo', percent: 0.35 },
	{ id: '50', label: '50% anticipo', percent: 0.5 },
];

const financingPlans = [
	{ id: '6x', label: 'Plan 6 cuotas', months: 6, rate: 0.05, tag: 'Cierre rápido' },
	{ id: '12x', label: 'Plan 12 cuotas', months: 12, rate: 0.085, tag: 'Balanceado' },
	{ id: '18x', label: 'Plan 18 cuotas', months: 18, rate: 0.12, tag: 'Flujo flexible' },
];

const propertyPortfolio = [
	{
		id: 'atlas',
		name: 'Torre Atlas',
		location: 'CDMX · Oficinas prime',
		price: 420_000,
		irr: '15.2%',
		cashYield: '8.1%',
		risk: 'Medio',
	},
	{
		id: 'laguna',
		name: 'Laguna Norte',
		location: 'Bogotá · Bodegas logísticas',
		price: 310_000,
		irr: '13.4%',
		cashYield: '7.3%',
		risk: 'Bajo',
	},
	{
		id: 'aurora',
		name: 'Residencial Aurora',
		location: 'Madrid · Living multifamily',
		price: 520_000,
		irr: '17.8%',
		cashYield: '9.0%',
		risk: 'Medio/Alto',
	},
	{
		id: 'patagonia',
		name: 'Parque Patagonia',
		location: 'Buenos Aires · Energía solar',
		price: 265_000,
		irr: '12.1%',
		cashYield: '6.5%',
		risk: 'Regulado',
	},
];

const baseTicketPrice = propertyPortfolio.reduce((min, asset) => (asset.price < min ? asset.price : min), propertyPortfolio[0].price);

const formatCurrency = (value: number, decimals = 0) =>
	value.toLocaleString('es-MX', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: decimals,
		maximumFractionDigits: decimals,
	});

const Counts = () => {
	const [activeAccountId, setActiveAccountId] = useState(accountTypes[0].id);
	const [selectedPropertyId, setSelectedPropertyId] = useState(propertyPortfolio[0].id);
	const [selectedDownPaymentId, setSelectedDownPaymentId] = useState(downPaymentOptions[0].id);

	const activeAccount = useMemo(
		() => accountTypes.find((acc) => acc.id === activeAccountId) ?? accountTypes[0],
		[activeAccountId]
	);

	const selectedProperty = useMemo(
		() => propertyPortfolio.find((asset) => asset.id === selectedPropertyId) ?? propertyPortfolio[0],
		[selectedPropertyId]
	);

	const selectedDownPayment = useMemo(
		() => downPaymentOptions.find((option) => option.id === selectedDownPaymentId) ?? downPaymentOptions[0],
		[selectedDownPaymentId]
	);

	const financedAmount = useMemo(
		() => selectedProperty.price * (1 - selectedDownPayment.percent),
		[selectedProperty, selectedDownPayment]
	);

	return (
		<div className="counts-shell">
			<section className="counts-hero">
				<div>
					<p className="pill">Cuentas operativas</p>
					<h1>Escala tus operaciones con cuentas diseñadas para negociar y liquidar RWA</h1>
					<p>
						Define límites, permisos y métodos de liquidación para cada perfil de usuario. Todas las cuentas incluyen monitoreo en tiempo real
						y workflows auditables.
					</p>
				</div>
				<ul>
					{heroMetrics.map((metric) => (
						<li key={metric.label}>
							<p>{metric.label}</p>
							<strong>{metric.value}</strong>
							<span>{metric.delta}</span>
						</li>
					))}
				</ul>
			</section>

			<section className="account-selector">
				{accountTypes.map((account) => (
					<button
						key={account.id}
						type="button"
						onClick={() => setActiveAccountId(account.id)}
						className={account.id === activeAccountId ? 'active' : ''}
					>
						<p className="badge">{account.badge}</p>
						<h3>{account.title}</h3>
						<p>{account.description}</p>
					</button>
				))}
			</section>

			<section className="account-detail">
				<header>
					<h2>Configura la cuenta {activeAccount.title}</h2>
					<p>{activeAccount.description}</p>
				</header>
				<div className="limit-grid">
					<div>
						<p>Operaciones por día</p>
						<strong>{activeAccount.limits.operations}</strong>
					</div>
					<div>
						<p>Ofertas activas</p>
						<strong>{activeAccount.limits.offers}</strong>
					</div>
					<div>
						<p>Liquidación</p>
						<strong>{activeAccount.limits.settlement}</strong>
					</div>
				</div>
				<ul className="feature-list">
					{activeAccount.features.map((feature) => (
						<li key={feature}>{feature}</li>
					))}
				</ul>
			</section>

			<section className="finance-panel">
				<header>
					<p className="pill">Pago en cuotas</p>
					<h2>
						Define cómo pagar {selectedProperty.name} en cuotas fijas y transparentes
					</h2>
					<p>
						Selecciona un inmueble ficticio, el anticipo deseado y visualiza cuántas cuotas necesitas y el costo de cada una según el plan
						disponible.
					</p>
				</header>
				<div className="property-picker">
					{propertyPortfolio.map((asset) => (
						<button
							key={asset.id}
							type="button"
							onClick={() => setSelectedPropertyId(asset.id)}
							className={asset.id === selectedPropertyId ? 'active' : ''}
						>
							<h3>{asset.name}</h3>
							<p>{asset.location}</p>
							<span>{formatCurrency(asset.price)}</span>
						</button>
					))}
				</div>
				<div className="downpayment-picker">
					<p>Anticipo</p>
					<div>
						{downPaymentOptions.map((option) => (
							<button
								key={option.id}
								type="button"
								onClick={() => setSelectedDownPaymentId(option.id)}
								className={option.id === selectedDownPaymentId ? 'active' : ''}
							>
								{option.label}
							</button>
						))}
                        
					</div>
					<ul>
						<li>Ticket: {formatCurrency(selectedProperty.price)}</li>
						<li>Anticipo: {formatCurrency(selectedProperty.price * selectedDownPayment.percent)}</li>
						<li>Saldo a financiar: {formatCurrency(financedAmount)}</li>
					</ul>
				</div>
				<div className="plan-grid">
					{financingPlans.map((plan) => {
						const totalWithRate = financedAmount * (1 + plan.rate);
						const monthlyPayment = totalWithRate / plan.months || 0;
						const interestCost = totalWithRate - financedAmount;
						return (
							<article key={plan.id} className="plan-card">
								<header>
									<p className="badge">{plan.tag}</p>
									<h3>{plan.label}</h3>
								</header>
								<strong className="monthly">{formatCurrency(monthlyPayment, 2)} / cuota</strong>
								<ul>
									<li>{plan.months} cuotas fijas</li>
									<li>Tasa operativa {(plan.rate * 100).toFixed(1)}%</li>
									<li>Intereses estimados {formatCurrency(interestCost, 2)}</li>
								</ul>
								<footer>
									<span>Total financiado {formatCurrency(totalWithRate)}</span>
								</footer>
							</article>
						);
					})}
				</div>
			</section>

			<section className="property-comparison">
				<header>
					<p className="pill">Comparador de inmuebles</p>
					<h2>Compara tickets ficticios antes de lanzar una oferta</h2>
					<p>Analiza precio estimado, rendimiento y riesgo para decidir qué inmueble tokenizar o comprar.</p>
				</header>
				<div className="property-grid">
					{propertyPortfolio.map((asset) => {
						const delta = ((asset.price / baseTicketPrice - 1) * 100).toFixed(1);
						const isCheapest = asset.price === baseTicketPrice;
						return (
							<article key={asset.id} className={`property-card ${asset.id === selectedPropertyId ? 'active' : ''}`}>
								<div>
									<h4>{asset.name}</h4>
									<span>{asset.location}</span>
								</div>
								<strong>{formatCurrency(asset.price)}</strong>
								<ul>
									<li>IRR proyectada {asset.irr}</li>
									<li>Cash yield {asset.cashYield}</li>
									<li>Perfil de riesgo {asset.risk}</li>
								</ul>
								<p className="comparison-delta">{isCheapest ? 'Ticket base' : `+${delta}% vs base`}</p>
								<button type="button" onClick={() => setSelectedPropertyId(asset.id)}>
									Usar para cuotas
								</button>
							</article>
						);
					})}
				</div>
			</section>

			<section className="operations-table">
				<header>
					<p className="pill">Circuito operativo</p>
					<h2>Flujo completo de ofertas y liquidaciones</h2>
				</header>
				<div className="table-grid">
					<div className="table-head">Etapa</div>
					<div className="table-head">Responsables</div>
					<div className="table-head">SLA objetivo</div>
					<div className="table-head">Tooling</div>
					{operationFlows.map((flow) => (
						<Fragment key={flow.stage}>
							<div>{flow.stage}</div>
							<div>{flow.owners}</div>
							<div>{flow.sla}</div>
							<div>{flow.tooling}</div>
						</Fragment>
					))}
				</div>
			</section>

			<section className="counts-cta">
				<div>
					<h3>¿Necesitas cuentas segmentadas por operación?</h3>
					<p>Orquestamos estructuras multi-entidad, KYC compartido y límites de exposición por activo o jurisdicción.</p>
				</div>
				<button type="button">Hablar con un especialista</button>
			</section>
		</div>
	);
};

export default Counts;
