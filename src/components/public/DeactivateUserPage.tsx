import React, { useState } from 'react';
import './DeactivateUserPage.css';
import { ShieldCheck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Modal = ({ isOpen, type, message, onClose }: { isOpen: boolean; type: 'success' | 'error'; message: string; onClose: () => void }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 transform transition-all scale-100">
                <h3 className={`text-lg font-bold text-center mb-2 ${type === 'success' ? 'text-gray-900' : 'text-red-900'}`}>
                    {type === 'success' ? 'Success!' : 'Error'}
                </h3>
                <p className="text-sm text-center text-gray-500 mb-6">
                    {message}
                </p>
                <button
                    onClick={onClose}
                    className={`w-full py-2.5 rounded-xl font-semibold text-white shadow-sm transition-all active:scale-95 ${type === 'success'
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-green-200'
                        : 'bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 shadow-red-200'
                        }`}
                >
                    OK
                </button>
            </div>
        </div>
    );
};

const DeactivateUserPage = () => {
    const [step, setStep] = useState<'mobile' | 'otp'>('mobile');
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        mobile: '',
        first_name: '',
        last_name: '',
        email: ''
    });
    const [otp, setOtp] = useState('');
    const [modalConfig, setModalConfig] = useState<{ isOpen: boolean; type: 'success' | 'error'; message: string }>({
        isOpen: false,
        type: 'success',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleMobileSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!/^\d{10}$/.test(formData.mobile)) {
            setModalConfig({
                isOpen: true,
                type: 'error',
                message: 'Please enter a valid 10-digit mobile number.'
            });
            return;
        }

        setLoading(true);
        // Simulate API call to send OTP
        setTimeout(() => {
            setLoading(false);
            setStep('otp');
            // In real app, trigger send OTP here
        }, 1000);
    };

    const handleOtpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call to verify OTP and Deactivate
        setTimeout(() => {
            setLoading(false);
            setModalConfig({
                isOpen: true,
                type: 'success',
                message: 'Account deactivation request submitted successfully.'
            });
            // Reset or redirect
        }, 1500);
    };

    return (
        <div className="deactivate-user-container">
            {/* Navbar */}
            <nav className="landing-navbar">
                <div className="landing-brand">
                    <span style={{ color: 'white', fontSize: '1.8rem', fontWeight: '800', letterSpacing: '-0.5px' }}>Animalkart</span>
                </div>


            </nav>

            {/* Promo Banner moved after header */}
            <div className="promo-banner">
                Deactivate your account securely
            </div>

            {/* Hero Section */}
            <section className="landing-hero">
                {/* Left Content - Image Only */}
                <div className="hero-content">
                    {/* Buffalo Image */}
                    <div className="hero-image-container" style={{ marginTop: 0 }}>
                        <img
                            src="/buffalo-family.jpg"
                            alt="Buffalo Family"
                            className="hero-image"
                        />
                    </div>
                </div>

                {/* Right Form */}
                <div className="hero-form-container">
                    <div className="trial-form-card">
                        <div className="form-header">
                            <h2 className="form-title">Deactivate Account</h2>
                            <p className="form-subtitle">
                                <span className="font-semibold text-black">We're sorry to see you go.</span>
                            </p>
                        </div>

                        {step === 'mobile' ? (
                            <form onSubmit={handleMobileSubmit}>
                                {/* 1. Mobile Number */}
                                <input
                                    type="tel"
                                    name="mobile"
                                    placeholder="Enter your registered mobile *"
                                    className="landing-input"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    required
                                />

                                {/* 2. First Name & Last Name */}
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <input
                                        type="text"
                                        name="first_name"
                                        placeholder="First Name *"
                                        className="landing-input"
                                        value={formData.first_name}
                                        onChange={handleInputChange}
                                        required
                                        style={{ flex: 1 }}
                                    />
                                    <input
                                        type="text"
                                        name="last_name"
                                        placeholder="Last Name *"
                                        className="landing-input"
                                        value={formData.last_name}
                                        onChange={handleInputChange}
                                        required
                                        style={{ flex: 1 }}
                                    />
                                </div>

                                {/* 3. Email (Optional) */}
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address (Optional)"
                                    className="landing-input"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full font-bold py-3 rounded-full transition mt-6 shadow-lg uppercase tracking-wide mb-4 disabled:opacity-70 disabled:cursor-not-allowed referral-btn"
                                >
                                    {loading ? 'Sending OTP...' : 'Send OTP'}
                                </button>
                            </form>
                        ) : (
                            <form onSubmit={handleOtpSubmit}>
                                <div className="text-center mb-4 text-sm text-gray-600">
                                    OTP sent to <strong>{formData.mobile}</strong>
                                </div>
                                <input
                                    type="text"
                                    name="otp"
                                    placeholder="Enter OTP"
                                    className="landing-input text-center tracking-widest font-bold text-lg"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                    maxLength={6}
                                />

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full font-bold py-3 rounded-full transition mt-6 shadow-lg uppercase tracking-wide mb-4 disabled:opacity-70 disabled:cursor-not-allowed referral-btn"
                                    style={{ backgroundColor: '#ef4444' }} // Red for danger action
                                >
                                    {loading ? 'Processing...' : 'Deactivate Account'}
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setStep('mobile')}
                                    className="w-full text-sm text-gray-500 hover:text-gray-800 underline"
                                >
                                    Change Mobile Number
                                </button>
                            </form>
                        )}

                        <div className="text-center text-xs text-black mt-2">
                            <Link to="/privacy-policy" className="underline hover:text-blue-600" target="_blank" style={{ color: '#000000' }}>Terms and Policy</Link>
                        </div>
                    </div>
                </div>
            </section>

            <Modal
                isOpen={modalConfig.isOpen}
                type={modalConfig.type}
                message={modalConfig.message}
                onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
            />
        </div>
    );
};

export default DeactivateUserPage;
