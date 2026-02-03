import { type ChangeEvent, type FormEvent, useMemo, useState } from 'react';
import './register.css';

type AccessStatus = 'idle' | 'submitting' | 'success' | 'error';

interface AccessFormState {
	fullName: string;
	email: string;
	company: string;
	role: string;
	launchWindow: string;
	expectedVolume: string;
	message: string;
	terms: boolean;
}

type EditableField = Exclude<keyof AccessFormState, 'terms'>;

const initialState: AccessFormState = {
	fullName: '',
	email: '',
	company: '',
	role: '',
	launchWindow: '',
	expectedVolume: '',
	message: '',
	terms: false,
};

const Register = () => {
	const [form, setForm] = useState<AccessFormState>(initialState);
	const [status, setStatus] = useState<AccessStatus>('idle');

	const handleFieldChange = (field: EditableField) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		setForm((prev) => ({ ...prev, [field]: event.target.value }));
	};

	const handleTermsChange = (event: ChangeEvent<HTMLInputElement>) => {
		setForm((prev) => ({ ...prev, terms: event.target.checked }));
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setStatus('submitting');

		const isValid =
			form.fullName.trim() &&
			form.email.trim() &&
			form.company.trim() &&
			form.role.trim() &&
			form.launchWindow.trim() &&
			form.expectedVolume.trim() &&
			form.message.trim() &&
			form.terms;

		setTimeout(() => {
			setStatus(isValid ? 'success' : 'error');
			if (isValid) {
				setForm(initialState);
			}
		}, 700);
	};

	const statusCopy: Record<AccessStatus, string> = useMemo(
		() => ({
			idle: '',
			submitting: 'Verificando tu perfil con nuestro equipo...',
			success: '¡Gracias! Te contactaremos con los siguientes pasos en menos de 24h.',
			error: 'Revisa los campos obligatorios y acepta los términos para continuar.',
		}),
		[]
	);

	const isDisabled =
		status === 'submitting' ||
		!form.fullName.trim() ||
		!form.email.trim() ||
		!form.company.trim() ||
		!form.role.trim() ||
		!form.launchWindow.trim() ||
		!form.expectedVolume.trim() ||
		!form.message.trim() ||
		!form.terms;

	return (
		<div className="register-page">
			<div className="register-atmosphere" aria-hidden>
				<span className="pulse pulse-one" />
				<span className="pulse pulse-two" />
				<span className="pulse pulse-three" />
			</div>

			<main className="register-grid" role="main">
				<section className="register-panel">
					<p className="panel-pill">Solicitud de acceso</p>
					<h1>Conecta tu mesa de inversiones al stack RWA</h1>
					<p className="panel-intro">
						Valida tu identidad institucional y obtén credenciales para tokenizar, auditar y operar activos reales de forma
						automática.
					</p>
					<ul className="panel-highlights">
						<li>
							<span>Due diligence en 24h</span>
							<p>Integración con KYC/AML propio o mediante nuestros partners.</p>
						</li>
						<li>
							<span>Sandbox multi-chain</span>
							<p>Prueba despliegues en redes de staging con data sintética.</p>
						</li>
						<li>
							<span>Capas de gobernanza</span>
							<p>Define políticas, firmas múltiples y alertas de riesgos en minutos.</p>
						</li>
					</ul>

					<div className="panel-timeline">
						<div>
							<p>01</p>
							<strong>Revisión documental</strong>
							<span>Equipo legal</span>
						</div>
						<div>
							<p>02</p>
							<strong>Configuración sandbox</strong>
							<span>Arquitectura</span>
						</div>
						<div>
							<p>03</p>
							<strong>Deploy productivo</strong>
							<span>Customer success</span>
						</div>
					</div>
				</section>

				<section className="register-card" aria-live="polite">
					<header>
						<p className="card-pill">Formulario verificado</p>
						<h2>Solicita tu onboarding</h2>
						<p>Usa tu correo corporativo. Procesamos nuevas cuentas en menos de un día hábil.</p>
					</header>

					<form className="register-form" onSubmit={handleSubmit}>
						<label>
							Nombre completo
							<input
								type="text"
								name="fullName"
								placeholder="Ej. Ana Morales"
								value={form.fullName}
								onChange={handleFieldChange('fullName')}
								required
							/>
						</label>

						<label>
							Correo corporativo
							<input
								type="email"
								name="email"
								placeholder="nombre@firma.com"
								value={form.email}
								onChange={handleFieldChange('email')}
								autoComplete="email"
								required
							/>
						</label>

						<div className="form-duo">
							<label>
								Empresa
								<input
									type="text"
									name="company"
									placeholder="Holding / Fondo"
									value={form.company}
									onChange={handleFieldChange('company')}
									required
								/>
							</label>

							<label>
								Rol
								<input
									type="text"
									name="role"
									placeholder="Cargo principal"
									value={form.role}
									onChange={handleFieldChange('role')}
									required
								/>
							</label>
						</div>

						<div className="form-duo">
							<label>
								Volumen proyectado (USD)
								<select name="expectedVolume" value={form.expectedVolume} onChange={handleFieldChange('expectedVolume')} required>
									<option value="">Selecciona un rango</option>
									<option value="0-1M">0 - 1M</option>
									<option value="1-10M">1M - 10M</option>
									<option value="10-50M">10M - 50M</option>
									<option value="50M+">50M +</option>
								</select>
							</label>

							<label>
								Horizonte de despliegue
								<select name="launchWindow" value={form.launchWindow} onChange={handleFieldChange('launchWindow')} required>
									<option value="">Selecciona una opción</option>
									<option value="inmediato">0 - 3 meses</option>
									<option value="medio">3 - 6 meses</option>
									<option value="largo">6 - 12 meses</option>
								</select>
							</label>
						</div>

						<label className="message-field">
							Cuéntanos qué necesitas tokenizar
							<textarea
								name="message"
								placeholder="Describí los activos, jurisdicciones y métricas clave."
								value={form.message}
								onChange={handleFieldChange('message')}
								rows={4}
								required
							/>
						</label>

						<label className="terms-checkbox">
							<input type="checkbox" checked={form.terms} onChange={handleTermsChange} />
							Autorizo el tratamiento de datos y acepto las políticas de onboarding.
						</label>

						<button type="submit" className="cta" disabled={isDisabled}>
							{status === 'submitting' ? 'Enviando...' : 'Enviar solicitud'}
						</button>
					</form>

					{status !== 'idle' && <p className={`status status-${status}`}>{statusCopy[status]}</p>}

					<footer>
						<p>¿Necesitas una demo personalizada? Escríbenos a partnerships@rwa-stack.xyz</p>
					</footer>
				</section>
			</main>
		</div>
	);
};

export default Register;
