import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-[#0f172a] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-slate-400 text-lg">Last Updated: January 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-gray-300 p-8 md:p-12 space-y-10">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              By accessing and using the GetMyNeurocare (GmNC) service, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our service.
            </p>
            <p className="text-slate-600 leading-relaxed">
              GmNC reserves the right to modify these terms at any time. Your continued use of the service after any changes constitutes acceptance of the updated terms.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. About the Service</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              GetMyNeurocare (GmNC) is an online platform that connects users with licensed healthcare providers, specifically neurologists and related specialists, for virtual consultations and health management services.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The Service provides video and voice consultation features, appointment scheduling, health record management, and related healthcare services through our mobile application and website.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Eligibility</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              You must be at least 18 years old to use this service. By using GmNC, you represent that you are of legal age to form a binding contract with the company.
            </p>
            <p className="text-slate-600 leading-relaxed">
              If you are using the service on behalf of a minor or dependent, you confirm that you have the legal authority to do so and accept full responsibility for their use of the service.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. User Account</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
            </p>
            <p className="text-slate-600 leading-relaxed">
              You must notify GmNC immediately of any unauthorized use of your account or any other breach of security.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Subscriptions, Payments, and In-App Purchases</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">5.1 Subscription Tiers</h3>
                <p className="text-slate-600 leading-relaxed">
                  GmNC offers various subscription tiers with different features and pricing. Details of each tier are available within the app and on our website.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">5.2 Payment Methods</h3>
                <p className="text-slate-600 leading-relaxed mb-2">
                  We accept payments through:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                  <li>Apple App Store (for iOS users)</li>
                  <li>Google Play Store (for Android users)</li>
                  <li>Paystack</li>
                  <li>Mobile Money (MTN MoMo, Vodafone Cash, AirtelTigo Money)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">5.3 Auto-Renewal</h3>
                <p className="text-slate-600 leading-relaxed">
                  Subscriptions will automatically renew unless cancelled at least 24 hours before the end of the current subscription period.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">5.4 Price Changes</h3>
                <p className="text-slate-600 leading-relaxed">
                  GmNC reserves the right to modify subscription prices with 30 days notice. Price changes will not affect existing subscriptions until renewal.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">5.5 Refunds</h3>
                <p className="text-slate-600 leading-relaxed">
                  Refunds are handled according to our refund policy and the policies of app stores (Apple/Google) where applicable.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">5.6 Trial Periods</h3>
                <p className="text-slate-600 leading-relaxed">
                  Free trial periods are available for eligible users. Trial terms and conditions are specified at the time of sign-up.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Service Features</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Service provides video and voice consultation features that enable real-time communication between users and healthcare providers.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Providers may charge consultation fees for their services. Fees are clearly displayed before booking any consultation.
            </p>
            <p className="text-slate-600 leading-relaxed">
              You are responsible for having adequate internet access and compatible devices to use the service effectively.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Clinical Features</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Service Providers can assign rehabilitation exercises, treatment plans, and clinical recommendations through the platform.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Users can track their progress, view exercise instructions, and communicate with providers about their treatment plans.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The Service may include AI-powered features to assist with symptom tracking, health monitoring, and personalized recommendations. These AI features are not a substitute for professional medical advice.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Privacy and Data Protection</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Your privacy is important to us. Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your personal and health information.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We comply with applicable data protection laws and implement appropriate security measures to protect your information.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              All content, features, and functionality of the GmNC service, including but not limited to text, graphics, logos, and software, are the exclusive property of GmNC or its licensors.
            </p>
            <p className="text-slate-600 leading-relaxed">
              You may not reproduce, distribute, or create derivative works of any content from the service without prior written consent.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">10. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              GmNC shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use the service.
            </p>
            <p className="text-slate-600 leading-relaxed">
              In no event shall GmNC's total liability exceed the amount paid by you for the service in the twelve months preceding the claim.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">11. Termination</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              GmNC reserves the right to terminate or suspend your account at any time for violation of these terms or for any other reason at our sole discretion.
            </p>
            <p className="text-slate-600 leading-relaxed">
              You may terminate your account at any time by following the account deletion process within the app or contacting customer support.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">12. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which GmNC operates, without regard to its conflict of law provisions.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">13. Amendments</h2>
            <p className="text-slate-600 leading-relaxed">
              GmNC may amend these terms at any time by posting the revised terms on the service. Your continued use of the service after such amendments constitutes acceptance of the revised terms.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">14. Contact Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              For any questions or concerns regarding these Terms and Conditions, please contact us:
            </p>
            <div className="bg-slate-50 rounded-lg p-4 space-y-2">
              <p className="text-slate-600"><strong>Email:</strong> support@gmnc.com</p>
              <p className="text-slate-600"><strong>Phone:</strong> (310) 123-44567</p>
              <p className="text-slate-600"><strong>Website:</strong> https://getmyneurocare.org</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
