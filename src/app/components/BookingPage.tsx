import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Calendar, Mail, Phone, User, Music, ArrowLeft, CheckCircle } from 'lucide-react';
import alphaLogo from '../../assets/fa05f527b8e2aefc73827166bbebfa0bf1d33fef.png';

interface BookingPageProps {
  onBack: () => void;
}

export function BookingPage({ onBack }: BookingPageProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    // We are letting the browser handle the form submission directly to the action URL
    // unless we want to do it via AJAX for a smoother experience.
    // Given the request "standard Form Submit method", we can use AJAX to maintain the success state UI.
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_ID_HERE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          message: ''
        });

        setTimeout(() => {
          setIsSuccess(false);
          onBack();
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send booking request. Please try again or contact us directly at alphadj210@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSuccess) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <CheckCircle className="mx-auto mb-6 h-20 w-20 text-[#FF0000]" />
          <h2 className="mb-4 text-4xl font-black uppercase text-white">Booking Sent!</h2>
          <p className="text-lg text-white/70">We'll get back to you shortly.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-white transition-colors hover:text-[#FF0000]"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-bold uppercase tracking-wider">Back to Home</span>
        </button>
      </div>

      {/* Booking Form */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          {/* Logo */}
          <div className="mb-12 flex justify-center">
            <img src={alphaLogo} alt="ALPHA Logo" className="h-32 w-auto" />
          </div>

          {/* Header */}
          <div className="mb-12 text-center">
            <h1
              className="mb-4 text-5xl font-black uppercase tracking-tight text-white"
              style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}
            >
              Book DJ Alpha
            </h1>
            <p className="text-lg text-white/70">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-white">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-white/20 bg-black/50 px-12 py-4 text-white placeholder-white/30 backdrop-blur transition-all focus:border-[#FF0000] focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-white">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-white/20 bg-black/50 px-12 py-4 text-white placeholder-white/30 backdrop-blur transition-all focus:border-[#FF0000] focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-white">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-white/20 bg-black/50 px-12 py-4 text-white placeholder-white/30 backdrop-blur transition-all focus:border-[#FF0000] focus:outline-none"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            {/* Event Type */}
            <div>
              <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-white">
                Event Type *
              </label>
              <div className="relative">
                <Music className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" />
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none border-2 border-white/20 bg-black/50 px-12 py-4 text-white placeholder-white/30 backdrop-blur transition-all focus:border-[#FF0000] focus:outline-none"
                >
                  <option value="" disabled>Select event type</option>
                  <option value="Club">Club</option>
                  <option value="Private">Private</option>
                  <option value="Festival">Festival</option>
                </select>
              </div>
            </div>

            {/* Event Date */}
            <div>
              <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-white">
                Event Date *
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" />
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-white/20 bg-black/50 px-12 py-4 text-white placeholder-white/30 backdrop-blur transition-all focus:border-[#FF0000] focus:outline-none"
                />
              </div>
            </div>

            {/* Additional Message */}
            <div>
              <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-white">
                Additional Details
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border-2 border-white/20 bg-black/50 px-4 py-4 text-white placeholder-white/30 backdrop-blur transition-all focus:border-[#FF0000] focus:outline-none"
                placeholder="Tell us more about your event..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full overflow-hidden bg-[#FF0000] px-8 py-5 text-xl font-black uppercase tracking-wide text-white transition-all hover:scale-[1.02] disabled:opacity-50"
            >
              <span className="relative z-10">
                {isSubmitting ? 'Sending...' : 'Submit Booking Request'}
              </span>
              <div className="absolute inset-0 opacity-0 shadow-[0_0_40px_15px_rgba(255,0,0,0.8)] transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-12 border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-white/50">
              Questions? Email us directly at{' '}
              <a href="mailto:alphadj210@gmail.com" className="text-[#FF0000] hover:underline">
                alphadj210@gmail.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
