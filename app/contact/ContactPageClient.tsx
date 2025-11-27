'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useState, FormEvent } from 'react';

const ContactPageClient: React.FC = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
  });
  
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    console.log('Form submitted:', formData);
    
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate success (you can add error handling later)
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        company: '',
        name: '',
        email: '',
        phone: '',
        budget: '',
        message: '',
      });
      setSubmitStatus('idle');
    }, 3000);
  };

  return (
    <div className="w-full">
      {/* Hero & Intro */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-gray-900 font-bold text-4xl md:text-5xl">
              {t.contact.title}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Two-column layout: Form + Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-6">
                {t.contact.form.title}
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">{t.contact.form.success}</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium">{t.contact.form.error}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.form.companyLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Contact Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.form.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.form.budgetLabel}
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                  >
                    <option value="">{t.contact.form.budgetPlaceholder}</option>
                    <option value="small">{t.contact.form.budgetOptions.small}</option>
                    <option value="medium">{t.contact.form.budgetOptions.medium}</option>
                    <option value="large">{t.contact.form.budgetOptions.large}</option>
                    <option value="custom">{t.contact.form.budgetOptions.custom}</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.form.messageLabel}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '...' : t.contact.form.submit}
                </button>
              </form>
            </div>

            {/* Right Column - Company Info */}
            <div className="space-y-8">
              {/* Company Information Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-text-dark mb-6">
                  {t.contact.info.title}
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg text-text-dark">
                      {t.contact.info.companyName}
                    </h3>
                    <p className="text-gray-600">{t.contact.info.region}</p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-gray-700 mb-1">
                      {t.contact.info.emailLabel}
                    </p>
                    <a 
                      href="mailto:Jackie.chen.hk@outlook.com"
                      className="text-brand-primary hover:underline"
                    >
                      {t.contact.info.email}
                    </a>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-gray-700 mb-1">
                      {t.contact.info.addressLabel}
                    </p>
                    <p className="text-gray-600">
                      {t.contact.info.addressPlaceholder}
                    </p>
                  </div>
                </div>
              </div>

              {/* Other Channels Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-text-dark mb-3">
                  {t.contact.info.channelsTitle}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t.contact.info.channelsDesc}
                </p>

                {/* QR Code Placeholder */}
                <div className="mb-6">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex items-center justify-center bg-gray-50">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-3 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-4xl">📱</span>
                      </div>
                      <p className="text-sm text-gray-500 font-medium">
                        {t.contact.info.qrPlaceholder}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex items-center justify-center bg-gray-50 h-48">
                    <div className="text-center">
                      <span className="text-5xl mb-2 block">🗺️</span>
                      <p className="text-sm text-gray-500 font-medium">
                        {t.contact.info.mapPlaceholder}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block p-4 bg-brand-primary/10 rounded-full mb-4">
              <span className="text-4xl">💬</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-text-dark">
              {t.contact.more.ctaTitle}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t.contact.more.ctaBody}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPageClient;
