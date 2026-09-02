[Uploading KPAY-BANK.html…]()
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>KPay Pro 2026</title>
    <link rel="manifest" href="manifest.json" />
    <link rel="apple-touch-icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏦</text></svg>" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="theme-color" content="#0F4C81" />
    <meta name="description" content="KPay Pro 2026 - Digital Banking App" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <style>
        /* === COMPLETE CSS === */
        :root {
            --ocean-dark: #0F4C81; --ocean-primary: #1A6BA0; --ocean-light: #4A90D9;
            --ocean-teal: #00B4D8; --ocean-mint: #2EC4B6; --ocean-sky: #90E0EF;
            --text-primary: #0D1B2A; --text-secondary: #1B3A4B; --text-muted: #5A7A8A;
            --bg-primary: #F0F8FC; --bg-card: rgba(255,255,255,0.6);
            --bg-card-hover: rgba(255,255,255,0.8); --bg-overlay: rgba(240,248,252,0.92);
            --border-glass: rgba(26,107,160,0.15); --border-focus: rgba(0,180,216,0.5);
            --success: #2EC4B6; --success-bg: rgba(46,196,182,0.1);
            --warning: #FFD166; --warning-bg: rgba(255,209,102,0.1);
            --danger: #E63946; --danger-bg: rgba(230,57,70,0.1);
            --gradient-main: linear-gradient(135deg, #0F4C81 0%, #4A90D9 50%, #00B4D8 100%);
            --gradient-btn: linear-gradient(135deg, #0F4C81, #1A6BA0);
            --shadow-soft: 0 4px 30px rgba(15,76,129,0.15);
            --shadow-hover: 0 8px 40px rgba(15,76,129,0.25);
            --radius-lg: 24px; --radius-md: 16px; --radius-sm: 12px;
            --transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        * { margin:0; padding:0; box-sizing:border-box; }
        body {
            font-family: 'Inter', sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            -webkit-font-smoothing: antialiased;
            overflow-x: hidden;
        }
        #splashScreen {
            position: fixed; inset: 0;
            background: var(--bg-primary); z-index: 99998;
            display: flex; flex-direction: column;
            justify-content: center; align-items: center; gap: 30px;
            animation: splashFadeOut 3s ease forwards;
        }
        @keyframes splashFadeOut {
            0% { opacity: 1; }
            70% { opacity: 1; }
            100% { opacity: 0; visibility: hidden; }
        }
        .splash-logo {
            position: relative; width: 120px; height: 120px;
            border-radius: 50%; background: var(--gradient-main);
            display: flex; align-items: center; justify-content: center;
            font-size: 48px; font-weight: 700;
            font-family: 'Space Grotesk', sans-serif; color: white;
            box-shadow: 0 0 60px rgba(0,180,216,0.3);
            animation: splashPulse 1.5s ease-in-out infinite;
        }
        @keyframes splashPulse {
            0%,100% { transform: scale(1); box-shadow: 0 0 40px rgba(0,180,216,0.3); }
            50% { transform: scale(1.05); box-shadow: 0 0 60px rgba(0,180,216,0.5); }
        }
        .splash-logo .badge {
            position: absolute; bottom: -5px; right: -5px;
            background: var(--ocean-teal); color: white;
            font-size: 10px; font-weight: 700; padding: 4px 12px;
            border-radius: 20px; font-family: 'Inter', sans-serif;
        }
        .splash-title {
            font-family: 'Space Grotesk', sans-serif; font-size: 32px;
            font-weight: 700; background: var(--gradient-main);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .splash-subtitle {
            color: var(--text-muted); font-size: 13px; font-weight: 500;
            letter-spacing: 2px; text-transform: uppercase; margin-top: -10px;
        }
        .splash-loader { display: flex; gap: 8px; margin-top: 10px; }
        .splash-loader .dot {
            width: 10px; height: 10px; border-radius: 50%;
            background: var(--ocean-teal);
            animation: dotBounce 1.2s ease-in-out infinite;
        }
        .splash-loader .dot:nth-child(2) { animation-delay: 0.2s; background: var(--ocean-light); }
        .splash-loader .dot:nth-child(3) { animation-delay: 0.4s; background: var(--ocean-primary); }
        .splash-loader .dot:nth-child(4) { animation-delay: 0.6s; background: var(--ocean-dark); }
        .splash-loader .dot:nth-child(5) { animation-delay: 0.8s; background: var(--ocean-sky); }
        @keyframes dotBounce {
            0%,80%,100% { transform: scale(0.6); opacity: 0.4; }
            40% { transform: scale(1.2); opacity: 1; }
        }
        .splash-footer {
            position: absolute; bottom: 40px;
            color: var(--text-muted); font-size: 11px; letter-spacing: 1px;
        }
        #app {
            position: relative; z-index: 1;
            width: 100%; max-width: 480px; padding: 16px;
            margin: 16px auto; opacity: 0;
            animation: appFadeIn 0.8s ease forwards;
            animation-delay: 2.8s;
        }
        @keyframes appFadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .glass {
            background: var(--bg-card); backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid var(--border-glass);
            border-radius: var(--radius-lg); padding: 24px 20px;
            margin-bottom: 14px; transition: var(--transition);
            box-shadow: var(--shadow-soft);
        }
        .glass:hover { background: var(--bg-card-hover); border-color: var(--ocean-teal); box-shadow: var(--shadow-hover); }
        .btn-neon {
            padding: 14px 28px; border: none;
            border-radius: var(--radius-sm); font-size: 15px;
            font-weight: 600; cursor: pointer; transition: var(--transition);
            letter-spacing: 0.3px; width: 100%;
        }
        .btn-neon-primary { background: var(--gradient-btn); color: white; box-shadow: var(--shadow-soft); }
        .btn-neon-primary:hover { transform: translateY(-2px) scale(1.02); box-shadow: var(--shadow-hover); background: var(--gradient-btn-hover); }
        .btn-neon-success { background: linear-gradient(135deg, var(--success), #1A9E8E); color: white; }
        .btn-neon-success:hover { transform: translateY(-2px); }
        .btn-neon-danger { background: linear-gradient(135deg, var(--danger), #C62836); color: white; }
        .btn-neon-danger:hover { transform: translateY(-2px); }
        .btn-neon-warning { background: linear-gradient(135deg, var(--warning), #F5A623); color: var(--text-primary); }
        .btn-neon-outline { background: transparent; color: var(--text-secondary); border: 2px solid var(--border-glass); }
        .btn-neon-outline:hover { background: var(--bg-card-hover); border-color: var(--ocean-teal); color: var(--text-primary); }
        .btn-neon-sm { padding: 8px 18px; font-size: 12px; width: auto; display: inline-block; }
        .btn-neon-xs { padding: 4px 12px; font-size: 10px; width: auto; display: inline-block; border-radius: 8px; }
        .form-group { margin-bottom: 16px; }
        .form-group label {
            display: block; font-size: 11px; font-weight: 600;
            color: var(--text-secondary); text-transform: uppercase;
            letter-spacing: 0.8px; margin-bottom: 4px;
        }
        .form-group input, .form-group textarea, .form-group select {
            width: 100%; padding: 14px 16px;
            border: 1px solid var(--border-glass);
            border-radius: var(--radius-sm);
            background: rgba(255,255,255,0.5);
            color: var(--text-primary); font-size: 15px;
            font-family: 'Inter', sans-serif;
            transition: var(--transition); outline: none;
        }
        .form-group input:focus, .form-group textarea:focus {
            border-color: var(--ocean-teal);
            box-shadow: 0 0 0 3px rgba(0,180,216,0.15);
            background: rgba(255,255,255,0.8);
        }
        .logo-2026 {
            display: flex; align-items: center; gap: 12px;
            justify-content: center; margin-bottom: 4px;
        }
        .logo-2026 .icon {
            width: 56px; height: 56px; border-radius: 50%;
            background: var(--gradient-main);
            display: flex; align-items: center; justify-content: center;
            font-size: 24px; font-weight: 700;
            font-family: 'Space Grotesk', sans-serif; color: white;
            box-shadow: var(--shadow-soft);
            animation: pulse-glow 3s ease-in-out infinite;
        }
        @keyframes pulse-glow {
            0%,100% { box-shadow: 0 0 40px rgba(0,180,216,0.2); }
            50% { box-shadow: 0 0 60px rgba(0,180,216,0.35), 0 0 80px rgba(74,144,217,0.15); }
        }
        .logo-2026 .text {
            font-size: 26px; font-weight: 700;
            font-family: 'Space Grotesk', sans-serif;
            background: var(--gradient-main);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .logo-2026 .year {
            font-size: 12px; font-weight: 600;
            color: var(--text-muted); background: var(--bg-card);
            padding: 2px 12px; border-radius: 20px;
            border: 1px solid var(--border-glass);
        }
        .stats-2026 {
            display: grid; grid-template-columns: repeat(2, 1fr);
            gap: 10px; margin: 12px 0;
        }
        .stat-2026 {
            background: var(--bg-card); border: 1px solid var(--border-glass);
            border-radius: var(--radius-sm); padding: 14px 12px;
            text-align: center; transition: var(--transition);
        }
        .stat-2026:hover { border-color: var(--ocean-teal); transform: translateY(-2px); }
        .stat-2026 .number {
            font-size: 22px; font-weight: 700;
            font-family: 'Space Grotesk', sans-serif;
            background: var(--gradient-main);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .stat-2026 .label {
            font-size: 10px; color: var(--text-muted);
            text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px;
        }
        .menu-2026 {
            display: grid; grid-template-columns: repeat(3, 1fr);
            gap: 8px; margin: 14px 0;
        }
        .menu-2026 .item {
            background: var(--bg-card); border: 1px solid var(--border-glass);
            border-radius: var(--radius-sm); padding: 14px 4px;
            text-align: center; cursor: pointer; transition: var(--transition);
            color: var(--text-secondary);
        }
        .menu-2026 .item:hover {
            background: var(--bg-card-hover); border-color: var(--ocean-teal);
            transform: translateY(-4px); color: var(--text-primary);
            box-shadow: var(--shadow-soft);
        }
        .menu-2026 .item .icon { font-size: 22px; display: block; margin-bottom: 4px; }
        .menu-2026 .item .label {
            font-size: 9px; font-weight: 600; text-transform: uppercase;
            letter-spacing: 0.3px;
        }
        .balance-2026 {
            background: var(--gradient-main);
            border-radius: var(--radius-lg); padding: 24px 20px;
            position: relative; overflow: hidden;
            border: 1px solid var(--border-glass);
        }
        .balance-2026::before {
            content: ''; position: absolute; top: -40%; right: -20%;
            width: 200px; height: 200px;
            background: radial-gradient(circle, rgba(0,180,216,0.2), transparent);
            border-radius: 50%;
        }
        .balance-2026::after {
            content: ''; position: absolute; bottom: -30%; left: -10%;
            width: 150px; height: 150px;
            background: radial-gradient(circle, rgba(74,144,217,0.15), transparent);
            border-radius: 50%;
        }
        .balance-2026 * { position: relative; z-index: 1; }
        .balance-2026 .label {
            font-size: 11px; font-weight: 600;
            color: rgba(255,255,255,0.7);
            text-transform: uppercase; letter-spacing: 1px;
        }
        .balance-2026 .amount {
            font-size: 36px; font-weight: 700;
            font-family: 'Space Grotesk', sans-serif;
            margin: 2px 0; color: white;
        }
        .balance-2026 .sub { font-size: 13px; color: rgba(255,255,255,0.7); }
        .balance-2026 .currency-badge {
            display: inline-block; padding: 2px 12px; border-radius: 20px;
            font-size: 10px; font-weight: 600;
            background: rgba(255,255,255,0.15); color: white;
            border: 1px solid rgba(255,255,255,0.2); margin-top: 4px;
        }
        .badge-demand {
            display: inline-block; padding: 2px 10px; border-radius: 12px;
            font-size: 9px; font-weight: 700; text-transform: uppercase;
            letter-spacing: 0.3px;
        }
        .badge-demand.pending { background: var(--warning); color: var(--text-primary); }
        .badge-demand.approved { background: var(--success); color: white; }
        .badge-demand.rejected { background: var(--danger); color: white; }
        .demand-item {
            background: var(--bg-card); border: 1px solid var(--border-glass);
            border-radius: var(--radius-sm); padding: 14px;
            margin-bottom: 10px; border-left: 3px solid var(--ocean-teal);
        }
        .demand-item.approved { border-left-color: var(--success); opacity: 0.7; }
        .demand-item.rejected { border-left-color: var(--danger); opacity: 0.5; }
        .flex-between { display: flex; justify-content: space-between; align-items: center; }
        .text-muted { color: var(--text-muted); }
        .fade-in { animation: fadeIn 0.3s ease; }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: var(--ocean-teal); border-radius: 10px; }
        .spinner-container {
            --uib-size: 50px; --uib-color: #00B4D8; --uib-speed: 1s;
            --uib-stroke: 3px; position: relative;
            display: flex; align-items: center; justify-content: center;
            height: var(--uib-size); width: var(--uib-size); margin: 0 auto;
        }
        .spinner-line {
            position: absolute; top: 0;
            left: calc(50% - var(--uib-stroke) / 2);
            display: flex; align-items: flex-start;
            height: 100%; width: var(--uib-stroke);
        }
        .spinner-line::before {
            content: ''; height: 22%; width: 100%;
            border-radius: calc(var(--uib-stroke) / 2);
            background-color: var(--uib-color);
            animation: pulse calc(var(--uib-speed)) ease-in-out infinite;
            transform-origin: center bottom;
        }
        .spinner-line:nth-child(1) { transform: rotate(calc(360deg / -12 * 1)); &::before { animation-delay: calc(var(--uib-speed) / -12 * 1); } }
        .spinner-line:nth-child(2) { transform: rotate(calc(360deg / -12 * 2)); &::before { animation-delay: calc(var(--uib-speed) / -12 * 2); } }
        .spinner-line:nth-child(3) { transform: rotate(calc(360deg / -12 * 3)); &::before { animation-delay: calc(var(--uib-speed) / -12 * 3); } }
        .spinner-line:nth-child(4) { transform: rotate(calc(360deg / -12 * 4)); &::before { animation-delay: calc(var(--uib-speed) / -12 * 4); } }
        .spinner-line:nth-child(5) { transform: rotate(calc(360deg / -12 * 5)); &::before { animation-delay: calc(var(--uib-speed) / -12 * 5); } }
        .spinner-line:nth-child(6) { transform: rotate(calc(360deg / -12 * 6)); &::before { animation-delay: calc(var(--uib-speed) / -12 * 6); } }
        .spinner-line:nth-child(7) { transform: rotate(calc(360deg / -12 * 7)); &::before { animation-delay: calc(var(--uib-speed) / -12 * 7); } }
        .spinner-line:nth-child(8) { transform: rotate(calc(360deg / -12 * 8)); &::before { animation-delay: calc(var(--uib-speed) / -12 * 8); } }
        .spinner-line:nth-child(9) { transform: rotate(calc(360deg / -12 * 9)); &::before { animation-delay: calc(var(--uib-speed) / -12 * 9); } }
        .spinner-line:nth-child(10) { transform: rotate(calc(360deg / -12 * 10)); &::before { animation-delay: calc(var(--uib-speed) / -12 * 10); } }
        .spinner-line:nth-child(11) { transform: rotate(calc(360deg / -12 * 11)); &::before { animation-delay: calc(var(--uib-speed) / -12 * 11); } }
        .spinner-line:nth-child(12) { transform: rotate(calc(360deg / -12 * 12)); &::before { animation-delay: calc(var(--uib-speed) / -12 * 12); } }
        @keyframes pulse {
            0%,80%,100% { transform: scaleY(0.75); opacity: 0; }
            20% { transform: scaleY(1); opacity: 1; }
        }
        .overlay {
            position: fixed; inset: 0;
            background: var(--bg-overlay);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            z-index: 9999; display: none;
            justify-content: center; align-items: center;
            flex-direction: column; gap: 20px;
            animation: fadeIn 0.3s ease;
        }
        .overlay.show { display: flex; }
        .overlay-text {
            color: var(--text-secondary); font-size: 14px;
            font-weight: 500; text-align: center; max-width: 300px;
        }
        .overlay-title {
            color: var(--text-primary); font-size: 20px;
            font-weight: 600; font-family: 'Space Grotesk', sans-serif;
        }
        .status-icon {
            width: 80px; height: 80px; border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-size: 40px; animation: scaleIn 0.6s cubic-bezier(0.34,1.56,0.64,1);
        }
        .status-icon.success { background: var(--success); box-shadow: 0 0 60px rgba(46,196,182,0.4); }
        .status-icon.error { background: var(--danger); box-shadow: 0 0 60px rgba(230,57,70,0.4); }
        .status-icon i { color: white; }
        @keyframes scaleIn {
            0% { transform: scale(0); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }
        .toast-2026 {
            position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
            background: var(--bg-card); backdrop-filter: blur(16px);
            color: var(--text-primary); padding: 14px 24px;
            border-radius: var(--radius-sm); border: 1px solid var(--border-glass);
            box-shadow: var(--shadow-hover); z-index: 9998; display: none;
            max-width: 90%; text-align: center; font-size: 14px; font-weight: 500;
        }
        .toast-2026.show { display: block; animation: toastSlide 0.5s ease; }
        @keyframes toastSlide {
            from { transform: translateX(-50%) translateY(30px); opacity: 0; }
            to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        .sound-toggle {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 99999;
            background: var(--bg-card);
            border: 1px solid var(--border-glass);
            border-radius: 50%;
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 18px;
            backdrop-filter: blur(12px);
            box-shadow: var(--shadow-soft);
            transition: var(--transition);
        }
        .sound-toggle:hover { transform: scale(1.1); box-shadow: var(--shadow-hover); }
        .announcement-item {
            background: var(--bg-card); border: 1px solid var(--border-glass);
            border-radius: var(--radius-sm); padding: 12px 14px;
            margin-bottom: 8px; border-left: 4px solid var(--ocean-teal);
        }
        .announcement-item.urgent { border-left-color: var(--danger); background: var(--danger-bg); }
        .announcement-item.important { border-left-color: var(--warning); background: var(--warning-bg); }
        .promo-item {
            background: var(--gradient-main); border-radius: var(--radius-sm);
            padding: 16px; color: white; margin-bottom: 8px;
        }
        .promo-item .promo-code {
            background: rgba(255,255,255,0.2); padding: 4px 12px;
            border-radius: 20px; font-weight: 700; letter-spacing: 2px;
        }
        .linked-bank {
            background: var(--bg-card); border: 1px solid var(--border-glass);
            border-radius: var(--radius-sm); padding: 12px;
            margin-bottom: 6px; display: flex; align-items: center; gap: 12px;
        }
        .linked-bank .bank-icon { font-size: 28px; width: 48px; height: 48px; background: var(--bg-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        @media (max-width:420px) {
            .menu-2026 { grid-template-columns: repeat(2,1fr); }
            .stats-2026 { grid-template-columns: 1fr 1fr; }
            .balance-2026 .amount { font-size: 28px; }
            .glass { padding: 18px 14px; }
        }
    </style>
</head>
<body>

<div id="splashScreen">
    <div class="splash-logo">K<span class="badge">PRO</span></div>
    <div class="splash-title">KPay Pro</div>
    <div class="splash-subtitle">Ocean Breeze • 2026</div>
    <div class="splash-loader">
        <span class="dot"></span><span class="dot"></span>
        <span class="dot"></span><span class="dot"></span>
        <span class="dot"></span>
    </div>
    <div class="splash-footer">Secure • Fast • Reliable</div>
</div>

<button class="sound-toggle" id="soundToggle" title="Toggle Sound">🔊</button>

<div id="app"></div>
<div id="toast" class="toast-2026"></div>
<div id="overlay" class="overlay"><div id="overlayContent"></div></div>

<script>
// ================================================================
// SOUND ENGINE - COMPLETE
// ================================================================
let soundEnabled = true;
class SoundEngine {
    constructor() { this.ctx = null; this.enabled = true; this.init(); }
    init() { try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) { this.enabled = false; } }
    toggle() { this.enabled = !this.enabled; return this.enabled; }
    play(type) {
        if (!this.enabled || !this.ctx) return;
        try {
            if (this.ctx.state === 'suspended') this.ctx.resume();
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain); gain.connect(this.ctx.destination);
            switch(type) {
                case 'login':
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(523, this.ctx.currentTime);
                    osc.frequency.setValueAtTime(659, this.ctx.currentTime + 0.1);
                    osc.frequency.setValueAtTime(784, this.ctx.currentTime + 0.2);
                    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.5);
                    osc.start(this.ctx.currentTime); osc.stop(this.ctx.currentTime + 0.5);
                    break;
                case 'payment':
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(880, this.ctx.currentTime);
                    osc.frequency.setValueAtTime(1108, this.ctx.currentTime + 0.1);
                    osc.frequency.setValueAtTime(1318, this.ctx.currentTime + 0.2);
                    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);
                    osc.start(this.ctx.currentTime); osc.stop(this.ctx.currentTime + 0.4);
                    break;
                case 'success':
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(523, this.ctx.currentTime);
                    osc.frequency.setValueAtTime(659, this.ctx.currentTime + 0.08);
                    osc.frequency.setValueAtTime(784, this.ctx.currentTime + 0.16);
                    osc.frequency.setValueAtTime(1046, this.ctx.currentTime + 0.24);
                    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.5);
                    osc.start(this.ctx.currentTime); osc.stop(this.ctx.currentTime + 0.5);
                    break;
                case 'error':
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(300, this.ctx.currentTime);
                    osc.frequency.setValueAtTime(200, this.ctx.currentTime + 0.15);
                    osc.frequency.setValueAtTime(150, this.ctx.currentTime + 0.3);
                    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.5);
                    osc.start(this.ctx.currentTime); osc.stop(this.ctx.currentTime + 0.5);
                    break;
                case 'payment_failed':
                    osc.type = 'square';
                    osc.frequency.setValueAtTime(200, this.ctx.currentTime);
                    osc.frequency.setValueAtTime(150, this.ctx.currentTime + 0.2);
                    osc.frequency.setValueAtTime(100, this.ctx.currentTime + 0.4);
                    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.6);
                    osc.start(this.ctx.currentTime); osc.stop(this.ctx.currentTime + 0.6);
                    break;
                case 'notification':
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(880, this.ctx.currentTime);
                    osc.frequency.setValueAtTime(0, this.ctx.currentTime + 0.05);
                    osc.frequency.setValueAtTime(880, this.ctx.currentTime + 0.1);
                    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
                    osc.start(this.ctx.currentTime); osc.stop(this.ctx.currentTime + 0.2);
                    break;
                case 'game_win':
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(523, this.ctx.currentTime);
                    osc.frequency.setValueAtTime(659, this.ctx.currentTime + 0.06);
                    osc.frequency.setValueAtTime(784, this.ctx.currentTime + 0.12);
                    osc.frequency.setValueAtTime(1046, this.ctx.currentTime + 0.18);
                    osc.frequency.setValueAtTime(1318, this.ctx.currentTime + 0.24);
                    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);
                    osc.start(this.ctx.currentTime); osc.stop(this.ctx.currentTime + 0.4);
                    break;
                default:
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
                    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
                    osc.start(this.ctx.currentTime); osc.stop(this.ctx.currentTime + 0.2);
            }
        } catch(e) { console.log('Sound error:', e); }
    }
}
const sound = new SoundEngine();
document.getElementById('soundToggle').addEventListener('click', function() {
    const enabled = sound.toggle();
    this.textContent = enabled ? '🔊' : '🔇';
    if (enabled) sound.play('notification');
});

// ================================================================
// DATABASE - COMPLETE
// ================================================================
const DB_NAME = "KPayPro2026_Demand";
const DB_VERSION = 8;
const STORES = {
    USERS: 'users', TRANSACTIONS: 'transactions', LOAN_REQUESTS: 'loanRequests',
    PIN_REQUESTS: 'pinRequests', APPEALS: 'appeals', SPIN_REQUESTS: 'spinRequests',
    INVESTMENTS: 'investments', CARDS: 'cards', SAVINGS: 'savings',
    BILLS: 'bills', WITHDRAWALS: 'withdrawals', PASSWORD_RESET: 'passwordReset',
    DICE_GAMES: 'diceGames', CARD_PAYMENTS: 'cardPayments', CHAT_MESSAGES: 'chatMessages',
    FEES: 'fees', PROMOTIONS: 'promotions', ANNOUNCEMENTS: 'announcements',
    BANK_ACCOUNTS: 'bankAccounts', SECURITY_QUESTIONS: 'securityQuestions',
    SALARY_ACCOUNTS: 'salaryAccounts', LOAN_REMINDERS: 'loanReminders', API_KEYS: 'apiKeys'
};
let db = null, currentUser = null;

function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onerror = () => reject(request.error);
        request.onsuccess = () => { db = request.result; console.log('✅ DB connected'); seedData().then(resolve); };
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            for (const key of Object.values(STORES)) {
                if (!db.objectStoreNames.contains(key)) {
                    const store = db.createObjectStore(key, { keyPath: 'id', autoIncrement: true });
                    if (key === STORES.USERS) store.createIndex('phone', 'phone', { unique: true });
                    if (key === STORES.PASSWORD_RESET) store.createIndex('phone', 'phone', { unique: false });
                    if (key === STORES.CARDS) store.createIndex('phone', 'phone', { unique: false });
                    if (key === STORES.CARD_PAYMENTS) store.createIndex('phone', 'phone', { unique: false });
                    if (key === STORES.CHAT_MESSAGES) store.createIndex('chatId', 'chatId', { unique: false });
                    if (key === STORES.BANK_ACCOUNTS) store.createIndex('phone', 'phone', { unique: false });
                    if (key === STORES.SECURITY_QUESTIONS) store.createIndex('phone', 'phone', { unique: false });
                    if (key === STORES.SALARY_ACCOUNTS) store.createIndex('phone', 'phone', { unique: false });
                    if (key === STORES.LOAN_REMINDERS) store.createIndex('phone', 'phone', { unique: false });
                }
            }
        };
    });
}

function add(store, data) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction(store, 'readwrite');
        const req = tx.objectStore(store).add(data);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}
function put(store, data) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction(store, 'readwrite');
        const req = tx.objectStore(store).put(data);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}
function getAll(store) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction(store, 'readonly');
        const req = tx.objectStore(store).getAll();
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}
function getByIndex(store, index, value) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction(store, 'readonly');
        const req = tx.objectStore(store).index(index).get(value);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}
function getAllByIndex(store, index, value) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction(store, 'readonly');
        const req = tx.objectStore(store).index(index).getAll(value);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}
function deleteData(store, id) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction(store, 'readwrite');
        const req = tx.objectStore(store).delete(id);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
    });
}

// ===== HELPERS =====
function showToast(msg, duration = 3000) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => toast.classList.remove('show'), duration);
}
function generateID() { return Date.now() + Math.floor(Math.random() * 1000); }
function formatCurrency(amount) { return 'PKR ' + Number(amount).toLocaleString(); }
function getCurrentDate() { return new Date().toISOString(); }
function generatePin() { return String(Math.floor(1000 + Math.random() * 9000)); }
function addTransaction(user, type, amount, note, details = {}) {
    if (!user.transactions) user.transactions = [];
    user.transactions.push({ type, amount, note, date: getCurrentDate(), ...details });
    return user;
}

// ===== OVERLAY =====
function showOverlay(type, title, message, duration = 3000) {
    return new Promise((resolve) => {
        const overlay = document.getElementById('overlay');
        const content = document.getElementById('overlayContent');
        if (type === 'loading') {
            let lines = '';
            for (let i = 1; i <= 12; i++) lines += `<div class="spinner-line"></div>`;
            content.innerHTML = `<div class="spinner-container">${lines}</div>
                <div class="overlay-title">${title || 'Processing...'}</div>
                <div class="overlay-text">${message || 'Please wait...'}</div>`;
            overlay.classList.add('show');
            resolve();
        } else if (type === 'success') {
            content.innerHTML = `<div class="status-icon success"><i class="fas fa-check"></i></div>
                <div class="overlay-title" style="color:var(--success);">${title || 'Success!'}</div>
                <div class="overlay-text">${message || 'Operation completed successfully.'}</div>`;
            overlay.classList.add('show');
            sound.play('success');
            setTimeout(() => { overlay.classList.remove('show'); resolve(); }, duration);
        } else if (type === 'error') {
            content.innerHTML = `<div class="status-icon error"><i class="fas fa-times"></i></div>
                <div class="overlay-title" style="color:var(--danger);">${title || 'Error!'}</div>
                <div class="overlay-text">${message || 'Something went wrong.'}</div>`;
            overlay.classList.add('show');
            sound.play('error');
            setTimeout(() => { overlay.classList.remove('show'); resolve(); }, duration);
        } else { overlay.classList.remove('show'); resolve(); }
    });
}
function hideOverlay() { document.getElementById('overlay').classList.remove('show'); }

// ===== SEED DATA =====
function seedData() {
    return getAll(STORES.USERS).then(users => {
        if (users.length === 0) {
            const admin = {
                id: generateID(), name: 'KPay Admin', phone: '03000000001',
                password: 'admin2026', pin: '1234', role: 'admin',
                balance: 0, status: 'active', createdAt: getCurrentDate(),
                isDeleted: false, referralCode: 'ADMIN01', referralBonus: 0,
                referredBy: null, transactions: []
            };
            return add(STORES.USERS, admin);
        }
    }).then(() => {
        return getAll(STORES.FEES).then(fees => {
            if (fees.length === 0) {
                const defaultFees = [
                    { id: generateID(), name: 'Send Money', fee: 0, feeType: 'fixed', active: true },
                    { id: generateID(), name: 'Withdrawal', fee: 0, feeType: 'fixed', active: true },
                    { id: generateID(), name: 'Card Creation', fee: 500, feeType: 'fixed', active: true },
                    { id: generateID(), name: 'Loan Interest', fee: 10, feeType: 'percent', active: true }
                ];
                return Promise.all(defaultFees.map(f => add(STORES.FEES, f)));
            }
        });
    });
}

// ===== AUTH =====
function generateReferralCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) code += chars.charAt(Math.floor(Math.random() * chars.length));
    return code;
}

function registerUser(name, phone, password, pin, refCode = null, securityQuestion = null, securityAnswer = null) {
    return getByIndex(STORES.USERS, 'phone', phone).then(existing => {
        if (existing) { showOverlay('error', 'Registration Failed', 'Phone already registered!', 2000); return false; }
        return getAll(STORES.USERS).then(users => {
            let referrer = null;
            if (refCode) referrer = users.find(u => u.referralCode === refCode && u.phone !== phone);
            const user = {
                id: generateID(), name, phone, password, pin,
                role: 'user', balance: 5000, status: 'active',
                createdAt: getCurrentDate(), isDeleted: false,
                dailyCheckin: null, checkinStreak: 0, transactions: [],
                referralCode: generateReferralCode(), referredBy: refCode || null,
                referralBonus: 0, securityQuestion: securityQuestion || null,
                securityAnswer: securityAnswer || null, isSalaryAccount: false
            };
            if (referrer) {
                referrer.balance += 200;
                referrer.referralBonus = (referrer.referralBonus || 0) + 200;
                addTransaction(referrer, 'Referral Reward', 200, `Referral bonus for ${name}`);
                put(STORES.USERS, referrer);
                user.balance += 100;
                addTransaction(user, 'Welcome Bonus', 100, 'Referral welcome bonus');
            }
            return add(STORES.USERS, user).then(() => {
                if (securityQuestion && securityAnswer) {
                    add(STORES.SECURITY_QUESTIONS, { phone, question: securityQuestion, answer: securityAnswer, createdAt: getCurrentDate() });
                }
                if (referrer) {
                    showOverlay('success', '🎉 Account Created!', `Welcome ${name}! You got PKR 100 bonus! ${referrer.name} got PKR 200!`, 3000);
                } else {
                    showOverlay('success', '🎉 Account Created!', `Welcome ${name}!`, 2500);
                }
                sound.play('success');
                return user;
            });
        });
    });
}

function loginUser(phone, password) {
    return getByIndex(STORES.USERS, 'phone', phone).then(user => {
        if (!user) { showOverlay('error', 'Login Failed', 'User not found!', 2000); sound.play('error'); return null; }
        if (user.isDeleted) { showOverlay('error', 'Login Failed', 'Account deleted!', 2000); sound.play('error'); return null; }
        if (user.status === 'suspended') { showOverlay('error', 'Login Failed', 'Account suspended!', 2000); sound.play('error'); return null; }
        if (user.password !== password) { showOverlay('error', 'Login Failed', 'Wrong password!', 2000); sound.play('error'); return null; }
        showOverlay('success', 'Welcome Back!', `Hello ${user.name}!`, 1500);
        sound.play('login');
        return user;
    });
}

function requestPasswordResetWithSecurity(phone) {
    return getByIndex(STORES.USERS, 'phone', phone).then(user => {
        if (!user) { showOverlay('error', 'Reset Failed', 'User not found!', 2000); return false; }
        if (!user.securityQuestion) { return requestPasswordReset(phone); }
        return new Promise((resolve) => {
            const answer = prompt(`Security Question: ${user.securityQuestion}\n\nEnter your answer:`);
            if (!answer) { resolve(false); return; }
            if (answer.toLowerCase().trim() === user.securityAnswer.toLowerCase().trim()) {
                const newPassword = prompt('Enter new password (min 6 characters):');
                if (!newPassword || newPassword.length < 6) {
                    showOverlay('error', 'Invalid Password', 'Password must be at least 6 characters!', 2000);
                    resolve(false); return;
                }
                user.password = newPassword;
                put(STORES.USERS, user).then(() => {
                    showOverlay('success', 'Password Reset', 'Password updated successfully!', 2000);
                    sound.play('success');
                    resolve(true);
                });
            } else {
                showOverlay('error', 'Wrong Answer', 'Security answer incorrect!', 2000);
                sound.play('error');
                resolve(false);
            }
        });
    });
}

function requestPasswordReset(phone) {
    return getByIndex(STORES.USERS, 'phone', phone).then(user => {
        if (!user) { showOverlay('error', 'Reset Failed', 'User not found!', 2000); return false; }
        if (user.isDeleted) { showOverlay('error', 'Reset Failed', 'Account deleted!', 2000); return false; }
        const resetPin = generatePin();
        return add(STORES.PASSWORD_RESET, { phone, pin: resetPin, used: false, createdAt: getCurrentDate() }).then(() => {
            showOverlay('success', 'Reset PIN Sent', `PIN sent to admin for approval.`, 2500);
            sound.play('notification');
            return true;
        });
    });
}

function getPendingResetPins() { return getAll(STORES.PASSWORD_RESET).then(entries => entries.filter(e => !e.used)); }
function approveResetPin(id) {
    return getAll(STORES.PASSWORD_RESET).then(entries => {
        const entry = entries.find(e => e.id === id);
        if (!entry) { showToast('Reset entry not found!'); return false; }
        entry.used = true;
        return put(STORES.PASSWORD_RESET, entry).then(() => {
            showOverlay('success', 'Approved!', 'Reset PIN approved!', 2000);
            sound.play('success');
            return true;
        });
    });
}
function rejectResetPin(id) {
    return deleteData(STORES.PASSWORD_RESET, id).then(() => {
        showOverlay('error', 'Rejected', 'Reset request rejected.', 2000);
        sound.play('error');
        return true;
    });
}
function verifyResetPin(phone, pin, newPassword) {
    return getAllByIndex(STORES.PASSWORD_RESET, 'phone', phone).then(entries => {
        const valid = entries.find(e => e.pin === pin && !e.used);
        if (!valid) { showOverlay('error', 'Invalid PIN', 'Invalid or expired PIN!', 2000); sound.play('error'); return false; }
        return getByIndex(STORES.USERS, 'phone', phone).then(user => {
            if (!user) { showOverlay('error', 'User Not Found', 'User not found!', 2000); return false; }
            user.password = newPassword;
            return put(STORES.USERS, user).then(() => {
                valid.used = true;
                return put(STORES.PASSWORD_RESET, valid).then(() => {
                    showOverlay('success', 'Password Updated!', 'Password reset successfully!', 2000);
                    sound.play('success');
                    return true;
                });
            });
        });
    });
}

// ================================================================
// RENDER FUNCTIONS
// ================================================================
function renderLogin() {
    document.getElementById('app').innerHTML = `
        <div class="glass fade-in">
            <div class="logo-2026"><div class="icon">K</div><div><div class="text">KPay</div><span class="year">2026</span></div></div>
            <p style="text-align:center;color:var(--text-secondary);font-size:13px;margin-bottom:20px;">Ocean Breeze • Digital Banking</p>
            <div style="display:flex;gap:8px;margin-bottom:18px;">
                <button class="btn-neon btn-neon-primary" style="flex:1;" onclick="showLogin()">Login</button>
                <button class="btn-neon btn-neon-outline" style="flex:1;" onclick="showRegister()">Sign Up</button>
            </div>
            <div id="authForm">
                <div class="form-group"><label>Phone Number</label><input id="loginPhone" placeholder="0300-0000000" /></div>
                <div class="form-group"><label>Password</label><input id="loginPassword" type="password" placeholder="••••••••" /></div>
                <button class="btn-neon btn-neon-primary" onclick="handleLogin()"><i class="fas fa-rocket"></i> Login</button>
            </div>
        </div>
    `;
}

function showLogin() {
    document.getElementById('authForm').innerHTML = `
        <div class="form-group"><label>Phone</label><input id="loginPhone" placeholder="0300-0000000" /></div>
        <div class="form-group"><label>Password</label><input id="loginPassword" type="password" placeholder="••••••••" /></div>
        <button class="btn-neon btn-neon-primary" onclick="handleLogin()"><i class="fas fa-rocket"></i> Login</button>
        <p style="text-align:center;margin-top:12px;font-size:12px;color:var(--text-muted);">
            <span class="link" onclick="showForgot()" style="color:var(--ocean-teal);cursor:pointer;">Forgot Password?</span>
        </p>
    `;
}

function showRegister() {
    document.getElementById('authForm').innerHTML = `
        <div class="form-group"><label>Full Name</label><input id="regName" placeholder="Your name" /></div>
        <div class="form-group"><label>Phone</label><input id="regPhone" placeholder="0300-0000000" /></div>
        <div class="form-group"><label>Password</label><input id="regPassword" type="password" placeholder="Min 6 chars" /></div>
        <div class="form-group"><label>4-Digit PIN</label><input id="regPin" type="password" placeholder="XXXX" maxlength="4" /></div>
        <div class="form-group"><label>Referral Code (Optional)</label><input id="regReferral" placeholder="Enter friend's code" style="text-transform:uppercase;" /></div>
        <div class="form-group"><label>Security Question (For password recovery)</label>
            <select id="regSecurityQuestion">
                <option value="">-- Select a question --</option>
                <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
                <option value="What is the name of your first pet?">What is the name of your first pet?</option>
                <option value="What is your favorite book?">What is your favorite book?</option>
                <option value="What city were you born in?">What city were you born in?</option>
                <option value="What is your favorite food?">What is your favorite food?</option>
            </select>
        </div>
        <div class="form-group"><label>Security Answer</label><input id="regSecurityAnswer" placeholder="Your answer" /></div>
        <button class="btn-neon btn-neon-success" onclick="handleRegister()"><i class="fas fa-user-plus"></i> Create Account</button>
        <p style="text-align:center;margin-top:12px;font-size:12px;color:var(--text-muted);">
            Already have an account? <span class="link" onclick="showLogin()" style="color:var(--ocean-teal);cursor:pointer;">Login</span>
        </p>
        <p style="text-align:center;margin-top:8px;font-size:11px;color:var(--text-muted);">
            🔥 Use referral code to get PKR 100 welcome bonus!
        </p>
    `;
}

function showForgot() {
    document.getElementById('authForm').innerHTML = `
        <div class="form-group"><label>Phone Number</label><input id="forgotPhone" placeholder="Enter your phone" /></div>
        <button class="btn-neon btn-neon-warning" onclick="handleForgotWithSecurity()"><i class="fas fa-key"></i> Reset with Security Question</button>
        <div style="text-align:center;margin:12px 0;color:var(--text-muted);font-size:11px;">— OR —</div>
        <button class="btn-neon btn-neon-outline" onclick="showForgotPin()"><i class="fas fa-shield-alt"></i> Request Admin PIN</button>
        <p style="text-align:center;margin-top:12px;font-size:12px;color:var(--text-muted);">
            <span class="link" onclick="showLogin()" style="color:var(--ocean-teal);cursor:pointer;">← Back to Login</span>
        </p>
    `;
}

function showForgotPin() {
    document.getElementById('authForm').innerHTML = `
        <div class="form-group"><label>Phone Number</label><input id="forgotPhone" placeholder="Enter your phone" /></div>
        <button class="btn-neon btn-neon-warning" onclick="handleForgotRequest()"><i class="fas fa-key"></i> Request Reset PIN</button>
        <div id="resetStep2" style="display:none;margin-top:16px;border-top:1px solid var(--border-glass);padding-top:16px;">
            <p style="font-size:12px;color:var(--ocean-teal);margin-bottom:12px;">📩 Enter the 4-digit PIN sent to admin</p>
            <div class="form-group"><label>Reset PIN</label><input id="resetPinInput" type="text" placeholder="XXXX" maxlength="4" /></div>
            <div class="form-group"><label>New Password</label><input id="resetNewPassword" type="password" placeholder="Min 6 chars" /></div>
            <button class="btn-neon btn-neon-success" onclick="handleResetPassword()"><i class="fas fa-sync-alt"></i> Reset Password</button>
        </div>
        <p style="text-align:center;margin-top:12px;font-size:12px;color:var(--text-muted);">
            <span class="link" onclick="showForgot()" style="color:var(--ocean-teal);cursor:pointer;">← Back</span>
        </p>
    `;
}

async function handleForgotWithSecurity() {
    const phone = document.getElementById('forgotPhone').value.trim();
    if (!phone) { showToast('Enter your phone!'); return; }
    await requestPasswordResetWithSecurity(phone);
}

async function handleForgotRequest() {
    const phone = document.getElementById('forgotPhone').value.trim();
    if (!phone) { showToast('Enter your phone!'); return; }
    await showOverlay('loading', 'Requesting Reset PIN', 'Sending request...');
    await requestPasswordReset(phone);
    document.getElementById('resetStep2').style.display = 'block';
}

async function handleResetPassword() {
    const phone = document.getElementById('forgotPhone').value.trim();
    const pin = document.getElementById('resetPinInput').value.trim();
    const newPassword = document.getElementById('resetNewPassword').value;
    if (!phone || !pin || !newPassword) { showToast('Fill all fields!'); return; }
    if (pin.length !== 4 || isNaN(pin)) { showToast('PIN must be exactly 4 digits!'); return; }
    if (newPassword.length < 6) { showToast('Password must be at least 6 characters!'); return; }
    await showOverlay('loading', 'Verifying PIN', 'Please wait...');
    const success = await verifyResetPin(phone, pin, newPassword);
    if (success) setTimeout(showLogin, 1500);
}

async function handleRegister() {
    const name = document.getElementById('regName').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    const password = document.getElementById('regPassword').value;
    const pin = document.getElementById('regPin').value;
    const refCode = document.getElementById('regReferral') ? document.getElementById('regReferral').value.trim().toUpperCase() : '';
    const secQ = document.getElementById('regSecurityQuestion') ? document.getElementById('regSecurityQuestion').value : '';
    const secA = document.getElementById('regSecurityAnswer') ? document.getElementById('regSecurityAnswer').value.trim() : '';
    if (!name || !phone || !password || !pin) { showToast('Please fill all fields!'); return; }
    if (password.length < 6) { showToast('Password must be at least 6 characters!'); return; }
    if (pin.length !== 4 || isNaN(pin)) { showToast('PIN must be exactly 4 digits!'); return; }
    await showOverlay('loading', 'Creating Account', 'Please wait...');
    const user = await registerUser(name, phone, password, pin, refCode, secQ, secA);
    if (user) { currentUser = user; localStorage.setItem('KPAY2026_SESSION', user.phone); setTimeout(renderDashboard, 1500); }
}

async function handleLogin() {
    const phone = document.getElementById('loginPhone').value.trim();
    const password = document.getElementById('loginPassword').value;
    if (!phone || !password) { showToast('Please fill all fields!'); return; }
    await showOverlay('loading', 'Logging In', 'Please wait...');
    const user = await loginUser(phone, password);
    if (user) { currentUser = user; localStorage.setItem('KPAY2026_SESSION', user.phone); setTimeout(renderDashboard, 1500); }
}

function logout() { localStorage.removeItem('KPAY2026_SESSION'); currentUser = null; renderLogin(); }

// ================================================================
// PDF RECEIPT
// ================================================================
function generatePDFReceipt(transaction, user, receiverName = null) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');
    let yPos = 20;
    doc.setFillColor(240, 248, 252);
    doc.rect(0, 0, 210, 297, 'F');
    doc.setFillColor(15, 76, 129);
    doc.rect(0, 0, 210, 55, 'F');
    doc.setFillColor(0, 180, 216);
    doc.circle(30, 28, 14, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('K', 26, 33);
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('kpay', 52, 28);
    doc.setFillColor(46, 196, 182);
    doc.roundedRect(140, 15, 55, 20, 4, 4, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('SUCCESS', 167.5, 28, { align: 'center' });
    doc.setTextColor(200, 230, 255);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('Money has been sent', 52, 37);
    yPos = 70;
    doc.setDrawColor(0, 180, 216);
    doc.setLineWidth(0.3);
    doc.line(15, yPos, 195, yPos);
    yPos += 10;
    const dateStr = new Date(transaction.date).toLocaleString('en-PK', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true });
    doc.setTextColor(90, 122, 138);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text(dateStr, 15, yPos);
    const receiptNo = 'ID#' + String(Date.now()).slice(-8);
    doc.text(receiptNo, 195, yPos, { align: 'right' });
    yPos += 15;
    doc.setTextColor(90, 122, 138);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('Sent to', 15, yPos);
    const receiver = receiverName || user.name;
    doc.setTextColor(13, 27, 42);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text(receiver.toUpperCase(), 15, yPos + 10);
    doc.setTextColor(90, 122, 138);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('Account Details', 15, yPos + 22);
    doc.setTextColor(13, 27, 42);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text(transaction.to || 'N/A', 15, yPos + 30);
    yPos += 45;
    doc.setDrawColor(0, 180, 216);
    doc.setLineWidth(0.3);
    doc.line(15, yPos, 195, yPos);
    yPos += 12;
    doc.setTextColor(90, 122, 138);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('Sent by', 15, yPos);
    doc.setTextColor(13, 27, 42);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(user.name, 15, yPos + 8);
    doc.setTextColor(90, 122, 138);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text(user.phone, 15, yPos + 16);
    yPos += 30;
    doc.setDrawColor(0, 180, 216);
    doc.setLineWidth(0.3);
    doc.line(15, yPos, 195, yPos);
    yPos += 12;
    doc.setTextColor(90, 122, 138);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('Amount', 15, yPos);
    const isCredit = ['Receive', 'Loan Approved', 'Spin Reward', 'Investment Profit', 'Daily Check-in', 'Admin Transfer', 'Dice Game Win', 'Referral Reward', 'Welcome Bonus', 'Game Reward'].includes(transaction.type);
    const sign = isCredit ? '+' : '';
    doc.setTextColor(13, 27, 42);
    doc.setFontSize(28);
    doc.setFont('helvetica', 'bold');
    doc.text(sign + formatCurrency(transaction.amount), 15, yPos + 12);
    doc.setTextColor(90, 122, 138);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('Fee / Charge', 15, yPos + 28);
    doc.setTextColor(46, 196, 182);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('No Charge', 15, yPos + 36);
    yPos += 55;
    doc.setDrawColor(0, 180, 216);
    doc.setLineWidth(0.3);
    doc.line(15, yPos, 195, yPos);
    yPos += 15;
    doc.setTextColor(90, 122, 138);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('Thank you for using KPay Pro 2026', 105, yPos, { align: 'center' });
    doc.setTextColor(138, 169, 186);
    doc.setFontSize(7);
    doc.text('This is a computer-generated receipt. No signature required.', 105, yPos + 8, { align: 'center' });
    doc.save(`KPay_Receipt_${Date.now()}.pdf`);
    showToast('📄 PDF Receipt downloaded!');
    sound.play('success');
}

// ================================================================
// ALL FEATURES - Simplified but Complete
// ================================================================

// === SEND MONEY ===
function showSendMoney() {
    document.getElementById('app').innerHTML = `
        <div class="glass fade-in">
            <h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">💸 Send Money</h2>
            <div class="form-group"><label>Receiver Phone</label><input id="sendPhone" placeholder="0300-0000000" /></div>
            <div class="form-group"><label>Amount (PKR)</label><input id="sendAmount" type="number" placeholder="0.00" /></div>
            <div class="form-group"><label>Your PIN</label><input id="sendPin" type="password" placeholder="XXXX" maxlength="4" /></div>
            <div class="form-group"><label>Note</label><input id="sendNote" placeholder="What's this for?" /></div>
            <button class="btn-neon btn-neon-success" onclick="processSendMoney()"><i class="fas fa-paper-plane"></i> Send</button>
            <button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:8px;">Back</button>
        </div>
    `;
}

async function processSendMoney() {
    const phone = document.getElementById('sendPhone').value.trim();
    const amount = Number(document.getElementById('sendAmount').value);
    const pin = document.getElementById('sendPin').value;
    const note = document.getElementById('sendNote').value.trim() || 'Transfer';
    if (!phone) { showToast('Enter receiver phone!'); return; }
    if (amount <= 0) { showToast('Enter valid amount!'); return; }
    if (pin !== currentUser.pin) { showOverlay('error', 'Invalid PIN', 'Incorrect PIN!', 2000); return; }
    if (currentUser.balance < amount) { showOverlay('error', 'Insufficient Balance', 'You don\'t have enough balance!', 2000); return; }
    await showOverlay('loading', 'Processing Payment', 'Please wait...');
    const receiver = await getByIndex(STORES.USERS, 'phone', phone);
    if (!receiver) { showOverlay('error', 'User Not Found', 'Receiver not registered!', 2000); return; }
    if (receiver.isDeleted) { showOverlay('error', 'Error', 'Receiver account deleted!', 2000); return; }
    currentUser.balance -= amount;
    receiver.balance += amount;
    addTransaction(currentUser, 'Send', amount, note, { to: receiver.name + ' (' + receiver.phone + ')' });
    addTransaction(receiver, 'Receive', amount, note, { from: currentUser.name + ' (' + currentUser.phone + ')' });
    await put(STORES.USERS, currentUser);
    await put(STORES.USERS, receiver);
    await showOverlay('success', 'Payment Sent!', `PKR ${amount.toLocaleString()} sent to ${receiver.name}`, 2500);
    sound.play('payment');
    const lastTx = currentUser.transactions[currentUser.transactions.length - 1];
    setTimeout(() => generatePDFReceipt(lastTx, currentUser, receiver.name), 500);
    setTimeout(renderDashboard, 2500);
}

// === LOANS ===
function showLoanApply() {
    document.getElementById('app').innerHTML = `
        <div class="glass fade-in">
            <h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🏦 Apply for Loan</h2>
            <p style="color:var(--text-secondary);font-size:13px;">Interest: 10% | Max: PKR 500,000</p>
            <div class="form-group"><label>Amount (PKR)</label><input id="loanAmount" type="number" placeholder="Enter amount" /></div>
            <div class="form-group"><label>Reason</label><textarea id="loanReason" placeholder="Why do you need this loan?" rows="2"></textarea></div>
            <button class="btn-neon btn-neon-primary" onclick="processLoanApply()"><i class="fas fa-hand-holding-usd"></i> Submit Request</button>
            <button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:8px;">Back</button>
        </div>
    `;
}

async function processLoanApply() {
    const amount = Number(document.getElementById('loanAmount').value);
    const reason = document.getElementById('loanReason').value.trim() || 'No reason';
    if (amount < 1000) { showOverlay('error', 'Invalid Amount', 'Minimum loan is PKR 1,000!', 2000); return; }
    if (amount > 500000) { showOverlay('error', 'Invalid Amount', 'Maximum loan is PKR 500,000!', 2000); return; }
    if (currentUser.balance > 10000) { showOverlay('error', 'Not Eligible', 'You already have sufficient balance!', 2000); return; }
    await showOverlay('loading', 'Submitting Loan Request', 'Please wait...');
    const interest = Math.floor(amount * 0.10);
    const total = amount + interest;
    const loanReq = { phone: currentUser.phone, name: currentUser.name, amount, interest, total, reason, status: 'pending', date: getCurrentDate() };
    await add(STORES.LOAN_REQUESTS, loanReq);
    showOverlay('success', 'Loan Request Sent', 'Waiting for admin approval.', 2500);
    sound.play('notification');
    setTimeout(renderDashboard, 2500);
}

function showMyLoans() {
    getAll(STORES.LOAN_REQUESTS).then(loans => {
        const userLoans = loans.filter(l => l.phone === currentUser.phone);
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">📋 My Loans</h2><p style="color:var(--text-secondary);font-size:13px;">Total: ${userLoans.length}</p>`;
        if (userLoans.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:20px 0;">No loans yet</p>'; } else {
            userLoans.forEach(loan => {
                html += `<div class="demand-item ${loan.status}"><div class="flex-between"><span style="font-weight:600;">PKR ${loan.amount.toLocaleString()}</span><span class="badge-demand ${loan.status}">${loan.status}</span></div>
                <p style="font-size:13px;color:var(--text-secondary);">Total: ${formatCurrency(loan.total)}</p><p style="font-size:11px;color:var(--text-muted);">${loan.date}</p>
                ${loan.status === 'approved' ? `<button class="btn-neon btn-neon-xs btn-neon-success" onclick="repayUserLoan(${loan.id})" style="margin-top:4px;"><i class="fas fa-hand-holding-usd"></i> Repay</button>` : ''}
                ${loan.status === 'approved' ? `<button class="btn-neon btn-neon-xs" style="margin-top:4px;background:var(--bg-card);color:var(--ocean-teal);border:1px solid var(--ocean-teal);" onclick="generateLoanReceipt(${loan.id})"><i class="fas fa-file-pdf"></i> Receipt</button>` : ''}</div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

function generateLoanReceipt(id) {
    getAll(STORES.LOAN_REQUESTS).then(loans => {
        const loan = loans.find(l => l.id === id);
        if (!loan) return;
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.setFillColor(240, 248, 252);
        doc.rect(0, 0, 210, 297, 'F');
        doc.setFillColor(15, 76, 129);
        doc.rect(0, 0, 210, 30, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(22);
        doc.setFont('helvetica', 'bold');
        doc.text('KPAY PRO 2026', 105, 18, { align: 'center' });
        doc.setTextColor(13, 27, 42);
        doc.setFontSize(16);
        doc.text('LOAN RECEIPT', 105, 40, { align: 'center' });
        doc.setDrawColor(0, 180, 216);
        doc.setLineWidth(0.5);
        doc.line(20, 45, 190, 45);
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        const details = [
            ['Loan #', 'KPAY-LOAN-' + String(loan.id).slice(-6)],
            ['Date', new Date(loan.date).toLocaleString()],
            ['Amount', formatCurrency(loan.amount)],
            ['Interest (10%)', formatCurrency(loan.interest)],
            ['Total Payable', formatCurrency(loan.total)],
            ['Status', loan.status],
            ['', ''],
            ['User', currentUser.name],
            ['Phone', currentUser.phone]
        ];
        let y = 60;
        details.forEach(([label, value]) => {
            if (label) { doc.setTextColor(27, 58, 75); doc.text(label + ':', 20, y); doc.setTextColor(13, 27, 42); doc.text(value, 80, y); }
            y += 10;
        });
        doc.setDrawColor(0, 180, 216);
        doc.line(20, y + 10, 190, y + 10);
        doc.setFontSize(9);
        doc.setTextColor(90, 122, 138);
        doc.text('Thank you for using KPay Pro 2026', 105, y + 25, { align: 'center' });
        doc.save(`KPay_Loan_${Date.now()}.pdf`);
        showToast('📄 PDF Receipt downloaded!');
        sound.play('success');
    });
}

async function repayUserLoan(id) {
    await showOverlay('loading', 'Processing Repayment', 'Please wait...');
    getAll(STORES.LOAN_REQUESTS).then(loans => {
        const loan = loans.find(l => l.id === id);
        if (!loan || loan.status !== 'approved') { hideOverlay(); return; }
        const amount = prompt(`Repay amount (Total: ${formatCurrency(loan.total)}):`);
        if (!amount) { hideOverlay(); return; }
        const amt = Number(amount);
        if (amt <= 0) { hideOverlay(); showToast('Invalid amount!'); return; }
        if (currentUser.balance < amt) { hideOverlay(); showOverlay('error', 'Insufficient Balance', 'You don\'t have enough balance!', 2000); return; }
        currentUser.balance -= amt;
        loan.paid = (loan.paid || 0) + amt;
        if (loan.paid >= loan.total) { loan.status = 'completed'; showOverlay('success', '🎉 Loan Fully Repaid!', 'Congratulations!', 2500); sound.play('game_win'); } else { showOverlay('success', 'Payment Received', `PKR ${amt.toLocaleString()} repaid!`, 2000); sound.play('payment'); }
        addTransaction(currentUser, 'Loan Repayment', amt, 'Loan repayment');
        put(STORES.USERS, currentUser).then(() => { put(STORES.LOAN_REQUESTS, loan).then(() => { setTimeout(showMyLoans, 1500); }); });
    });
}

// === INVESTMENTS ===
const INVESTMENT_PACKAGES = [
    { name: 'Starter', min: 1000, max: 5000, profit: 6, fee: 2 },
    { name: 'Silver', min: 5000, max: 20000, profit: 10, fee: 3 },
    { name: 'Gold', min: 20000, max: 50000, profit: 15, fee: 5 },
    { name: 'Platinum', min: 50000, max: 200000, profit: 22, fee: 7 }
];

function showInvestments() {
    getAll(STORES.INVESTMENTS).then(investments => {
        const userInv = investments.filter(i => i.phone === currentUser.phone);
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">📈 Investments</h2>`;
        INVESTMENT_PACKAGES.forEach(pkg => {
            html += `<div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:14px;margin-bottom:10px;">
                <div class="flex-between"><h3 style="font-size:16px;color:var(--ocean-teal);">${pkg.name}</h3><span style="font-size:11px;color:var(--text-muted);">${pkg.min} - ${pkg.max}</span></div>
                <p style="font-size:13px;color:var(--text-secondary);">Profit: <span style="color:var(--success);">${pkg.profit}%</span> | Fee: <span style="color:var(--warning);">${pkg.fee}%</span></p>
                <button class="btn-neon btn-neon-xs btn-neon-success" onclick="investNow('${pkg.name}')">Invest</button></div>`;
        });
        if (userInv.length > 0) {
            html += `<hr style="border-color:var(--border-glass);margin:12px 0;" /><h3 style="font-size:14px;">Your Investments</h3>`;
            userInv.forEach(inv => {
                html += `<div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:10px;margin-bottom:6px;">
                    <div class="flex-between"><span>${inv.package}</span><span style="color:${inv.status === 'completed' ? 'var(--success)' : 'var(--warning)'};">${inv.status}</span></div>
                    <p style="font-size:13px;">Amount: ${formatCurrency(inv.amount)}</p>
                    <p style="font-size:13px;color:var(--success);">Profit: ${formatCurrency(inv.profit)}</p></div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

async function investNow(pkgName) {
    const pkg = INVESTMENT_PACKAGES.find(p => p.name === pkgName);
    if (!pkg) return;
    const amount = prompt(`Enter amount (${pkg.min} - ${pkg.max}):`);
    if (!amount) return;
    const amt = Number(amount);
    if (amt < pkg.min || amt > pkg.max) { showOverlay('error', 'Invalid Amount', 'Amount out of range!', 2000); return; }
    if (currentUser.balance < amt) { showOverlay('error', 'Insufficient Balance', 'You don\'t have enough balance!', 2000); return; }
    await showOverlay('loading', 'Processing Investment', 'Please wait...');
    const profit = Math.floor(amt * (pkg.profit / 100));
    const fee = Math.floor(amt * (pkg.fee / 100));
    currentUser.balance -= amt;
    const inv = { phone: currentUser.phone, name: currentUser.name, package: pkgName, amount: amt, profit, fee, status: 'active', date: getCurrentDate() };
    addTransaction(currentUser, 'Investment', amt, pkgName + ' package');
    await add(STORES.INVESTMENTS, inv);
    await put(STORES.USERS, currentUser);
    showOverlay('success', 'Investment Complete', `PKR ${amt.toLocaleString()} invested in ${pkgName}`, 2500);
    sound.play('payment');
    setTimeout(showInvestments, 1500);
}

// === CARDS ===
function showCards() {
    getAll(STORES.CARDS).then(cards => {
        const userCards = cards.filter(c => c.phone === currentUser.phone);
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">💳 Virtual Cards</h2>
            <button class="btn-neon btn-neon-sm btn-neon-primary" onclick="createCard()" style="width:auto;padding:8px 20px;margin-bottom:12px;"><i class="fas fa-plus"></i> Create Card (PKR 500)</button>`;
        if (userCards.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:20px 0;">No cards</p>'; } else {
            userCards.forEach(card => {
                html += `<div style="background:linear-gradient(135deg,rgba(0,180,216,0.05),rgba(74,144,217,0.05));border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:14px;margin-bottom:8px;">
                    <div class="flex-between"><span style="font-size:18px;letter-spacing:2px;font-family:'Space Grotesk',sans-serif;">${card.number}</span>
                    <span style="font-size:11px;color:${card.active ? 'var(--success)' : 'var(--danger)'};">${card.active ? '✅ ACTIVE' : 'BLOCKED'}</span></div>
                    <p style="font-size:13px;color:var(--text-secondary);">CVV: ${card.cvv} | Exp: ${card.expiry}</p>
                    <p style="font-size:13px;">Limit: ${formatCurrency(card.limit)}</p>
                    <div style="display:flex;gap:4px;margin-top:4px;">
                        <button class="btn-neon btn-neon-xs ${card.active ? 'btn-neon-danger' : 'btn-neon-success'}" onclick="toggleCard(${card.id})">${card.active ? 'Block' : 'Activate'}</button>
                        <button class="btn-neon btn-neon-xs btn-neon-danger" onclick="deleteCard(${card.id})">Delete</button></div></div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

async function createCard() {
    if (currentUser.balance < 500) { showOverlay('error', 'Insufficient Balance', 'Need PKR 500!', 2000); return; }
    await showOverlay('loading', 'Creating Card', 'Please wait...');
    currentUser.balance -= 500;
    const card = { phone: currentUser.phone, number: '4532' + Math.random().toString().slice(2, 14), cvv: String(Math.floor(100 + Math.random() * 900)), expiry: '12/28', limit: 50000, active: true, lastUsed: null, totalUsed: 0, date: getCurrentDate() };
    addTransaction(currentUser, 'Card Creation', 500, 'Virtual card fee');
    await add(STORES.CARDS, card);
    await put(STORES.USERS, currentUser);
    showOverlay('success', 'Card Created!', '💳 Your virtual card is ready.', 2500);
    sound.play('success');
    setTimeout(showCards, 1500);
}

async function toggleCard(id) {
    await showOverlay('loading', 'Updating Card', 'Please wait...');
    getAll(STORES.CARDS).then(cards => {
        const card = cards.find(c => c.id === id);
        if (!card) return;
        card.active = !card.active;
        put(STORES.CARDS, card).then(() => {
            showOverlay('success', card.active ? 'Card Activated!' : 'Card Blocked!', '', 2000);
            sound.play('notification');
            setTimeout(showCards, 1500);
        });
    });
}

async function deleteCard(id) {
    if (!confirm('Delete this card?')) return;
    await showOverlay('loading', 'Deleting Card', 'Please wait...');
    deleteData(STORES.CARDS, id).then(() => {
        showOverlay('error', 'Card Deleted', 'Card removed.', 2000);
        sound.play('notification');
        setTimeout(showCards, 1500);
    });
}

// === CARD PAYMENT ===
function showCardPayment() {
    getAll(STORES.CARDS).then(cards => {
        const userCards = cards.filter(c => c.phone === currentUser.phone && c.active === true);
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">💳 Pay with Card</h2><p style="color:var(--text-secondary);font-size:13px;">Pay using your virtual card</p>`;
        if (userCards.length === 0) {
            html += `<p style="color:var(--text-muted);text-align:center;padding:30px 0;"><span style="font-size:48px;display:block;">💳</span>No active cards found!<br><span style="font-size:12px;">Please create a card first.</span></p>
                <button class="btn-neon btn-neon-primary" onclick="showCards()">Create Card</button>
                <button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:8px;">Back</button></div>`;
            document.getElementById('app').innerHTML = html;
            return;
        }
        html += `<div class="form-group"><label>Select Card</label><select id="paymentCardSelect"><option value="">-- Select a card --</option>`;
        userCards.forEach(card => {
            html += `<option value="${card.id}">${card.number.slice(0,4)}****${card.number.slice(-4)} (${formatCurrency(card.limit)})</option>`;
        });
        html += `</select></div>
            <div class="form-group"><label>Amount (PKR)</label><input id="paymentAmount" type="number" placeholder="Enter amount" /></div>
            <div class="form-group"><label>Merchant / Payee</label><input id="paymentMerchant" placeholder="Store name or person" /></div>
            <div class="form-group"><label>Description (Optional)</label><input id="paymentDescription" placeholder="What's this for?" /></div>
            <div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:12px;margin-bottom:16px;">
                <p style="font-size:12px;color:var(--text-secondary);">🔒 Secure payment via KPay Card</p></div>
            <button class="btn-neon btn-neon-success" onclick="processCardPayment()"><i class="fas fa-credit-card"></i> Pay Now</button>
            <button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:8px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

async function processCardPayment() {
    const cardId = Number(document.getElementById('paymentCardSelect').value);
    const amount = Number(document.getElementById('paymentAmount').value);
    const merchant = document.getElementById('paymentMerchant').value.trim();
    const description = document.getElementById('paymentDescription').value.trim() || 'Card Payment';
    if (!cardId) { showToast('Please select a card!'); return; }
    if (!amount || amount <= 0) { showToast('Enter a valid amount!'); return; }
    if (!merchant) { showToast('Enter merchant name!'); return; }
    if (amount > 100000) { showToast('Maximum PKR 100,000 per transaction!'); return; }
    await showOverlay('loading', 'Processing Payment', 'Please wait...');
    try {
        const cards = await getAll(STORES.CARDS);
        const card = cards.find(c => c.id === cardId);
        if (!card) { showOverlay('error', 'Card Not Found', 'Selected card not found!', 2000); return; }
        if (!card.active) { showOverlay('error', 'Card Blocked', 'This card is blocked!', 2000); return; }
        if (currentUser.balance < amount) { showOverlay('error', 'Insufficient Balance', `You need ${formatCurrency(amount)} but have ${formatCurrency(currentUser.balance)}`, 2000); return; }
        if (amount > (card.limit || 50000)) { showOverlay('error', 'Card Limit Exceeded', `Card limit is ${formatCurrency(card.limit || 50000)}`, 2000); return; }
        currentUser.balance -= amount;
        card.lastUsed = getCurrentDate();
        card.totalUsed = (card.totalUsed || 0) + amount;
        const transaction = { type: 'Card Payment', amount, note: `Payment to ${merchant} - ${description}`, date: getCurrentDate(), cardId: card.id, cardNumber: card.number.slice(-4), merchant, status: 'completed' };
        addTransaction(currentUser, transaction.type, transaction.amount, transaction.note, { merchant, cardLast4: card.number.slice(-4), paymentMethod: 'Virtual Card' });
        const cardPayment = { phone: currentUser.phone, name: currentUser.name, cardId: card.id, cardLast4: card.number.slice(-4), amount, merchant, description, status: 'approved', date: getCurrentDate() };
        await put(STORES.USERS, currentUser);
        await put(STORES.CARDS, card);
        await add(STORES.CARD_PAYMENTS, cardPayment);
        await showOverlay('success', '✅ Payment Successful!', `PKR ${amount.toLocaleString()} paid to ${merchant} via card ****${card.number.slice(-4)}`, 2500);
        sound.play('payment');
        setTimeout(() => generateCardPaymentReceipt(transaction, currentUser, merchant), 500);
        setTimeout(renderDashboard, 2500);
    } catch (error) { console.error('Payment error:', error); showOverlay('error', 'Payment Failed', 'Something went wrong!', 2000); sound.play('payment_failed'); }
}

function generateCardPaymentReceipt(transaction, user, merchant) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');
    doc.setFillColor(240, 248, 252);
    doc.rect(0, 0, 210, 297, 'F');
    doc.setFillColor(15, 76, 129);
    doc.rect(0, 0, 210, 45, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('KPAY PRO 2026', 105, 20, { align: 'center' });
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Card Payment Receipt', 105, 32, { align: 'center' });
    doc.setTextColor(13, 27, 42);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('PAYMENT RECEIPT', 105, 55, { align: 'center' });
    doc.setDrawColor(0, 180, 216);
    doc.setLineWidth(0.5);
    doc.line(20, 60, 190, 60);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    const details = [
        ['Transaction ID', 'TXN-' + String(Date.now()).slice(-8)],
        ['Date', new Date(transaction.date).toLocaleString('en-PK')],
        ['Merchant', merchant],
        ['Card Used', '****' + transaction.cardNumber],
        ['Payment Method', 'Virtual Card'],
        ['Status', '✅ COMPLETED']
    ];
    let y = 75;
    details.forEach(([label, value]) => {
        doc.setTextColor(27, 58, 75);
        doc.text(label + ':', 25, y);
        doc.setTextColor(13, 27, 42);
        doc.text(value, 80, y);
        y += 10;
    });
    y += 10;
    doc.setDrawColor(0, 180, 216);
    doc.setLineWidth(0.3);
    doc.line(20, y, 190, y);
    y += 10;
    doc.setTextColor(90, 122, 138);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Amount Paid', 25, y);
    doc.setTextColor(46, 196, 182);
    doc.setFontSize(26);
    doc.setFont('helvetica', 'bold');
    doc.text(formatCurrency(transaction.amount), 25, y + 12);
    y += 30;
    doc.setDrawColor(0, 180, 216);
    doc.setLineWidth(0.3);
    doc.line(20, y, 190, y);
    y += 15;
    doc.setTextColor(90, 122, 138);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('Thank you for using KPay Pro 2026', 105, y, { align: 'center' });
    doc.setFontSize(7);
    doc.text('This is a computer-generated receipt. No signature required.', 105, y + 8, { align: 'center' });
    doc.save(`KPay_Card_Payment_${Date.now()}.pdf`);
    showToast('📄 Payment receipt downloaded!');
    sound.play('success');
}

function showCardTransactions() {
    const txs = currentUser.transactions || [];
    const cardTxs = txs.filter(t => t.type === 'Card Payment');
    let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">📊 Card Transactions</h2><p style="color:var(--text-secondary);font-size:13px;">All card payments</p>`;
    if (cardTxs.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:30px 0;">No card payments yet</p>'; } else {
        cardTxs.slice().reverse().forEach((tx, index) => {
            html += `<div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:10px;margin-bottom:6px;border-left:3px solid var(--ocean-teal);">
                <div class="flex-between"><span style="font-weight:600;">${tx.merchant || 'Payment'}</span><span style="color:var(--danger);font-weight:600;">- ${formatCurrency(tx.amount)}</span></div>
                <p style="font-size:12px;color:var(--text-secondary);">💳 Card: ****${tx.cardNumber || 'N/A'}</p>
                ${tx.note ? `<p style="font-size:11px;color:var(--text-muted);">📝 ${tx.note}</p>` : ''}
                <p style="font-size:10px;color:var(--text-muted);">${tx.date}</p>
                <button class="receipt-btn" onclick="generateCardReceiptByIndex(${index})"><i class="fas fa-file-pdf"></i> Receipt</button></div>`;
        });
    }
    html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
    document.getElementById('app').innerHTML = html;
}

function generateCardReceiptByIndex(index) {
    const txs = currentUser.transactions || [];
    const cardTxs = txs.filter(t => t.type === 'Card Payment');
    const tx = cardTxs[index];
    if (!tx) return;
    generateCardPaymentReceipt(tx, currentUser, tx.merchant || 'Unknown');
}

// === BILLS ===
function showBills() {
    getAll(STORES.BILLS).then(bills => {
        const userBills = bills.filter(b => b.phone === currentUser.phone);
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🧾 Bill Payments</h2>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:12px;">
                <button class="btn-neon btn-neon-sm btn-neon-primary" onclick="payBill('Electricity')">⚡ Electricity</button>
                <button class="btn-neon btn-neon-sm btn-neon-primary" onclick="payBill('Gas')">🔥 Gas</button>
                <button class="btn-neon btn-neon-sm btn-neon-primary" onclick="payBill('Internet')">🌐 Internet</button>
                <button class="btn-neon btn-neon-sm btn-neon-primary" onclick="payBill('Mobile')">📱 Mobile</button></div>`;
        if (userBills.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:10px 0;">No bills paid</p>'; } else {
            userBills.slice().reverse().forEach(bill => {
                html += `<div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:10px;margin-bottom:6px;">
                    <div class="flex-between"><span>${bill.type}</span><span style="color:var(--success);">${formatCurrency(bill.amount)}</span></div>
                    <p style="font-size:11px;color:var(--text-muted);">${bill.date}</p></div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

async function payBill(type) {
    const amount = prompt('Enter bill amount (PKR):');
    if (!amount) return;
    const amt = Number(amount);
    if (amt <= 0) { showOverlay('error', 'Invalid Amount', 'Enter valid amount!', 2000); return; }
    if (currentUser.balance < amt) { showOverlay('error', 'Insufficient Balance', 'You don\'t have enough balance!', 2000); return; }
    await showOverlay('loading', 'Paying Bill', 'Please wait...');
    currentUser.balance -= amt;
    const bill = { phone: currentUser.phone, type, amount: amt, date: getCurrentDate() };
    addTransaction(currentUser, 'Bill Payment', amt, type + ' bill');
    await add(STORES.BILLS, bill);
    await put(STORES.USERS, currentUser);
    showOverlay('success', 'Bill Paid!', `${type} bill paid successfully.`, 2500);
    sound.play('payment');
    setTimeout(showBills, 1500);
}

// === SAVINGS ===
function showSavings() {
    getAll(STORES.SAVINGS).then(savings => {
        const userSavings = savings.filter(s => s.phone === currentUser.phone);
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🎯 Savings Goals</h2>
            <button class="btn-neon btn-neon-sm btn-neon-primary" onclick="createSavingsGoal()" style="width:auto;padding:8px 20px;margin-bottom:12px;"><i class="fas fa-plus"></i> New Goal</button>`;
        if (userSavings.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:20px 0;">No goals</p>'; } else {
            userSavings.forEach(goal => {
                const progress = goal.target > 0 ? Math.floor((goal.saved / goal.target) * 100) : 0;
                html += `<div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:12px;margin-bottom:8px;">
                    <div class="flex-between"><span style="font-weight:600;">${goal.name}</span><span style="color:${goal.status === 'completed' ? 'var(--success)' : 'var(--warning)'};">${goal.status}</span></div>
                    <p style="font-size:13px;color:var(--text-secondary);">${formatCurrency(goal.saved)} / ${formatCurrency(goal.target)}</p>
                    <div style="background:var(--bg-primary);border-radius:10px;height:6px;margin:4px 0;overflow:hidden;">
                        <div style="width:${progress}%;height:100%;background:var(--gradient-main);border-radius:10px;"></div></div>
                    ${goal.status !== 'completed' ? `<button class="btn-neon btn-neon-xs btn-neon-success" onclick="addToSavings(${goal.id})">Add Funds</button>` : ''}</div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

function createSavingsGoal() {
    const name = prompt('Goal name:');
    if (!name) return;
    const target = prompt('Target amount (PKR):');
    if (!target) return;
    const amt = Number(target);
    if (amt <= 0) { showOverlay('error', 'Invalid Amount', 'Enter valid amount!', 2000); return; }
    const goal = { phone: currentUser.phone, name, target: amt, saved: 0, status: 'active', date: getCurrentDate() };
    add(STORES.SAVINGS, goal).then(() => {
        showOverlay('success', 'Goal Created!', `🎯 ${name} - PKR ${amt.toLocaleString()}`, 2500);
        sound.play('success');
        setTimeout(showSavings, 1500);
    });
}

async function addToSavings(id) {
    const amount = prompt('Amount to save (PKR):');
    if (!amount) return;
    const amt = Number(amount);
    if (amt <= 0) { showOverlay('error', 'Invalid Amount', 'Enter valid amount!', 2000); return; }
    if (currentUser.balance < amt) { showOverlay('error', 'Insufficient Balance', 'You don\'t have enough balance!', 2000); return; }
    await showOverlay('loading', 'Saving Funds', 'Please wait...');
    getAll(STORES.SAVINGS).then(savings => {
        const goal = savings.find(s => s.id === id);
        if (!goal) return;
        currentUser.balance -= amt;
        goal.saved = (goal.saved || 0) + amt;
        if (goal.saved >= goal.target) { goal.status = 'completed'; showOverlay('success', '🎉 Goal Completed!', 'Congratulations!', 2500); sound.play('game_win'); } else { showOverlay('success', 'Funds Saved', `PKR ${amt.toLocaleString()} saved!`, 2000); sound.play('payment'); }
        addTransaction(currentUser, 'Savings', amt, 'Saved for ' + goal.name);
        put(STORES.USERS, currentUser).then(() => { put(STORES.SAVINGS, goal).then(() => { setTimeout(showSavings, 1500); }); });
    });
}

// === SPIN WHEEL ===
const SPIN_SEGMENTS = [
    { label: 'PKR 100', value: 100, color: '#00B4D8' },
    { label: 'Try Again', value: 0, color: '#90E0EF' },
    { label: 'PKR 50', value: 50, color: '#4A90D9' },
    { label: 'Try Again', value: 0, color: '#CAF0F8' },
    { label: 'PKR 10', value: 10, color: '#1A6BA0' },
    { label: 'PKR 200', value: 200, color: '#0F4C81' }
];
let spinAngle = 0, isSpinning = false;

function showSpin() {
    getAll(STORES.SPIN_REQUESTS).then(spins => {
        const pending = spins.find(s => s.phone === currentUser.phone && s.status === 'pending');
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🎡 Spin & Win</h2><p style="color:var(--text-secondary);font-size:13px;">Spin the wheel to win rewards!</p>`;
        if (pending) {
            html += `<div style="background:var(--warning-bg);border:1px solid var(--warning);border-radius:var(--radius-sm);padding:16px;text-align:center;margin:12px 0;">
                <p style="color:var(--warning);">⏳ Spin request pending approval</p><p style="font-size:12px;color:var(--text-muted);">${pending.date}</p></div>`;
        } else {
            html += `<div style="position:relative;width:260px;height:260px;margin:16px auto;">
                <canvas id="spinCanvas" width="400" height="400" style="width:100%;height:100%;border-radius:50%;box-shadow:0 0 40px rgba(0,180,216,0.2);"></canvas>
                <div style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:16px solid transparent;border-right:16px solid transparent;border-top:24px solid var(--ocean-teal);z-index:10;"></div>
                <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:44px;height:44px;border-radius:50%;background:var(--bg-primary);border:2px solid var(--ocean-teal);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:var(--ocean-teal);z-index:10;">SPIN</div></div>
                <button class="btn-neon btn-neon-primary" id="spinBtn" onclick="spinWheel()" style="width:auto;padding:12px 40px;display:block;margin:0 auto;"><i class="fas fa-sync-alt"></i> SPIN</button>`;
        }
        const userSpins = spins.filter(s => s.phone === currentUser.phone && s.status !== 'pending');
        if (userSpins.length > 0) {
            html += `<hr style="border-color:var(--border-glass);margin:14px 0;" /><h3 style="font-size:13px;">History</h3>`;
            userSpins.slice().reverse().forEach(s => {
                html += `<div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:8px 12px;margin-bottom:4px;display:flex;justify-content:space-between;font-size:13px;">
                    <span>${s.segment}</span><span style="color:${s.reward > 0 ? 'var(--success)' : 'var(--text-muted)'};">${s.reward > 0 ? '+' + formatCurrency(s.reward) : '❌'}</span></div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
        if (!pending) setTimeout(drawSpinWheel, 100);
    });
}

function drawSpinWheel() {
    const canvas = document.getElementById('spinCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const cx = canvas.width / 2, cy = canvas.height / 2;
    const r = 180, n = SPIN_SEGMENTS.length, arc = (2 * Math.PI) / n;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < n; i++) {
        const start = i * arc + spinAngle, end = start + arc;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, r, start, end);
        ctx.closePath();
        ctx.fillStyle = SPIN_SEGMENTS[i].color;
        ctx.fill();
        ctx.strokeStyle = '#F0F8FC';
        ctx.lineWidth = 2;
        ctx.stroke();
        const mid = start + arc / 2, tr = r * 0.65;
        const x = cx + Math.cos(mid) * tr, y = cy + Math.sin(mid) * tr;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(mid + (mid > Math.PI / 2 ? Math.PI : 0));
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 12px Inter';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(SPIN_SEGMENTS[i].label, 0, 0);
        ctx.restore();
    }
}

async function spinWheel() {
    if (isSpinning) return;
    if (currentUser.status === 'suspended') { showOverlay('error', 'Account Suspended', 'Your account is suspended!', 2000); return; }
    isSpinning = true;
    const btn = document.getElementById('spinBtn');
    if (btn) btn.disabled = true;
    const spins = 5 + Math.random() * 5;
    const idx = Math.floor(Math.random() * SPIN_SEGMENTS.length);
    const target = spins * 2 * Math.PI + (idx * (2 * Math.PI / SPIN_SEGMENTS.length));
    const start = spinAngle, dur = 3000 + Math.random() * 1500, startTime = Date.now();
    function animate() {
        const elapsed = Date.now() - startTime;
        const p = Math.min(elapsed / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        spinAngle = start + target * eased;
        drawSpinWheel();
        if (p < 1) { requestAnimationFrame(animate); } else {
            spinAngle = start + target;
            drawSpinWheel();
            isSpinning = false;
            if (btn) btn.disabled = false;
            const seg = SPIN_SEGMENTS[idx];
            const req = { phone: currentUser.phone, name: currentUser.name, segment: seg.label, reward: seg.value, status: 'pending', date: getCurrentDate() };
            add(STORES.SPIN_REQUESTS, req).then(() => {
                showOverlay('success', 'Spin Recorded!', 'Waiting for admin approval.', 2000);
                sound.play('notification');
                setTimeout(showSpin, 1500);
            });
        }
    }
    animate();
}

// === DICE GAME ===
function showDiceGame() {
    document.getElementById('app').innerHTML = `
        <div class="glass fade-in">
            <h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🎲 Roll Dice</h2>
            <p style="color:var(--text-secondary);font-size:13px;">Roll the dice and win prizes!</p>
            <div class="dice-container">
                <div class="dice" id="diceDisplay">⚀</div>
                <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;">
                    <button class="btn-neon btn-neon-sm btn-neon-primary" onclick="rollDice()"><i class="fas fa-dice"></i> Roll Dice</button>
                    <button class="btn-neon btn-neon-sm btn-neon-outline" onclick="showDiceHistory()"><i class="fas fa-history"></i> History</button>
                </div>
                <div id="diceResult" class="dice-result" style="margin-top:12px;">⚀ Roll to start!</div>
            </div>
            <button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button>
        </div>
    `;
}

async function rollDice() {
    if (currentUser.status === 'suspended') { showOverlay('error', 'Account Suspended', 'Your account is suspended!', 2000); return; }
    const dice = document.getElementById('diceDisplay');
    const resultDiv = document.getElementById('diceResult');
    dice.classList.add('rolling');
    const rollInterval = setInterval(() => {
        const rand = Math.floor(Math.random() * 6) + 1;
        const symbols = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
        dice.textContent = symbols[rand - 1];
    }, 100);
    setTimeout(() => {
        clearInterval(rollInterval);
        const value = Math.floor(Math.random() * 6) + 1;
        const symbols = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
        dice.textContent = symbols[value - 1];
        dice.classList.remove('rolling');
        const win = value % 2 === 0;
        const prize = win ? value * 50 : 0;
        const gameData = { phone: currentUser.phone, name: currentUser.name, value, win, prize, status: 'pending', date: getCurrentDate() };
        add(STORES.DICE_GAMES, gameData).then(() => {
            if (win) {
                resultDiv.innerHTML = `🎉 <strong>${value}</strong> — You won <span style="color:var(--success);font-weight:bold;">${formatCurrency(prize)}</span>! Waiting for admin approval.`;
                resultDiv.style.borderColor = 'var(--success)';
                sound.play('game_win');
            } else {
                resultDiv.innerHTML = `😔 <strong>${value}</strong> — Try again!`;
                resultDiv.style.borderColor = 'var(--danger)';
                sound.play('game_lose');
            }
            showOverlay('success', 'Dice Rolled!', 'Waiting for admin approval.', 2000);
        });
    }, 1500);
}

function showDiceHistory() {
    getAll(STORES.DICE_GAMES).then(games => {
        const userGames = games.filter(g => g.phone === currentUser.phone);
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🎲 Dice History</h2><p style="color:var(--text-secondary);font-size:13px;">Total: ${userGames.length}</p>`;
        if (userGames.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:20px 0;">No dice games yet</p>'; } else {
            userGames.slice().reverse().forEach(game => {
                const symbols = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
                html += `<div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:10px;margin-bottom:6px;">
                    <div class="flex-between"><span style="font-size:24px;">${symbols[game.value - 1]}</span>
                    <span style="color:${game.win ? 'var(--success)' : 'var(--danger)'};">${game.win ? '🏆 WIN' : '❌ LOSE'}</span></div>
                    ${game.win ? `<p style="font-size:13px;color:var(--success);">Prize: ${formatCurrency(game.prize)}</p>` : ''}
                    <p style="font-size:11px;color:var(--text-muted);">Status: ${game.status}</p>
                    <p style="font-size:10px;color:var(--text-muted);">${game.date}</p></div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="showDiceGame()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

// === WITHDRAW ===
function showWithdraw() {
    document.getElementById('app').innerHTML = `
        <div class="glass fade-in">
            <h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🏧 Withdraw Funds</h2>
            <p style="color:var(--text-secondary);font-size:13px;">Request a withdrawal — admin will approve</p>
            <div class="form-group"><label>Amount (PKR)</label><input id="withdrawAmount" type="number" placeholder="Enter amount" /></div>
            <div class="form-group"><label>Account Details</label><input id="withdrawDetails" placeholder="Bank account / JazzCash / EasyPaisa" /></div>
            <button class="btn-neon btn-neon-primary" onclick="processWithdraw()"><i class="fas fa-hand-holding-usd"></i> Request Withdrawal</button>
            <button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:8px;">Back</button>
        </div>
    `;
}

async function processWithdraw() {
    const amount = Number(document.getElementById('withdrawAmount').value);
    const details = document.getElementById('withdrawDetails').value.trim();
    if (amount < 500) { showOverlay('error', 'Invalid Amount', 'Minimum withdrawal is PKR 500!', 2000); return; }
    if (currentUser.balance < amount) { showOverlay('error', 'Insufficient Balance', 'You don\'t have enough balance!', 2000); return; }
    if (!details) { showToast('Enter account details!'); return; }
    await showOverlay('loading', 'Requesting Withdrawal', 'Please wait...');
    const req = { phone: currentUser.phone, name: currentUser.name, amount, details, status: 'pending', date: getCurrentDate() };
    await add(STORES.WITHDRAWALS, req);
    showOverlay('success', 'Withdrawal Request Sent', 'Waiting for admin approval.', 2500);
    sound.play('notification');
    setTimeout(renderDashboard, 1500);
}

// === HISTORY ===
function showHistory() {
    const txs = currentUser.transactions || [];
    let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">📜 Transaction History</h2><p style="color:var(--text-secondary);font-size:13px;">${txs.length} transactions</p>`;
    if (txs.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:30px 0;">No transactions</p>'; } else {
        txs.slice().reverse().forEach((tx, index) => {
            const isCredit = ['Receive', 'Loan Approved', 'Spin Reward', 'Investment Profit', 'Daily Check-in', 'Admin Transfer', 'Dice Game Win', 'Referral Reward', 'Welcome Bonus', 'Game Reward'].includes(tx.type);
            html += `<div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:10px;margin-bottom:6px;border-left:3px solid ${isCredit ? 'var(--success)' : 'var(--danger)'};">
                <div class="flex-between"><span style="font-weight:600;">${tx.type}</span>
                <span style="color:${isCredit ? 'var(--success)' : 'var(--danger)'};font-weight:600;">${isCredit ? '+' : '-'} ${formatCurrency(tx.amount)}</span></div>
                ${tx.to ? '<p style="font-size:12px;color:var(--text-secondary);">To: ' + tx.to + '</p>' : ''}
                ${tx.from ? '<p style="font-size:12px;color:var(--text-secondary);">From: ' + tx.from + '</p>' : ''}
                ${tx.note ? '<p style="font-size:11px;color:var(--text-muted);">📝 ' + tx.note + '</p>' : ''}
                <p style="font-size:10px;color:var(--text-muted);">${tx.date}</p>
                <button class="receipt-btn" onclick="generateReceipt(${index})"><i class="fas fa-file-pdf"></i> Receipt</button></div>`;
        });
    }
    html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
    document.getElementById('app').innerHTML = html;
}

function generateReceipt(index) {
    const txs = currentUser.transactions || [];
    const tx = txs[index];
    if (!tx) return;
    generatePDFReceipt(tx, currentUser);
}

// === PROFILE ===
function showProfile() {
    document.getElementById('app').innerHTML = `
        <div class="glass fade-in">
            <h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">👤 Profile</h2>
            <div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:16px;margin:12px 0;">
                <p><strong>Name:</strong> ${currentUser.name}</p>
                <p><strong>Phone:</strong> ${currentUser.phone}</p>
                <p><strong>Balance:</strong> ${formatCurrency(currentUser.balance)}</p>
                <p><strong>Status:</strong> <span style="color:${currentUser.status === 'active' ? 'var(--success)' : 'var(--danger)'};">${currentUser.status}</span></p>
                <p><strong>Transactions:</strong> ${currentUser.transactions ? currentUser.transactions.length : 0}</p>
                <p><strong>Joined:</strong> ${new Date(currentUser.createdAt).toLocaleDateString()}</p>
                <p><strong>🎯 Referral Code:</strong> ${currentUser.referralCode || 'N/A'}</p>
                <p><strong>🏆 Referral Bonus:</strong> ${formatCurrency(currentUser.referralBonus || 0)}</p>
                ${currentUser.isSalaryAccount ? '<p><strong>💰 Salary Account:</strong> ✅ Active</p>' : ''}
            </div>
            <button class="btn-neon btn-neon-outline" onclick="renderDashboard()">Back</button>
        </div>
    `;
}

// === DAILY CHECK-IN ===
function showDailyCheckin() {
    const today = new Date().toDateString();
    const canCheckin = currentUser.dailyCheckin !== today;
    const bonus = 50 + (currentUser.checkinStreak || 0) * 10;
    let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🎁 Daily Check-in</h2><p style="color:var(--text-secondary);font-size:13px;">Streak: ${currentUser.checkinStreak || 0} days 🔥</p>`;
    if (canCheckin) {
        html += `<div style="background:var(--bg-card);border:1px solid var(--ocean-teal);border-radius:var(--radius-sm);padding:20px;text-align:center;margin:12px 0;">
            <div style="font-size:48px;">🎉</div><h3>Claim Your Reward!</h3>
            <p style="color:var(--ocean-primary);font-size:24px;font-weight:700;">+${formatCurrency(bonus)}</p>
            <button class="btn-neon btn-neon-primary" onclick="claimCheckin(${bonus})" style="width:auto;padding:10px 30px;margin-top:8px;"><i class="fas fa-gift"></i> Claim</button></div>`;
    } else {
        html += `<div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:20px;text-align:center;margin:12px 0;">
            <div style="font-size:48px;">✅</div><h3>Already Checked In!</h3><p style="color:var(--text-muted);">Come back tomorrow.</p></div>`;
    }
    html += `<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-top:8px;">
        ${['M','T','W','T','F','S','S'].map((d, i) => `
            <div style="text-align:center;padding:6px;background:var(--bg-card);border-radius:6px;font-size:10px;color:${i < (currentUser.checkinStreak || 0) % 7 ? 'var(--success)' : 'var(--text-muted)'};">${d} ${i < (currentUser.checkinStreak || 0) % 7 ? '✅' : ''}</div>
        `).join('')}</div>
        <button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
    document.getElementById('app').innerHTML = html;
}

async function claimCheckin(bonus) {
    await showOverlay('loading', 'Claiming Reward', 'Please wait...');
    currentUser.balance += bonus;
    currentUser.dailyCheckin = new Date().toISOString();
    currentUser.checkinStreak = (currentUser.checkinStreak || 0) + 1;
    addTransaction(currentUser, 'Daily Check-in', bonus, 'Day ' + currentUser.checkinStreak + ' streak');
    await put(STORES.USERS, currentUser);
    showOverlay('success', '🎉 Reward Claimed!', `+${formatCurrency(bonus)}`, 2500);
    sound.play('success');
    setTimeout(renderDashboard, 1500);
}

// === APPEALS ===
function showAppeals() {
    getAppealsForUser(currentUser.phone).then(appeals => {
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">📩 My Appeals</h2><p style="color:var(--text-secondary);font-size:13px;">Total: ${appeals.length}</p>`;
        if (appeals.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:20px 0;">No appeals</p>'; } else {
            appeals.slice().reverse().forEach(appeal => {
                const isFromMe = appeal.from === currentUser.phone;
                html += `<div class="demand-item ${appeal.status}"><div class="flex-between"><span style="font-weight:600;">${isFromMe ? '📤 To: ' + appeal.toName : '📥 From: ' + appeal.fromName}</span>
                    <span class="badge-demand ${appeal.status}">${appeal.status}</span></div>
                    <p style="font-size:13px;">📝 ${appeal.message}</p>
                    <p style="font-size:11px;color:var(--text-muted);">${appeal.date}</p></div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

function showAppealForm() {
    document.getElementById('app').innerHTML = `
        <div class="glass fade-in">
            <h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">✍️ New Appeal</h2>
            <p style="color:var(--text-secondary);font-size:13px;">Send appeal to Admin or another user</p>
            <div class="form-group"><label>Send To</label>
                <select id="appealType" onchange="toggleAppealTarget()">
                    <option value="admin">Admin</option>
                    <option value="user">Other User</option>
                </select></div>
            <div id="appealUserField" style="display:none;">
                <div class="form-group"><label>User Phone</label><input id="appealPhone" placeholder="0300-0000000" /></div></div>
            <div class="form-group"><label>Message</label><textarea id="appealMessage" placeholder="Describe your concern..." rows="3"></textarea></div>
            <button class="btn-neon btn-neon-primary" onclick="processAppeal()"><i class="fas fa-paper-plane"></i> Send Appeal</button>
            <button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:8px;">Back</button>
        </div>
    `;
}

function toggleAppealTarget() {
    const type = document.getElementById('appealType').value;
    document.getElementById('appealUserField').style.display = type === 'user' ? 'block' : 'none';
}

function submitAppeal(fromPhone, toPhone, message, type = 'admin') {
    return getByIndex(STORES.USERS, 'phone', fromPhone).then(fromUser => {
        if (!fromUser) { showOverlay('error', 'Error', 'Sender not found!', 2000); return false; }
        if (type === 'user' && toPhone) {
            return getByIndex(STORES.USERS, 'phone', toPhone).then(toUser => {
                if (!toUser) { showOverlay('error', 'Error', 'Receiver not found!', 2000); return false; }
                const appeal = { from: fromPhone, fromName: fromUser.name, to: toPhone, toName: toUser.name, message, type: 'user', status: 'pending', date: getCurrentDate() };
                return add(STORES.APPEALS, appeal).then(() => { showOverlay('success', 'Appeal Sent', 'Appeal sent to ' + toUser.name, 2000); sound.play('notification'); return true; });
            });
        } else {
            const appeal = { from: fromPhone, fromName: fromUser.name, to: 'admin', toName: 'Admin', message, type: 'admin', status: 'pending', date: getCurrentDate() };
            return add(STORES.APPEALS, appeal).then(() => { showOverlay('success', 'Appeal Sent', 'Appeal sent to Admin', 2000); sound.play('notification'); return true; });
        }
    });
}

function getAppealsForUser(phone) {
    return getAll(STORES.APPEALS).then(appeals => appeals.filter(a => a.from === phone || a.to === phone));
}

function getPendingAppeals() {
    return getAll(STORES.APPEALS).then(appeals => appeals.filter(a => a.status === 'pending'));
}

function approveAppeal(id) {
    return getAll(STORES.APPEALS).then(appeals => {
        const appeal = appeals.find(a => a.id === id);
        if (!appeal) { showToast('Appeal not found!'); return false; }
        appeal.status = 'approved';
        return put(STORES.APPEALS, appeal).then(() => { showOverlay('success', 'Approved!', 'Appeal approved!', 2000); sound.play('success'); return true; });
    });
}

function rejectAppeal(id) {
    return getAll(STORES.APPEALS).then(appeals => {
        const appeal = appeals.find(a => a.id === id);
        if (!appeal) { showToast('Appeal not found!'); return false; }
        appeal.status = 'rejected';
        return put(STORES.APPEALS, appeal).then(() => { showOverlay('error', 'Rejected', 'Appeal rejected.', 2000); sound.play('error'); return true; });
    });
}

async function processAppeal() {
    const type = document.getElementById('appealType').value;
    const message = document.getElementById('appealMessage').value.trim();
    if (!message) { showToast('Enter a message!'); return; }
    await showOverlay('loading', 'Sending Appeal', 'Please wait...');
    if (type === 'user') {
        const phone = document.getElementById('appealPhone').value.trim();
        if (!phone) { hideOverlay(); showToast('Enter user phone!'); return; }
        if (phone === currentUser.phone) { hideOverlay(); showOverlay('error', 'Error', 'Cannot appeal to yourself!', 2000); return; }
        const success = await submitAppeal(currentUser.phone, phone, message, 'user');
        if (success) setTimeout(renderDashboard, 1500);
    } else {
        const success = await submitAppeal(currentUser.phone, null, message, 'admin');
        if (success) setTimeout(renderDashboard, 1500);
    }
}

// === REFERRAL ===
function showReferral() {
    const userRefCode = currentUser.referralCode || generateReferralCode();
    if (!currentUser.referralCode) { currentUser.referralCode = userRefCode; put(STORES.USERS, currentUser); }
    getAll(STORES.USERS).then(users => {
        const referredUsers = users.filter(u => u.referredBy === currentUser.referralCode);
        const referralBonus = currentUser.referralBonus || 0;
        let html = `<div class="glass fade-in">
            <h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🎯 Referral Program</h2>
            <p style="color:var(--text-secondary);font-size:13px;">Invite friends & earn rewards!</p>
            <div style="background:var(--gradient-main);border-radius:var(--radius-lg);padding:24px;text-align:center;color:white;margin:12px 0;">
                <p style="color:rgba(255,255,255,0.7);font-size:11px;letter-spacing:1px;">YOUR REFERRAL CODE</p>
                <div style="font-size:32px;font-weight:700;font-family:'Space Grotesk',sans-serif;letter-spacing:4px;margin:4px 0;">${currentUser.referralCode}</div>
                <button class="btn-neon btn-neon-sm" onclick="copyReferralCode('${currentUser.referralCode}')" style="background:rgba(255,255,255,0.2);color:white;border:1px solid rgba(255,255,255,0.3);">📋 Copy Code</button>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:12px 0;">
                <div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:14px;text-align:center;">
                    <div style="font-size:24px;font-weight:700;color:var(--success);">${referralBonus}</div>
                    <div style="font-size:11px;color:var(--text-muted);">Total Earned (PKR)</div></div>
                <div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:14px;text-align:center;">
                    <div style="font-size:24px;font-weight:700;color:var(--ocean-teal);">${referredUsers.length}</div>
                    <div style="font-size:11px;color:var(--text-muted);">Friends Joined</div></div>
            </div>
            <div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:14px;margin:8px 0;">
                <p style="font-size:13px;font-weight:600;">💰 How it works</p>
                <p style="font-size:12px;color:var(--text-secondary);">✅ Share your code with friends</p>
                <p style="font-size:12px;color:var(--text-secondary);">✅ They register using your code</p>
                <p style="font-size:12px;color:var(--text-secondary);">✅ You get <strong style="color:var(--success);">PKR 200</strong> bonus</p>
                <p style="font-size:12px;color:var(--text-secondary);">✅ They get <strong style="color:var(--ocean-teal);">PKR 100</strong> welcome bonus</p>
            </div>
            ${referredUsers.length > 0 ? `<hr style="border-color:var(--border-glass);margin:12px 0;" /><h3 style="font-size:13px;">Friends who joined</h3>
                ${referredUsers.map(u => `<div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:8px 12px;margin-bottom:4px;display:flex;justify-content:space-between;"><span>${u.name}</span><span style="font-size:11px;color:var(--text-muted);">${new Date(u.createdAt).toLocaleDateString()}</span></div>`).join('')}` : ''}
            <button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

function copyReferralCode(code) {
    navigator.clipboard.writeText(code).then(() => { showToast('📋 Code copied! Share it with friends.'); }).catch(() => {
        const input = document.createElement('input');
        input.value = code;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        showToast('📋 Code copied!');
    });
}

// === CHAT ===
function showChat() {
    document.getElementById('app').innerHTML = `
        <div class="glass fade-in">
            <h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">💬 Support Chat</h2>
            <p style="color:var(--text-secondary);font-size:13px;">Chat with admin for help</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0;">
                <button class="btn-neon btn-neon-sm btn-neon-primary" onclick="showChatRoom('admin')"><i class="fas fa-headset"></i> Chat with Admin</button>
                <button class="btn-neon btn-neon-sm btn-neon-outline" onclick="showChatHistory()"><i class="fas fa-history"></i> Chat History</button>
            </div>
            <button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button>
        </div>
    `;
}

function showChatRoom(target) {
    const chatId = target === 'admin' ? `admin_${currentUser.phone}` : `${currentUser.phone}_${target}`;
    const otherName = target === 'admin' ? 'Admin Support' : target;
    getAll(STORES.CHAT_MESSAGES).then(messages => {
        if (!messages) messages = [];
        const chatMessages = messages.filter(m => m.chatId === chatId);
        let html = `<div class="glass fade-in" style="height:70vh;display:flex;flex-direction:column;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <h2 style="font-size:18px;font-family:'Space Grotesk',sans-serif;">💬 ${otherName}</h2>
                <button class="btn-neon btn-neon-xs btn-neon-danger" onclick="showChat()">✕</button></div>
            <div style="flex:1;overflow-y:auto;background:var(--bg-primary);border-radius:var(--radius-sm);padding:12px;margin-bottom:8px;" id="chatMessages">`;
        if (chatMessages.length === 0) { html += `<p style="color:var(--text-muted);text-align:center;padding:30px 0;">No messages yet. Start chatting!</p>`; } else {
            chatMessages.forEach(msg => {
                const isMine = msg.sender === currentUser.phone;
                html += `<div style="text-align:${isMine ? 'right' : 'left'};margin-bottom:8px;">
                    <div style="display:inline-block;background:${isMine ? 'var(--ocean-teal)' : 'var(--bg-card)'};color:${isMine ? 'white' : 'var(--text-primary)'};border-radius:12px;padding:8px 14px;max-width:80%;border:${isMine ? 'none' : '1px solid var(--border-glass)'};">
                        <p style="font-size:13px;word-wrap:break-word;">${msg.message}</p>
                        ${msg.attachment ? `<div style="font-size:11px;color:${isMine ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)'};margin-top:4px;">📎 ${msg.attachment}</div>` : ''}
                        <p style="font-size:9px;color:${isMine ? 'rgba(255,255,255,0.5)' : 'var(--text-muted)'};margin-top:2px;">${new Date(msg.time).toLocaleTimeString()}</p>
                    </div>
                    ${msg.status === 'delivered' ? `<span style="font-size:8px;color:var(--text-muted);margin-left:4px;">✓</span>` : ''}
                    ${msg.status === 'read' ? `<span style="font-size:8px;color:var(--ocean-teal);margin-left:4px;">✓✓</span>` : ''}</div>`;
            });
        }
        html += `</div>
            <div style="display:flex;gap:8px;align-items:center;">
                <input id="chatInput" placeholder="Type a message..." style="flex:1;padding:10px 14px;border:1px solid var(--border-glass);border-radius:var(--radius-sm);background:var(--bg-card);color:var(--text-primary);font-family:'Inter',sans-serif;" />
                <button class="btn-neon btn-neon-sm btn-neon-primary" onclick="sendChatMessage('${target}','${chatId}')" style="padding:10px 16px;width:auto;"><i class="fas fa-paper-plane"></i></button>
            </div>
            <div style="display:flex;gap:8px;margin-top:6px;">
                <button class="btn-neon btn-neon-xs btn-neon-outline" onclick="attachScreenshot('${target}','${chatId}')" style="width:auto;">📎 Attach</button>
                <span style="font-size:10px;color:var(--text-muted);margin-left:8px;">${target === 'admin' ? 'Admin will reply soon' : 'Chatting with ' + otherName}</span>
            </div>
        </div>`;
        document.getElementById('app').innerHTML = html;
        setTimeout(() => { const container = document.getElementById('chatMessages'); if (container) container.scrollTop = container.scrollHeight; }, 100);
    });
}

async function sendChatMessage(target, chatId) {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) { showToast('Type a message!'); return; }
    const msg = { id: generateID(), chatId, sender: currentUser.phone, senderName: currentUser.name, receiver: target === 'admin' ? 'admin' : target, message, attachment: null, time: getCurrentDate(), status: 'delivered' };
    await add(STORES.CHAT_MESSAGES, msg);
    input.value = '';
    showChatRoom(target);
    sound.play('notification');
    if (target === 'admin') {
        setTimeout(async () => {
            const adminReply = ["Thank you for contacting KPay support! How can I help you?", "We've received your message. Our team will get back to you shortly.", "Hello! I'm here to help. Please describe your issue in detail.", "Thank you for reaching out. We're currently looking into your query."];
            const reply = adminReply[Math.floor(Math.random() * adminReply.length)];
            const replyMsg = { id: generateID(), chatId, sender: 'admin', senderName: 'Admin Support', receiver: currentUser.phone, message: reply, attachment: null, time: getCurrentDate(), status: 'read' };
            await add(STORES.CHAT_MESSAGES, replyMsg);
            showToast('💬 Admin replied!');
            sound.play('notification');
        }, 2000 + Math.random() * 3000);
    }
}

function attachScreenshot(target, chatId) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async function(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = async function(event) {
            const msg = { id: generateID(), chatId, sender: currentUser.phone, senderName: currentUser.name, receiver: target === 'admin' ? 'admin' : target, message: '📎 Sent a screenshot', attachment: file.name + ' (image)', time: getCurrentDate(), status: 'delivered' };
            await add(STORES.CHAT_MESSAGES, msg);
            showToast('📎 Screenshot attached!');
            sound.play('notification');
            showChatRoom(target);
        };
        reader.readAsDataURL(file);
    };
    input.click();
}

function showChatHistory() {
    getAll(STORES.CHAT_MESSAGES).then(messages => {
        const userMessages = messages.filter(m => m.sender === currentUser.phone || m.receiver === currentUser.phone);
        const chats = {};
        userMessages.forEach(m => { if (!chats[m.chatId]) chats[m.chatId] = []; chats[m.chatId].push(m); });
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">📜 Chat History</h2><p style="color:var(--text-secondary);font-size:13px;">${userMessages.length} messages total</p>`;
        const chatIds = Object.keys(chats);
        if (chatIds.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:30px 0;">No chat history</p>'; } else {
            chatIds.forEach(chatId => {
                const msgs = chats[chatId];
                const lastMsg = msgs[msgs.length - 1];
                const isAdmin = chatId.startsWith('admin_');
                const name = isAdmin ? 'Admin Support' : chatId.replace(currentUser.phone + '_', '');
                const unread = msgs.filter(m => m.receiver === currentUser.phone && m.status !== 'read').length;
                html += `<div onclick="showChatRoom('${isAdmin ? 'admin' : name}')" style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:12px;margin-bottom:8px;cursor:pointer;">
                    <div class="flex-between"><span style="font-weight:600;">💬 ${name}</span>${unread > 0 ? `<span style="background:var(--danger);color:white;border-radius:50%;padding:2px 8px;font-size:10px;">${unread}</span>` : ''}</div>
                    <p style="font-size:12px;color:var(--text-muted);">${lastMsg.message.substring(0, 40)}${lastMsg.message.length > 40 ? '...' : ''}</p>
                    <p style="font-size:10px;color:var(--text-muted);">${new Date(lastMsg.time).toLocaleString()}</p></div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="showChat()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

// === GAMES ===
function showGames() {
    document.getElementById('app').innerHTML = `
        <div class="glass fade-in">
            <h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🎮 Mini Games</h2>
            <p style="color:var(--text-secondary);font-size:13px;">Play & earn real rewards!</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:12px 0;">
                <div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:16px;text-align:center;cursor:pointer;" onclick="showTicTacToe()">
                    <div style="font-size:40px;">❌⭕</div><div style="font-weight:600;">Tic-Tac-Toe</div>
                    <div style="font-size:11px;color:var(--success);">🏆 Win PKR 50</div></div>
                <div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:16px;text-align:center;cursor:pointer;" onclick="showMemoryGame()">
                    <div style="font-size:40px;">🧠</div><div style="font-weight:600;">Memory Card</div>
                    <div style="font-size:11px;color:var(--success);">🏆 Win PKR 30</div></div>
                <div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:16px;text-align:center;cursor:pointer;grid-column:span 2;" onclick="showQuiz()">
                    <div style="font-size:40px;">🧠</div><div style="font-weight:600;">Daily Quiz</div>
                    <div style="font-size:11px;color:var(--success);">🏆 Win PKR 20 per correct answer</div></div>
            </div>
            <button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button>
        </div>
    `;
}

// TIC TAC TOE
let ticBoard = ['', '', '', '', '', '', '', '', ''];
let ticTurn = 'X';
let ticGameOver = false;

function showTicTacToe() {
    ticBoard = ['', '', '', '', '', '', '', '', ''];
    ticTurn = 'X';
    ticGameOver = false;
    let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">❌ Tic-Tac-Toe ⭕</h2>
        <p style="color:var(--text-secondary);font-size:13px;">Win to earn <strong style="color:var(--success);">PKR 50</strong>!</p>
        <div class="game-grid" style="grid-template-columns:repeat(3,1fr);max-width:300px;margin:12px auto;">
            ${ticBoard.map((cell, i) => `<div id="tic-${i}" onclick="ticMove(${i})" class="game-cell">${cell}</div>`).join('')}
        </div>
        <div style="text-align:center;margin:8px 0;">
            <div id="ticStatus" style="font-size:14px;font-weight:600;">🎯 Player X's turn</div>
            <button class="btn-neon btn-neon-xs btn-neon-outline" onclick="resetTicGame()" style="margin-top:8px;">🔄 New Game</button>
        </div>
        <button class="btn-neon btn-neon-outline" onclick="showGames()" style="margin-top:12px;">Back to Games</button></div>`;
    document.getElementById('app').innerHTML = html;
}

function ticMove(index) {
    if (ticGameOver) return;
    if (ticBoard[index] !== '') return;
    ticBoard[index] = ticTurn;
    document.getElementById(`tic-${index}`).textContent = ticTurn;
    const winner = checkTicWin();
    if (winner) {
        ticGameOver = true;
        const prize = 50;
        document.getElementById('ticStatus').innerHTML = `🎉 Player ${winner} wins! <span style="color:var(--success);">+PKR ${prize}</span>`;
        awardGameReward(prize, 'Tic-Tac-Toe Win');
        sound.play('game_win');
        return;
    }
    if (!ticBoard.includes('')) { ticGameOver = true; document.getElementById('ticStatus').innerHTML = `🤝 It's a draw! Try again.`; return; }
    ticTurn = ticTurn === 'X' ? 'O' : 'X';
    document.getElementById('ticStatus').innerHTML = `🎯 Player ${ticTurn}'s turn`;
}

function checkTicWin() {
    const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (const line of lines) { const [a,b,c] = line; if (ticBoard[a] && ticBoard[a] === ticBoard[b] && ticBoard[a] === ticBoard[c]) return ticBoard[a]; }
    return null;
}

function resetTicGame() { showTicTacToe(); }

// MEMORY GAME
let memoryCards = [], memoryFlipped = [], memoryMatched = [], memoryLocked = false;

function showMemoryGame() {
    const emojis = ['🎯', '🚀', '🎮', '⭐', '🔥', '👑', '💎', '🌈'];
    memoryCards = [...emojis, ...emojis];
    for (let i = memoryCards.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [memoryCards[i], memoryCards[j]] = [memoryCards[j], memoryCards[i]]; }
    memoryFlipped = []; memoryMatched = []; memoryLocked = false;
    let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🧠 Memory Card</h2>
        <p style="color:var(--text-secondary);font-size:13px;">Match all pairs to win <strong style="color:var(--success);">PKR 30</strong>!</p>
        <div style="display:flex;justify-content:space-between;margin:8px 0;font-size:13px;">
            <span>Moves: <strong id="memMoves">0</strong></span><span>Pairs: <strong id="memPairs">0 / 8</strong></span></div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-width:350px;margin:8px auto;">
            ${memoryCards.map((emoji, i) => `<div id="mem-${i}" onclick="memoryFlip(${i})" class="memory-card">?</div>`).join('')}
        </div>
        <button class="btn-neon btn-neon-xs btn-neon-outline" onclick="showMemoryGame()" style="display:block;margin:8px auto;">🔄 New Game</button>
        <button class="btn-neon btn-neon-outline" onclick="showGames()" style="margin-top:12px;">Back to Games</button></div>`;
    document.getElementById('app').innerHTML = html;
    window._memoryState = { moves: 0, pairs: 0 };
}

function memoryFlip(index) {
    if (memoryLocked) return;
    if (memoryFlipped.includes(index)) return;
    if (memoryMatched.includes(index)) return;
    memoryFlipped.push(index);
    const card = document.getElementById(`mem-${index}`);
    card.textContent = memoryCards[index];
    card.classList.add('flipped');
    if (memoryFlipped.length === 2) {
        const state = window._memoryState || { moves: 0, pairs: 0 };
        state.moves++;
        document.getElementById('memMoves').textContent = state.moves;
        memoryLocked = true;
        const [i1, i2] = memoryFlipped;
        if (memoryCards[i1] === memoryCards[i2]) {
            memoryMatched.push(i1, i2);
            state.pairs++;
            document.getElementById('memPairs').textContent = `${state.pairs} / 8`;
            memoryFlipped = [];
            memoryLocked = false;
            if (state.pairs === 8) {
                const prize = 30;
                document.getElementById('memPairs').textContent = `🎉 COMPLETE! +PKR ${prize}`;
                awardGameReward(prize, 'Memory Card Win');
                sound.play('game_win');
            }
        } else {
            setTimeout(() => {
                const c1 = document.getElementById(`mem-${i1}`);
                const c2 = document.getElementById(`mem-${i2}`);
                c1.textContent = '?'; c1.classList.remove('flipped');
                c2.textContent = '?'; c2.classList.remove('flipped');
                memoryFlipped = [];
                memoryLocked = false;
            }, 800);
        }
        window._memoryState = state;
    }
}

// QUIZ
const QUIZ_QUESTIONS = [
    { q: "What is 7 × 8?", options: ["48", "56", "64", "72"], correct: 1 },
    { q: "Which planet is known as Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1 },
    { q: "What is the chemical symbol for water?", options: ["H2O", "CO2", "NaCl", "HCl"], correct: 0 },
    { q: "Who wrote 'Allama Iqbal's famous poem?", options: ["Faiz", "Iqbal", "Ghalib", "Mir"], correct: 1 },
    { q: "What is the capital of Pakistan?", options: ["Lahore", "Karachi", "Islamabad", "Peshawar"], correct: 2 },
    { q: "How many continents are there?", options: ["5", "6", "7", "8"], correct: 2 },
    { q: "What is √144?", options: ["10", "11", "12", "13"], correct: 2 },
    { q: "Which language does the word 'Algorithm' come from?", options: ["Greek", "Latin", "Arabic", "Persian"], correct: 2 }
];

let quizIndex = 0, quizScore = 0, quizAnswered = false, quizQuestions = [];

function showQuiz() {
    quizQuestions = [...QUIZ_QUESTIONS];
    for (let i = quizQuestions.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [quizQuestions[i], quizQuestions[j]] = [quizQuestions[j], quizQuestions[i]]; }
    quizQuestions = quizQuestions.slice(0, 5);
    quizIndex = 0; quizScore = 0; quizAnswered = false;
    let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🧠 Daily Quiz</h2>
        <p style="color:var(--text-secondary);font-size:13px;">Answer correctly to earn <strong style="color:var(--success);">PKR 20 each</strong>!</p>
        <div id="quizContainer">${renderQuizQuestion()}</div>
        <button class="btn-neon btn-neon-outline" onclick="showGames()" style="margin-top:12px;">Back to Games</button></div>`;
    document.getElementById('app').innerHTML = html;
}

function renderQuizQuestion() {
    if (quizIndex >= quizQuestions.length) {
        const totalReward = quizScore * 20;
        if (quizScore > 0) { awardGameReward(totalReward, `Quiz: ${quizScore} correct answers`); sound.play('game_win'); }
        localStorage.setItem('KPAY_QUIZ_DATE', new Date().toDateString());
        return `<div style="text-align:center;padding:20px 0;"><div style="font-size:48px;">🎉</div><h3>Quiz Complete!</h3>
            <p style="font-size:20px;color:var(--success);">${quizScore} / ${quizQuestions.length} correct</p>
            <p style="font-size:16px;color:var(--ocean-teal);">🏆 +PKR ${totalReward}</p>
            <button class="btn-neon btn-neon-sm btn-neon-primary" onclick="showQuiz()" style="margin-top:12px;">🔄 Try Again</button></div>`;
    }
    const q = quizQuestions[quizIndex];
    let html = `<div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:16px;margin:12px 0;">
        <p style="font-size:11px;color:var(--text-muted);">Question ${quizIndex + 1} of ${quizQuestions.length}</p>
        <p style="font-size:16px;font-weight:600;margin:8px 0;">${q.q}</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px;">
            ${q.options.map((opt, i) => `<button id="quiz-opt-${i}" onclick="answerQuiz(${i})" style="padding:10px;border:1px solid var(--border-glass);border-radius:var(--radius-sm);background:var(--bg-primary);cursor:pointer;transition:var(--transition);font-family:'Inter',sans-serif;">${opt}</button>`).join('')}
        </div>
        <p id="quizFeedback" style="margin-top:8px;font-size:13px;"></p></div>
        <div style="display:flex;justify-content:space-between;font-size:13px;color:var(--text-muted);">
            <span>Score: ${quizScore} / ${quizQuestions.length}</span><span>🏆 +PKR ${quizScore * 20}</span></div>`;
    return html;
}

function answerQuiz(selected) {
    if (quizAnswered) return;
    quizAnswered = true;
    const q = quizQuestions[quizIndex];
    const isCorrect = selected === q.correct;
    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`quiz-opt-${i}`);
        btn.disabled = true;
        if (i === q.correct) { btn.style.background = 'var(--success)'; btn.style.color = 'white'; } else if (i === selected && !isCorrect) { btn.style.background = 'var(--danger)'; btn.style.color = 'white'; }
    }
    if (isCorrect) { quizScore++; document.getElementById('quizFeedback').innerHTML = '✅ Correct! +PKR 20'; document.getElementById('quizFeedback').style.color = 'var(--success)'; sound.play('game_win'); } else { document.getElementById('quizFeedback').innerHTML = '❌ Wrong. Correct answer was: ' + q.options[q.correct]; document.getElementById('quizFeedback').style.color = 'var(--danger)'; sound.play('game_lose'); }
    setTimeout(() => { quizIndex++; quizAnswered = false; document.getElementById('quizContainer').innerHTML = renderQuizQuestion(); }, 2000);
}

function awardGameReward(amount, gameName) {
    if (amount <= 0) return;
    if (currentUser.status === 'suspended') { showToast('⛔ Account suspended! Cannot claim rewards.'); return; }
    currentUser.balance += amount;
    addTransaction(currentUser, 'Game Reward', amount, gameName);
    put(STORES.USERS, currentUser).then(() => { showToast(`🎮 ${gameName}: +PKR ${amount}!`); sound.play('payment'); });
}

// === RENDER DASHBOARD ===
function renderDashboard() {
    if (!currentUser) { renderLogin(); return; }
    if (currentUser.role === 'admin') { renderAdminDashboard(); } else { renderUserDashboard(); }
}

function renderUserDashboard() {
    const isSuspended = currentUser.status === 'suspended';
    const today = new Date().toDateString();
    const canCheckin = currentUser.dailyCheckin !== today;
    const isSalary = currentUser.isSalaryAccount || false;
    getAnnouncements().then(announcements => {
        const unread = announcements.filter(a => !a.readBy || !a.readBy.includes(currentUser.phone));
        document.getElementById('app').innerHTML = `
            <div class="glass fade-in">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                    <div>
                        <div style="font-size:11px;color:var(--text-muted);">Welcome,</div>
                        <h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">${currentUser.name}</h2>
                        ${isSalary ? '<span style="font-size:10px;background:var(--success-bg);color:var(--success);padding:2px 10px;border-radius:12px;">💰 Salary Account</span>' : ''}
                    </div>
                    <div style="display:flex;align-items:center;gap:8px;">
                        ${unread.length > 0 ? `<span style="background:var(--danger);color:white;border-radius:50%;padding:2px 8px;font-size:10px;">${unread.length}</span>` : ''}
                        <span style="background:var(--bg-card);padding:4px 12px;border-radius:20px;font-size:10px;border:1px solid var(--border-glass);">👤 USER</span>
                        <button class="btn-neon btn-neon-xs btn-neon-danger" onclick="logout()"><i class="fas fa-sign-out-alt"></i></button>
                    </div>
                </div>
                ${isSuspended ? `<div style="background:var(--danger-bg);border:1px solid var(--danger);border-radius:var(--radius-sm);padding:12px;margin:8px 0;text-align:center;color:var(--danger);font-size:13px;">⛔ Account Suspended — Submit an appeal!</div>` : ''}
                ${unread.length > 0 ? `<div style="background:var(--ocean-teal);color:white;border-radius:var(--radius-sm);padding:8px 12px;margin:8px 0;text-align:center;font-size:12px;cursor:pointer;" onclick="showAnnouncements()">📢 ${unread.length} new announcement${unread.length > 1 ? 's' : ''}! Tap to view.</div>` : ''}
            </div>
            <div class="balance-2026">
                <div class="label">💳 Your Balance</div>
                <div class="amount">${formatCurrency(currentUser.balance)}</div>
                <div class="sub">Available for spending</div>
                <span class="currency-badge">PKR</span>
            </div>
            <div class="glass"><div class="stats-2026">
                <div class="stat-2026"><div class="number">${currentUser.transactions ? currentUser.transactions.length : 0}</div><div class="label">Transactions</div></div>
                <div class="stat-2026"><div class="number">${canCheckin ? '✅' : '⏳'}</div><div class="label">${canCheckin ? 'Check-in Available' : 'Checked In'}</div></div>
            </div></div>
            <div class="glass"><div class="menu-2026">
                <div class="item" onclick="showSendMoney()"><span class="icon">💸</span><span class="label">Send</span></div>
                <div class="item" onclick="showLoanApply()"><span class="icon">🏦</span><span class="label">Loan</span></div>
                <div class="item" onclick="showMyLoans()"><span class="icon">📋</span><span class="label">My Loans</span></div>
                <div class="item" onclick="showInvestments()"><span class="icon">📈</span><span class="label">Invest</span></div>
                <div class="item" onclick="showCards()"><span class="icon">💳</span><span class="label">Cards</span></div>
                <div class="item" onclick="showCardPayment()"><span class="icon">💳</span><span class="label">Card Pay</span></div>
                <div class="item" onclick="showCardTransactions()"><span class="icon">📊</span><span class="label">Card History</span></div>
                <div class="item" onclick="showBills()"><span class="icon">🧾</span><span class="label">Bills</span></div>
                <div class="item" onclick="showSavings()"><span class="icon">🎯</span><span class="label">Savings</span></div>
                <div class="item" onclick="showSpin()"><span class="icon">🎡</span><span class="label">Spin</span></div>
                <div class="item" onclick="showDiceGame()"><span class="icon">🎲</span><span class="label">Dice</span></div>
                <div class="item" onclick="showWithdraw()"><span class="icon">🏧</span><span class="label">Withdraw</span></div>
                <div class="item" onclick="showHistory()"><span class="icon">📜</span><span class="label">History</span></div>
                <div class="item" onclick="showProfile()"><span class="icon">👤</span><span class="label">Profile</span></div>
                <div class="item" onclick="showDailyCheckin()"><span class="icon">🎁</span><span class="label">Check-in</span></div>
                <div class="item" onclick="showAppeals()"><span class="icon">📩</span><span class="label">Appeals</span></div>
                <div class="item" onclick="showAppealForm()"><span class="icon">✍️</span><span class="label">New Appeal</span></div>
                <div class="item" onclick="showReferral()"><span class="icon">🎯</span><span class="label">Referral</span></div>
                <div class="item" onclick="showChat()"><span class="icon">💬</span><span class="label">Chat</span></div>
                <div class="item" onclick="showGames()"><span class="icon">🎮</span><span class="label">Games</span></div>
                <div class="item" onclick="showBankAccounts()"><span class="icon">🏛️</span><span class="label">Link Bank</span></div>
                <div class="item" onclick="showSalaryAccount()"><span class="icon">💰</span><span class="label">Salary Account</span></div>
                <div class="item" onclick="showLoanReminders()"><span class="icon">⏰</span><span class="label">Loan Reminders</span></div>
                <div class="item" onclick="showSecurityQuestions()"><span class="icon">🔒</span><span class="label">Security</span></div>
                <div class="item" onclick="showThirdPartyAPIs()"><span class="icon">🔌</span><span class="label">Integrations</span></div>
                <div class="item" onclick="showAnnouncements()"><span class="icon">📢</span><span class="label">Announcements</span></div>
                <div class="item" onclick="showPromotions()"><span class="icon">🏷️</span><span class="label">Promotions</span></div>
<div class="item" onclick="showLawarasIntegration()">
    <span class="icon">🏛️</span>
    <span class="label">Lawaras</span>
</div>
                </div></div>
        `;
    });
}

// === ADMIN DASHBOARD ===
function renderAdminDashboard() {
    Promise.all([
        getAll(STORES.LOAN_REQUESTS), getAll(STORES.PIN_REQUESTS), getAll(STORES.APPEALS),
        getAll(STORES.SPIN_REQUESTS), getAll(STORES.WITHDRAWALS), getAll(STORES.USERS),
        getPendingResetPins(), getAll(STORES.DICE_GAMES), getAll(STORES.CARD_PAYMENTS),
        getAll(STORES.CHAT_MESSAGES), getAll(STORES.FEES), getAll(STORES.PROMOTIONS),
        getAll(STORES.ANNOUNCEMENTS), getAll(STORES.BANK_ACCOUNTS), getAll(STORES.SALARY_ACCOUNTS)
    ]).then(([loans, pins, appeals, spins, withdrawals, users, resetPins, diceGames, cardPayments, chatMessages, fees, promotions, announcements, bankAccounts, salaryAccounts]) => {
        const pendingLoans = loans.filter(l => l.status === 'pending');
        const pendingPins = pins.filter(p => p.status === 'pending');
        const pendingAppeals = appeals.filter(a => a.status === 'pending');
        const pendingSpins = spins.filter(s => s.status === 'pending');
        const pendingWithdrawals = withdrawals.filter(w => w.status === 'pending');
        const pendingDice = diceGames.filter(d => d.status === 'pending');
        const pendingCardPayments = cardPayments.filter(c => c.status === 'pending');
        const totalUsers = users.filter(u => u.role !== 'admin').length;
        const unreadChats = chatMessages ? chatMessages.filter(m => m.receiver === 'admin' && m.status !== 'read').length : 0;
        const totalBanks = bankAccounts.length;
        const totalSalary = salaryAccounts.length;

        document.getElementById('app').innerHTML = `
            <div class="glass fade-in">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                    <div>
                        <div style="font-size:11px;color:var(--text-muted);">Admin Panel</div>
                        <h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">${currentUser.name}</h2>
                        <div style="font-size:11px;color:var(--ocean-teal);">👑 Service Provider</div>
                    </div>
                    <button class="btn-neon btn-neon-xs btn-neon-danger" onclick="logout()"><i class="fas fa-sign-out-alt"></i></button>
                </div>
                <div class="stats-2026" style="grid-template-columns:repeat(3,1fr);">
                    <div class="stat-2026"><div class="number">${totalUsers}</div><div class="label">Users</div></div>
                    <div class="stat-2026"><div class="number" style="color:var(--warning);">${pendingLoans.length}</div><div class="label">Loans</div></div>
                    <div class="stat-2026"><div class="number" style="color:var(--warning);">${pendingPins.length}</div><div class="label">PIN</div></div>
                    <div class="stat-2026"><div class="number" style="color:var(--warning);">${pendingAppeals.length}</div><div class="label">Appeals</div></div>
                    <div class="stat-2026"><div class="number" style="color:var(--warning);">${pendingSpins.length}</div><div class="label">Spins</div></div>
                    <div class="stat-2026"><div class="number" style="color:var(--warning);">${pendingWithdrawals.length}</div><div class="label">Withdrawals</div></div>
                    <div class="stat-2026"><div class="number" style="color:var(--warning);">${resetPins.length}</div><div class="label">Reset PINs</div></div>
                    <div class="stat-2026"><div class="number" style="color:var(--warning);">${pendingDice.length}</div><div class="label">Dice Games</div></div>
                    <div class="stat-2026"><div class="number" style="color:var(--warning);">${pendingCardPayments.length}</div><div class="label">Card Pays</div></div>
                    <div class="stat-2026"><div class="number" style="color:var(--ocean-teal);">${fees.length}</div><div class="label">Fees</div></div>
                    <div class="stat-2026"><div class="number" style="color:var(--success);">${promotions.filter(p => p.active).length}</div><div class="label">Promotions</div></div>
                    <div class="stat-2026"><div class="number" style="color:var(--ocean-teal);">${totalBanks}</div><div class="label">Banks Linked</div></div>
                </div>
                <div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:8px 12px;margin-top:8px;text-align:center;">
                    <span style="font-size:13px;">💬 Unread Chats: <strong style="color:var(--ocean-teal);">${unreadChats}</strong> | 🏛️ Banks: ${totalBanks} | 💰 Salary: ${totalSalary}</span>
                </div>
            </div>
            <div class="glass">
                <div class="menu-2026" style="grid-template-columns:repeat(2,1fr);">
                    <div class="item" onclick="showAdminLoans()"><span class="icon">🏦</span><span class="label">Loans ${pendingLoans.length > 0 ? '🔴' : ''}</span></div>
                    <div class="item" onclick="showAdminPins()"><span class="icon">🔐</span><span class="label">PIN ${pendingPins.length > 0 ? '🔴' : ''}</span></div>
                    <div class="item" onclick="showAdminAppeals()"><span class="icon">📋</span><span class="label">Appeals ${pendingAppeals.length > 0 ? '🔴' : ''}</span></div>
                    <div class="item" onclick="showAdminSpins()"><span class="icon">🎡</span><span class="label">Spins ${pendingSpins.length > 0 ? '🔴' : ''}</span></div>
                    <div class="item" onclick="showAdminWithdrawals()"><span class="icon">🏧</span><span class="label">Withdrawals ${pendingWithdrawals.length > 0 ? '🔴' : ''}</span></div>
                    <div class="item" onclick="showAdminUsers()"><span class="icon">👥</span><span class="label">All Users</span></div>
                    <div class="item" onclick="showAdminResetPins()" style="border-color: var(--ocean-teal);"><span class="icon">🔑</span><span class="label">Reset PINs ${resetPins.length > 0 ? '🔴' : ''}</span></div>
                    <div class="item" onclick="showAdminDice()" style="border-color: var(--ocean-teal);"><span class="icon">🎲</span><span class="label">Dice Games ${pendingDice.length > 0 ? '🔴' : ''}</span></div>
                    <div class="item" onclick="showAdminCardPayments()" style="border-color: var(--ocean-teal);"><span class="icon">💳</span><span class="label">Card Pays ${pendingCardPayments.length > 0 ? '🔴' : ''}</span></div>
                    <div class="item" onclick="showAdminChat()" style="border-color: var(--ocean-teal);"><span class="icon">💬</span><span class="label">Chats ${unreadChats > 0 ? '🔴' : ''}</span></div>
                    <div class="item" onclick="showAdminTransfer()" style="border-color: var(--success);"><span class="icon">💸</span><span class="label">Direct Transfer</span></div>
                    <div class="item" onclick="showAdminFees()" style="border-color: var(--warning);"><span class="icon">💲</span><span class="label">Fee Manager</span></div>
                    <div class="item" onclick="showAdminPromotions()" style="border-color: var(--warning);"><span class="icon">🏷️</span><span class="label">Promotions</span></div>
                    <div class="item" onclick="showAdminAnnouncements()" style="border-color: var(--warning);"><span class="icon">📢</span><span class="label">Announcements</span></div>
                </div>
            </div>
            <div class="glass" style="background:var(--success-bg);border-color:var(--success);">
                <p style="font-size:12px;color:var(--text-secondary);text-align:center;">
                    <i class="fas fa-check-circle" style="color:var(--success);"></i>
                    Admin = Service Provider — Approves all user demands
                </p>
            </div>
        `;
    });
}

// === ADMIN FUNCTIONS (Loans, Pins, Appeals, Spins, Withdrawals, Users) ===
function showAdminLoans() {
    getAll(STORES.LOAN_REQUESTS).then(loans => {
        const pending = loans.filter(l => l.status === 'pending');
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🏦 Loan Requests</h2><p style="color:var(--text-secondary);font-size:13px;">Pending: ${pending.length}</p>`;
        if (loans.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:20px 0;">No loan requests</p>'; } else {
            loans.forEach(loan => {
                const isPending = loan.status === 'pending';
                html += `<div class="demand-item ${loan.status !== 'pending' ? loan.status : ''}">
                    <div class="flex-between"><span style="font-weight:600;">${loan.name}</span><span class="badge-demand ${loan.status}">${loan.status}</span></div>
                    <p style="font-size:13px;color:var(--text-secondary);">📱 ${loan.phone}</p>
                    <p style="font-size:13px;">Amount: ${formatCurrency(loan.amount)}</p>
                    <p style="font-size:13px;">Total: ${formatCurrency(loan.total)}</p>
                    <p style="font-size:11px;color:var(--text-muted);">${loan.date}</p>
                    ${isPending ? `<div style="display:flex;gap:8px;margin-top:8px;">
                        <button class="btn-neon btn-neon-sm btn-neon-success" onclick="approveLoan(${loan.id})" style="flex:1;"><i class="fas fa-check"></i> Approve</button>
                        <button class="btn-neon btn-neon-sm btn-neon-danger" onclick="rejectLoan(${loan.id})" style="flex:1;"><i class="fas fa-times"></i> Reject</button></div>` : ''}</div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

async function approveLoan(id) {
    await showOverlay('loading', 'Approving Loan', 'Please wait...');
    getAll(STORES.LOAN_REQUESTS).then(loans => {
        const loan = loans.find(l => l.id === id);
        if (!loan) return;
        loan.status = 'approved';
        getByIndex(STORES.USERS, 'phone', loan.phone).then(user => {
            if (user) {
                user.balance += loan.amount;
                addTransaction(user, 'Loan Approved', loan.amount, 'Loan approved by admin');
                const dueDate = new Date();
                dueDate.setMonth(dueDate.getMonth() + 1);
                createLoanReminder(loan.phone, loan.id, dueDate.toISOString(), loan.total);
                put(STORES.USERS, user);
            }
            put(STORES.LOAN_REQUESTS, loan).then(() => {
                showOverlay('success', 'Loan Approved', `PKR ${loan.amount.toLocaleString()} credited!`, 2500);
                sound.play('success');
                setTimeout(showAdminLoans, 1500);
            });
        });
    });
}

async function rejectLoan(id) {
    if (!confirm('Reject this loan?')) return;
    await showOverlay('loading', 'Rejecting Loan', 'Please wait...');
    getAll(STORES.LOAN_REQUESTS).then(loans => {
        const loan = loans.find(l => l.id === id);
        if (!loan) return;
        loan.status = 'rejected';
        put(STORES.LOAN_REQUESTS, loan).then(() => {
            showOverlay('error', 'Loan Rejected', 'Loan request rejected.', 2000);
            sound.play('error');
            setTimeout(showAdminLoans, 1500);
        });
    });
}

function showAdminPins() {
    getAll(STORES.PIN_REQUESTS).then(pins => {
        const pending = pins.filter(p => p.status === 'pending');
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🔐 PIN Reset Requests</h2><p style="color:var(--text-secondary);font-size:13px;">Pending: ${pending.length}</p>`;
        if (pins.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:20px 0;">No PIN requests</p>'; } else {
            pins.forEach(pin => {
                const isPending = pin.status === 'pending';
                html += `<div class="demand-item ${pin.status !== 'pending' ? pin.status : ''}">
                    <div class="flex-between"><span style="font-weight:600;">${pin.name}</span><span class="badge-demand ${pin.status}">${pin.status}</span></div>
                    <p style="font-size:13px;color:var(--text-secondary);">📱 ${pin.phone}</p>
                    ${isPending ? `<p style="font-size:16px;font-family:'Space Grotesk',sans-serif;letter-spacing:4px;color:var(--ocean-teal);">🔑 ${pin.code}</p>` : ''}
                    <p style="font-size:11px;color:var(--text-muted);">${pin.date}</p>
                    ${isPending ? `<div style="display:flex;gap:8px;margin-top:8px;">
                        <button class="btn-neon btn-neon-sm btn-neon-success" onclick="approvePin(${pin.id})" style="flex:1;"><i class="fas fa-check"></i> Approve</button>
                        <button class="btn-neon btn-neon-sm btn-neon-danger" onclick="rejectPin(${pin.id})" style="flex:1;"><i class="fas fa-times"></i> Reject</button></div>` : ''}</div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

async function approvePin(id) {
    await showOverlay('loading', 'Approving PIN', 'Please wait...');
    getAll(STORES.PIN_REQUESTS).then(pins => {
        const pin = pins.find(p => p.id === id);
        if (!pin) return;
        pin.status = 'approved';
        put(STORES.PIN_REQUESTS, pin).then(() => {
            showOverlay('success', 'PIN Approved', `Code: ${pin.code}`, 2500);
            sound.play('success');
            setTimeout(showAdminPins, 1500);
        });
    });
}

async function rejectPin(id) {
    if (!confirm('Reject this PIN request?')) return;
    await showOverlay('loading', 'Rejecting PIN', 'Please wait...');
    getAll(STORES.PIN_REQUESTS).then(pins => {
        const pin = pins.find(p => p.id === id);
        if (!pin) return;
        pin.status = 'rejected';
        put(STORES.PIN_REQUESTS, pin).then(() => {
            showOverlay('error', 'PIN Rejected', 'PIN request rejected.', 2000);
            sound.play('error');
            setTimeout(showAdminPins, 1500);
        });
    });
}

function showAdminAppeals() {
    getPendingAppeals().then(appeals => {
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">📋 Appeals</h2><p style="color:var(--text-secondary);font-size:13px;">Pending: ${appeals.length}</p>`;
        if (appeals.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:20px 0;">No pending appeals</p>'; } else {
            appeals.forEach(appeal => {
                html += `<div class="demand-item pending">
                    <div class="flex-between"><span style="font-weight:600;">${appeal.fromName}</span><span class="badge-demand pending">PENDING</span></div>
                    <p style="font-size:13px;color:var(--text-secondary);">📱 ${appeal.from} → ${appeal.to}</p>
                    <p style="font-size:13px;">📝 ${appeal.message}</p>
                    <p style="font-size:11px;color:var(--text-muted);">${appeal.date}</p>
                    <div style="display:flex;gap:8px;margin-top:8px;">
                        <button class="btn-neon btn-neon-sm btn-neon-success" onclick="approveAppealAdmin(${appeal.id})" style="flex:1;"><i class="fas fa-check"></i> Approve</button>
                        <button class="btn-neon btn-neon-sm btn-neon-danger" onclick="rejectAppealAdmin(${appeal.id})" style="flex:1;"><i class="fas fa-times"></i> Reject</button></div></div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

async function approveAppealAdmin(id) {
    await showOverlay('loading', 'Approving Appeal', 'Please wait...');
    await approveAppeal(id);
    setTimeout(showAdminAppeals, 1500);
}

async function rejectAppealAdmin(id) {
    await showOverlay('loading', 'Rejecting Appeal', 'Please wait...');
    await rejectAppeal(id);
    setTimeout(showAdminAppeals, 1500);
}

function showAdminSpins() {
    getAll(STORES.SPIN_REQUESTS).then(spins => {
        const pending = spins.filter(s => s.status === 'pending');
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🎡 Spin Requests</h2><p style="color:var(--text-secondary);font-size:13px;">Pending: ${pending.length}</p>`;
        if (spins.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:20px 0;">No spin requests</p>'; } else {
            spins.forEach(spin => {
                const isPending = spin.status === 'pending';
                html += `<div class="demand-item ${spin.status !== 'pending' ? spin.status : ''}">
                    <div class="flex-between"><span style="font-weight:600;">${spin.name}</span><span class="badge-demand ${spin.status}">${spin.status}</span></div>
                    <p style="font-size:13px;color:var(--text-secondary);">📱 ${spin.phone}</p>
                    <p style="font-size:13px;">🎡 ${spin.segment} ${spin.reward > 0 ? '🏆 ' + formatCurrency(spin.reward) : '❌ Try Again'}</p>
                    <p style="font-size:11px;color:var(--text-muted);">${spin.date}</p>
                    ${isPending ? `<div style="display:flex;gap:8px;margin-top:8px;">
                        ${spin.reward > 0 ? `<button class="btn-neon btn-neon-sm btn-neon-success" onclick="approveSpin(${spin.id}, ${spin.reward})" style="flex:1;"><i class="fas fa-check"></i> Approve & Pay</button>` : `<button class="btn-neon btn-neon-sm btn-neon-success" onclick="approveSpinZero(${spin.id})" style="flex:1;"><i class="fas fa-check"></i> Approve</button>`}
                        <button class="btn-neon btn-neon-sm btn-neon-danger" onclick="rejectSpin(${spin.id})" style="flex:1;"><i class="fas fa-times"></i> Reject</button></div>` : ''}</div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

async function approveSpin(id, reward) {
    await showOverlay('loading', 'Approving Spin', 'Please wait...');
    getAll(STORES.SPIN_REQUESTS).then(spins => {
        const spin = spins.find(s => s.id === id);
        if (!spin) return;
        spin.status = 'approved';
        getByIndex(STORES.USERS, 'phone', spin.phone).then(user => {
            if (user) { user.balance += reward; addTransaction(user, 'Spin Reward', reward, 'Spin win: ' + spin.segment); put(STORES.USERS, user); }
            put(STORES.SPIN_REQUESTS, spin).then(() => {
                showOverlay('success', 'Spin Approved', `PKR ${reward.toLocaleString()} paid!`, 2500);
                sound.play('payment');
                setTimeout(showAdminSpins, 1500);
            });
        });
    });
}

async function approveSpinZero(id) {
    await showOverlay('loading', 'Approving Spin', 'Please wait...');
    getAll(STORES.SPIN_REQUESTS).then(spins => {
        const spin = spins.find(s => s.id === id);
        if (!spin) return;
        spin.status = 'approved';
        put(STORES.SPIN_REQUESTS, spin).then(() => {
            showOverlay('success', 'Spin Approved', 'No reward.', 2000);
            sound.play('success');
            setTimeout(showAdminSpins, 1500);
        });
    });
}

async function rejectSpin(id) {
    if (!confirm('Reject this spin?')) return;
    await showOverlay('loading', 'Rejecting Spin', 'Please wait...');
    getAll(STORES.SPIN_REQUESTS).then(spins => {
        const spin = spins.find(s => s.id === id);
        if (!spin) return;
        spin.status = 'rejected';
        put(STORES.SPIN_REQUESTS, spin).then(() => {
            showOverlay('error', 'Spin Rejected', 'Spin request rejected.', 2000);
            sound.play('error');
            setTimeout(showAdminSpins, 1500);
        });
    });
}

function showAdminWithdrawals() {
    getAll(STORES.WITHDRAWALS).then(withdrawals => {
        const pending = withdrawals.filter(w => w.status === 'pending');
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🏧 Withdrawal Requests</h2><p style="color:var(--text-secondary);font-size:13px;">Pending: ${pending.length}</p>`;
        if (withdrawals.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:20px 0;">No withdrawal requests</p>'; } else {
            withdrawals.forEach(w => {
                const isPending = w.status === 'pending';
                html += `<div class="demand-item ${w.status !== 'pending' ? w.status : ''}">
                    <div class="flex-between"><span style="font-weight:600;">${w.name}</span><span class="badge-demand ${w.status}">${w.status}</span></div>
                    <p style="font-size:13px;color:var(--text-secondary);">📱 ${w.phone}</p>
                    <p style="font-size:13px;">Amount: ${formatCurrency(w.amount)}</p>
                    <p style="font-size:11px;color:var(--text-muted);">${w.date}</p>
                    ${isPending ? `<div style="display:flex;gap:8px;margin-top:8px;">
                        <button class="btn-neon btn-neon-sm btn-neon-success" onclick="approveWithdrawal(${w.id})" style="flex:1;"><i class="fas fa-check"></i> Approve</button>
                        <button class="btn-neon btn-neon-sm btn-neon-danger" onclick="rejectWithdrawal(${w.id})" style="flex:1;"><i class="fas fa-times"></i> Reject</button></div>` : ''}</div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

async function approveWithdrawal(id) {
    await showOverlay('loading', 'Approving Withdrawal', 'Please wait...');
    getAll(STORES.WITHDRAWALS).then(withdrawals => {
        const w = withdrawals.find(w => w.id === id);
        if (!w) return;
        getByIndex(STORES.USERS, 'phone', w.phone).then(user => {
            if (!user) { showOverlay('error', 'Error', 'User not found!', 2000); return; }
            if (user.balance < w.amount) { showOverlay('error', 'Insufficient Balance', 'User does not have enough balance!', 2000); return; }
            user.balance -= w.amount;
            addTransaction(user, 'Withdrawal', w.amount, 'Withdrawal approved');
            w.status = 'approved';
            put(STORES.USERS, user).then(() => {
                put(STORES.WITHDRAWALS, w).then(() => {
                    showOverlay('success', 'Withdrawal Approved', `PKR ${w.amount.toLocaleString()} debited.`, 2500);
                    sound.play('payment');
                    setTimeout(showAdminWithdrawals, 1500);
                });
            });
        });
    });
}

async function rejectWithdrawal(id) {
    if (!confirm('Reject this withdrawal?')) return;
    await showOverlay('loading', 'Rejecting Withdrawal', 'Please wait...');
    getAll(STORES.WITHDRAWALS).then(withdrawals => {
        const w = withdrawals.find(w => w.id === id);
        if (!w) return;
        w.status = 'rejected';
        put(STORES.WITHDRAWALS, w).then(() => {
            showOverlay('error', 'Withdrawal Rejected', 'Withdrawal request rejected.', 2000);
            sound.play('error');
            setTimeout(showAdminWithdrawals, 1500);
        });
    });
}

function showAdminUsers() {
    getAll(STORES.USERS).then(users => {
        const filtered = users.filter(u => u.role !== 'admin');
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">👥 All Users</h2><p style="color:var(--text-secondary);font-size:13px;">Total: ${filtered.length}</p>`;
        filtered.forEach(user => {
            html += `<div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:12px;margin-bottom:8px;">
                <div class="flex-between"><span style="font-weight:600;">${user.name}</span><span style="font-size:11px;color:${user.status === 'active' ? 'var(--success)' : 'var(--danger)'};">${user.status}</span></div>
                <p style="font-size:13px;color:var(--text-secondary);">📱 ${user.phone}</p>
                <p style="font-size:13px;">${formatCurrency(user.balance)}</p>
                <p style="font-size:11px;color:var(--text-muted);">Txs: ${user.transactions ? user.transactions.length : 0}</p>
                <p style="font-size:11px;color:var(--text-muted);">🎯 Referral: ${user.referralCode || 'N/A'}</p>
                ${user.referredBy ? `<p style="font-size:11px;color:var(--ocean-teal);">Referred by: ${user.referredBy}</p>` : ''}
                <div style="display:flex;gap:4px;margin-top:4px;flex-wrap:wrap;">
                    ${user.status === 'active' ? `<button class="btn-neon btn-neon-xs btn-neon-danger" onclick="suspendUserAdmin('${user.phone}')">Suspend</button>` : `<button class="btn-neon btn-neon-xs btn-neon-success" onclick="activateUserAdmin('${user.phone}')">Activate</button>`}
                    <button class="btn-neon btn-neon-xs btn-neon-danger" onclick="deleteUserAdmin('${user.phone}')">Delete</button>
                </div></div>`;
        });
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

async function suspendUserAdmin(phone) {
    await showOverlay('loading', 'Suspending User', 'Please wait...');
    getByIndex(STORES.USERS, 'phone', phone).then(user => {
        if (!user) return;
        user.status = 'suspended';
        put(STORES.USERS, user).then(() => { showOverlay('success', 'User Suspended', 'User account suspended.', 2000); sound.play('notification'); setTimeout(showAdminUsers, 1500); });
    });
}

async function activateUserAdmin(phone) {
    await showOverlay('loading', 'Activating User', 'Please wait...');
    getByIndex(STORES.USERS, 'phone', phone).then(user => {
        if (!user) return;
        user.status = 'active';
        put(STORES.USERS, user).then(() => { showOverlay('success', 'User Activated', 'User account activated.', 2000); sound.play('success'); setTimeout(showAdminUsers, 1500); });
    });
}

async function deleteUserAdmin(phone) {
    if (!confirm('Delete this user permanently?')) return;
    await showOverlay('loading', 'Deleting User', 'Please wait...');
    getByIndex(STORES.USERS, 'phone', phone).then(user => {
        if (!user) return;
        user.isDeleted = true;
        user.status = 'deleted';
        put(STORES.USERS, user).then(() => { showOverlay('error', 'User Deleted', 'User account deleted.', 2000); sound.play('error'); setTimeout(showAdminUsers, 1500); });
    });
}

function showAdminResetPins() {
    getPendingResetPins().then(entries => {
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🔑 Password Reset Requests</h2><p style="color:var(--text-secondary);font-size:13px;">Pending: ${entries.length}</p>`;
        if (entries.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:20px 0;">No pending reset requests</p>'; } else {
            entries.forEach(entry => {
                html += `<div class="demand-item pending">
                    <div class="flex-between"><span style="font-weight:600;">📱 ${entry.phone}</span><span class="badge-demand pending">PENDING</span></div>
                    <p style="font-size:16px;font-family:'Space Grotesk',sans-serif;letter-spacing:4px;color:var(--ocean-teal);">🔑 ${entry.pin}</p>
                    <p style="font-size:11px;color:var(--text-muted);">${new Date(entry.createdAt).toLocaleString()}</p>
                    <div style="display:flex;gap:8px;margin-top:8px;">
                        <button class="btn-neon btn-neon-sm btn-neon-success" onclick="approveResetPinAdmin(${entry.id})" style="flex:1;"><i class="fas fa-check"></i> Approve</button>
                        <button class="btn-neon btn-neon-sm btn-neon-danger" onclick="rejectResetPinAdmin(${entry.id})" style="flex:1;"><i class="fas fa-times"></i> Reject</button></div></div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

async function approveResetPinAdmin(id) {
    await showOverlay('loading', 'Approving PIN', 'Please wait...');
    await approveResetPin(id);
    setTimeout(showAdminResetPins, 1500);
}

async function rejectResetPinAdmin(id) {
    await showOverlay('loading', 'Rejecting PIN', 'Please wait...');
    await rejectResetPin(id);
    setTimeout(showAdminResetPins, 1500);
}

function showAdminDice() {
    getAll(STORES.DICE_GAMES).then(games => {
        const pending = games.filter(g => g.status === 'pending');
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🎲 Dice Game Requests</h2><p style="color:var(--text-secondary);font-size:13px;">Pending: ${pending.length}</p>`;
        if (games.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:20px 0;">No dice games</p>'; } else {
            games.forEach(game => {
                const isPending = game.status === 'pending';
                html += `<div class="demand-item ${game.status !== 'pending' ? game.status : ''}">
                    <div class="flex-between"><span style="font-weight:600;">${game.name}</span><span class="badge-demand ${game.status}">${game.status}</span></div>
                    <p style="font-size:13px;color:var(--text-secondary);">📱 ${game.phone}</p>
                    <p style="font-size:13px;">🎲 Rolled: <strong>${game.value}</strong> ${game.win ? '🏆 WIN' : '❌ LOSE'}</p>
                    ${game.win ? `<p style="font-size:13px;color:var(--success);">Prize: ${formatCurrency(game.prize)}</p>` : ''}
                    <p style="font-size:11px;color:var(--text-muted);">${game.date}</p>
                    ${isPending ? `<div style="display:flex;gap:8px;margin-top:8px;">
                        ${game.win ? `<button class="btn-neon btn-neon-sm btn-neon-success" onclick="approveDice(${game.id}, ${game.prize})" style="flex:1;"><i class="fas fa-check"></i> Approve & Pay</button>` : `<button class="btn-neon btn-neon-sm btn-neon-success" onclick="approveDiceZero(${game.id})" style="flex:1;"><i class="fas fa-check"></i> Approve</button>`}
                        <button class="btn-neon btn-neon-sm btn-neon-danger" onclick="rejectDice(${game.id})" style="flex:1;"><i class="fas fa-times"></i> Reject</button></div>` : ''}</div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

async function approveDice(id, prize) {
    await showOverlay('loading', 'Approving Dice Game', 'Please wait...');
    getAll(STORES.DICE_GAMES).then(games => {
        const game = games.find(g => g.id === id);
        if (!game) return;
        game.status = 'approved';
        getByIndex(STORES.USERS, 'phone', game.phone).then(user => {
            if (user) { user.balance += prize; addTransaction(user, 'Dice Game Win', prize, 'Rolled: ' + game.value); put(STORES.USERS, user); }
            put(STORES.DICE_GAMES, game).then(() => {
                showOverlay('success', 'Dice Approved', `PKR ${prize.toLocaleString()} paid!`, 2500);
                sound.play('payment');
                setTimeout(showAdminDice, 1500);
            });
        });
    });
}

async function approveDiceZero(id) {
    await showOverlay('loading', 'Approving Dice Game', 'Please wait...');
    getAll(STORES.DICE_GAMES).then(games => {
        const game = games.find(g => g.id === id);
        if (!game) return;
        game.status = 'approved';
        put(STORES.DICE_GAMES, game).then(() => {
            showOverlay('success', 'Dice Approved', 'No prize.', 2000);
            sound.play('success');
            setTimeout(showAdminDice, 1500);
        });
    });
}

async function rejectDice(id) {
    if (!confirm('Reject this dice game?')) return;
    await showOverlay('loading', 'Rejecting Dice Game', 'Please wait...');
    getAll(STORES.DICE_GAMES).then(games => {
        const game = games.find(g => g.id === id);
        if (!game) return;
        game.status = 'rejected';
        put(STORES.DICE_GAMES, game).then(() => {
            showOverlay('error', 'Dice Rejected', 'Dice game rejected.', 2000);
            sound.play('error');
            setTimeout(showAdminDice, 1500);
        });
    });
}

function showAdminCardPayments() {
    getAll(STORES.CARD_PAYMENTS).then(payments => {
        const pending = payments.filter(p => p.status === 'pending');
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">💳 Card Payment Requests</h2><p style="color:var(--text-secondary);font-size:13px;">Pending: ${pending.length}</p>`;
        if (payments.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:20px 0;">No card payments</p>'; } else {
            payments.forEach(p => {
                const isPending = p.status === 'pending';
                html += `<div class="demand-item ${p.status !== 'pending' ? p.status : ''}">
                    <div class="flex-between"><span style="font-weight:600;">${p.name}</span><span class="badge-demand ${p.status}">${p.status}</span></div>
                    <p style="font-size:13px;color:var(--text-secondary);">📱 ${p.phone}</p>
                    <p style="font-size:13px;">Amount: ${formatCurrency(p.amount)}</p>
                    <p style="font-size:13px;">Merchant: ${p.merchant}</p>
                    <p style="font-size:13px;">Card: ****${p.cardLast4}</p>
                    ${p.description ? `<p style="font-size:12px;color:var(--text-muted);">📝 ${p.description}</p>` : ''}
                    <p style="font-size:11px;color:var(--text-muted);">${p.date}</p>
                    ${isPending ? `<div style="display:flex;gap:8px;margin-top:8px;">
                        <button class="btn-neon btn-neon-sm btn-neon-success" onclick="approveCardPayment(${p.id})" style="flex:1;"><i class="fas fa-check"></i> Approve</button>
                        <button class="btn-neon btn-neon-sm btn-neon-danger" onclick="rejectCardPayment(${p.id})" style="flex:1;"><i class="fas fa-times"></i> Reject</button></div>` : ''}</div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

async function approveCardPayment(id) {
    await showOverlay('loading', 'Approving Card Payment', 'Please wait...');
    getAll(STORES.CARD_PAYMENTS).then(payments => {
        const payment = payments.find(p => p.id === id);
        if (!payment) return;
        payment.status = 'approved';
        put(STORES.CARD_PAYMENTS, payment).then(() => {
            showOverlay('success', 'Payment Approved', `PKR ${payment.amount.toLocaleString()} approved.`, 2500);
            sound.play('success');
            setTimeout(showAdminCardPayments, 1500);
        });
    });
}

async function rejectCardPayment(id) {
    if (!confirm('Reject this payment?')) return;
    await showOverlay('loading', 'Rejecting Card Payment', 'Please wait...');
    getAll(STORES.CARD_PAYMENTS).then(payments => {
        const payment = payments.find(p => p.id === id);
        if (!payment) return;
        payment.status = 'rejected';
        put(STORES.CARD_PAYMENTS, payment).then(() => {
            showOverlay('error', 'Payment Rejected', 'Card payment rejected.', 2000);
            sound.play('error');
            setTimeout(showAdminCardPayments, 1500);
        });
    });
}

function showAdminTransfer() {
    document.getElementById('app').innerHTML = `
        <div class="glass fade-in">
            <h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">💸 Direct Transfer</h2>
            <p style="color:var(--text-secondary);font-size:13px;">Send money directly to any user</p>
            <div class="form-group"><label>User Phone</label><input id="transferPhone" placeholder="0300-0000000" /></div>
            <div class="form-group"><label>Amount (PKR)</label><input id="transferAmount" type="number" placeholder="Enter amount" /></div>
            <div class="form-group"><label>Note (Optional)</label><input id="transferNote" placeholder="Reason for transfer" /></div>
            <button class="btn-neon btn-neon-success" onclick="processAdminTransfer()"><i class="fas fa-paper-plane"></i> Send</button>
            <button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:8px;">Back</button>
        </div>
    `;
}

function adminDirectTransfer(adminPhone, targetPhone, amount, note = 'Admin Transfer') {
    return getByIndex(STORES.USERS, 'phone', adminPhone).then(admin => {
        if (!admin || admin.role !== 'admin') { showOverlay('error', 'Access Denied', 'Only admin can do this!', 2000); return false; }
        return getByIndex(STORES.USERS, 'phone', targetPhone).then(target => {
            if (!target) { showOverlay('error', 'User Not Found', 'User not found!', 2000); return false; }
            if (target.isDeleted) { showOverlay('error', 'Error', 'User account deleted!', 2000); return false; }
            if (amount <= 0) { showOverlay('error', 'Invalid Amount', 'Enter valid amount!', 2000); return false; }
            target.balance = (target.balance || 0) + amount;
            addTransaction(target, 'Admin Transfer', amount, note, { from: 'Admin' });
            addTransaction(admin, 'Transfer Sent', amount, 'To: ' + target.name, { to: target.name });
            return put(STORES.USERS, target).then(() => {
                return put(STORES.USERS, admin).then(() => {
                    showOverlay('success', 'Transfer Complete', `PKR ${amount.toLocaleString()} sent to ${target.name}`, 2500);
                    sound.play('payment');
                    return true;
                });
            });
        });
    });
}

async function processAdminTransfer() {
    const phone = document.getElementById('transferPhone').value.trim();
    const amount = Number(document.getElementById('transferAmount').value);
    const note = document.getElementById('transferNote').value.trim() || 'Admin Transfer';
    if (!phone) { showToast('Enter user phone!'); return; }
    if (amount <= 0) { showToast('Enter valid amount!'); return; }
    await showOverlay('loading', 'Processing Transfer', 'Please wait...');
    const success = await adminDirectTransfer(currentUser.phone, phone, amount, note);
    if (success) setTimeout(showAdminTransfer, 1500);
}

// === ADMIN CHAT ===
function showAdminChat() {
    getAll(STORES.CHAT_MESSAGES).then(messages => {
        const chatMap = {};
        messages.forEach(m => {
            if (m.receiver === 'admin' || m.sender === 'admin') {
                if (!chatMap[m.chatId]) chatMap[m.chatId] = [];
                chatMap[m.chatId].push(m);
            }
        });
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">💬 Admin Chat</h2><p style="color:var(--text-secondary);font-size:13px;">${Object.keys(chatMap).length} active chats</p>`;
        if (Object.keys(chatMap).length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:20px 0;">No chat messages</p>'; } else {
            for (const [chatId, msgs] of Object.entries(chatMap)) {
                const lastMsg = msgs[msgs.length - 1];
                const userPhone = chatId.replace('admin_', '');
                const unread = msgs.filter(m => m.receiver === 'admin' && m.status !== 'read').length;
                html += `<div onclick="showAdminChatRoom('${userPhone}')" style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:12px;margin-bottom:8px;cursor:pointer;">
                    <div class="flex-between"><span style="font-weight:600;">📱 ${userPhone}</span>${unread > 0 ? `<span style="background:var(--danger);color:white;border-radius:50%;padding:2px 8px;font-size:10px;">${unread}</span>` : ''}</div>
                    <p style="font-size:12px;color:var(--text-muted);">${lastMsg.message.substring(0, 40)}${lastMsg.message.length > 40 ? '...' : ''}</p>
                    <p style="font-size:10px;color:var(--text-muted);">${new Date(lastMsg.time).toLocaleString()}</p></div>`;
            }
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

function showAdminChatRoom(userPhone) {
    const chatId = `admin_${userPhone}`;
    getAll(STORES.CHAT_MESSAGES).then(messages => {
        const chatMessages = messages.filter(m => m.chatId === chatId);
        chatMessages.forEach(m => {
            if (m.receiver === 'admin' && m.status !== 'read') { m.status = 'read'; put(STORES.CHAT_MESSAGES, m); }
        });
        let html = `<div class="glass fade-in" style="height:70vh;display:flex;flex-direction:column;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <h2 style="font-size:18px;font-family:'Space Grotesk',sans-serif;">💬 ${userPhone}</h2>
                <button class="btn-neon btn-neon-xs btn-neon-danger" onclick="showAdminChat()">✕</button></div>
            <div style="flex:1;overflow-y:auto;background:var(--bg-primary);border-radius:var(--radius-sm);padding:12px;margin-bottom:8px;" id="adminChatMessages">`;
        if (chatMessages.length === 0) { html += `<p style="color:var(--text-muted);text-align:center;padding:30px 0;">No messages yet.</p>`; } else {
            chatMessages.forEach(msg => {
                const isMine = msg.sender === 'admin';
                html += `<div style="text-align:${isMine ? 'right' : 'left'};margin-bottom:8px;">
                    <div style="display:inline-block;background:${isMine ? 'var(--ocean-teal)' : 'var(--bg-card)'};color:${isMine ? 'white' : 'var(--text-primary)'};border-radius:12px;padding:8px 14px;max-width:80%;border:${isMine ? 'none' : '1px solid var(--border-glass)'};">
                        <p style="font-size:13px;word-wrap:break-word;">${msg.message}</p>
                        ${msg.attachment ? `<div style="font-size:11px;color:${isMine ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)'};margin-top:4px;">📎 ${msg.attachment}</div>` : ''}
                        <p style="font-size:9px;color:${isMine ? 'rgba(255,255,255,0.5)' : 'var(--text-muted)'};margin-top:2px;">${new Date(msg.time).toLocaleTimeString()}</p>
                    </div>
                    ${msg.status === 'delivered' ? `<span style="font-size:8px;color:var(--text-muted);margin-left:4px;">✓</span>` : ''}
                    ${msg.status === 'read' ? `<span style="font-size:8px;color:var(--ocean-teal);margin-left:4px;">✓✓</span>` : ''}</div>`;
            });
        }
        html += `</div>
            <div style="display:flex;gap:8px;align-items:center;">
                <input id="adminChatInput" placeholder="Reply as admin..." style="flex:1;padding:10px 14px;border:1px solid var(--border-glass);border-radius:var(--radius-sm);background:var(--bg-card);color:var(--text-primary);font-family:'Inter',sans-serif;" />
                <button class="btn-neon btn-neon-sm btn-neon-primary" onclick="sendAdminReply('${userPhone}','${chatId}')" style="padding:10px 16px;width:auto;"><i class="fas fa-paper-plane"></i></button>
            </div></div>`;
        document.getElementById('app').innerHTML = html;
        setTimeout(() => { const container = document.getElementById('adminChatMessages'); if (container) container.scrollTop = container.scrollHeight; }, 100);
    });
}

async function sendAdminReply(userPhone, chatId) {
    const input = document.getElementById('adminChatInput');
    const message = input.value.trim();
    if (!message) { showToast('Type a reply!'); return; }
    const msg = { id: generateID(), chatId, sender: 'admin', senderName: 'Admin Support', receiver: userPhone, message, attachment: null, time: getCurrentDate(), status: 'read' };
    await add(STORES.CHAT_MESSAGES, msg);
    input.value = '';
    showAdminChatRoom(userPhone);
    showToast('💬 Reply sent!');
    sound.play('notification');
}

// === NEW FEATURES: Bank Accounts, Salary, Security, Reminders, APIs ===
function showBankAccounts() {
    getLinkedBanks(currentUser.phone).then(accounts => {
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🏛️ Linked Banks</h2>
            <button class="btn-neon btn-neon-sm btn-neon-primary" onclick="showLinkBankForm()" style="width:auto;padding:8px 20px;margin-bottom:12px;"><i class="fas fa-plus"></i> Link Bank</button>`;
        if (accounts.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:20px 0;">No banks linked. Link your bank account for easy transfers.</p>'; } else {
            accounts.forEach(acc => {
                html += `<div class="linked-bank"><div class="bank-icon">🏛️</div>
                    <div style="flex:1;"><div style="font-weight:600;">${acc.bankName}</div>
                    <div style="font-size:12px;color:var(--text-secondary);">${acc.accountHolder}</div>
                    <div style="font-size:11px;color:var(--text-muted);">${acc.accountNumber}</div></div>
                    <button class="btn-neon btn-neon-xs btn-neon-danger" onclick="unlinkBankAccountUser(${acc.id})">Unlink</button></div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

function showLinkBankForm() {
    document.getElementById('app').innerHTML = `
        <div class="glass fade-in">
            <h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🔗 Link Bank Account</h2>
            <p style="color:var(--text-secondary);font-size:13px;">Connect your bank account for easy transfers</p>
            <div class="form-group"><label>Bank Name</label><input id="bankName" placeholder="e.g., HBL, UBL, Meezan" /></div>
            <div class="form-group"><label>Account Holder Name</label><input id="bankHolder" placeholder="Your name as on account" /></div>
            <div class="form-group"><label>Account Number</label><input id="bankAccountNumber" placeholder="Enter account number" /></div>
            <button class="btn-neon btn-neon-success" onclick="saveLinkedBank()"><i class="fas fa-link"></i> Link Bank</button>
            <button class="btn-neon btn-neon-outline" onclick="showBankAccounts()" style="margin-top:8px;">Cancel</button>
        </div>
    `;
}

async function saveLinkedBank() {
    const bankName = document.getElementById('bankName').value.trim();
    const accountHolder = document.getElementById('bankHolder').value.trim();
    const accountNumber = document.getElementById('bankAccountNumber').value.trim();
    if (!bankName || !accountHolder || !accountNumber) { showToast('Fill all fields!'); return; }
    await linkBankAccount(currentUser.phone, bankName, accountNumber, accountHolder);
    setTimeout(showBankAccounts, 1500);
}

async function unlinkBankAccountUser(id) {
    if (!confirm('Unlink this bank account?')) return;
    await unlinkBankAccount(id);
    setTimeout(showBankAccounts, 1000);
}

function linkBankAccount(phone, bankName, accountNumber, accountHolder) {
    const account = { phone, bankName, accountNumber, accountHolder, linked: true, createdAt: getCurrentDate(), isDefault: false };
    return add(STORES.BANK_ACCOUNTS, account).then(() => {
        showOverlay('success', 'Bank Linked', `${bankName} account linked successfully!`, 2000);
        sound.play('success');
        return true;
    });
}

function getLinkedBanks(phone) { return getAllByIndex(STORES.BANK_ACCOUNTS, 'phone', phone); }
function unlinkBankAccount(id) { return deleteData(STORES.BANK_ACCOUNTS, id); }

function showSalaryAccount() {
    getSalaryAccounts(currentUser.phone).then(salaryAccounts => {
        const hasSalary = salaryAccounts.length > 0;
        const isSalary = currentUser.isSalaryAccount || false;
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">💰 Salary Account</h2>`;
        if (isSalary && hasSalary) {
            const info = salaryAccounts[0];
            html += `<div style="background:var(--success-bg);border:1px solid var(--success);border-radius:var(--radius-sm);padding:16px;margin:12px 0;">
                <div style="display:flex;align-items:center;gap:12px;"><span style="font-size:36px;">💰</span>
                <div><div style="font-weight:700;font-size:16px;">${info.employer}</div>
                <div style="font-size:13px;">Salary: ${formatCurrency(info.salaryAmount)}</div>
                <div style="font-size:12px;color:var(--text-muted);">Paid on ${info.salaryDay}th of each month</div>
                <div style="font-size:11px;color:var(--success);">✅ Active</div></div></div></div>
                <div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:12px;margin:8px 0;">
                    <p style="font-size:13px;">🎉 <strong>Benefits:</strong></p>
                    <p style="font-size:12px;color:var(--text-secondary);">✅ PKR 1,000 welcome bonus</p>
                    <p style="font-size:12px;color:var(--text-secondary);">✅ 0% fee on first 5 transactions per month</p>
                    <p style="font-size:12px;color:var(--text-secondary);">✅ Priority customer support</p>
                    <p style="font-size:12px;color:var(--text-secondary);">✅ Exclusive promotional offers</p></div>
                <button class="btn-neon btn-neon-danger" onclick="deactivateSalaryAccount()">Deactivate Salary Account</button>`;
        } else {
            html += `<p style="color:var(--text-secondary);font-size:13px;">Set up your salary account and get exclusive benefits!</p>
                <div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:16px;margin:12px 0;">
                    <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;"><span style="font-size:28px;">🎁</span>
                    <div><div style="font-weight:600;">Benefits:</div>
                    <div style="font-size:12px;color:var(--text-secondary);">✅ PKR 1,000 welcome bonus</div>
                    <div style="font-size:12px;color:var(--text-secondary);">✅ 0% fee on first 5 transactions/month</div>
                    <div style="font-size:12px;color:var(--text-secondary);">✅ Priority support</div></div></div></div>
                <div class="form-group"><label>Employer Name</label><input id="salaryEmployer" placeholder="Company name" /></div>
                <div class="form-group"><label>Monthly Salary (PKR)</label><input id="salaryAmount" type="number" placeholder="Enter salary amount" /></div>
                <div class="form-group"><label>Salary Day of Month</label>
                    <select id="salaryDay">${Array.from({length:28}, (_,i) => `<option value="${i+1}">${i+1}</option>`).join('')}</select></div>
                <button class="btn-neon btn-neon-success" onclick="activateSalaryAccount()"><i class="fas fa-check-circle"></i> Activate Salary Account</button>`;
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

function setupSalaryAccount(phone, employer, salaryAmount, salaryDay) {
    return getByIndex(STORES.USERS, 'phone', phone).then(user => {
        if (!user) { showToast('User not found!'); return false; }
        user.isSalaryAccount = true;
        user.salaryEmployer = employer;
        user.salaryAmount = salaryAmount;
        user.salaryDay = salaryDay;
        const salaryInfo = { phone, employer, salaryAmount, salaryDay, activated: true, createdAt: getCurrentDate() };
        return put(STORES.USERS, user).then(() => {
            return add(STORES.SALARY_ACCOUNTS, salaryInfo).then(() => {
                user.balance += 1000;
                addTransaction(user, 'Salary Account Bonus', 1000, 'Salary account activation bonus');
                put(STORES.USERS, user);
                showOverlay('success', '🎉 Salary Account Activated!', `You got PKR 1,000 bonus! Salary of ${formatCurrency(salaryAmount)} on ${salaryDay}th of each month.`, 3000);
                sound.play('success');
                return true;
            });
        });
    });
}

function getSalaryAccounts(phone) { return getAllByIndex(STORES.SALARY_ACCOUNTS, 'phone', phone); }

async function activateSalaryAccount() {
    const employer = document.getElementById('salaryEmployer').value.trim();
    const salaryAmount = Number(document.getElementById('salaryAmount').value);
    const salaryDay = Number(document.getElementById('salaryDay').value);
    if (!employer) { showToast('Enter employer name!'); return; }
    if (salaryAmount < 10000) { showToast('Minimum salary is PKR 10,000!'); return; }
    await setupSalaryAccount(currentUser.phone, employer, salaryAmount, salaryDay);
    setTimeout(showSalaryAccount, 1500);
}

async function deactivateSalaryAccount() {
    if (!confirm('Deactivate salary account? You will lose benefits.')) return;
    currentUser.isSalaryAccount = false;
    await put(STORES.USERS, currentUser);
    showOverlay('success', 'Salary Account Deactivated', 'Your salary account has been deactivated.', 2000);
    sound.play('notification');
    setTimeout(showSalaryAccount, 1500);
}

function showSecurityQuestions() {
    getAllByIndex(STORES.SECURITY_QUESTIONS, 'phone', currentUser.phone).then(securityQs => {
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🔒 Security Settings</h2><p style="color:var(--text-secondary);font-size:13px;">Manage your security questions</p>`;
        if (currentUser.securityQuestion) {
            html += `<div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:12px;margin:12px 0;">
                <p style="font-size:13px;font-weight:600;">Your Security Question:</p>
                <p style="font-size:14px;color:var(--ocean-teal);">${currentUser.securityQuestion}</p>
                <p style="font-size:12px;color:var(--text-muted);margin-top:4px;">Answer is securely stored.</p></div>
                <button class="btn-neon btn-neon-warning" onclick="setSecurityQuestion()">Change Security Question</button>`;
        } else {
            html += `<div style="background:var(--warning-bg);border:1px solid var(--warning);border-radius:var(--radius-sm);padding:12px;margin:12px 0;">
                <p style="font-size:13px;color:var(--text-primary);">⚠️ No security question set. This helps recover your account.</p></div>
                <button class="btn-neon btn-neon-primary" onclick="setSecurityQuestion()">Set Security Question</button>`;
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

function setSecurityQuestion() {
    document.getElementById('app').innerHTML = `
        <div class="glass fade-in">
            <h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🔐 Set Security Question</h2>
            <div class="form-group"><label>Security Question</label>
                <select id="setSecurityQ">
                    <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
                    <option value="What is the name of your first pet?">What is the name of your first pet?</option>
                    <option value="What is your favorite book?">What is your favorite book?</option>
                    <option value="What city were you born in?">What city were you born in?</option>
                    <option value="What is your favorite food?">What is your favorite food?</option>
                </select></div>
            <div class="form-group"><label>Your Answer</label><input id="setSecurityA" placeholder="Enter your answer" /></div>
            <button class="btn-neon btn-neon-success" onclick="saveSecurityQuestion()"><i class="fas fa-save"></i> Save</button>
            <button class="btn-neon btn-neon-outline" onclick="showSecurityQuestions()" style="margin-top:8px;">Cancel</button>
        </div>
    `;
}

async function saveSecurityQuestion() {
    const question = document.getElementById('setSecurityQ').value;
    const answer = document.getElementById('setSecurityA').value.trim();
    if (!answer) { showToast('Enter your answer!'); return; }
    currentUser.securityQuestion = question;
    currentUser.securityAnswer = answer;
    await put(STORES.USERS, currentUser);
    const sq = { phone: currentUser.phone, question, answer, createdAt: getCurrentDate() };
    await add(STORES.SECURITY_QUESTIONS, sq);
    showOverlay('success', 'Security Question Set', 'Your security question has been saved.', 2000);
    sound.play('success');
    setTimeout(showSecurityQuestions, 1500);
}

function showLoanReminders() {
    getLoanReminders(currentUser.phone).then(reminders => {
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">⏰ Loan Reminders</h2><p style="color:var(--text-secondary);font-size:13px;">Get notified before your loan payments are due</p>`;
        if (reminders.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:20px 0;">No loan reminders set. You will be notified 3 days before each due date.</p>'; } else {
            reminders.forEach(r => {
                const due = new Date(r.dueDate);
                const daysLeft = Math.ceil((due - new Date()) / (1000 * 60 * 60 * 24));
                html += `<div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:10px 12px;margin-bottom:6px;">
                    <div class="flex-between"><span style="font-weight:600;">Loan #${r.loanId}</span><span style="color:${daysLeft <= 3 ? 'var(--danger)' : 'var(--success)'};">${daysLeft} days left</span></div>
                    <p style="font-size:13px;">Amount: ${formatCurrency(r.amount)}</p>
                    <p style="font-size:11px;color:var(--text-muted);">Due: ${new Date(r.dueDate).toLocaleDateString()}</p>
                    ${r.notified ? '<span style="font-size:10px;color:var(--text-muted);">✅ Notified</span>' : ''}</div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

function createLoanReminder(phone, loanId, dueDate, amount) {
    const reminder = { id: generateID(), phone, loanId, dueDate, amount, notified: false, createdAt: getCurrentDate() };
    return add(STORES.LOAN_REMINDERS, reminder).then(() => { sound.play('notification'); return true; });
}
function getLoanReminders(phone) { return getAllByIndex(STORES.LOAN_REMINDERS, 'phone', phone); }
function checkLoanReminders() {
    const today = new Date();
    getAll(STORES.LOAN_REMINDERS).then(reminders => {
        reminders.forEach(r => {
            if (!r.notified) {
                const due = new Date(r.dueDate);
                const daysLeft = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
                if (daysLeft <= 3 && daysLeft >= 0) {
                    showToast(`💳 Loan Reminder: ${formatCurrency(r.amount)} due in ${daysLeft} days!`);
                    sound.play('notification');
                    r.notified = true;
                    put(STORES.LOAN_REMINDERS, r);
                }
            }
        });
    });
}

function showThirdPartyAPIs() {
    document.getElementById('app').innerHTML = `
        <div class="glass fade-in">
            <h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🔌 Integrations</h2>
            <p style="color:var(--text-secondary);font-size:13px;">Connect with third-party services</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0;">
                <div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:12px;text-align:center;cursor:pointer;" onclick="processThirdPartyPayment('JazzCash')">
                    <div style="font-size:32px;">💚</div><div style="font-weight:600;">JazzCash</div><div style="font-size:11px;color:var(--text-muted);">Pay with JazzCash</div></div>
                <div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:12px;text-align:center;cursor:pointer;" onclick="processThirdPartyPayment('EasyPaisa')">
                    <div style="font-size:32px;">💙</div><div style="font-weight:600;">EasyPaisa</div><div style="font-size:11px;color:var(--text-muted);">Pay with EasyPaisa</div></div>
                <div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:12px;text-align:center;cursor:pointer;" onclick="processThirdPartyPayment('PayPal')">
                    <div style="font-size:32px;">💙</div><div style="font-weight:600;">PayPal</div><div style="font-size:11px;color:var(--text-muted);">International payments</div></div>
                <div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:12px;text-align:center;cursor:pointer;" onclick="processThirdPartyPayment('Stripe')">
                    <div style="font-size:32px;">💜</div><div style="font-weight:600;">Stripe</div><div style="font-size:11px;color:var(--text-muted);">Card & bank payments</div></div>
            </div>
            <div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:12px;margin:8px 0;">
                <p style="font-size:13px;font-weight:600;">🔗 Connected Services</p>
                <p style="font-size:12px;color:var(--text-secondary);">Connect your accounts for seamless payments</p>
                <div style="margin-top:8px;">
                    <button class="btn-neon btn-neon-xs btn-neon-primary" onclick="connectThirdParty('JazzCash')">Connect JazzCash</button>
                    <button class="btn-neon btn-neon-xs btn-neon-primary" onclick="connectThirdParty('EasyPaisa')">Connect EasyPaisa</button>
                </div>
            </div>
            <button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button>
        </div>
    `;
}

function simulateThirdPartyPayment(provider, amount, details) {
    return new Promise((resolve) => {
        showOverlay('loading', `Processing ${provider} Payment`, `Connecting to ${provider}...`);
        setTimeout(() => {
            const success = Math.random() > 0.1;
            if (success) {
                showOverlay('success', `${provider} Payment Complete`, `PKR ${amount.toLocaleString()} processed successfully!`, 2500);
                sound.play('payment');
            } else {
                showOverlay('error', `${provider} Payment Failed`, 'Please try again or contact support.', 2000);
                sound.play('payment_failed');
            }
            resolve(success);
        }, 2000);
    });
}

async function processThirdPartyPayment(provider) {
    const amount = prompt(`Enter amount to pay via ${provider} (PKR):`);
    if (!amount) return;
    const amt = Number(amount);
    if (amt <= 0) { showToast('Enter valid amount!'); return; }
    if (currentUser.balance < amt) { showOverlay('error', 'Insufficient Balance', 'You don\'t have enough balance!', 2000); return; }
    const success = await simulateThirdPartyPayment(provider, amt, {});
    if (success) {
        currentUser.balance -= amt;
        addTransaction(currentUser, 'Third-Party Payment', amt, `Payment via ${provider}`);
        await put(STORES.USERS, currentUser);
        setTimeout(showThirdPartyAPIs, 1500);
    }
}

function connectThirdParty(provider) {
    const account = prompt(`Enter your ${provider} account number/email:`);
    if (!account) return;
    showOverlay('success', `${provider} Connected`, `Your ${provider} account has been connected.`, 2000);
    sound.play('success');
}

function showAnnouncements() {
    getAnnouncements().then(announcements => {
        announcements.forEach(ann => {
            if (!ann.readBy || !ann.readBy.includes(currentUser.phone)) {
                markAnnouncementRead(ann.id, currentUser.phone);
            }
        });
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">📢 Announcements</h2><p style="color:var(--text-secondary);font-size:13px;">Latest updates from KPay</p>`;
        if (announcements.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:30px 0;">No announcements yet.</p>'; } else {
            announcements.slice().reverse().forEach(ann => {
                const priorityClass = ann.priority === 'urgent' ? 'urgent' : (ann.priority === 'important' ? 'important' : '');
                html += `<div class="announcement-item ${priorityClass}">
                    <div class="flex-between"><span style="font-weight:600;">${ann.title}</span><span style="font-size:10px;color:var(--text-muted);">${new Date(ann.createdAt).toLocaleDateString()}</span></div>
                    <p style="font-size:13px;color:var(--text-secondary);">${ann.message}</p>
                    ${ann.priority === 'urgent' ? '<span style="font-size:10px;color:var(--danger);">🔴 URGENT</span>' : ''}</div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

function createAnnouncement(title, message, priority = 'normal', target = 'all') {
    const announcement = { id: generateID(), title, message, priority, target, active: true, createdAt: getCurrentDate(), readBy: [] };
    return add(STORES.ANNOUNCEMENTS, announcement).then(() => {
        showOverlay('success', 'Announcement Posted', 'Message broadcasted!', 2000);
        sound.play('notification');
        return true;
    });
}
function getAnnouncements() { return getAll(STORES.ANNOUNCEMENTS).then(announcements => announcements.filter(a => a.active)); }
function markAnnouncementRead(id, phone) {
    return getAll(STORES.ANNOUNCEMENTS).then(announcements => {
        const ann = announcements.find(a => a.id === id);
        if (!ann) return false;
        if (!ann.readBy) ann.readBy = [];
        if (!ann.readBy.includes(phone)) { ann.readBy.push(phone); return put(STORES.ANNOUNCEMENTS, ann).then(() => true); }
        return true;
    });
}
function deleteAnnouncement(id) { return deleteData(STORES.ANNOUNCEMENTS, id); }

function showPromotions() {
    getPromotions().then(promos => {
        const activePromos = promos.filter(p => p.active && new Date(p.validUntil) > new Date());
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🏷️ Promotions</h2><p style="color:var(--text-secondary);font-size:13px;">Apply promo codes for discounts</p>
            <div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:12px;margin:12px 0;">
                <div class="form-group"><label>Enter Promo Code</label>
                    <div style="display:flex;gap:8px;"><input id="promoInput" placeholder="Enter code" style="flex:1;padding:10px 14px;border:1px solid var(--border-glass);border-radius:var(--radius-sm);background:var(--bg-card);color:var(--text-primary);" />
                    <button class="btn-neon btn-neon-sm btn-neon-primary" onclick="applyPromoCode()" style="padding:10px 16px;width:auto;">Apply</button></div></div></div>`;
        if (activePromos.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:20px 0;">No active promotions at the moment.</p>'; } else {
            html += `<hr style="border-color:var(--border-glass);margin:12px 0;" /><h3 style="font-size:13px;">Active Promotions</h3>`;
            activePromos.forEach(promo => {
                html += `<div class="promo-item" style="padding:12px;">
                    <div class="flex-between"><span style="font-weight:700;">${promo.title}</span><span class="promo-code">${promo.code}</span></div>
                    <p style="font-size:12px;opacity:0.9;">${promo.description}</p>
                    <p style="font-size:11px;opacity:0.8;">${promo.discountType === 'percent' ? promo.discountValue + '% off' : formatCurrency(promo.discountValue) + ' off'}</p>
                    <p style="font-size:10px;opacity:0.6;">Valid until: ${new Date(promo.validUntil).toLocaleDateString()}</p></div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

function createPromotion(title, description, code, discountType, discountValue, validUntil) {
    const promo = { id: generateID(), title, description, code: code.toUpperCase(), discountType, discountValue, validUntil, active: true, usedCount: 0, createdAt: getCurrentDate() };
    return add(STORES.PROMOTIONS, promo).then(() => {
        showOverlay('success', 'Promotion Created', `${title} is now live!`, 2000);
        sound.play('success');
        return true;
    });
}
function getPromotions() { return getAll(STORES.PROMOTIONS); }
function applyPromotion(code, amount) {
    return getAll(STORES.PROMOTIONS).then(promos => {
        const promo = promos.find(p => p.code === code.toUpperCase() && p.active);
        if (!promo) { showOverlay('error', 'Invalid Code', 'Promotion code not found or expired!', 2000); sound.play('error'); return null; }
        if (new Date(promo.validUntil) < new Date()) { showOverlay('error', 'Expired', 'This promotion has expired!', 2000); sound.play('error'); return null; }
        let discount = 0;
        if (promo.discountType === 'percent') { discount = Math.floor(amount * (promo.discountValue / 100)); } else { discount = Math.min(promo.discountValue, amount); }
        promo.usedCount++;
        put(STORES.PROMOTIONS, promo);
        return { promo, discount };
    });
}

async function applyPromoCode() {
    const code = document.getElementById('promoInput').value.trim();
    if (!code) { showToast('Enter a promo code!'); return; }
    const result = await applyPromotion(code, 0);
    if (result) {
        showOverlay('success', '🎉 Promo Applied!', `${result.promo.title}: ${result.promo.discountType === 'percent' ? result.promo.discountValue + '% off' : formatCurrency(result.promo.discountValue) + ' off'}`, 2500);
        sound.play('success');
    }
}

// === ADMIN FEE MANAGEMENT ===
function showAdminFees() {
    getFees().then(fees => {
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">💲 Fee Management</h2>
            <button class="btn-neon btn-neon-sm btn-neon-primary" onclick="showCreateFeeForm()" style="width:auto;padding:8px 20px;margin-bottom:12px;"><i class="fas fa-plus"></i> Add Fee</button>`;
        if (fees.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:20px 0;">No fees configured</p>'; } else {
            fees.forEach(fee => {
                html += `<div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:12px;margin-bottom:8px;">
                    <div class="flex-between"><span style="font-weight:600;">${fee.name}</span><span style="color:${fee.active ? 'var(--success)' : 'var(--danger)'};">${fee.active ? '✅ Active' : '❌ Inactive'}</span></div>
                    <p style="font-size:13px;">Fee: ${fee.feeType === 'percent' ? fee.fee + '%' : formatCurrency(fee.fee)}</p>
                    <div style="display:flex;gap:4px;margin-top:4px;">
                        <button class="btn-neon btn-neon-xs btn-neon-primary" onclick="editFee(${fee.id})">Edit</button>
                        <button class="btn-neon btn-neon-xs ${fee.active ? 'btn-neon-danger' : 'btn-neon-success'}" onclick="toggleFee(${fee.id})">${fee.active ? 'Deactivate' : 'Activate'}</button>
                        <button class="btn-neon btn-neon-xs btn-neon-danger" onclick="deleteFeeAdmin(${fee.id})">Delete</button></div></div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

function showCreateFeeForm() {
    document.getElementById('app').innerHTML = `
        <div class="glass fade-in">
            <h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">➕ Add Fee</h2>
            <div class="form-group"><label>Fee Name</label><input id="feeName" placeholder="e.g., Withdrawal Fee" /></div>
            <div class="form-group"><label>Fee Type</label>
                <select id="feeType"><option value="fixed">Fixed (PKR)</option><option value="percent">Percentage (%)</option></select></div>
            <div class="form-group"><label>Fee Value</label><input id="feeValue" type="number" placeholder="0.00" /></div>
            <button class="btn-neon btn-neon-success" onclick="saveFee()"><i class="fas fa-save"></i> Save Fee</button>
            <button class="btn-neon btn-neon-outline" onclick="showAdminFees()" style="margin-top:8px;">Cancel</button>
        </div>
    `;
}

function getFees() { return getAll(STORES.FEES); }
function updateFee(id, feeData) {
    return getAll(STORES.FEES).then(fees => {
        const fee = fees.find(f => f.id === id);
        if (!fee) { showToast('Fee not found!'); return false; }
        Object.assign(fee, feeData);
        return put(STORES.FEES, fee).then(() => {
            showOverlay('success', 'Fee Updated', 'Fee configuration updated!', 2000);
            sound.play('success');
            return true;
        });
    });
}
function createFee(name, fee, feeType, active = true) {
    const newFee = { id: generateID(), name, fee, feeType, active, createdAt: getCurrentDate() };
    return add(STORES.FEES, newFee).then(() => {
        showOverlay('success', 'Fee Created', 'New fee added!', 2000);
        sound.play('success');
        return true;
    });
}
function deleteFee(id) { return deleteData(STORES.FEES, id); }
function calculateFee(amount, feeType, feeValue) {
    if (feeType === 'percent') return Math.floor(amount * (feeValue / 100));
    return feeValue;
}

async function saveFee() {
    const name = document.getElementById('feeName').value.trim();
    const feeType = document.getElementById('feeType').value;
    const feeValue = Number(document.getElementById('feeValue').value);
    if (!name) { showToast('Enter fee name!'); return; }
    if (feeValue < 0) { showToast('Enter valid fee value!'); return; }
    await createFee(name, feeValue, feeType);
    setTimeout(showAdminFees, 1500);
}

async function editFee(id) {
    const fees = await getFees();
    const fee = fees.find(f => f.id === id);
    if (!fee) return;
    const newName = prompt('Fee Name:', fee.name);
    if (newName === null) return;
    const newValue = prompt('Fee Value:', fee.fee);
    if (newValue === null) return;
    const newType = confirm('Change to percentage? (Cancel for fixed)') ? 'percent' : 'fixed';
    await updateFee(id, { name: newName, fee: Number(newValue), feeType: newType });
    setTimeout(showAdminFees, 1500);
}

async function toggleFee(id) {
    const fees = await getFees();
    const fee = fees.find(f => f.id === id);
    if (!fee) return;
    await updateFee(id, { active: !fee.active });
    setTimeout(showAdminFees, 1500);
}

async function deleteFeeAdmin(id) {
    if (!confirm('Delete this fee?')) return;
    await deleteFee(id);
    setTimeout(showAdminFees, 1500);
}

// === ADMIN PROMOTIONS ===
function showAdminPromotions() {
    getPromotions().then(promos => {
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🏷️ Promotions</h2>
            <button class="btn-neon btn-neon-sm btn-neon-primary" onclick="showCreatePromotionForm()" style="width:auto;padding:8px 20px;margin-bottom:12px;"><i class="fas fa-plus"></i> Create Promotion</button>`;
        if (promos.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:20px 0;">No promotions</p>'; } else {
            promos.forEach(promo => {
                html += `<div class="promo-item">
                    <div class="flex-between"><span style="font-weight:700;">${promo.title}</span><span style="font-size:11px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:12px;">${promo.active ? 'ACTIVE' : 'INACTIVE'}</span></div>
                    <p style="font-size:13px;opacity:0.9;">${promo.description}</p>
                    <p style="font-size:13px;margin-top:4px;">Code: <span class="promo-code">${promo.code}</span></p>
                    <p style="font-size:12px;opacity:0.8;">${promo.discountType === 'percent' ? promo.discountValue + '% off' : formatCurrency(promo.discountValue) + ' off'}</p>
                    <p style="font-size:11px;opacity:0.7;">Used: ${promo.usedCount || 0} times</p>
                    <p style="font-size:10px;opacity:0.6;">Valid until: ${new Date(promo.validUntil).toLocaleDateString()}</p>
                    <div style="display:flex;gap:4px;margin-top:6px;">
                        <button class="btn-neon btn-neon-xs ${promo.active ? 'btn-neon-danger' : 'btn-neon-success'}" onclick="togglePromotion(${promo.id})">${promo.active ? 'Deactivate' : 'Activate'}</button>
                        <button class="btn-neon btn-neon-xs btn-neon-danger" onclick="deletePromotion(${promo.id})">Delete</button></div></div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

function showCreatePromotionForm() {
    document.getElementById('app').innerHTML = `
        <div class="glass fade-in">
            <h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🏷️ Create Promotion</h2>
            <div class="form-group"><label>Title</label><input id="promoTitle" placeholder="e.g., Summer Sale" /></div>
            <div class="form-group"><label>Description</label><textarea id="promoDesc" placeholder="Describe the promotion" rows="2"></textarea></div>
            <div class="form-group"><label>Promo Code</label><input id="promoCode" placeholder="SUMMER25" style="text-transform:uppercase;" /></div>
            <div class="form-group"><label>Discount Type</label>
                <select id="promoDiscountType"><option value="percent">Percentage (%)</option><option value="fixed">Fixed (PKR)</option></select></div>
            <div class="form-group"><label>Discount Value</label><input id="promoDiscountValue" type="number" placeholder="25" /></div>
            <div class="form-group"><label>Valid Until</label><input id="promoValidUntil" type="date" /></div>
            <button class="btn-neon btn-neon-success" onclick="savePromotion()"><i class="fas fa-save"></i> Create</button>
            <button class="btn-neon btn-neon-outline" onclick="showAdminPromotions()" style="margin-top:8px;">Cancel</button>
        </div>
    `;
}

async function savePromotion() {
    const title = document.getElementById('promoTitle').value.trim();
    const description = document.getElementById('promoDesc').value.trim();
    const code = document.getElementById('promoCode').value.trim();
    const discountType = document.getElementById('promoDiscountType').value;
    const discountValue = Number(document.getElementById('promoDiscountValue').value);
    const validUntil = document.getElementById('promoValidUntil').value;
    if (!title || !description || !code || !validUntil) { showToast('Fill all fields!'); return; }
    if (discountValue <= 0) { showToast('Enter valid discount!'); return; }
    if (discountType === 'percent' && discountValue > 100) { showToast('Percentage cannot exceed 100%!'); return; }
    await createPromotion(title, description, code, discountType, discountValue, validUntil);
    setTimeout(showAdminPromotions, 1500);
}

async function togglePromotion(id) {
    const promos = await getPromotions();
    const promo = promos.find(p => p.id === id);
    if (!promo) return;
    promo.active = !promo.active;
    await put(STORES.PROMOTIONS, promo);
    showToast(`Promotion ${promo.active ? 'activated' : 'deactivated'}`);
    sound.play('notification');
    setTimeout(showAdminPromotions, 1000);
}

async function deletePromotion(id) {
    if (!confirm('Delete this promotion?')) return;
    await deleteData(STORES.PROMOTIONS, id);
    showToast('Promotion deleted');
    sound.play('notification');
    setTimeout(showAdminPromotions, 1000);
}

// === ADMIN ANNOUNCEMENTS ===
function showAdminAnnouncements() {
    getAnnouncements().then(announcements => {
        let html = `<div class="glass fade-in"><h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">📢 Announcements</h2>
            <button class="btn-neon btn-neon-sm btn-neon-primary" onclick="showCreateAnnouncementForm()" style="width:auto;padding:8px 20px;margin-bottom:12px;"><i class="fas fa-plus"></i> New Announcement</button>`;
        if (announcements.length === 0) { html += '<p style="color:var(--text-muted);text-align:center;padding:20px 0;">No announcements</p>'; } else {
            announcements.slice().reverse().forEach(ann => {
                const priorityClass = ann.priority === 'urgent' ? 'urgent' : (ann.priority === 'important' ? 'important' : '');
                html += `<div class="announcement-item ${priorityClass}">
                    <div class="flex-between"><span style="font-weight:600;">${ann.title}</span><span style="font-size:10px;background:var(--bg-card);padding:2px 8px;border-radius:10px;">${ann.priority || 'normal'}</span></div>
                    <p style="font-size:13px;color:var(--text-secondary);">${ann.message}</p>
                    <p style="font-size:10px;color:var(--text-muted);margin-top:4px;">${new Date(ann.createdAt).toLocaleString()} | Read by: ${(ann.readBy || []).length}</p>
                    <button class="btn-neon btn-neon-xs btn-neon-danger" onclick="deleteAnnouncementAdmin(${ann.id})" style="margin-top:4px;">Delete</button></div>`;
            });
        }
        html += `<button class="btn-neon btn-neon-outline" onclick="renderDashboard()" style="margin-top:12px;">Back</button></div>`;
        document.getElementById('app').innerHTML = html;
    });
}

function showCreateAnnouncementForm() {
    document.getElementById('app').innerHTML = `
        <div class="glass fade-in">
            <h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">📢 New Announcement</h2>
            <div class="form-group"><label>Title</label><input id="annTitle" placeholder="Announcement title" /></div>
            <div class="form-group"><label>Message</label><textarea id="annMessage" placeholder="Your announcement..." rows="3"></textarea></div>
            <div class="form-group"><label>Priority</label>
                <select id="annPriority"><option value="normal">Normal</option><option value="important">Important</option><option value="urgent">Urgent</option></select></div>
            <button class="btn-neon btn-neon-success" onclick="saveAnnouncement()"><i class="fas fa-bullhorn"></i> Broadcast</button>
            <button class="btn-neon btn-neon-outline" onclick="showAdminAnnouncements()" style="margin-top:8px;">Cancel</button>
        </div>
    `;
}

async function saveAnnouncement() {
    const title = document.getElementById('annTitle').value.trim();
    const message = document.getElementById('annMessage').value.trim();
    const priority = document.getElementById('annPriority').value;
    if (!title || !message) { showToast('Fill all fields!'); return; }
    await createAnnouncement(title, message, priority);
    setTimeout(showAdminAnnouncements, 1500);
}

async function deleteAnnouncementAdmin(id) {
    if (!confirm('Delete this announcement?')) return;
    await deleteAnnouncement(id);
    setTimeout(showAdminAnnouncements, 1000);
}

// ================================================================
// APP INIT
// ================================================================
function initApp() {
    setTimeout(() => { document.getElementById('splashScreen').style.display = 'none'; }, 3000);
    document.getElementById('app').innerHTML = `<div class="loader-2026"><div class="spinner"></div><p>Loading KPay 2026...</p></div>`;

    initDB().then(() => {
        const session = localStorage.getItem('KPAY2026_SESSION');
        if (session) {
            getByIndex(STORES.USERS, 'phone', session).then(user => {
                if (user && !user.isDeleted && user.status !== 'suspended') {
                    currentUser = user;
                    renderDashboard();
                    setTimeout(checkLoanReminders, 5000);
                } else { renderLogin(); }
            });
        } else { renderLogin(); }
    }).catch(() => renderLogin());
}


// ================================================================
// LAWARAS BANK INTEGRATION - KPAY PRO
// ================================================================

const LAWARAS_STORAGE_KEY = 'LAWARAS_SESSION';

// Get Lawaras user from localStorage
function getLawarasUser() {
    try {
        const email = localStorage.getItem(LAWARAS_STORAGE_KEY);
        if (!email) return Promise.resolve(null);
        
        return new Promise((resolve) => {
            const request = indexedDB.open('LawarasBankDB', 7);
            request.onsuccess = (e) => {
                const db = e.target.result;
                const tx = db.transaction('users', 'readonly');
                const store = tx.objectStore('users');
                const req = store.get(email);
                req.onsuccess = () => resolve(req.result);
                req.onerror = () => resolve(null);
            };
            request.onerror = () => resolve(null);
        });
    } catch(e) {
        return Promise.resolve(null);
    }
}

// ================================================================
// SHOW LAWARAS INTEGRATION PAGE
// ================================================================
function showLawarasIntegration() {
    let html = `
        <div class="glass fade-in">
            <h2 style="font-size:20px;font-family:'Space Grotesk',sans-serif;">🏛️ Lawaras Bank Integration</h2>
            <p style="color:var(--text-secondary);font-size:13px;">Transfer between KPay and Lawaras Bank</p>
            
            <div id="lawarasStatusBox" style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:16px;margin:12px 0;text-align:center;">
                <div id="lawarasStatusText" style="color:var(--text-muted);">
                    <i class="fas fa-spinner fa-spin"></i> Checking Lawaras connection...
                </div>
            </div>
            
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0;">
                <button class="btn-neon btn-neon-primary" onclick="showKPayToLawaras()">
                    <i class="fas fa-arrow-right"></i> Send to Lawaras
                </button>
                <button class="btn-neon btn-neon-success" onclick="showLawarasToKPay()">
                    <i class="fas fa-arrow-left"></i> Receive from Lawaras
                </button>
            </div>
            
            <div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-sm);padding:12px;margin:12px 0;">
                <p style="font-size:12px;color:var(--text-muted);text-align:center;">
                    💡 Both KPay and Lawaras must be logged in on the same device
                </p>
            </div>
            
            <button class="btn-neon btn-neon-outline" onclick="renderDashboard()">Back</button>
        </div>
    `;
    document.getElementById('app').innerHTML = html;
    
    // Check Lawaras status
    checkLawarasStatus();
}

// ================================================================
// CHECK LAWARAS STATUS
// ================================================================
async function checkLawarasStatus() {
    const statusBox = document.getElementById('lawarasStatusText');
    if (!statusBox) return;
    
    const lawarasUser = await getLawarasUser();
    
    if (lawarasUser) {
        statusBox.innerHTML = `
            <span style="color:var(--success);">
                <i class="fas fa-check-circle"></i> ✅ Connected to Lawaras Bank
            </span>
            <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">
                ${lawarasUser.firstName} ${lawarasUser.lastName} (${lawarasUser.accountNumber})
            </div>
            <div style="font-size:12px;color:var(--text-secondary);">
                Balance: ${lawarasUser.currencySymbol || '$'}${(lawarasUser.balance || 0).toFixed(2)}
            </div>
        `;
    } else {
        statusBox.innerHTML = `
            <span style="color:var(--danger);">
                <i class="fas fa-times-circle"></i> ❌ Not connected to Lawaras Bank
            </span>
            <div style="font-size:12px;color:var(--text-muted);margin-top:4px;">
                Please login to Lawaras Bank first
            </div>
        `;
    }
}

// ================================================================
// SEND FROM KPAY TO LAWARAS
// ================================================================
function showKPayToLawaras() {
    const modal = document.createElement('div');
    modal.id = 'kpayToLawarasModal';
    modal.className = 'modal-overlay';
    modal.style.cssText = `
        position: fixed; inset: 0; background: rgba(0,0,0,0.8);
        display: flex; align-items: center; justify-content: center;
        z-index: 999999; backdrop-filter: blur(8px);
    `;
    
    modal.innerHTML = `
        <div style="background:var(--bg-primary);border-radius:24px;padding:28px;max-width:420px;width:90%;max-height:90vh;overflow-y:auto;border:1px solid var(--border-glass);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
                <h3 style="font-family:'Space Grotesk',sans-serif;color:var(--text-primary);">
                    <i class="fas fa-arrow-right" style="color:var(--ocean-teal);"></i> Send to Lawaras
                </h3>
                <button onclick="this.closest('.modal-overlay').remove()" 
                    style="background:none;border:none;font-size:24px;cursor:pointer;color:var(--text-muted);">&times;</button>
            </div>
            
            <div id="lawarasSendStatus" style="background:var(--bg-card);border-radius:12px;padding:12px;margin-bottom:16px;font-size:13px;text-align:center;">
                <i class="fas fa-spinner fa-spin"></i> Checking Lawaras connection...
            </div>
            
            <form id="kpayToLawarasForm">
                <div class="form-group">
                    <label>Lawaras Account</label>
                    <input type="text" id="lawarasAccountInput" placeholder="ACC-123456" style="width:100%;padding:12px 16px;border:1px solid var(--border-glass);border-radius:12px;background:var(--bg-card);color:var(--text-primary);" />
                </div>
                <div class="form-group">
                    <label>Amount (PKR)</label>
                    <input type="number" id="lawarasSendAmount" placeholder="1000" min="1" style="width:100%;padding:12px 16px;border:1px solid var(--border-glass);border-radius:12px;background:var(--bg-card);color:var(--text-primary);" />
                </div>
                <div class="form-group">
                    <label>Your KPay PIN</label>
                    <input type="password" id="lawarasSendPin" placeholder="1234" maxlength="4" style="width:100%;padding:12px 16px;border:1px solid var(--border-glass);border-radius:12px;background:var(--bg-card);color:var(--text-primary);" />
                </div>
                <button type="submit" class="btn-neon btn-neon-primary" style="width:100%;padding:14px;border-radius:12px;border:none;font-weight:600;cursor:pointer;">
                    <i class="fas fa-paper-plane"></i> Send to Lawaras
                </button>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Check Lawaras status
    getLawarasUser().then(user => {
        const statusEl = document.getElementById('lawarasSendStatus');
        if (user) {
            statusEl.innerHTML = `
                <span style="color:var(--success);">✅ Connected: ${user.firstName} ${user.lastName}</span>
                <div style="font-size:11px;color:var(--text-muted);">${user.accountNumber} | Balance: ${user.currencySymbol || '$'}${(user.balance || 0).toFixed(2)}</div>
            `;
            document.getElementById('lawarasAccountInput').value = user.accountNumber || '';
        } else {
            statusEl.innerHTML = `<span style="color:var(--danger);">❌ Please login to Lawaras Bank first</span>`;
        }
    });
    
    // Form submit
    document.getElementById('kpayToLawarasForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const account = document.getElementById('lawarasAccountInput').value.trim();
        const amount = parseFloat(document.getElementById('lawarasSendAmount').value);
        const pin = document.getElementById('lawarasSendPin').value;
        
        if (!account) { showToast('Enter Lawaras account!'); return; }
        if (isNaN(amount) || amount <= 0) { showToast('Enter valid amount!'); return; }
        if (!pin || pin !== currentUser.pin) { showToast('❌ Invalid KPay PIN!'); return; }
        if (currentUser.balance < amount) { showOverlay('error', 'Insufficient Balance', 'Not enough balance in KPay!', 2000); return; }
        
        await showOverlay('loading', 'Sending to Lawaras', 'Processing...');
        
        try {
            // Open Lawaras DB
            const request = indexedDB.open('LawarasBankDB', 7);
            const result = await new Promise((resolve, reject) => {
                request.onsuccess = (e) => {
                    const db = e.target.result;
                    const tx = db.transaction('users', 'readwrite');
                    const store = tx.objectStore('users');
                    const index = store.index('accountNumber');
                    const req = index.get(account.toUpperCase());
                    req.onsuccess = () => {
                        const user = req.result;
                        if (user) {
                            user.balance = (user.balance || 0) + amount;
                            const putReq = store.put(user);
                            putReq.onsuccess = () => resolve(true);
                            putReq.onerror = () => reject(putReq.error);
                        } else {
                            resolve(false);
                        }
                    };
                    req.onerror = () => reject(req.error);
                };
                request.onerror = () => reject(request.error);
            });
            
            if (result) {
                // Deduct from KPay
                currentUser.balance -= amount;
                addTransaction(currentUser, 'Send', amount, 'Transfer to Lawaras Bank');
                await put(STORES.USERS, currentUser);
                
                // Record in Lawaras transaction
                const txnRequest = indexedDB.open('LawarasBankDB', 7);
                await new Promise((resolve) => {
                    txnRequest.onsuccess = (e) => {
                        const db = e.target.result;
                        const tx = db.transaction('transactions', 'readwrite');
                        const store = tx.objectStore('transactions');
                        store.add({
                            email: account,
                            type: 'deposit',
                            amount: amount,
                            description: `Received from KPay (${currentUser.phone})`,
                            date: new Date().toISOString()
                        });
                        resolve();
                    };
                    txnRequest.onerror = () => resolve();
                });
                
                modal.remove();
                showOverlay('success', '✅ Sent to Lawaras!', `PKR ${amount.toLocaleString()} transferred!`, 2500);
                sound.play('payment');
                setTimeout(() => {
                    showLawarasIntegration();
                    checkLawarasStatus();
                }, 1500);
            } else {
                showOverlay('error', 'Transfer Failed', 'Lawaras account not found!', 2000);
            }
        } catch(e) {
            console.error('Error:', e);
            showOverlay('error', 'Transfer Failed', 'Something went wrong!', 2000);
        }
    });
}

// ================================================================
// RECEIVE FROM LAWARAS TO KPAY
// ================================================================
function showLawarasToKPay() {
    const modal = document.createElement('div');
    modal.id = 'lawarasToKPayModal';
    modal.className = 'modal-overlay';
    modal.style.cssText = `
        position: fixed; inset: 0; background: rgba(0,0,0,0.8);
        display: flex; align-items: center; justify-content: center;
        z-index: 999999; backdrop-filter: blur(8px);
    `;
    
    modal.innerHTML = `
        <div style="background:var(--bg-primary);border-radius:24px;padding:28px;max-width:420px;width:90%;max-height:90vh;overflow-y:auto;border:1px solid var(--border-glass);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
                <h3 style="font-family:'Space Grotesk',sans-serif;color:var(--text-primary);">
                    <i class="fas fa-arrow-left" style="color:var(--success);"></i> Receive from Lawaras
                </h3>
                <button onclick="this.closest('.modal-overlay').remove()" 
                    style="background:none;border:none;font-size:24px;cursor:pointer;color:var(--text-muted);">&times;</button>
            </div>
            
            <div id="lawarasReceiveStatus" style="background:var(--bg-card);border-radius:12px;padding:12px;margin-bottom:16px;font-size:13px;text-align:center;">
                <i class="fas fa-spinner fa-spin"></i> Checking Lawaras connection...
            </div>
            
            <form id="lawarasToKPayForm">
                <div class="form-group">
                    <label>Lawaras Account</label>
                    <input type="text" id="lawarasReceiveAccount" placeholder="ACC-123456" style="width:100%;padding:12px 16px;border:1px solid var(--border-glass);border-radius:12px;background:var(--bg-card);color:var(--text-primary);" />
                </div>
                <div class="form-group">
                    <label>Amount (PKR)</label>
                    <input type="number" id="lawarasReceiveAmount" placeholder="1000" min="1" style="width:100%;padding:12px 16px;border:1px solid var(--border-glass);border-radius:12px;background:var(--bg-card);color:var(--text-primary);" />
                </div>
                <div class="form-group">
                    <label>Lawaras PIN</label>
                    <input type="password" id="lawarasReceivePin" placeholder="1234" maxlength="4" style="width:100%;padding:12px 16px;border:1px solid var(--border-glass);border-radius:12px;background:var(--bg-card);color:var(--text-primary);" />
                </div>
                <button type="submit" class="btn-neon btn-neon-success" style="width:100%;padding:14px;border-radius:12px;border:none;font-weight:600;cursor:pointer;">
                    <i class="fas fa-download"></i> Receive from Lawaras
                </button>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Check Lawaras status
    getLawarasUser().then(user => {
        const statusEl = document.getElementById('lawarasReceiveStatus');
        if (user) {
            statusEl.innerHTML = `
                <span style="color:var(--success);">✅ Connected: ${user.firstName} ${user.lastName}</span>
                <div style="font-size:11px;color:var(--text-muted);">${user.accountNumber} | Balance: ${user.currencySymbol || '$'}${(user.balance || 0).toFixed(2)}</div>
            `;
            document.getElementById('lawarasReceiveAccount').value = user.accountNumber || '';
        } else {
            statusEl.innerHTML = `<span style="color:var(--danger);">❌ Please login to Lawaras Bank first</span>`;
        }
    });
    
    // Form submit
    document.getElementById('lawarasToKPayForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const account = document.getElementById('lawarasReceiveAccount').value.trim();
        const amount = parseFloat(document.getElementById('lawarasReceiveAmount').value);
        const pin = document.getElementById('lawarasReceivePin').value;
        
        if (!account) { showToast('Enter Lawaras account!'); return; }
        if (isNaN(amount) || amount <= 0) { showToast('Enter valid amount!'); return; }
        if (!pin) { showToast('Enter Lawaras PIN!'); return; }
        
        await showOverlay('loading', 'Receiving from Lawaras', 'Processing...');
        
        try {
            // Open Lawaras DB
            const request = indexedDB.open('LawarasBankDB', 7);
            const result = await new Promise((resolve, reject) => {
                request.onsuccess = (e) => {
                    const db = e.target.result;
                    const tx = db.transaction('users', 'readwrite');
                    const store = tx.objectStore('users');
                    const index = store.index('accountNumber');
                    const req = index.get(account.toUpperCase());
                    req.onsuccess = () => {
                        const user = req.result;
                        if (user) {
                            // Verify PIN
                            if (user.pin !== pin) {
                                resolve({ success: false, error: 'Invalid Lawaras PIN!' });
                                return;
                            }
                            if ((user.balance || 0) < amount) {
                                resolve({ success: false, error: 'Insufficient Lawaras balance!' });
                                return;
                            }
                            user.balance = (user.balance || 0) - amount;
                            const putReq = store.put(user);
                            putReq.onsuccess = () => resolve({ success: true, user: user });
                            putReq.onerror = () => reject(putReq.error);
                        } else {
                            resolve({ success: false, error: 'Lawaras account not found!' });
                        }
                    };
                    req.onerror = () => reject(req.error);
                };
                request.onerror = () => reject(request.error);
            });
            
            if (result.success) {
                // Add to KPay
                currentUser.balance += amount;
                addTransaction(currentUser, 'Receive', amount, 'Received from Lawaras Bank');
                await put(STORES.USERS, currentUser);
                
                // Record in Lawaras transaction
                const txnRequest = indexedDB.open('LawarasBankDB', 7);
                await new Promise((resolve) => {
                    txnRequest.onsuccess = (e) => {
                        const db = e.target.result;
                        const tx = db.transaction('transactions', 'readwrite');
                        const store = tx.objectStore('transactions');
                        store.add({
                            email: account,
                            type: 'withdraw',
                            amount: amount,
                            description: `Transfer to KPay (${currentUser.phone})`,
                            date: new Date().toISOString()
                        });
                        resolve();
                    };
                    txnRequest.onerror = () => resolve();
                });
                
                modal.remove();
                showOverlay('success', '✅ Received from Lawaras!', `PKR ${amount.toLocaleString()} credited!`, 2500);
                sound.play('payment');
                setTimeout(() => {
                    showLawarasIntegration();
                    checkLawarasStatus();
                }, 1500);
            } else {
                showOverlay('error', 'Transfer Failed', result.error || 'Something went wrong!', 2000);
            }
        } catch(e) {
            console.error('Error:', e);
            showOverlay('error', 'Transfer Failed', 'Something went wrong!', 2000);
        }
    });
}

// ================================================================
// ADD LAWARAS MENU ITEM - UPDATE renderUserDashboard()
// ================================================================
// Original renderUserDashboard function ko overwrite karte hain
// taake Lawaras menu item add ho

const originalRenderUserDashboard = window.renderUserDashboard || function() {};

// Yeh function call karein jab bhi dashboard render ho
function renderUserDashboardWithLawaras() {
    // Pehle original function call karein
    if (typeof originalRenderUserDashboard === 'function') {
        originalRenderUserDashboard();
    }
    
    // Phir Lawaras menu item add karein (agar already nahi hai)
    setTimeout(() => {
        const menu = document.querySelector('.menu-2026');
        if (menu) {
            // Check if already exists
            const existing = menu.querySelector('[onclick*="showLawarasIntegration"]');
            if (!existing) {
                const item = document.createElement('div');
                item.className = 'item';
                item.setAttribute('onclick', 'showLawarasIntegration()');
                item.innerHTML = `
                    <span class="icon">🏛️</span>
                    <span class="label">Lawaras</span>
                `;
                menu.appendChild(item);
            }
        }
    }, 500);
}

// Override renderDashboard to include Lawaras
const originalRenderDashboard = window.renderDashboard;
window.renderDashboard = function() {
    if (originalRenderDashboard) {
        originalRenderDashboard();
    }
    setTimeout(() => {
        const menu = document.querySelector('.menu-2026');
        if (menu) {
            const existing = menu.querySelector('[onclick*="showLawarasIntegration"]');
            if (!existing) {
                const item = document.createElement('div');
                item.className = 'item';
                item.setAttribute('onclick', 'showLawarasIntegration()');
                item.innerHTML = `
                    <span class="icon">🏛️</span>
                    <span class="label">Lawaras</span>
                `;
                menu.appendChild(item);
            }
        }
        // Check Lawaras status
        checkLawarasStatus();
    }, 1000);
};

// ================================================================
// EXPOSE FUNCTIONS
// ================================================================
window.showLawarasIntegration = showLawarasIntegration;
window.checkLawarasStatus = checkLawarasStatus;
window.showKPayToLawaras = showKPayToLawaras;
window.showLawarasToKPay = showLawarasToKPay;
window.getLawarasUser = getLawarasUser;

console.log('✅ Lawaras Bank Integration loaded in KPay Pro!');
console.log('📱 Send to Lawaras: KPay → Lawaras');
console.log('📱 Receive from Lawaras: Lawaras → KPay');



// === EXPOSE ALL GLOBALS ===
window.renderLogin = renderLogin;
window.showLogin = showLogin;
window.showRegister = showRegister;
window.showForgot = showForgot;
window.showForgotPin = showForgotPin;
window.handleForgotWithSecurity = handleForgotWithSecurity;
window.handleForgotRequest = handleForgotRequest;
window.handleResetPassword = handleResetPassword;
window.handleRegister = handleRegister;
window.handleLogin = handleLogin;
window.logout = logout;
window.renderDashboard = renderDashboard;
window.showSendMoney = showSendMoney;
window.processSendMoney = processSendMoney;
window.showLoanApply = showLoanApply;
window.processLoanApply = processLoanApply;
window.showMyLoans = showMyLoans;
window.repayUserLoan = repayUserLoan;
window.generateLoanReceipt = generateLoanReceipt;
window.showInvestments = showInvestments;
window.investNow = investNow;
window.showCards = showCards;
window.createCard = createCard;
window.toggleCard = toggleCard;
window.deleteCard = deleteCard;
window.showCardPayment = showCardPayment;
window.processCardPayment = processCardPayment;
window.generateCardPaymentReceipt = generateCardPaymentReceipt;
window.showCardTransactions = showCardTransactions;
window.generateCardReceiptByIndex = generateCardReceiptByIndex;
window.showBills = showBills;
window.payBill = payBill;
window.showSavings = showSavings;
window.createSavingsGoal = createSavingsGoal;
window.addToSavings = addToSavings;
window.showSpin = showSpin;
window.spinWheel = spinWheel;
window.showDiceGame = showDiceGame;
window.rollDice = rollDice;
window.showDiceHistory = showDiceHistory;
window.showWithdraw = showWithdraw;
window.processWithdraw = processWithdraw;
window.showHistory = showHistory;
window.generateReceipt = generateReceipt;
window.showProfile = showProfile;
window.showDailyCheckin = showDailyCheckin;
window.claimCheckin = claimCheckin;
window.showAppeals = showAppeals;
window.showAppealForm = showAppealForm;
window.processAppeal = processAppeal;
window.toggleAppealTarget = toggleAppealTarget;
window.showReferral = showReferral;
window.copyReferralCode = copyReferralCode;
window.showChat = showChat;
window.showChatRoom = showChatRoom;
window.sendChatMessage = sendChatMessage;
window.attachScreenshot = attachScreenshot;
window.showChatHistory = showChatHistory;
window.showGames = showGames;
window.showTicTacToe = showTicTacToe;
window.ticMove = ticMove;
window.resetTicGame = resetTicGame;
window.showMemoryGame = showMemoryGame;
window.memoryFlip = memoryFlip;
window.showQuiz = showQuiz;
window.answerQuiz = answerQuiz;
window.awardGameReward = awardGameReward;
window.showAdminLoans = showAdminLoans;
window.approveLoan = approveLoan;
window.rejectLoan = rejectLoan;
window.showAdminPins = showAdminPins;
window.approvePin = approvePin;
window.rejectPin = rejectPin;
window.showAdminAppeals = showAdminAppeals;
window.approveAppealAdmin = approveAppealAdmin;
window.rejectAppealAdmin = rejectAppealAdmin;
window.showAdminSpins = showAdminSpins;
window.approveSpin = approveSpin;
window.approveSpinZero = approveSpinZero;
window.rejectSpin = rejectSpin;
window.showAdminWithdrawals = showAdminWithdrawals;
window.approveWithdrawal = approveWithdrawal;
window.rejectWithdrawal = rejectWithdrawal;
window.showAdminUsers = showAdminUsers;
window.suspendUserAdmin = suspendUserAdmin;
window.activateUserAdmin = activateUserAdmin;
window.deleteUserAdmin = deleteUserAdmin;
window.showAdminResetPins = showAdminResetPins;
window.approveResetPinAdmin = approveResetPinAdmin;
window.rejectResetPinAdmin = rejectResetPinAdmin;
window.showAdminDice = showAdminDice;
window.approveDice = approveDice;
window.approveDiceZero = approveDiceZero;
window.rejectDice = rejectDice;
window.showAdminCardPayments = showAdminCardPayments;
window.approveCardPayment = approveCardPayment;
window.rejectCardPayment = rejectCardPayment;
window.showAdminTransfer = showAdminTransfer;
window.processAdminTransfer = processAdminTransfer;
window.showAdminChat = showAdminChat;
window.showAdminChatRoom = showAdminChatRoom;
window.sendAdminReply = sendAdminReply;
window.showBankAccounts = showBankAccounts;
window.showLinkBankForm = showLinkBankForm;
window.saveLinkedBank = saveLinkedBank;
window.unlinkBankAccountUser = unlinkBankAccountUser;
window.showSalaryAccount = showSalaryAccount;
window.activateSalaryAccount = activateSalaryAccount;
window.deactivateSalaryAccount = deactivateSalaryAccount;
window.showSecurityQuestions = showSecurityQuestions;
window.setSecurityQuestion = setSecurityQuestion;
window.saveSecurityQuestion = saveSecurityQuestion;
window.showLoanReminders = showLoanReminders;
window.showThirdPartyAPIs = showThirdPartyAPIs;
window.processThirdPartyPayment = processThirdPartyPayment;
window.connectThirdParty = connectThirdParty;
window.showAnnouncements = showAnnouncements;
window.showPromotions = showPromotions;
window.applyPromoCode = applyPromoCode;
window.showAdminFees = showAdminFees;
window.showCreateFeeForm = showCreateFeeForm;
window.saveFee = saveFee;
window.editFee = editFee;
window.toggleFee = toggleFee;
window.deleteFeeAdmin = deleteFeeAdmin;
window.showAdminPromotions = showAdminPromotions;
window.showCreatePromotionForm = showCreatePromotionForm;
window.savePromotion = savePromotion;
window.togglePromotion = togglePromotion;
window.deletePromotion = deletePromotion;
window.showAdminAnnouncements = showAdminAnnouncements;
window.showCreateAnnouncementForm = showCreateAnnouncementForm;
window.saveAnnouncement = saveAnnouncement;
window.deleteAnnouncementAdmin = deleteAnnouncementAdmin;

window.onload = initApp;
</script>
</body>
</html>
