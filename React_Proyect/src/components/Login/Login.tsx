import { type FormEvent, useState } from 'react';
import './login.css';
type LoginStatus = 'idle' | 'submitting' | 'success' | 'error';

interface LoginFormState {
	email: string;
	password: string;
	remember: boolean;
}

const initialState: LoginFormState = {
	email: '',
	password: '',
	remember: false,
};

const Login = () => {
	const [form, setForm] = useState<LoginFormState>(initialState);
	const [status, setStatus] = useState<LoginStatus>('idle');

	const handleChange = (field: keyof LoginFormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = field === 'remember' ? event.target.checked : event.target.value;
		setForm((prev) => ({ ...prev, [field]: value }));
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setStatus('submitting');

		const isValid = form.email.trim() && form.password.trim();
		setTimeout(() => {
			setStatus(isValid ? 'success' : 'error');
			if (isValid) {
				setForm(initialState);
			}
		}, 600);
	};

	const renderStatus = () => {
		if (status === 'success') {
			return 'Acceso concedido. ¡Bienvenido de nuevo!';
		}
		if (status === 'error') {
			return 'Revisa tu correo y contraseña.';
		}
		if (status === 'submitting') {
			return 'Verificando credenciales...';
		}
		return '';
	};

	const isDisabled = status === 'submitting' || !form.email.trim() || !form.password.trim();

	return (
		<div className="login-page">
			<div className="login-atmosphere" aria-hidden>
				<span className="orb orb-one" />
				<span className="orb orb-two" />
				<span className="orb orb-three" />
			</div>

			<main className="login-grid" role="main">
				<section className="login-panel">
					<p className="panel-tag">Plataforma RWA</p>
					<h1>
						Inicia sesión para <br /> desbloquear tus activos tokenizados
					</h1>
					<p className="panel-copy">
						Accede al dashboard para monitorear portafolios, automatizar estrategias y seguir el rendimiento de tus
						inmuebles fraccionados en tiempo real.
					</p>
					<ul className="panel-benefits">
						<li>Alertas inteligentes</li>
						<li>Despliegues multi-chain</li>
						<li>Auditoría continua</li>
					</ul>
				</section>

				<section className="login-card" aria-live="polite">
					<header>
						<p className="card-tag">Acceso seguro</p>
						<h2>Ingresa tus credenciales</h2>
					</header>

					<form className="login-form" onSubmit={handleSubmit}>
						<label>
							Correo electrónico
							<input
								type="email"
								name="email"
								placeholder="nombre@empresa.com"
								value={form.email}
								onChange={handleChange('email')}
								autoComplete="email"
								required
							/>
						</label>

						<label>
							Contraseña
							<input
								type="password"
								name="password"
								placeholder="••••••••"
								value={form.password}
								onChange={handleChange('password')}
								autoComplete="current-password"
								required
							/>
						</label>

						<div className="form-row">
							<label className="remember-toggle">
								<input type="checkbox" checked={form.remember} onChange={handleChange('remember')} />
								Mantener sesión activa
							</label>
							<button type="button" className="ghost-link">
								¿Olvidaste tu contraseña?
							</button>
						</div>

						<button type="submit" className="cta" disabled={isDisabled}>
							{status === 'submitting' ? 'Entrando...' : 'Entrar'}
						</button>
					</form>

					{status !== 'idle' && <p className={`status status-${status}`}>{renderStatus()}</p>}

					<footer>
						<p>
							¿Aún no tienes cuenta? <a href="/Register">Solicita acceso</a>
						</p>
					</footer>
				</section>
			</main>
		</div>
	);
};

export default Login;
