import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                Terms of Service
              </h1>
              <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
              
              <div className="space-y-8 text-muted-foreground">
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using ChargingMitra's services, you accept and agree to be bound 
                    by the terms and provision of this agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Use of Service</h2>
                  <p className="mb-4">Our platform connects EV owners with charging hosts. You agree to:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Use the service only for lawful purposes</li>
                    <li>Respect other users and hosts</li>
                    <li>Follow safety guidelines during charging sessions</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Host Responsibilities</h2>
                  <p className="mb-4">As a charging host, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Maintain safe and functional charging equipment</li>
                    <li>Provide accurate availability information</li>
                    <li>Welcome drivers in a professional manner</li>
                    <li>Follow all local electrical safety regulations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment Terms</h2>
                  <p>
                    All payments are processed securely through our platform. Hosts receive 
                    80-85% of charging fees, with ChargingMitra retaining a service fee.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
                  <p>
                    ChargingMitra provides a platform to connect users. We are not responsible 
                    for the quality of charging equipment or interactions between users and hosts.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Information</h2>
                  <p>
                    For questions about these Terms of Service, contact us at support@chargingmitra.com.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;