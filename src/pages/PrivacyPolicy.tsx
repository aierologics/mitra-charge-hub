import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Users, Database, Globe, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Your Privacy Matters</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                We are committed to protecting your privacy and ensuring transparent data practices
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Last updated:</strong> December 15, 2024 | <strong>Effective Date:</strong> January 1, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              {/* Introduction */}
              <Card className="mb-12 border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Eye className="w-6 h-6 text-primary" />
                    Introduction
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      ChargingMitra Technologies Private Limited ("ChargingMitra," "we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application, website, and related services (collectively, the "Services").
                    </p>
                    <p>
                      By accessing or using our Services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, do not use our Services.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-12">

                {/* Information We Collect */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Database className="w-7 h-7 text-primary" />
                    1. Information We Collect
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">1.1 Personal Information</h3>
                      <p className="text-muted-foreground mb-3">
                        We collect personal information that you voluntarily provide when you:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li><strong>Account Registration:</strong> Name, email address, phone number, date of birth</li>
                        <li><strong>Identity Verification:</strong> Aadhaar number, PAN number, driving license details</li>
                        <li><strong>Profile Information:</strong> Profile picture, vehicle information (make, model, battery capacity)</li>
                        <li><strong>Host Registration:</strong> Property address, charging setup details, bank account information</li>
                        <li><strong>Communications:</strong> Messages, reviews, feedback, and support inquiries</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">1.2 Location Information</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Real-time GPS location when using our app (with your consent)</li>
                        <li>Approximate location derived from IP address</li>
                        <li>Charging session locations and route history</li>
                        <li>Host property locations for service provision</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">1.3 Payment Information</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Credit/debit card information (processed securely through payment processors)</li>
                        <li>UPI ID and transaction history</li>
                        <li>Bank account details for hosts</li>
                        <li>Billing address and payment preferences</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">1.4 Technical Information</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Device information (device type, operating system, unique device identifiers)</li>
                        <li>App usage data, crash reports, and performance metrics</li>
                        <li>IP address, browser type, and internet service provider</li>
                        <li>Cookies and similar tracking technologies</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* How We Use Information */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Users className="w-7 h-7 text-secondary" />
                    2. How We Use Your Information
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Service Provision</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Facilitate connections between EV drivers and charging hosts</li>
                        <li>Process bookings, payments, and refunds</li>
                        <li>Provide navigation and route optimization</li>
                        <li>Send booking confirmations, reminders, and updates</li>
                        <li>Enable real-time communication between users</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Safety and Security</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Verify user identity and conduct background checks</li>
                        <li>Monitor for fraudulent activities and policy violations</li>
                        <li>Ensure platform safety and security</li>
                        <li>Maintain emergency contact information</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">2.3 Service Improvement</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Analyze usage patterns to improve our services</li>
                        <li>Develop new features and functionality</li>
                        <li>Conduct research and analytics</li>
                        <li>Optimize charging network coverage</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">2.4 Legal and Compliance</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Comply with applicable laws and regulations</li>
                        <li>Respond to legal requests and prevent illegal activities</li>
                        <li>Maintain records for tax and accounting purposes</li>
                        <li>Enforce our Terms of Service and policies</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Information Sharing */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Globe className="w-7 h-7 text-accent" />
                    3. Information Sharing and Disclosure
                  </h2>

                  <div className="space-y-6">
                    <p className="text-muted-foreground">
                      We do not sell, rent, or trade your personal information to third parties. We may share your information in the following circumstances:
                    </p>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">3.1 With Other Users</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Basic profile information with hosts/drivers you book with</li>
                        <li>Contact information for coordination and safety purposes</li>
                        <li>Vehicle information relevant to charging compatibility</li>
                        <li>Reviews and ratings (anonymized when possible)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">3.2 Service Providers</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Payment processors (Razorpay, PayU, etc.)</li>
                        <li>Identity verification services</li>
                        <li>SMS and email service providers</li>
                        <li>Cloud storage and hosting providers</li>
                        <li>Analytics and marketing platforms</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">3.3 Legal Requirements</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>When required by law or legal process</li>
                        <li>To protect rights, property, or safety</li>
                        <li>In response to government requests</li>
                        <li>To prevent fraud or illegal activities</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Data Security */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Lock className="w-7 h-7 text-primary" />
                    4. Data Security and Protection
                  </h2>

                  <div className="space-y-6">
                    <p className="text-muted-foreground">
                      We implement comprehensive security measures to protect your personal information:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="border-l-4 border-l-primary">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-foreground mb-3">Technical Safeguards</h4>
                          <ul className="text-sm text-muted-foreground space-y-2">
                            <li>• SSL/TLS encryption for data transmission</li>
                            <li>• AES-256 encryption for data storage</li>
                            <li>• Regular security audits and penetration testing</li>
                            <li>• Secure cloud infrastructure</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-l-4 border-l-secondary">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-foreground mb-3">Administrative Safeguards</h4>
                          <ul className="text-sm text-muted-foreground space-y-2">
                            <li>• Limited access to personal information</li>
                            <li>• Employee training on data protection</li>
                            <li>• Background checks for staff</li>
                            <li>• Incident response procedures</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                      <p className="text-amber-800">
                        <strong>Important:</strong> While we implement robust security measures, no system is 100% secure.
                        We cannot guarantee absolute security of your information transmitted over the internet.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Data Retention */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">5. Data Retention</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We retain your personal information for as long as necessary to provide our services and comply with legal obligations:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Active Accounts:</strong> While your account remains active</li>
                      <li><strong>Inactive Accounts:</strong> Up to 3 years after last activity</li>
                      <li><strong>Transaction Records:</strong> 7 years for tax and legal compliance</li>
                      <li><strong>Identity Verification:</strong> As required by KYC regulations</li>
                      <li><strong>Marketing Data:</strong> Until you opt out or 2 years of inactivity</li>
                    </ul>
                  </div>
                </section>

                {/* Your Rights */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">6. Your Privacy Rights</h2>
                  <div className="space-y-6">
                    <p className="text-muted-foreground">
                      Under Indian data protection laws, you have the following rights:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Access Rights</h4>
                          <p className="text-sm text-muted-foreground">Request a copy of your personal information we hold</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Correction Rights</h4>
                          <p className="text-sm text-muted-foreground">Update or correct inaccurate information</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Deletion Rights</h4>
                          <p className="text-sm text-muted-foreground">Request deletion of your personal information</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Portability Rights</h4>
                          <p className="text-sm text-muted-foreground">Receive your data in a structured format</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Opt-out Rights</h4>
                          <p className="text-sm text-muted-foreground">Unsubscribe from marketing communications</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Withdrawal Rights</h4>
                          <p className="text-sm text-muted-foreground">Withdraw consent for data processing</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <p className="text-blue-800">
                        <strong>How to Exercise Your Rights:</strong> Contact our Privacy Team at privacy@chargingmitra.com
                        or use the privacy controls in your account settings. We will respond within 30 days.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Cookies Policy */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">7. Cookies and Tracking Technologies</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We use cookies and similar technologies to enhance your experience:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-foreground mb-2">Essential Cookies</h4>
                          <p className="text-sm">Required for basic website functionality</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-foreground mb-2">Analytics Cookies</h4>
                          <p className="text-sm">Help us understand how you use our services</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-foreground mb-2">Marketing Cookies</h4>
                          <p className="text-sm">Deliver personalized content and ads</p>
                        </CardContent>
                      </Card>
                    </div>
                    <p className="text-sm">
                      You can control cookies through your browser settings or our cookie preferences center.
                    </p>
                  </div>
                </section>

                {/* Children's Privacy */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">8. Children's Privacy</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our services are not intended for individuals under 18 years of age. We do not knowingly collect
                      personal information from children. If you are a parent and believe your child has provided us with
                      personal information, please contact us immediately.
                    </p>
                  </div>
                </section>

                {/* International Transfers */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">9. International Data Transfers</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Your information may be transferred to and processed in countries other than India. We ensure
                      appropriate safeguards are in place through:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Standard Contractual Clauses approved by data protection authorities</li>
                      <li>Adequacy decisions by relevant regulatory bodies</li>
                      <li>Certification schemes and codes of conduct</li>
                    </ul>
                  </div>
                </section>

                {/* Updates to Policy */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">10. Updates to This Privacy Policy</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws.
                      We will notify you of material changes through:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Email notification to your registered email address</li>
                      <li>In-app notifications</li>
                      <li>Prominent notice on our website</li>
                    </ul>
                    <p>
                      Continued use of our services after such modifications constitutes acceptance of the updated Privacy Policy.
                    </p>
                  </div>
                </section>

                {/* Contact Information */}
                <section>
                  <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
                    <CardContent className="p-8">
                      <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <Phone className="w-7 h-7 text-primary" />
                        11. Contact Information
                      </h2>
                      <div className="space-y-6">
                        <p className="text-muted-foreground">
                          If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Privacy Officer</h4>
                            <div className="space-y-2 text-muted-foreground">
                              <p className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                privacy@chargingmitra.com
                              </p>
                              <p className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                +91-80-4567-8900 (Mon-Fri, 9 AM - 6 PM IST)
                              </p>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Registered Office</h4>
                            <div className="space-y-2 text-muted-foreground">
                              <p>ChargingMitra Technologies Pvt. Ltd.</p>
                              <p>123 Tech Park, Electronic City</p>
                              <p>Bengaluru, Karnataka - 560100</p>
                              <p>India</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 border">
                          <h4 className="font-semibold text-foreground mb-3">Response Timeline</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• General inquiries: Within 48 hours</li>
                            <li>• Privacy rights requests: Within 30 days</li>
                            <li>• Data breach notifications: Within 72 hours</li>
                            <li>• Urgent security matters: Within 24 hours</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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

export default PrivacyPolicy;