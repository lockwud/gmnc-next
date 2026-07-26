const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By accessing and using the GetMyNeurocare service, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our service.",
      "GetMyNeurocare reserves the right to modify these terms at any time. Your continued use of the service after any changes constitutes acceptance of the updated terms.",
    ],
  },
  {
    title: "2. About the Service",
    body: [
      "GetMyNeurocare is an online platform that connects users with licensed healthcare providers, specifically neurologists and related specialists, for virtual consultations and health management services.",
      "The Service provides video and voice consultation features, appointment scheduling, health record management, and related healthcare services through our mobile application and website.",
    ],
  },
  {
    title: "3. Eligibility",
    body: [
      "You must be at least 18 years old to use this service. By using GetMyNeurocare, you represent that you are of legal age to form a binding contract with the company.",
      "If you are using the service on behalf of a minor or dependent, you confirm that you have the legal authority to do so and accept full responsibility for their use of the service.",
    ],
  },
  {
    title: "4. User Account",
    body: [
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      "You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.",
      "You must notify GetMyNeurocare immediately of any unauthorized use of your account or any other breach of security.",
    ],
  },
  {
    title: "5. Subscriptions, Payments, and In-App Purchases",
    body: [
      "GetMyNeurocare offers various subscription tiers with different features and pricing. Details of each tier are available within the app and on our website.",
      "We accept payments through Apple App Store, Google Play Store, Paystack, and supported mobile money services.",
      "Subscriptions will automatically renew unless cancelled at least 24 hours before the end of the current subscription period.",
      "Refunds are handled according to our refund policy and the policies of app stores where applicable.",
    ],
  },
  {
    title: "6. Service and Clinical Features",
    body: [
      "The Service provides video and voice consultation features that enable real-time communication between users and healthcare providers.",
      "Service Providers can assign rehabilitation exercises, treatment plans, and clinical recommendations through the platform.",
      "AI-powered features may assist with symptom tracking, health monitoring, and personalized recommendations. These features are not a substitute for professional medical advice.",
    ],
  },
  {
    title: "7. Privacy and Data Protection",
    body: [
      "Your privacy is important to us. Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your personal and health information.",
      "We comply with applicable data protection laws and implement appropriate security measures to protect your information.",
    ],
  },
  {
    title: "8. Intellectual Property",
    body: [
      "All content, features, and functionality of the GetMyNeurocare service, including but not limited to text, graphics, logos, and software, are the exclusive property of GetMyNeurocare or its licensors.",
      "You may not reproduce, distribute, or create derivative works of any content from the service without prior written consent.",
    ],
  },
  {
    title: "9. Limitation of Liability",
    body: [
      "GetMyNeurocare shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use the service.",
      "In no event shall GetMyNeurocare's total liability exceed the amount paid by you for the service in the twelve months preceding the claim.",
    ],
  },
  {
    title: "10. Termination and Amendments",
    body: [
      "GetMyNeurocare reserves the right to terminate or suspend your account at any time for violation of these terms or for any other reason at our sole discretion.",
      "GetMyNeurocare may amend these terms at any time by posting revised terms on the service. Your continued use of the service after such amendments constitutes acceptance of the revised terms.",
    ],
  },
  {
    title: "11. Contact Information",
    body: [
      "For any questions or concerns regarding these Terms and Conditions, contact support@getmyneurocare.org or visit https://getmyneurocare.org.",
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <main className="terms-page">
      <section className="terms-dialog" aria-labelledby="terms-title">
        <div className="terms-scroll-box">
          <h1 id="terms-title">Terms of Service</h1>
          <p className="terms-intro">End-User Agreement for GetMyNeurocare mobile application and web services.</p>
          <p className="terms-intro">
            IMPORTANT: READ CAREFULLY. This agreement is a legal agreement between you and GetMyNeurocare for access to our neurocare platform, clinical tools, and related services.
          </p>

          {sections.map((section) => (
            <section key={section.title} className="terms-section">
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
