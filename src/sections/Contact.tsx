import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { socialLinks, personalInfo, formspreeEndpoint } from '../data/content';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact Form - Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        const data = await response.json();
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error message when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary-dark">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3 sm:mb-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-secondary-gray max-w-2xl mx-auto px-4">
            I'm open to collaboration, internship opportunities, and research partnerships.
            Let's connect and explore how we can work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary-charcoal border border-white/10 rounded-lg text-white placeholder-secondary-gray focus:outline-none focus:border-accent-blue transition-colors"
                placeholder="Your name"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary-charcoal border border-white/10 rounded-lg text-white placeholder-secondary-gray focus:outline-none focus:border-accent-blue transition-colors"
                placeholder="your.email@example.com"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-primary-charcoal border border-white/10 rounded-lg text-white placeholder-secondary-gray focus:outline-none focus:border-accent-blue transition-colors resize-none"
                placeholder="Tell me about your project, opportunity, or just say hello..."
                disabled={isSubmitting}
              />
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 bg-accent-emerald/20 border border-accent-emerald/40 rounded-lg text-accent-emerald"
              >
                <CheckCircle size={20} />
                <p className="text-sm font-medium">
                  Thank you! Your message has been sent. I'll get back to you soon.
                </p>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-2 p-4 bg-red-500/20 border border-red-500/40 rounded-lg text-red-400"
              >
                <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium mb-1">Failed to send message</p>
                  {errorMessage && (
                    <p className="text-xs text-red-300">{errorMessage}</p>
                  )}
                </div>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              className="w-full px-6 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-secondary-gray mb-8 leading-relaxed">
                Whether you're looking for a collaborator, have an internship opportunity,
                or want to discuss research, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={socialLinks.email}
                className="flex items-center gap-4 p-4 bg-primary-charcoal border border-white/10 rounded-lg hover:border-accent-blue/50 transition-all group"
              >
                <div className="p-2 bg-accent-blue/20 rounded-lg group-hover:bg-accent-blue/30 transition-colors">
                  <Mail className="text-accent-blue" size={24} />
                </div>
                <div>
                  <p className="text-white font-medium group-hover:text-accent-blue transition-colors">
                    Email
                  </p>
                  <p className="text-sm text-secondary-gray break-words">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-primary-charcoal border border-white/10 rounded-lg hover:border-accent-blue/50 transition-all group"
              >
                <div className="p-2 bg-accent-blue/20 rounded-lg group-hover:bg-accent-blue/30 transition-colors">
                  <Linkedin className="text-accent-blue" size={24} />
                </div>
                <div>
                  <p className="text-white font-medium group-hover:text-accent-blue transition-colors">
                    LinkedIn
                  </p>
                  <p className="text-sm text-secondary-gray">Connect professionally</p>
                </div>
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-primary-charcoal border border-white/10 rounded-lg hover:border-accent-blue/50 transition-all group"
              >
                <div className="p-2 bg-accent-blue/20 rounded-lg group-hover:bg-accent-blue/30 transition-colors">
                  <Github className="text-accent-blue" size={24} />
                </div>
                <div>
                  <p className="text-white font-medium group-hover:text-accent-blue transition-colors">
                    GitHub
                  </p>
                  <p className="text-sm text-secondary-gray">View my code</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
